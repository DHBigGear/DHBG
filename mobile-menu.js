document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('side-menu-open-btn');
  const closeBtn = document.getElementById('side-menu-close-btn');
  const overlay = document.getElementById('side-menu-overlay');
  const drawer = document.getElementById('side-menu-drawer');

  function openMenu() {
    if (drawer && overlay) {
      drawer.classList.add('is-open');
      overlay.classList.add('is-active');
    }
  }

  function closeMenu() {
    if (drawer && overlay) {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-active');
    }
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
});