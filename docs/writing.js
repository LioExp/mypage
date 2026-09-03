(() => {
  'use strict';

  const writing = {
    pt: {
      heading: 'Escrita recente',
      lead: 'Ideias, processos e coisas que estou a aprender enquanto construo.',
      back: '← voltar para Setup',
      footerBack: '← voltar para o Setup',
      breadcrumbSetup: 'Setup',
      breadcrumbCurrent: 'Writing',
      entries: [
        { id: 'build-log', title: 'Construir com pouco também é construir', reading: '4 min', tags: ['Hardware', 'Processo'], date: '02 SET 2026' },
        { id: 'offline-first', title: 'Quando a internet falha, o produto continua', reading: '3 min', tags: ['Produto', 'Offline-first'], date: '28 AGO 2026' }
      ]
    },
    en: {
      heading: 'Recent writing',
      lead: 'Ideas, processes and things I am learning while building.',
      back: '← back to Setup',
      footerBack: '← back to Setup',
      breadcrumbSetup: 'Setup',
      breadcrumbCurrent: 'Writing',
      entries: [
        { id: 'build-log', title: 'Building with less is still building', reading: '4 min', tags: ['Hardware', 'Process'], date: '02 SEP 2026' },
        { id: 'offline-first', title: 'When the internet fails, the product should keep going', reading: '3 min', tags: ['Product', 'Offline-first'], date: '28 AUG 2026' }
      ]
    }
  };

  const getLanguage = () => localStorage.getItem('lang') === 'pt' ? 'pt' : 'en';

  function renderWriting(language) {
    const copy = writing[language];
    document.documentElement.lang = language;
    document.title = `${copy.breadcrumbCurrent} — LioExp`;

    document.getElementById('writingBack').textContent = copy.back;
    document.getElementById('writingFooterBack').textContent = copy.footerBack;
    document.getElementById('writingBreadcrumbSetup').textContent = copy.breadcrumbSetup;
    document.getElementById('writingBreadcrumbCurrent').textContent = copy.breadcrumbCurrent;
    document.getElementById('writingHeading').textContent = copy.heading;
    document.getElementById('writingLead').textContent = copy.lead;
    document.getElementById('writingArchiveList').innerHTML = copy.entries.map((entry) => `
      <a href="article.html?post=${entry.id}" class="writing-item">
        <div class="writing-copy">
          <h2 class="writing-title">${entry.title}</h2>
          <div class="writing-meta">
            <span class="writing-reading">◌ ${entry.reading}</span>
            ${entry.tags.map((tag) => `<span class="writing-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="writing-side">
          <time datetime="${entry.date}">${entry.date}</time>
          <span class="writing-arrow" aria-hidden="true">↗</span>
        </div>
      </a>`).join('');

    document.querySelectorAll('.article-language .lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === language);
    });
  }

  document.querySelectorAll('.article-language .lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('lang', button.dataset.lang);
      renderWriting(button.dataset.lang);
    });
  });

  renderWriting(getLanguage());
})();