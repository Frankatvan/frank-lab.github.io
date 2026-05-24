const numberFormat = new Intl.NumberFormat("zh-CN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function compactNumber(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "--";
  const number = Number(value);
  const abs = Math.abs(number);
  if (abs >= 1_0000_0000_0000) return `${numberFormat.format(number / 1_0000_0000_0000)}万亿`;
  if (abs >= 1_0000_0000) return `${numberFormat.format(number / 1_0000_0000)}亿`;
  if (abs >= 1_0000) return `${numberFormat.format(number / 1_0000)}万`;
  return numberFormat.format(number);
}

function percent(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "--";
  return `${numberFormat.format(Number(value))}%`;
}

function quoteValue(key, value) {
  if (key === "change_percent") return percent(value);
  if (key === "volume" || key === "market_cap") return compactNumber(value);
  if (key === "dividend_yield") return percent(Number(value) * 100);
  return compactNumber(value);
}

function renderQuote(root, quote) {
  root.querySelectorAll("[data-quote-field]").forEach((node) => {
    const key = node.dataset.quoteField;
    const value = quoteValue(key, quote[key]);
    node.textContent = value;
    if (key === "change_percent") {
      node.classList.toggle("up", Number(quote[key]) > 0);
      node.classList.toggle("down", Number(quote[key]) < 0);
    }
  });
}

function renderQuoteTarget(root, candles, targetHistory) {
  const node = root.querySelector("[data-quote-target]");
  if (!node) return;
  const rows = candles.slice(-120).filter((row) => row.high && row.low && row.close);
  const targetSeries = normalizeTargetHistory(targetHistory, rows);
  const latestTarget = [...targetSeries].reverse().find((value) => Number.isFinite(value));
  if (!Number.isFinite(latestTarget)) {
    node.hidden = true;
    return;
  }
  node.textContent = `目标 ${numberFormat.format(latestTarget)}`;
  node.hidden = false;
}

function setPositionField(field, value, trendValue = null) {
  document.querySelectorAll(`[data-position-field="${field}"]`).forEach((node) => {
    node.textContent = value;
    if (trendValue !== null) {
      node.classList.toggle("up", trendValue > 0);
      node.classList.toggle("down", trendValue < 0);
    }
  });
}

function renderPositionSummary(quote) {
  const root = document.querySelector("[data-position-summary]");
  if (!root) return;

  const latest = Number(quote.latest);
  const quantity = Number(root.dataset.quantity || 0);
  const averageCost = Number(root.dataset.averageCost || 0);
  if (!Number.isFinite(latest) || latest <= 0) {
    setPositionField("latest_price", "--");
    setPositionField("market_value", "--");
    setPositionField("expected_pnl", "--", 0);
    setPositionField("expected_return", "--", 0);
    return;
  }

  const marketValue = latest * quantity;
  const expectedPnl = (latest - averageCost) * quantity;
  const expectedReturn = averageCost > 0 ? ((latest / averageCost) - 1) * 100 : null;

  setPositionField("latest_price", numberFormat.format(latest));
  setPositionField("market_value", numberFormat.format(marketValue));
  setPositionField("expected_pnl", numberFormat.format(expectedPnl), expectedPnl);
  setPositionField(
    "expected_return",
    expectedReturn === null ? "--" : percent(expectedReturn),
    expectedReturn === null ? 0 : expectedReturn,
  );
}

function normalizeTargetHistory(targetHistory, rows) {
  const candleDates = rows.map((row) => String(row.date || ""));
  const byDate = new Map();
  targetHistory.forEach((item) => {
    const date = String(item?.date || "");
    const target = Number(item?.average_target_price);
    if (!date || !Number.isFinite(target) || target <= 0) return;
    const mappedDate = mapTargetToCandleDate(date, candleDates);
    if (!mappedDate) return;
    byDate.set(mappedDate, target);
  });

  let activeTarget = null;
  return rows.map((row) => {
    if (byDate.has(row.date)) activeTarget = byDate.get(row.date);
    return activeTarget;
  });
}

function mapTargetToCandleDate(targetDate, candleDates) {
  if (!candleDates.length) return "";
  if (candleDates.includes(targetDate)) return targetDate;
  for (let index = candleDates.length - 1; index >= 0; index -= 1) {
    if (candleDates[index] <= targetDate) return candleDates[index];
  }
  return "";
}

