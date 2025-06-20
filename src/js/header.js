export function setupMobileMenu() {
  const btn = document.querySelector('.burger-btn');
  const menu = document.getElementById('mobile-menu');
  const iconUse = btn.querySelector('use');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    iconUse.setAttribute(
      'href',
      isOpen
        ? './public/sprite.svg#icon-close'
        : './public/sprite.svg#burger-icon'
    );
  });
}
