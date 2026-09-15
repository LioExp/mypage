function openSetupModal() {
  const html = document.documentElement;
  html.style.overflow = 'hidden';
  const overlay = document.createElement('div');
  overlay.className = 'setup-modal-overlay';
  overlay.id = 'setupModal';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', t[lang].setup.modalHeading);
  const data = t[lang];
  overlay.innerHTML = `
    <div class="setup-modal">
      <button class="setup-modal-close" data-close-modal aria-label="Fechar">×</button>
      <div class="setup-modal-content">
        <div class="setup-modal-image"><img src="assets/setup-2026.jpg" alt="Setup 2026" draggable="false" loading="lazy" /></div>
        <div class="setup-modal-items">
          <p class="setup-modal-heading">${data.setup.modalHeading}</p>
          ${data.setup.items.map((item, index) => `
            <div class="setup-modal-item">
              <button class="setup-modal-trigger" type="button" aria-expanded="false" aria-controls="setup-detail-${index}">
                <span class="setup-modal-trigger-copy">
                  <span class="setup-modal-label">${item.label}</span>
                </span>
                <span class="setup-modal-chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </span>
              </button>
              <div class="setup-modal-detail" id="setup-detail-${index}" hidden>
                <div class="setup-modal-detail-media">
                  <div class="setup-modal-detail-copy">
                    <span class="setup-modal-detail-value">${item.value}</span>
                    <p>${item.detail}</p>
                  </div>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelectorAll('.setup-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.setup-modal-item');
      const detail = item.querySelector('.setup-modal-detail');
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      overlay.querySelectorAll('.setup-modal-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.setup-modal-trigger').setAttribute('aria-expanded', 'false');
        openItem.querySelector('.setup-modal-detail').hidden = true;
      });

      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        detail.hidden = false;
      }
    });
  });
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.addEventListener('keydown', closeOnEscape);
  lastFocused = document.activeElement;
  trapFocus(overlay);
  overlay.querySelector('.setup-modal-close').focus();
}

function closeSetupModal() {
  const modal = $('setupModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.documentElement.style.overflow = '';
  document.removeEventListener('keydown', closeOnEscape);
  untrapFocus();
  setTimeout(() => modal.remove(), 300);
  if (lastFocused) lastFocused.focus();
}

function closeOnEscape(e) {
  if (e.key === 'Escape') closeSetupModal();
}

function trapFocus(root) {
  const focusables = () => [...root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el => el.offsetParent !== null);
  const onKey = (e) => {
    if (e.key !== 'Tab') return;
    const items = focusables();
    if (!items.length) { e.preventDefault(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  root.addEventListener('keydown', onKey);
  root.dataset.focusTrap = '1';
  root._trapKey = onKey;
}

function untrapFocus(root) {
  const r = $('setupModal');
  if (r && r._trapKey) r.removeEventListener('keydown', r._trapKey);
}

// =============================================
// State Mutators
