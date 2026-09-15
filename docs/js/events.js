function toggleProject(name) {
  const shouldOpen = !openProjects[name];
  openProjects = shouldOpen ? { [name]: true } : {};
  renderProjects();
}

function toggleBriefing() {
  briefingOpen = !briefingOpen;
  renderContact();
}

function switchLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  render();
  fetchYtFeed();
  fetchGhGraph();
}

function switchPersona(p) {
  persona = p;
  localStorage.setItem('persona', p);
  const btn = document.querySelector('.persona-btn');
  if (btn) btn.classList.toggle('active', persona === 'liocosta');
  applyPersona();
}

function applyPersona() {
  const p = PERSONAS[persona];
  document.title = p.title;
  const banner = document.querySelector('.banner-img');
  if (banner) banner.alt = p.displayName + ' banner';
  const ascii = document.querySelector('.ascii-logo');
  if (ascii) ascii.innerHTML = persona === 'lioexp' ? ASCII_LIOEXP : ASCII_LIOCOSTA;
  document.querySelectorAll('.persona-text').forEach(el => {
    if (el.dataset.personaText) el.textContent = el.dataset.personaText;
  });
}

function toggleVerse() {
  $('verseFull').classList.toggle('open');
}

// =============================================
// Observers
// =============================================
let navObserver = null;


// =============================================
// Event Delegation
// =============================================
function initEvents() {
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-btn');
    if (langBtn) { switchLang(langBtn.dataset.lang); return; }

    const personaBtn = e.target.closest('.persona-btn');
    if (personaBtn) { switchPersona(persona === 'lioexp' ? 'liocosta' : 'lioexp'); return; }

    const briefingBtn = e.target.closest('#briefingBtn');
    if (briefingBtn) { toggleBriefing(); return; }

    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (link.classList.contains('nav-link')) {
          document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
            l.removeAttribute('aria-current');
          });
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      }
      return;
    }

    const projectBtn = e.target.closest('[data-project]');
    if (projectBtn) { toggleProject(projectBtn.dataset.project); return; }

    if (e.target.closest('[data-open-modal]')) { openSetupModal(); return; }

    if (e.target.closest('[data-close-modal]')) { closeSetupModal(); return; }

    if (e.target.classList.contains('setup-modal-overlay')) { closeSetupModal(); return; }

    const verseBtn = e.target.closest('[data-verse]');
    if (verseBtn) { toggleVerse(); return; }
  });

}
