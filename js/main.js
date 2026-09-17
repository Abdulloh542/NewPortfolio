/**
 * BUILDR PORTFOLIO — CORE JAVASCRIPT
 * Handles Lenis smooth scroll, mobile navigation, accordions, scroll reveal, ticker, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initMobileNav();
  initScrollReveal();
  initFaqAccordion();
  initServiceAccordion();
  initContactForm();
  initButtonRolls();
});

/* ===== PREMIUM INERTIA-STYLE SMOOTH SCROLL (LENIS) ===== */
let lenis = null;

function initSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      lerp: 0.1,             // 0.08–0.12: Immediate frame-1 response, subtle inertia, smooth deceleration
      wheelMultiplier: 1.0,  // Exact 1:1 mouse wheel distance and speed
      touchMultiplier: 1.0,  // Preserves natural touch speed
      smoothWheel: true,     // Subtle inertia and easing on mouse wheel
      smoothTouch: false,    // Normal native scrolling on touch devices/mobile
      syncTouch: false,      // Preserves native mobile/trackpad gestures
      infinite: false,
    });

    // 60-144fps requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Anchor links smoothly navigated with Lenis
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const hash = href.includes('#') ? href.substring(href.indexOf('#')) : '';
        if (!hash || hash === '#' || hash === '#!') return;

        const isCurrentPage = !href.includes('/') || href.startsWith('#') || href.startsWith(window.location.pathname.split('/').pop());
        if (isCurrentPage) {
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -40, duration: 1.0 });
          }
        }
      });
    });

    // Resize listener to keep document height synchronized
    window.addEventListener('resize', () => lenis.resize());
  }
}

/* ===== MOBILE NAVIGATION (AUTHENTIC FRAMER MODAL) ===== */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const modal = document.getElementById('mobile-menu-modal');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');
  const modalLinks = document.querySelectorAll('.mobile-menu-links .mob-link, .mobile-menu-footer a');

  if (!toggleBtn || !modal) return;

  function openMenu() {
    modal.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    toggleBtn.classList.add('open');
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();
  }

  function closeMenu() {
    modal.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    toggleBtn.classList.remove('open');
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.opacity = '';
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start();
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (modal.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  modalLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ===== FAQ ACCORDION ===== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-card-v2, .faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-card-top') || item.querySelector('.faq-q') || item;
    const ans = item.querySelector('.faq-card-ans');
    if (!trigger) return;

    if (item.classList.contains('open') && ans) {
      ans.style.maxHeight = 'none';
      ans.style.opacity = '1';
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isCurrentlyOpen = item.classList.contains('open');

      if (isCurrentlyOpen) {
        if (ans) {
          clearTimeout(ans._openTimer);
          ans.style.maxHeight = ans.scrollHeight + 'px';
          ans.offsetHeight;
          ans.style.maxHeight = '0px';
          ans.style.opacity = '0';
        }
        item.classList.remove('open');
      } else {
        item.classList.add('open');
        if (ans) {
          clearTimeout(ans._openTimer);
          ans.style.maxHeight = (ans.scrollHeight + 40) + 'px';
          ans.style.opacity = '1';
          ans._openTimer = setTimeout(() => {
            if (item.classList.contains('open')) {
              ans.style.maxHeight = 'none';
            }
          }, 450);
        }
      }

      if (lenis) {
        lenis.resize();
        setTimeout(() => lenis.resize(), 200);
        setTimeout(() => lenis.resize(), 500);
      }
    });
  });
}

/* ===== SERVICE ACCORDION ===== */
function initServiceAccordion() {
  const serviceItems = document.querySelectorAll('.service-row-v2, .service-item');
  if (!serviceItems.length) return;

  function calculateTargetHeight(body) {
    const left = body.querySelector('.service-body-left');
    const right = body.querySelector('.service-body-right');
    const leftH = left ? (left.scrollHeight || left.offsetHeight) : 0;
    const rightH = right ? (right.scrollHeight || right.offsetHeight) : 0;
    // Base content height (max of left or right), plus padding-top (36px) + padding-bottom (28px) + 24px safety
    return Math.max(leftH, rightH, 180) + 36 + 28 + 24;
  }

  serviceItems.forEach(item => {
    const header = item.querySelector('.service-top-v2') || item.querySelector('.service-header');
    const body = item.querySelector('.service-body-v2') || item.querySelector('.service-content');
    const toggleBtn = item.querySelector('.service-toggle-btn');
    if (!header || !body) return;

    // Set initial state
    if (item.classList.contains('open')) {
      body.style.maxHeight = 'none';
      body.style.overflow = 'visible';
      body.style.opacity = '1';
      if (toggleBtn) toggleBtn.textContent = '−';
    } else {
      body.style.maxHeight = '0px';
      body.style.overflow = 'hidden';
      body.style.opacity = '0';
      if (toggleBtn) toggleBtn.textContent = '+';
    }

    header.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyOpen = item.classList.contains('open');

      if (isCurrentlyOpen) {
        // Smooth collapse — lock current height first for seamless easing
        clearTimeout(body._openTimer);
        body.style.overflow = 'hidden';
        body.style.maxHeight = body.scrollHeight + 'px';
        body.offsetHeight; // force reflow
        item.classList.remove('open');
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
        if (toggleBtn) toggleBtn.textContent = '+';
      } else {
        // Smooth expand — calculate accurate target height
        clearTimeout(body._openTimer);
        item.classList.add('open');
        const targetH = calculateTargetHeight(body);
        body.style.overflow = 'hidden';
        body.style.maxHeight = targetH + 'px';
        body.style.opacity = '1';
        if (toggleBtn) toggleBtn.textContent = '−';

        // Once animation completes, unconstrain maxHeight and overflow so NOTHING is ever clipped
        body._openTimer = setTimeout(() => {
          if (item.classList.contains('open')) {
            body.style.maxHeight = 'none';
            body.style.overflow = 'visible';
          }
        }, 480);
      }

      // Sync Lenis scroll container smoothly
      if (lenis) {
        lenis.resize();
        setTimeout(() => lenis.resize(), 200);
        setTimeout(() => lenis.resize(), 500);
      }
    });
  });

  // Keep heights responsive when resizing window
  window.addEventListener('resize', () => {
    serviceItems.forEach(item => {
      if (item.classList.contains('open')) {
        const body = item.querySelector('.service-body-v2') || item.querySelector('.service-content');
        if (body) {
          body.style.maxHeight = 'none';
          body.style.overflow = 'visible';
        }
      }
    });
    if (lenis) lenis.resize();
  });
}

