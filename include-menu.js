document.addEventListener('DOMContentLoaded', function() {
  // 1. 공통 헤더/메뉴 HTML 로드
  fetch('m_header.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);

      // 2. 메뉴 로드 완료 후 버튼 이벤트 등록
      var openBtn = document.getElementById('side-menu-open-btn');
      var closeBtn = document.getElementById('side-menu-close-btn');
      var overlay = document.getElementById('side-menu-overlay');
      var drawer = document.getElementById('side-menu-drawer');

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
});