function monthMarkers(rows, pad, width, priceHeight, volumeBase) {
  const markers = [];
  if (!rows.length) return markers;
  const usableWidth = width - pad.left - pad.right;
  const slot = usableWidth / rows.length;
  let previousMonth = "";
  rows.forEach((row, index) => {
    const dateText = String(row.date || "");
    const month = dateText.slice(0, 7);
    if (!month || month === previousMonth) return;
    previousMonth = month;
    if (index === 0) return;
    const x = pad.left + index * slot + slot / 2;
    markers.push({ x, month: month.slice(5) });
  });
  return markers;
}

function candleSvg(candles, targetHistory = []) {
  const rows = candles.slice(-120).filter((row) => row.high && row.low && row.close);
  if (!rows.length) {
    return '<p class="empty">暂无可用K线数据。</p>';
  }
  const width = 760;
  const height = 360;
  const volumeHeight = 72;
  const priceHeight = height - volumeHeight - 34;
  const pad = { top: 18, right: 48, bottom: 24, left: 48 };
  const targetSeries = normalizeTargetHistory(targetHistory, rows);
  const targetValues = targetSeries.filter((value) => Number.isFinite(value));
  const high = Math.max(...rows.map((row) => Number(row.high)), ...targetValues);
  const low = Math.min(...rows.map((row) => Number(row.low)), ...targetValues);
  const maxVolume = Math.max(...rows.map((row) => Number(row.volume || 0)), 1);
  const slot = (width - pad.left - pad.right) / rows.length;
  const bodyWidth = Math.max(3, Math.min(9, slot * 0.58));
  const y = (value) => pad.top + ((high - value) / (high - low || 1)) * priceHeight;
  const volumeY = (value) =>
    pad.top + priceHeight + 26 + (1 - value / maxVolume) * (volumeHeight - 8);
  const volumeBase = pad.top + priceHeight + 26 + volumeHeight;
  const shapes = rows
    .map((row, index) => {
      const x = pad.left + index * slot + slot / 2;
      const open = Number(row.open || row.close);
      const close = Number(row.close);
      const color = close >= open ? "#df4d5f" : "#2d9a66";
      const top = Math.min(y(open), y(close));
      const bodyHeight = Math.max(2, Math.abs(y(open) - y(close)));
      const volumeTop = volumeY(Number(row.volume || 0));
      return `
        <line x1="${x}" x2="${x}" y1="${y(Number(row.high))}" y2="${y(Number(row.low))}" stroke="${color}" stroke-width="1" />
        <rect x="${x - bodyWidth / 2}" y="${top}" width="${bodyWidth}" height="${bodyHeight}" fill="${color}" opacity="0.9" />
        <rect x="${x - bodyWidth / 2}" y="${volumeTop}" width="${bodyWidth}" height="${volumeBase - volumeTop}" fill="${color}" opacity="0.45" />
      `;
    })
    .join("");
  const targetPoints = targetSeries
    .map((value, index) => {
      if (!Number.isFinite(value)) return null;
      const x = pad.left + index * slot + slot / 2;
      return { x, y: y(value), value };
    })
    .filter(Boolean);
  const targetPath = targetPoints.length
    ? `<path d="${targetPoints
        .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
        .join(" ")}" fill="none" stroke="#f58220" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 4" />`
    : "";
  const targetDots = targetPoints
    .map((point) => `<circle cx="${point.x}" cy="${point.y}" r="2.4" fill="#f58220" />`)
    .join("");
  const monthGuides = monthMarkers(rows, pad, width, priceHeight, volumeBase);
  const monthLines = monthGuides
    .map(
      (point) =>
        `<line x1="${point.x}" x2="${point.x}" y1="${pad.top}" y2="${volumeBase}" stroke="#edf0f4" stroke-width="1" />`,
    )
    .join("");
  const monthTexts = monthGuides
    .map(
      (point) =>
        `<text x="${point.x}" y="${volumeBase + 18}" text-anchor="middle" fill="#97a2b0" font-size="11">${point.month}</text>`,
    )
    .join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="日K与成交量">
      <rect width="${width}" height="${height}" fill="#fff" />
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top}" y2="${pad.top}" stroke="#edf0f4" />
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top + priceHeight / 2}" y2="${pad.top + priceHeight / 2}" stroke="#edf0f4" />
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${pad.top + priceHeight}" y2="${pad.top + priceHeight}" stroke="#d9dee6" />
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${volumeBase}" y2="${volumeBase}" stroke="#d9dee6" />
      ${monthLines}
      ${shapes}
      ${targetPath}
      ${targetDots}
      <text x="${width - pad.right + 8}" y="${pad.top + 4}" dominant-baseline="middle">${numberFormat.format(high)}</text>
      <text x="${width - pad.right + 8}" y="${pad.top + priceHeight}" dominant-baseline="middle">${numberFormat.format(low)}</text>
      <text x="${pad.left}" y="${pad.top + priceHeight + 18}" fill="#697581">成交量</text>
      ${monthTexts}
    </svg>
  `;
}

function targetHistoryFrom(root) {
  const node = root.querySelector("[data-target-history-json]");
  if (!node) return [];
  try {
    const parsed = JSON.parse(node.textContent || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function hydrateChart(root) {
  const source = root.querySelector("[data-chart-source]");
  const canvas = root.querySelector("[data-candle-canvas]");
  const cacheKey = `stocklab:market-snapshot:${root.dataset.url}`;
  const readCache = () => {
    try {
      const text = localStorage.getItem(cacheKey);
      if (!text) return null;
      const payload = JSON.parse(text);
      if (!payload || typeof payload !== "object") return null;
      return payload;
    } catch {
      return null;
    }
  };
  const writeCache = (payload) => {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(payload));
    } catch {
      // ignore quota errors
    }
  };
  const cached = readCache();
  if (cached && !cached.error) {
    const targetHistory = targetHistoryFrom(root);
    source.textContent = `${cached.source || "免费行情源"}（缓存）`;
    renderQuote(root, cached.quote || {});
    renderQuoteTarget(root, cached.candles || [], targetHistory);
    renderPositionSummary(cached.quote || {});
    canvas.innerHTML = candleSvg(cached.candles || [], targetHistory);
  }
  try {
    const response = await fetch(root.dataset.url);
    const payload = await response.json();
    if (payload.error) {
      source.textContent = "行情源暂不可用";
      canvas.innerHTML = '<p class="empty">行情数据暂时不可用，稍后将自动恢复。</p>';
      return;
    }
    source.textContent = payload.source || "免费行情源";
    const targetHistory = targetHistoryFrom(root);
    renderQuote(root, payload.quote || {});
    renderQuoteTarget(root, payload.candles || [], targetHistory);
    renderPositionSummary(payload.quote || {});
    canvas.innerHTML = candleSvg(payload.candles || [], targetHistory);
    writeCache(payload);
  } catch (error) {
    source.textContent = "行情源暂不可用";
    canvas.innerHTML = '<p class="empty">行情数据暂时不可用，稍后将自动恢复。</p>';
  }
}

function initWorkbenchTabs(root) {
  const buttons = Array.from(root.querySelectorAll("[data-tab-target]"));
  const panels = buttons
    .map((button) => document.getElementById(button.dataset.tabTarget))
    .filter(Boolean);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetPanel = document.getElementById(button.dataset.tabTarget);
      if (!targetPanel) return;

      buttons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", selected ? "true" : "false");
      });

      panels.forEach((panel) => {
        const active = panel === targetPanel;
        panel.hidden = !active;
        panel.classList.toggle("active", active);
      });
    });
  });
}

function initWatchlistFilters(root) {
  const buttons = Array.from(root.querySelectorAll("[data-watch-filter]"));
  const panel = root.closest(".watch-panel");
  const items = Array.from(panel?.querySelectorAll("[data-watch-item]") || []);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.watchFilter;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      items.forEach((item) => {
        const visible =
          filter === "ALL" ||
          (filter === "HOLDING" && item.dataset.holding === "1") ||
          item.dataset.market === filter;
        item.hidden = !visible;
      });
    });
  });
}

function initSoftProgressForms() {
  document.querySelectorAll("form[data-progress-action]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (form.dataset.progressSubmitted === "1") return;
      event.preventDefault();
      form.dataset.progressSubmitted = "1";

      const progress = document.querySelector("[data-soft-progress]");
      const label = document.querySelector("[data-soft-progress-label]");
      const actions = form.closest(".quote-actions");
      const actionName = form.dataset.progressAction || "处理中";
      if (label) label.textContent = `${actionName}中`;
      if (progress) progress.hidden = false;
      if (actions) actions.classList.add("is-running");
      document
        .querySelectorAll("form[data-progress-action] button")
        .forEach((button) => {
          button.disabled = true;
        });

      window.setTimeout(() => {
        form.submit();
      }, 120);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-workbench-tabs]").forEach((root) => {
    initWorkbenchTabs(root);
  });

  document.querySelectorAll("[data-watch-filters]").forEach((root) => {
    initWatchlistFilters(root);
  });

  document.querySelectorAll("[data-market-chart]").forEach((root) => {
    hydrateChart(root);
  });

  initSoftProgressForms();
});
