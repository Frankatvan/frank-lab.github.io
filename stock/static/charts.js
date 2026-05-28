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

function initDecisionLogModal() {
  const historyNode = document.querySelector("[data-decision-history-json]");
  const modal = document.querySelector("[data-decision-modal]");
  if (!historyNode || !modal) return;

  let history = [];
  try {
    const parsed = JSON.parse(historyNode.textContent || "[]");
    history = Array.isArray(parsed) ? parsed : [];
  } catch {
    history = [];
  }
  const detailById = new Map(history.map((item) => [String(item.id), item]));
  const metrics = modal.querySelector("[data-decision-modal-metrics]");
  const rationale = modal.querySelector("[data-decision-rationale]");
  const trace = modal.querySelector("[data-decision-trace]");
  const rawCodex = modal.querySelector("[data-decision-raw-codex]");
  const rawGemini = modal.querySelector("[data-decision-raw-gemini]");
  const toNumber = (value) => {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  };
  const fmt = (value, digits = 2) => {
    const n = toNumber(value);
    return n === null ? "--" : n.toFixed(digits);
  };
  const fmtPct = (value) => {
    const n = toNumber(value);
    return n === null ? "--" : `${n.toFixed(2)}%`;
  };
  const asArray = (value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string" && value.trim()) return [value.trim()];
    return [];
  };
  const renderTraceHuman = (tracePayload, decision) => {
    const traceObj =
      tracePayload && typeof tracePayload === "object" && !Array.isArray(tracePayload)
        ? tracePayload
        : {};
    const methods = traceObj.methods || {};
    const inputs = traceObj.inputs || {};
    const outputs = traceObj.outputs || {};
    const formula = traceObj.formula || {};
    const flags = asArray(outputs.risk_flags || decision.risk_flags);
    const deductions = asArray(outputs.confidence_deductions);
    const lines = [];
    lines.push(`估值框架：${traceObj.bucket || traceObj.mode || "通用框架"}`);
    lines.push(`链路版本：${traceObj.trace_version || formula.formula_version || "v1"}`);
    lines.push(`输入快照哈希：${traceObj.input_snapshot_hash || "无"}`);
    lines.push(
      `主方法：${methods.primary || "未记录"}；辅方法：${methods.secondary || methods.fallback || "未记录"}`,
    );
    lines.push("");
    lines.push("输入：");
    lines.push(`- 当前价：${decision.latest_price || "--"}`);
    lines.push(`- Codex 建议目标：${decision.codex_target_price || "--"}`);
    lines.push(`- Gemini 建议目标：${decision.gemini_target_price || "--"}`);
    lines.push(
      `- 目标价约束区间：${fmt(inputs.target_bounds?.min)} ~ ${fmt(inputs.target_bounds?.max)} ${inputs.currency || ""}`.trim(),
    );
    lines.push(
      `- 每日目标价最大变化：${fmtPct(inputs.max_daily_target_change_percent)}；分歧阈值：${fmtPct(inputs.dispersion_limit_percent)}`,
    );
    lines.push("");
    lines.push("输出：");
    lines.push(`- 最终目标价：${decision.average_target_price || "--"}`);
    if (outputs.model_average_target !== undefined && outputs.model_average_target !== null) {
      lines.push(`- 模型均值目标价（仅模型）：${fmt(outputs.model_average_target)}`);
    }
    lines.push(`- 目标价分歧：${decision.target_dispersion_percent || "--"}`);
    lines.push(`- 偏离目标价：${decision.price_gap_percent || "--"}`);
    lines.push(`- 规则动作：${decision.action || "--"}`);
    lines.push(`- 置信度：${decision.confidence || "--"}`);
    if (formula.mode === "whitebox_formula") {
      lines.push("");
      lines.push("白盒公式计算：");
      lines.push(`- 基准倍数（按桶）：${fmt(formula.baseline_multiplier)}`);
      lines.push(`- 模型建议倍数：${fmt(formula.suggested_multiplier)}`);
      lines.push(`- 模型权重：${fmtPct(formula.blend_weight ? formula.blend_weight * 100 : null)}`);
      lines.push(`- 混合后倍数：${fmt(formula.blended_multiplier)}`);
      lines.push(
        `- 风险折价：${fmtPct(formula.risk_penalty)}；分歧折价：${fmtPct(formula.dispersion_penalty)}`,
      );
      lines.push(`- 折价后倍数：${fmt(formula.adjusted_multiplier)}`);
      lines.push(`- 公式目标价（限幅前）：${fmt(formula.raw_target)}`);
      lines.push(`- 最终目标价（限幅后）：${fmt(formula.bounded_target)}`);
    }
    if (deductions.length) {
      lines.push(`- 置信度构成：${deductions.join("，")}`);
    }
    if (flags.length) {
      lines.push("");
      lines.push(`风险触发：${flags.join("；")}`);
    }
    if (traceObj.note) {
      lines.push("");
      lines.push(`备注：${traceObj.note}`);
    }
    return lines.join("\n");
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("decision-modal-open");
  };

  modal.querySelectorAll("[data-decision-close]").forEach((node) => {
    node.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  document.querySelectorAll("[data-decision-open]").forEach((node) => {
    node.addEventListener("click", () => {
      const decision = detailById.get(String(node.dataset.decisionId));
      if (!decision || !metrics || !rationale || !trace || !rawCodex || !rawGemini) return;
      const fallbackTrace = {
        mode: "fallback_from_decision_row",
        inputs: {
          latest_price: decision.latest_price || "--",
          codex_target_price: decision.codex_target_price || "--",
          gemini_target_price: decision.gemini_target_price || "--",
          average_target_price: decision.average_target_price || "--",
          target_dispersion_percent: decision.target_dispersion_percent || "--",
          price_gap_percent: decision.price_gap_percent || "--",
          confidence: decision.confidence || "--",
        },
        outputs: {
          action: decision.action || "--",
          risk_flags: decision.risk_flags || "--",
        },
        note: "历史记录未保存结构化 trace，已从当时决策行字段回填最小链路。",
      };
      const rows = [
        ["时间", decision.created_at || "--"],
        ["动作", decision.action || "--"],
        ["当前价", decision.latest_price || "--"],
        ["Codex目标价", decision.codex_target_price || "--"],
        ["Gemini目标价", decision.gemini_target_price || "--"],
        ["平均", decision.average_target_price || "--"],
        ["目标价分歧", decision.target_dispersion_percent || "--"],
        ["偏离目标价", decision.price_gap_percent || "--"],
        ["置信度", decision.confidence || "--"],
        ["风险触发", decision.risk_flags || "--"],
      ];
      metrics.innerHTML = rows
        .map(
          ([label, value]) =>
            `<div><dt>${label}</dt><dd>${String(value || "--").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</dd></div>`,
        )
        .join("");
      rationale.textContent = decision.rationale || "--";
      const tracePayload = decision.decision_trace || fallbackTrace;
      trace.textContent = renderTraceHuman(tracePayload, decision);
      rawCodex.textContent = decision.raw_codex || "无";
      rawGemini.textContent = decision.raw_gemini || "无";
      modal.hidden = false;
      document.body.classList.add("decision-modal-open");
    });
  });
}

function initDecisionRowsFilter() {
  const toggle = document.querySelector("[data-show-failed-decisions]");
  if (!toggle) return;
  const rows = Array.from(document.querySelectorAll("[data-decision-row]"));
  const apply = () => {
    const showFailed = toggle.checked;
    rows.forEach((row) => {
      const hasTarget = row.dataset.hasTarget === "1";
      row.hidden = !showFailed && !hasTarget;
    });
  };
  toggle.addEventListener("change", apply);
  apply();
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
  initDecisionLogModal();
  initDecisionRowsFilter();
});
