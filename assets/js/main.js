/**
* Template Name: Craftivo
* Template URL: https://bootstrapmade.com/craftivo-bootstrap-portfolio-template/
* Updated: Oct 04 2025 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Keep a --header-height CSS variable in sync so the nav dropdown sits right below the header
   */
  function setHeaderHeightVar() {
    const header = document.querySelector('#header');
    if (header) {
      document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    }
  }
  setHeaderHeightVar();
  window.addEventListener('load', setHeaderHeightVar);
  window.addEventListener('resize', setHeaderHeightVar);

  /**
   * Hamburger nav toggle
   */
  const navmenu = document.querySelector('#navmenu');
  const navToggleBtn = document.querySelector('.hamburger-toggle');

  function toggleNavmenu() {
    navmenu.classList.toggle('navmenu-active');
    navToggleBtn.classList.toggle('active');
    document.body.classList.toggle('nav-open');
    navToggleBtn.setAttribute('aria-expanded', navmenu.classList.contains('navmenu-active'));
  }
  if (navToggleBtn) {
    navToggleBtn.addEventListener('click', toggleNavmenu);
  }

  /**
   * Close the nav dropdown when a link is clicked (smooth scroll is handled by CSS scroll-behavior)
   */
  document.querySelectorAll('#navmenu a').forEach(navLink => {
    navLink.addEventListener('click', () => {
      if (navmenu.classList.contains('navmenu-active')) {
        toggleNavmenu();
      }
    });
  });

  /**
   * Preloader (pages with the modern branded preloader handle their own dismissal)
   */
  const preloader = document.querySelector('#preloader');
  if (preloader && !preloader.classList.contains('preloader-modern')) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Build the seamless-loop marquee content for the skills ticker rows
   */
  document.querySelectorAll('.ticker-track').forEach((track) => {
    const text = track.getAttribute('data-marquee-text');
    if (!text) return;
    const item = `<span>${text} <i class="ticker-icon">↗</i></span>`;
    const group = item.repeat(8);
    track.innerHTML = group + group;
  });

  /**
   * Tap-to-expand the skills ticker rows on touch devices (no native :hover)
   */
  document.querySelectorAll('.ticker-row').forEach((row) => {
    row.addEventListener('click', () => {
      if (!window.matchMedia('(hover: none)').matches) return;
      const wasActive = row.classList.contains('ticker-active');
      document.querySelectorAll('.ticker-row.ticker-active').forEach((el) => el.classList.remove('ticker-active'));
      if (!wasActive) row.classList.add('ticker-active');
    });
  });

  /**
   * Initiate glightbox (only on pages that load the library)
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Magnetic hover effect for CTA buttons
   */
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  /**
   * Portfolio filter + staggered 2-column showcase
   */
  (function initPortfolioShowcase() {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid) return;

    const filterButtons = document.querySelectorAll('.portfolio-filters li');
    const items = Array.from(grid.querySelectorAll('.portfolio-item'));

    function applyStagger() {
      let visibleIndex = 0;
      items.forEach((item) => {
        if (item.classList.contains('portfolio-hidden')) {
          item.classList.remove('portfolio-offset');
          return;
        }
        item.classList.toggle('portfolio-offset', visibleIndex % 2 === 1);
        visibleIndex++;
      });
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('filter-active'));
        btn.classList.add('filter-active');
        const filter = btn.getAttribute('data-filter');
        items.forEach((item) => {
          const show = filter === '*' || item.classList.contains(filter.replace('.', ''));
          item.classList.toggle('portfolio-hidden', !show);
        });
        applyStagger();
      });
    });

    applyStagger();
  })();

  /**
   * Contact form submission with inline status feedback
   */
  (function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    if (!form || !statusEl) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.querySelector('.btn-label') : null;
    let hideTimer = null;

    function showStatus(type, message) {
      clearTimeout(hideTimer);
      statusEl.className = 'form-status ' + type;
      const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill';
      statusEl.innerHTML = '<i class="bi ' + icon + '"></i><span>' + message + '</span>';

      requestAnimationFrame(() => {
        statusEl.classList.add('form-status-visible');
      });

      hideTimer = setTimeout(() => {
        statusEl.classList.remove('form-status-visible');
        setTimeout(() => {
          statusEl.classList.add('hidden');
        }, 400);
      }, 5500);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let hasEmpty = false;
      requiredFields.forEach((field) => {
        if (!field.value.trim()) hasEmpty = true;
      });

      if (hasEmpty) {
        showStatus('error', 'Please fill in all required fields before submitting.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = 'Sending...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitLabel) submitLabel.textContent = 'Send Message';
        }
        form.reset();
        showStatus('success', 'Thank you! Your message has been sent successfully. I will get back to you shortly.');
      }, 900);
    });
  })();

})();