/*-------MENU-------- */
import spriteUrl from '/img/sprite.svg?url';

export function setupMobileMenu() {
  if (window.innerWidth >= 1200) return;

  const btn = document.querySelector('.burger-btn');
  const menu = document.getElementById('mobile-menu');
  const iconUse = btn.querySelector('use');
  const links = menu.querySelectorAll('a');

  const closeMenu = () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
    iconUse.setAttribute('href', '${spriteUrl}#burger-icon');
    
  };

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    iconUse.setAttribute(
      'href',
      isOpen ? `${spriteUrl}#icon-close` : `${spriteUrl}#burger-icon`
    );
  });

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/*---------COOKIES-----*/

export function initCookiePopup() {
  const modal = document.getElementById('cookieModal');
  const acceptBtn = document.getElementById('acceptBtn');
  const declineBtn = document.getElementById('declineBtn');
  if (!modal || !acceptBtn || !declineBtn) return;

  const choice = localStorage.getItem('cookieConsent');
  if (choice) {
    modal.classList.remove('show');
    modal.style.display = 'none';
    return;
  }

  setTimeout(() => {
    modal.style.display = 'flex';
    void modal.offsetWidth;
    modal.classList.add('show');
  }, 2000);

  function hidePopup(value) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
    localStorage.setItem('cookieConsent', value);
  }

  acceptBtn.addEventListener('click', () => hidePopup('accepted'));
  declineBtn.addEventListener('click', () => hidePopup('declined'));
}
