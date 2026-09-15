function $(id) { return document.getElementById(id); }

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

const fetchCache = new Map();

async function fetchJson(url, ttlMs) {
  const hit = fetchCache.get(url);
  if (hit && Date.now() - hit.t < ttlMs) return hit.v;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const v = await res.json();
    fetchCache.set(url, { t: Date.now(), v });
    return v;
  } finally {
    clearTimeout(timer);
  }
}

// =============================================
// Detail section definitions per project
// =============================================
function getDetailSections(key, pr) {
  const map = {
    faber: [
      { label: pr.why, text: pr.whyText },
      { label: pr.how, text: pr.howText },
      { label: pr.status, list: pr.statusItems },
      { label: pr.who, text: pr.whoText }
    ],
    myfi: [
      { label: pr.problem, text: pr.problemText },
      { label: pr.features, list: pr.featureItems },
      { label: pr.extraLabel, list: pr.extraItems },
      { label: pr.v3, text: pr.v3Text },
      { label: pr.roadmap, text: pr.roadmapText }
    ],
    kianda: [
      { label: pr.context, text: pr.contextText },
      { label: pr.how, text: pr.howText },
      { label: pr.diff, list: pr.diffItems },
      { label: pr.vision, text: pr.visionText }
    ],
    myroadmapp: [
      { label: pr.problem, text: pr.problemText },
      { label: pr.how, text: pr.howText },
      { label: pr.features, list: pr.featureItems },
      { label: pr.vision, text: pr.visionText }
    ]
  };
  return map[key];
}
