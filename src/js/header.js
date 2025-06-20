export function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.querySelector('.burger-close');

  if (!burgerBtn || !mobileMenu || !closeBtn) return;

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
}
