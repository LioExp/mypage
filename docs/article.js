(() => {
  'use strict';

  const articles = {
    pt: {
      title: 'Construir com pouco também é construir',
      lead: 'O que um Pentium antigo, 3.7 GiB de RAM e uma ligação instável me ensinaram sobre criar software.',
      meta: '4 min de leitura · 02 SET 2026',
      back: '← voltar para Setup',
      footerBack: '← voltar para o Setup',
      breadcrumbSetup: 'Setup',
      breadcrumbCurrent: 'Build log',
      paragraphs: [
        'O meu setup não foi escolhido para parecer impressionante. Foi escolhido porque é o que tenho — e porque ainda é suficiente para transformar ideias em coisas reais.',
        'Com 3.7 GiB de RAM, cada processo tem um custo. Aprendi a preferir ferramentas pequenas, a perceber o que corre em background e a escrever software que não depende de uma ligação perfeita para continuar útil.',
        'Isto muda a forma de construir. Em vez de começar pela tecnologia mais pesada, começo pela pergunta mais simples: qual é a menor versão que já resolve o problema?',
        'Limitações não tornam o trabalho menor. Tornam as decisões mais visíveis. E, às vezes, é exatamente aí que um produto começa a ficar bom.'
      ]
    },
    en: {
      title: 'Building with less is still building',
      lead: 'What an old Pentium, 3.7 GiB of RAM and an unstable connection taught me about making software.',
      meta: '4 min read · 02 SEP 2026',
      back: '← back to Setup',
      footerBack: '← back to Setup',
      breadcrumbSetup: 'Setup',
      breadcrumbCurrent: 'Build log',
      paragraphs: [
        'My setup was not chosen to look impressive. It was chosen because it is what I have — and because it is still enough to turn ideas into real things.',
        'With 3.7 GiB of RAM, every process has a cost. I learned to prefer small tools, understand what runs in the background and write software that does not depend on a perfect connection to remain useful.',
        'It changes the way you build. Instead of starting with the heaviest technology, I start with a simpler question: what is the smallest version that already solves the problem?',
        'Limitations do not make the work smaller. They make the decisions more visible. Sometimes, that is exactly where a product starts to become good.'
      ]
    }
  };

  const getLanguage = () => localStorage.getItem('lang') === 'pt' ? 'pt' : 'en';

  function renderArticle(language) {
    const copy = articles[language];
    document.documentElement.lang = language;
    document.title = `${copy.breadcrumbCurrent} — LioExp`;

    document.getElementById('articleBack').textContent = copy.back;
    document.getElementById('articleFooterBack').textContent = copy.footerBack;
    document.getElementById('articleBreadcrumbCurrent').textContent = copy.breadcrumbCurrent;
    document.querySelectorAll('.article-breadcrumb a')[1].textContent = copy.breadcrumbSetup;
    document.getElementById('articleTitle').textContent = copy.title;
    document.getElementById('articleLead').textContent = copy.lead;
    document.getElementById('articleMeta').textContent = copy.meta;
    document.getElementById('articleBody').innerHTML = copy.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');

    document.querySelectorAll('.article-language .lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === language);
    });
  }

  document.querySelectorAll('.article-language .lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('lang', button.dataset.lang);
      renderArticle(button.dataset.lang);
    });
  });

  renderArticle(getLanguage());
})();