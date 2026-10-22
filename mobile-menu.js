function initPageMotion() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const selectors = [
    '.sub-hero-content > *',
    '.m-hero-content > *',
    'h2',
    'h3',
    'p',
    'figure',
    '[class$="-card"]',
    '[class$="-item"]',
    '.history-stat',
    '.milestone',
    '.timeline-item'
  ].join(',');
  const targets = [...document.querySelectorAll(selectors)].filter((target) =>
    target.getClientRects().length > 0 &&
    !target.closest('header, footer, nav, aside, .main-hero, .m-hero, .side-menu-overlay, .side-menu-drawer')
  );
  const heroBanners = [...document.querySelectorAll('.sub-hero, .m-hero')].filter((banner) => banner.getClientRects().length > 0);
  if (targets.length === 0 && heroBanners.length === 0) return;

  document.documentElement.classList.add('page-motion-enabled');

  const siblingOrder = new Map();
  targets.forEach((target) => {
    const parent = target.parentElement;
    const order = siblingOrder.get(parent) || 0;
    target.dataset.pageMotion = '';
    target.style.setProperty('--page-motion-delay', `${(order % 5) * 20}ms`);
    siblingOrder.set(parent, order + 1);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-page-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.01 });

  targets.forEach((target) => observer.observe(target));
  heroBanners.forEach((banner) => observer.observe(banner));
}

document.addEventListener('DOMContentLoaded', () => {
  initPageMotion();

  const menuDrawer = document.getElementById('side-menu-drawer');
  if (menuDrawer) {
    const menuContent = menuDrawer.querySelector('.drawer-content');
    if (menuContent && !menuDrawer.querySelector('.drawer-brand')) {
      const brand = document.createElement('div');
      brand.className = 'drawer-brand';
      brand.innerHTML = '<small>DAEHYUNG SPECIAL GEAR</small><strong>정밀 가공 전문 기업</strong><span>대형 특수기어 · 정밀 선회 베어링 · CNC 가공</span>';
      menuContent.before(brand);
    }

    const quickContact = menuDrawer.querySelector('.drawer-quick-contact');
    if (quickContact) {
      let label = quickContact.querySelector('small');
      if (!label) {
        label = document.createElement('small');
        label.textContent = '견적 · 문의';
        quickContact.prepend(label);
      }
      const contactLink = quickContact.querySelector('a');
      if (contactLink) contactLink.textContent = '문의하기';
    }
  }

  if (window.__mobileMenuInitialized) return;
  window.__mobileMenuInitialized = true;

  const openBtn = document.getElementById('side-menu-open-btn');
  const closeBtn = document.getElementById('side-menu-close-btn');
  const overlay = document.getElementById('side-menu-overlay');
  const drawer = document.getElementById('side-menu-drawer');

  if (!openBtn || !closeBtn || !overlay || !drawer) {
    return;
  }

  function openMenu() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-active');
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-active');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
});
