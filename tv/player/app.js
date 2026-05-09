const CHANNELS_URL = '../channels.json';

const state = {
  channels: [],
  regions: [],
  selectedRegion: 'All Channels',
  selectedChannelId: '',
  hls: null,
};

const els = {
  catalogStatus: document.getElementById('catalogStatus'),
  regionList: document.getElementById('regionList'),
  channelList: document.getElementById('channelList'),
  searchInput: document.getElementById('searchInput'),
  refreshButton: document.getElementById('refreshButton'),
  video: document.getElementById('video'),
  idleOverlay: document.getElementById('idleOverlay'),
  nowTitle: document.getElementById('nowTitle'),
  nowMeta: document.getElementById('nowMeta'),
  sourceStatus: document.getElementById('sourceStatus'),
  streamLink: document.getElementById('streamLink'),
  signalText: document.getElementById('signalText'),
};

function uniqueRegions(channels) {
  const regions = new Set(['All Channels']);
  channels.forEach((channel) => {
    if (channel.region) {
      regions.add(channel.region);
    }
  });
  return [...regions];
}

function filteredChannels() {
  const query = els.searchInput.value.trim().toLowerCase();
  return state.channels.filter((channel) => {
    const matchesRegion = state.selectedRegion === 'All Channels' || channel.region === state.selectedRegion;
    const text = `${channel.name} ${channel.region} ${channel.group}`.toLowerCase();
    return matchesRegion && (!query || text.includes(query));
  });
}

function renderRegions() {
  els.regionList.innerHTML = '';
  state.regions.forEach((region) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `region-button${region === state.selectedRegion ? ' active' : ''}`;
    button.textContent = region;
    button.addEventListener('click', () => {
      state.selectedRegion = region;
      renderRegions();
      renderChannels();
    });
    els.regionList.appendChild(button);
  });
}

function renderChannels() {
  els.channelList.innerHTML = '';
  const channels = filteredChannels();
  channels.forEach((channel, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `channel-button${channel.id === state.selectedChannelId ? ' active' : ''}`;
    button.innerHTML = `
      <span class="channel-number">${String(index + 1).padStart(3, '0')}</span>
      <span>
        <span class="channel-name">${escapeHtml(channel.name)}</span>
        <span class="channel-meta">${escapeHtml(channel.region || 'Unknown')} / ${escapeHtml(channel.group || 'General')}</span>
      </span>
    `;
    button.addEventListener('click', () => playChannel(channel));
    els.channelList.appendChild(button);
  });

  if (!channels.length) {
    const empty = document.createElement('div');
    empty.className = 'channel-meta';
    empty.style.padding = '18px';
    empty.textContent = 'No channels found';
    els.channelList.appendChild(empty);
  }
}

function playChannel(channel) {
  state.selectedChannelId = channel.id;
  renderChannels();

  els.idleOverlay.classList.add('hidden');
  els.nowTitle.textContent = channel.name;
  els.nowMeta.textContent = `${channel.region || 'Unknown'} / ${channel.group || 'General'}`;
  els.sourceStatus.textContent = channel.sourceNote || channel.lastStatus || 'Live stream';
  els.streamLink.href = channel.url;
  els.signalText.textContent = 'Loading';

  if (state.hls) {
    state.hls.destroy();
    state.hls = null;
  }
  els.video.pause();
  els.video.removeAttribute('src');
  els.video.load();

  if (els.video.canPlayType('application/vnd.apple.mpegurl')) {
    els.video.src = channel.url;
    els.video.play().catch(() => setSignal('Tap Play'));
    setSignal('Online');
    return;
  }

  if (window.Hls && window.Hls.isSupported()) {
    state.hls = new window.Hls({ enableWorker: true });
    state.hls.loadSource(channel.url);
    state.hls.attachMedia(els.video);
    state.hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
      els.video.play().catch(() => setSignal('Tap Play'));
      setSignal('Online');
    });
    state.hls.on(window.Hls.Events.ERROR, (_, data) => {
      if (data.fatal) {
        setSignal('Source blocked');
        els.sourceStatus.textContent = 'Browser could not load this stream';
      }
    });
    return;
  }

  setSignal('Unsupported');
  els.sourceStatus.textContent = 'This browser does not support HLS playback';
}

function setSignal(value) {
  els.signalText.textContent = value;
}

async function loadChannels() {
  els.catalogStatus.textContent = 'Loading channels...';
  try {
    const response = await fetch(`${CHANNELS_URL}?t=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const catalog = await response.json();
    state.channels = Array.isArray(catalog.channels) ? catalog.channels : [];
    state.regions = uniqueRegions(state.channels);
    els.catalogStatus.textContent = `${state.channels.length} channels loaded`;
    renderRegions();
    renderChannels();
  } catch (error) {
    els.catalogStatus.textContent = `Load failed: ${error.message}`;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

els.searchInput.addEventListener('input', renderChannels);
els.refreshButton.addEventListener('click', loadChannels);
loadChannels();