/* ===== CONTACT FORM SUBMISSION ===== */
function initContactForm() {
  const forms = document.querySelectorAll('#contact-form, .footer-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.btn-green');
      if (!submitBtn) return;

      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Sending...
      `;

      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Message Sent!
        `;
        submitBtn.style.backgroundColor = '#3EFF1C';
        submitBtn.style.color = '#000000';

        setTimeout(() => {
          form.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
        }, 3000);
      }, 1200);
    });
  });
}


/* ===== AUTHENTIC FRAMER BUTTON INTERACTIONS (TEXT ROLL & ARROW ROLL) ===== */
function initButtonRolls() {
  // 1. Text buttons
  const textBtnSelectors = [
    '.btn-green',
    '.btn-outline',
    '.btn-talk-pill',
    '.btn-dark-pill',
    '.btn-green-submit',
    '.btn-submit',
    '.pricing-btn-pill'
  ];

  document.querySelectorAll(textBtnSelectors.join(', ')).forEach(btn => {
    // Avoid double-wrapping or wrapping arrow-only buttons
    if (btn.querySelector('.btn-roll-text') || btn.classList.contains('btn-arrow-pill') || btn.classList.contains('btn-dark-arrow') || btn.classList.contains('btn-green-arrow') || btn.classList.contains('pricing-btn-arrow')) return;

    // Check if button has compound children (like text + circle-arrow)
    const circleArrow = btn.querySelector('.circle-arrow, .arrow-glyph');
    if (circleArrow) {
      const textSpan = btn.querySelector('span:not(.circle-arrow):not(.arrow-glyph)');
      if (textSpan && !textSpan.querySelector('.btn-roll-text')) {
        const text = textSpan.textContent.trim();
        textSpan.innerHTML = `<span class="btn-roll-text"><span class="text-primary">${text}</span><span class="text-clone" aria-hidden="true">${text}</span></span>`;
      }
      if (!circleArrow.querySelector('.arrow-roll')) {
        circleArrow.innerHTML = `<span class="arrow-roll"><span class="arrow-1">↗</span><span class="arrow-2" aria-hidden="true">↗</span></span>`;
      }
      return;
    }

    // Direct text button
    const originalText = btn.textContent.trim();
    if (!originalText || originalText === '↗' || btn.querySelector('svg')) return;

    btn.innerHTML = `
      <span class="btn-roll-text">
        <span class="text-primary">${originalText}</span>
        <span class="text-clone" aria-hidden="true">${originalText}</span>
      </span>
    `;
  });

  // 2. Standalone Arrow buttons and Project Card Arrows
  const arrowSelectors = [
    '.btn-arrow-pill',
    '.btn-dark-arrow',
    '.btn-green-arrow',
    '.project-card-arrow',
    '.pricing-btn-arrow',
    '.arrow-glyph'
  ];

  document.querySelectorAll(arrowSelectors.join(', ')).forEach(el => {
    if (el.querySelector('.arrow-roll')) return;
    el.innerHTML = `
      <span class="arrow-roll">
        <span class="arrow-1">↗</span>
        <span class="arrow-2" aria-hidden="true">↗</span>
      </span>
    `;
  });

  // 3. Paired button groups hover sync (Hero CTA, Experience CTA, Projects CTA, Pricing CTA)
  const pairedGroups = document.querySelectorAll('.hero-btn-group, .exp-cta-group, .projects-cta-row, .pricing-btn-group');
  pairedGroups.forEach(group => {
    group.addEventListener('mouseenter', () => group.classList.add('is-hovered'));
    group.addEventListener('mouseleave', () => group.classList.remove('is-hovered'));
  });
}

