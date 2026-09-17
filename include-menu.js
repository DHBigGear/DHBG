document.addEventListener('DOMContentLoaded', function() {
  if (window.__mobileMenuInitialized) return;

  const existingOpenBtn = document.getElementById('side-menu-open-btn');
  const existingCloseBtn = document.getElementById('side-menu-close-btn');
  const existingOverlay = document.getElementById('side-menu-overlay');
  const existingDrawer = document.getElementById('side-menu-drawer');

  if (existingOpenBtn || existingCloseBtn || existingOverlay || existingDrawer) {
    window.__mobileMenuInitialized = true;
    return;
  }

  // This file is intentionally kept as a safe fallback only.
  // The canonical mobile implementation lives in mobile-menu.js.
  window.__mobileMenuInitialized = true;
});