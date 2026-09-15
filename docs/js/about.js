function renderAbout(data) {
  const dt = $('aboutDisplayTitle');
  const img = dt.querySelector('img');
  dt.innerHTML = `<span class="about-ascii-word about-ascii-about">${ABOUT_ASCII}</span><span class="about-ascii-me-line"><span class="about-ascii-word about-ascii-me">${ME_ASCII}</span></span>`;
  if (img) dt.querySelector('.about-ascii-me-line').appendChild(img);
  const aboutText = $('cbpText');
  aboutText.dataset.typewriterText = data.about.cbpText;
  if (window.refreshAboutTypewriter) window.refreshAboutTypewriter(aboutText);
  $('aboutFullText').innerHTML = data.about.fullText;
  $('openTags').innerHTML = data.about.openTags.map(t => `<span class="tag">${t}</span>`).join('');

    requestAnimationFrame(() => {
      const aboutFooter = document.querySelector('.about-footer');
      if (aboutFooter) {
        aboutFooter.style.cssText = 'opacity:1 !important; transform:none !important;';
      }
      const container = $('aboutFullText');
    container.style.cssText = 'opacity:1 !important; transform:none !important; filter:none !important;';
    const lines = [...container.querySelectorAll('.about-text-line')];
    if (!lines.length) return;
    const section = document.querySelector('.about');
    if (!section) return;

    const scrollPerLine = 120;
    const totalScroll = lines.length * scrollPerLine;
    section.style.height = (window.innerHeight + totalScroll) + 'px';
    const activeLineRatio = 0.45;

    let targetScroll = 0;
    let currentScroll = 0;

    const lerp = () => {
      currentScroll += (targetScroll - currentScroll) * 0.1;
      if (Math.abs(targetScroll - currentScroll) < 0.5) currentScroll = targetScroll;
      aboutFooter.scrollTop = currentScroll;
    };

    const onScroll = () => {
      const sr = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, (-sr.top) / scrollable));

      const activeIndex = Math.min(lines.length - 1, Math.round(progress * (lines.length - 1)));

      lines.forEach((l, i) => {
        const dist = Math.abs(i - activeIndex);
        l.style.setProperty('--ld', dist);
        l.classList.toggle('is-past', i < activeIndex);
        l.classList.toggle('is-active', i === activeIndex);
        l.classList.toggle('is-future', i > activeIndex);
      });

      const maxScroll = aboutFooter.scrollHeight - aboutFooter.clientHeight;
      if (maxScroll <= 0) return;

      if (progress === 0) {
        targetScroll = 0;
      } else {
        const fRect = aboutFooter.getBoundingClientRect();
        const activeRect = lines[activeIndex].getBoundingClientRect();
        const lineCenter = (activeRect.top - fRect.top) + aboutFooter.scrollTop + activeRect.height / 2;
        const readingLine = aboutFooter.clientHeight * activeLineRatio;
        targetScroll = Math.max(0, Math.min(maxScroll, lineCenter - readingLine));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const tick = () => {
      lerp();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

