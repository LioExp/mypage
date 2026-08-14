// =========================================================
// ANIMATIONS LAYER
// Drivers vanilla para todos os efeitos portados do portfolio:
// typewriter, rotating text, blur words, marquee, tilt 3D,
// parallax, reveals com stagger e reveal variants.
// =========================================================

(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  if (reduced) document.documentElement.classList.add('reduce-motion');

  // Ícones usados no marquee (LogoLoop) — a stack do site.
  const MARQUEE_ITEMS = [
    'python', 'archlinux', 'rust', 'gnubash', 'git',
    'html', 'css', 'fastapi', 'neovim', 'owasp', 'burpsuite',
  ];

  // -------------------------------------------------------
  // Helpers
  // -------------------------------------------------------
  const debounce = (fn, wait) => {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), wait); };
  };

  // -------------------------------------------------------
  // Reveal observer único (whileInView + stagger)
  // -------------------------------------------------------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const observeReveal = (el) => {
    if (!el || el.classList.contains('visible')) return;
    if (reduced) {
      el.classList.add('visible');
      return;
    }
    io.observe(el);
    if (el.dataset.revealStagger === '1' && !el.dataset.delayApplied) {
      const delay = parseFloat(el.dataset.revealDelay || '0.12') * 1000;
      const self = el;
      [...self.parentElement.children].forEach((child, i) => {
        if (child === self) child.style.transitionDelay = `${delay * i}ms`;
      });
      el.dataset.delayApplied = '1';
    }
  };

  const addReveal = (el) => {
    if (el.classList.contains('reveal')) return;
    el.classList.add('reveal');
  };

  // -------------------------------------------------------
  // 1) Reveal groups (stagger descendentes)
  // -------------------------------------------------------
  function initRevealGroups(root) {
    (root.querySelectorAll('[data-reveal-group]') || []).forEach((group) => {
      const delay = parseFloat(group.dataset.revealGroup || '0.12') * 1000;
      const children = [...group.children];
      if (children.length === 0) return;
      const target = group.firstElementChild;
      if (!target.classList.contains('reveal')) {
        children.forEach((c) => addReveal(c));
      }
      children.forEach((child, i) => {
        child.style.transitionDelay = `${delay * i}ms`;
        observeReveal(child);
      });
    });
  }

  // -------------------------------------------------------
  // 1b) ProjectCard cascade (portfolio variants) — .pa-card
  // -------------------------------------------------------
  function initProjectCascade(root) {
    (root.querySelectorAll('.pa-card') || []).forEach((card) => {
      if (card.dataset.paInit === '1') return;
      card.dataset.paInit = '1';

      observeReveal(card);
      if (reduced) { card.dataset.paDone = '1'; return; }

      // libera o transform rápido (tilt 3D) após o reveal terminar
      card.addEventListener('transitionend', (e) => {
        if (e.target === card && e.propertyName === 'transform') {
          card.dataset.paDone = '1';
        }
      });
    });
  }

  // -------------------------------------------------------
  // 2) TextType (typewriter) — [data-type]
  // -------------------------------------------------------
  function initTypewriter(el) {
    if (!el || el.dataset.typeInit === '1') return;
    el.dataset.typeInit = '1';

    const cancelBefore = () => {
      if (el._typeTO) clearTimeout(el._typeTO);
      el._typeTickerStop = true;
    };

    const render = (text) => {
      cancelBefore();
      el.textContent = '';
      if (reduced) {
        el.textContent = text;
        return;
      }
      const typed = document.createElement('span');
      typed.className = 'typed';
      el.appendChild(typed);
      const caret = document.createElement('span');
      caret.className = 'caret';
      caret.setAttribute('aria-hidden', 'true');
      el.appendChild(caret);

      el._typeTickerStop = false;
      let i = 0;
      const step = () => {
        if (el._typeTickerStop) return;
        if (i > text.length) return;
        typed.textContent = text.slice(0, i);
        i++;
        el._typeTO = setTimeout(step, 34 + Math.random() * 30);
      };
      step();
    };

    render(el.dataset.type || el.dataset.text || el.textContent || '');

    if (window.MutationObserver && el.dataset.type !== undefined) {
      el.__typeObserver = new MutationObserver(debounce(() => {
        render(el.dataset.type || '');
      }, 60));
      el.__typeObserver.observe(el, { attributes: true, attributeFilter: ['data-type'] });
    }
  }

  // -------------------------------------------------------
  // 3) RotatingText — [data-rotate]
  // -------------------------------------------------------
  function initRotating(el) {
    if (!el || el.dataset.rotInit === '1') return;
    el.dataset.rotInit = '1';

    const build = () => {
      const words = (el.dataset.rotate || el.dataset.words || '')
        .split('·')
        .map((w) => w.trim())
        .filter(Boolean);
      if (words.length === 0) return;

      const makeItem = (w) => {
        const item = document.createElement('span');
        item.className = 'rot-item';
        if (typeof icons !== 'undefined' && icons[w]) {
          item.classList.add('rot-icon');
          item.innerHTML = icons[w];
        } else {
          item.textContent = w;
        }
        return item;
      };

      el.textContent = '';
      if (reduced) {
        el.appendChild(makeItem(words[0]));
        return;
      }

      el.classList.add('rot-wrap');
      const col = document.createElement('span');
      col.className = 'rot-col';
      words.forEach((w) => col.appendChild(makeItem(w)));
      el.appendChild(col);

      let idx = 0;
      if (words.length > 1) {
        el.__rotInterval = setInterval(() => {
          idx = (idx + 1) % words.length;
          col.style.transform = `translateY(${-idx * 1.4}em)`;
        }, 2400);
      }
    };

    build();

    if (window.MutationObserver && el.dataset.rotate !== undefined) {
      el.__rotObserver = new MutationObserver(debounce(() => {
        build();
      }, 60));
      el.__rotObserver.observe(el, { attributes: true, attributeFilter: ['data-rotate'] });
    }
  }

  // -------------------------------------------------------
  // 4) BlurText (word-by-word) — [data-blur-text]
  // -------------------------------------------------------
  function initBlurWords(el) {
    if (!el || el.dataset.blurInit === '1') return;
    el.dataset.blurInit = '1';
    el.classList.add('bw-cluster');

    // observer de viewport: dispara as palavras
    const wordIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        wordIO.disconnect();
        el.__bwReady = true;
        revealWords();
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    wordIO.observe(el);

    const revealWords = () => {
      if (!el.__bwReady) return;
      const words = el.querySelectorAll('.bw-anim');
      if (words.length === 0) return;
      words.forEach((w, i) => {
        w.style.transitionDelay = `${i * 70}ms`;
        requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add('bw-in')));
      });
    };

    const build = () => {
      const text = el.textContent || '';
      if (text === el.__bwText) return;
      const words = text.split(/\s+/).filter(Boolean);
      el.__bwText = text;
      if (words.length <= 1 || reduced) {
        delete el.__bwBuilt;
        el.textContent = text;
        return;
      }
      el.__bwBuilt = true;
      el.textContent = '';
      words.forEach((w, i) => {
        const span = document.createElement('span');
        span.className = 'bw-word bw-anim';
        span.textContent = w;
        el.appendChild(span);
        if (i !== words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
      if (el.__bwReady) revealWords();
    };

    build();

    if (window.MutationObserver) {
      el.__blurObserver = new MutationObserver(debounce(() => {
        if (el.__bwText !== el.textContent || !el.querySelector('.bw-word')) build();
      }, 60));
      el.__blurObserver.observe(el, { childList: true, subtree: true, characterData: true });
    }
  }

  // -------------------------------------------------------
  // 5) Marquee (LogoLoop) — [data-marquee]
  // -------------------------------------------------------
  function initMarquee(el) {
    if (el.dataset.marqueeInit === '1') return;
    el.dataset.marqueeInit = '1';
    el.classList.add('marquee');

    const track = document.createElement('div');
    track.className = 'marquee-track';

    const buildGroup = () => {
      const frag = document.createDocumentFragment();
      MARQUEE_ITEMS.forEach((key) => {
        const item = document.createElement('span');
        item.className = 'marquee-item';
        if (typeof icons !== 'undefined' && icons[key]) {
          item.classList.add('mq-' + key);
          item.innerHTML = icons[key];
        } else {
          item.textContent = key;
        }
        frag.appendChild(item);
      });
      return frag;
    };

    track.appendChild(buildGroup());
    track.appendChild(buildGroup());

    el.appendChild(track);
    el.setAttribute('role', 'presentation');
  }

  // -------------------------------------------------------
  // 6) MagicBento → tilt 3D + glare
  // -------------------------------------------------------
  const TILT_SELECTOR = '.stats-card, .project-card, .setup-image-wrap, .yt-card, .roadmap-card';

  function enableTilt(el) {
    if (el.dataset.tiltInit === '1') return;
    if (!finePointer || reduced) return;
    el.dataset.tiltInit = '1';

    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    glare.setAttribute('aria-hidden', 'true');

    const max = 6;
    let raf = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = -(py - 0.5) * 2 * max;
      const ry = (px - 0.5) * 2 * max;
      el.style.setProperty('--gx', `${Math.max(0, Math.min(100, px * 100))}%`);
      el.style.setProperty('--gy', `${Math.max(0, Math.min(100, py * 100))}%`);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(700px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };

    el.appendChild(glare);
    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
  }

  // -------------------------------------------------------
  // 7) Parallax de scroll (banner) — [data-parallax]
  // -------------------------------------------------------
  let bannerRaf = 0;
  function initBannerParallax() {
    const img = document.querySelector('[data-parallax]');
    if (!img || img.dataset.parallaxInit === '1') return;
    img.dataset.parallaxInit = '1';

    const onScroll = () => {
      if (bannerRaf) return;
      bannerRaf = requestAnimationFrame(() => {
        bannerRaf = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return;
        const max = 42;
        img.style.transform = `translateY(${Math.min(max, y * 0.12).toFixed(1)}px) scale(1.12)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // -------------------------------------------------------
  // 8) Parallax de mouse (ascii logo) — [data-mouse-parallax]
  // -------------------------------------------------------
  function initMouseParallax() {
    const hero = document.querySelector('.hero');
    const target = document.querySelector('[data-mouse-parallax]');
    if (!hero || !target || target.dataset.mparInit === '1') return;
    target.dataset.mparInit = '1';

    let raf = 0;
    hero.addEventListener('pointermove', (e) => {
      if (reduced) return;
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.style.transform = `translate3d(${(dx * 16).toFixed(1)}px, ${(dy * 12).toFixed(1)}px, 0)`;
      });
    }, { passive: true });

    hero.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      target.style.transform = '';
    }, { passive: true });
  }

  // -------------------------------------------------------
  // 8b) Hero Photo Floating Transition -> Profile Avatar Dock
  // -------------------------------------------------------
  let photoFloatRaf = 0;
  function initHeroPhotoScroll() {
    const heroWrap = document.querySelector('.hero-photo-wrap');
    const heroCard = document.querySelector('.hero-photo-card');
    const heroPhoto = document.querySelector('#heroPhoto');
    const heroBadge = document.querySelector('.hero-photo-badge');
    const aboutWrap = document.querySelector('.profile-avatar-wrap');
    const aboutAvatar = document.querySelector('.profile-avatar');

    if (!heroWrap || !heroCard || !aboutWrap || heroWrap.dataset.photoFloatInit === '1') return;
    heroWrap.dataset.photoFloatInit = '1';

    let totalDeltaX = 0;
    let totalDeltaY = 0;
    let scaleRatio = 0.666;
    let startScroll = 0;
    let endScroll = 500;
    let heroBaseW = 120;

    function getOffsetCoords(el) {
      let x = 0;
      let y = 0;
      let curr = el;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        x += curr.offsetLeft || 0;
        y += curr.offsetTop || 0;
        curr = curr.offsetParent;
      }
      return {
        x,
        y,
        w: el.offsetWidth || 80,
        h: el.offsetHeight || 80,
        cx: x + (el.offsetWidth || 80) / 2,
        cy: y + (el.offsetHeight || 80) / 2
      };
    }

    function measure() {
      const prevTransform = heroCard.style.transform;
      heroCard.style.transform = 'none';

      const heroC = getOffsetCoords(heroWrap);
      const aboutC = getOffsetCoords(aboutWrap);

      heroCard.style.transform = prevTransform;

      totalDeltaX = aboutC.cx - heroC.cx;
      totalDeltaY = aboutC.cy - heroC.cy;
      heroBaseW = heroC.w || 120;
      scaleRatio = (aboutC.w || 80) / heroBaseW;

      startScroll = 0;
      endScroll = Math.max(180, aboutC.y - (window.innerHeight * 0.38));
    }

    measure();
    window.addEventListener('resize', debounce(measure, 150), { passive: true });

    const onScroll = () => {
      if (reduced) return;
      if (photoFloatRaf) return;
      photoFloatRaf = requestAnimationFrame(() => {
        photoFloatRaf = 0;
        const y = window.scrollY || window.pageYOffset;

        if (y <= 0) {
          heroCard.style.transform = '';
          heroCard.style.borderRadius = '';
          heroCard.style.padding = '';
          if (heroPhoto) heroPhoto.style.borderRadius = '';
          if (heroBadge) {
            heroBadge.style.opacity = '';
            heroBadge.style.transform = '';
          }
          if (aboutAvatar) aboutAvatar.style.opacity = '0';
          return;
        }

        const rawProgress = (y - startScroll) / (endScroll - startScroll);
        const progress = Math.min(1, Math.max(0, rawProgress));

        // Curva suave de aceleração e desaceleração (smoothstep cúbico)
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const currX = totalDeltaX * ease;
        const currY = totalDeltaY * ease;
        const currScale = 1 + (scaleRatio - 1) * ease;

        const baseRadius = 20;
        const targetRadius = heroBaseW / 2;
        const currRadius = baseRadius + (targetRadius - baseRadius) * ease;
        const currPadding = (0.35 * (1 - ease)).toFixed(2);

        heroCard.style.transform = `translate3d(${currX.toFixed(1)}px, ${currY.toFixed(1)}px, 0) scale(${currScale.toFixed(4)})`;
        heroCard.style.borderRadius = `${currRadius.toFixed(1)}px`;
        heroCard.style.padding = `${currPadding}rem`;
        if (heroPhoto) heroPhoto.style.borderRadius = `${currRadius.toFixed(1)}px`;

        if (heroBadge) {
          const badgeOpacity = Math.max(0, 1 - ease * 2.2);
          heroBadge.style.opacity = badgeOpacity.toFixed(2);
          heroBadge.style.transform = `translateY(${(ease * 10).toFixed(1)}px)`;
          heroBadge.style.pointerEvents = badgeOpacity < 0.1 ? 'none' : '';
        }

        if (aboutAvatar) {
          aboutAvatar.style.opacity = progress >= 0.99 ? '1' : '0';
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -------------------------------------------------------
  // Varredura completa
  // -------------------------------------------------------
  function wire() {
    const root = document;

    initRevealGroups(root);
    initBannerParallax();
    initMouseParallax();
    initHeroPhotoScroll();
    initProjectCascade(root);

    root.querySelectorAll('[data-type]').forEach(initTypewriter);
    root.querySelectorAll('[data-rotate]').forEach(initRotating);
    root.querySelectorAll('[data-blur-text]').forEach(initBlurWords);
    root.querySelectorAll('[data-marquee]').forEach(initMarquee);
    root.querySelectorAll(TILT_SELECTOR).forEach(enableTilt);
  }

  // Re-wire após re-renders dinâmicos (i18n, filtros, accordions...)
  const bodyObserver = new MutationObserver(debounce(wire, 120));

  function start() {
    wire();
    if (document.getElementById('app')) {
      bodyObserver.observe(document.getElementById('app'), { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();