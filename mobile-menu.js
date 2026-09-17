document.addEventListener('DOMContentLoaded', () => {
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