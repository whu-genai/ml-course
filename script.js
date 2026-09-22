const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.schedule-summary').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.schedule-item');
    const open = item.classList.toggle('open');
    item.classList.toggle('current', open);
    button.setAttribute('aria-expanded', String(open));
    button.querySelector('.plus').textContent = open ? '−' : '＋';
  });
});

document.querySelectorAll('.filter button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter button').forEach((b) => b.classList.remove('selected'));
    button.classList.add('selected');
    const filter = button.dataset.filter;
    document.querySelectorAll('.schedule-item').forEach((item) => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  });
});
