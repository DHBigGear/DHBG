const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle(
        'active', link.getAttribute('href') === '#' + entry.target.id
      ));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
