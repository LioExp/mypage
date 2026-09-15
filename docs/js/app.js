function initNavObserver() {
  if (navObserver) navObserver.disconnect();
  navObserver = new IntersectionObserver((entries) => {
    const intersecting = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (intersecting.length > 0) {
      const top = intersecting[0];
      const data = t[lang];
      const idx = data.navIds.indexOf(top.target.id);
      if (idx !== -1) {
        document.querySelectorAll('.nav-link').forEach((l, i) => {
          l.classList.toggle('active', i === idx);
          if (i === idx) l.setAttribute('aria-current', 'page');
          else l.removeAttribute('aria-current');
        });
      }
    }
  }, { threshold: 0.15, rootMargin: '-60px 0px -25% 0px' });

  document.querySelectorAll('section').forEach(s => navObserver.observe(s));
}

function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =============================================
// Init
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  switchLang(lang);
  applyPersona();
  switchPersona(persona);
  initNavObserver();
  initRevealObserver();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
