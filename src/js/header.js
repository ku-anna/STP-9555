/*-------MENU-------- */
export function setupMobileMenu() {
  if (window.innerWidth >= 1200) return;
  const btn = document.querySelector('.burger-btn');
  const menu = document.getElementById('mobile-menu');
  const iconUse = btn.querySelector('use');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    iconUse.setAttribute(
      'href',
      isOpen ? '/img/sprite.svg#icon-close' : '/img/sprite.svg#burger-icon'
    );
  });
}

/*---------COOKIES-----*/

export function initCookiePopup() {
  const cookieModal = document.getElementById('cookieModal');
  const acceptBtn = document.getElementById('acceptBtn');
  const declineBtn = document.getElementById('declineBtn');

  if (!cookieModal || !acceptBtn || !declineBtn) return;

  const cookieChoice = localStorage.getItem('cookieConsent');

  if (!cookieChoice) {
    setTimeout(() => {
      cookieModal.classList.add('show');
    }, 2000);
  }

  function hidePopup(choice) {
    cookieModal.classList.remove('show');
    cookieModal.classList.add('hide');

    setTimeout(() => {
      cookieModal.style.display = 'none';
    }, 300);

    localStorage.setItem('cookieConsent', choice);
  }

  acceptBtn.addEventListener('click', () => hidePopup('accepted'));
  declineBtn.addEventListener('click', () => hidePopup('declined'));
}
