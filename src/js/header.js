/*-------MENU-------- */
import spriteUrl from '/img/sprite.svg?url';

export function setupMobileMenu() {
  const btn = document.querySelector('[data-burger-btn="open"]');
  const menu = document.querySelector('[data-mobile-menu]');
  const iconUse = btn?.querySelector('use');
  const links = menu?.querySelectorAll('[data-menu-link]');

  if (!btn || !menu || !iconUse) return;

  const openIcon = `${spriteUrl}#icon-close`;
  const closeIcon = `${spriteUrl}#burger-icon`;

  const closeMenu = () => {
    menu.dataset.mobileMenu = 'closed';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    iconUse.setAttribute('href', closeIcon);
  };

  const toggleMenu = () => {
    const isOpen = menu.dataset.mobileMenu !== 'open';
    btn.setAttribute('aria-expanded', String(isOpen));
    isOpen
      ? (menu.dataset.mobileMenu = 'open')
      : (menu.dataset.mobileMenu = 'closed');
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    iconUse.setAttribute('href', isOpen ? openIcon : closeIcon);
  };

  btn.addEventListener('click', () => {
    if (window.innerWidth >= 1200) return;
    toggleMenu();
  });

  links?.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth >= 1200) return;
      closeMenu();
    });
  });
}

/*---------COOKIES-----*/

export function initCookiePopup() {
  const modal = document.querySelector('[data-cookie-modal]');
  const acceptBtn = document.querySelector('[data-accept-btn]');
  const declineBtn = document.querySelector('[data-decline-btn]');
  if (!modal || !acceptBtn || !declineBtn) return;

  const choice = localStorage.getItem('cookieConsent');
  if (choice) return;

  setTimeout(() => {
    modal.style.display = 'flex';
    void modal.offsetWidth;
    modal.dataset.cookieModal = 'open';
  }, 2000);

  function hidePopup(value) {
    modal.dataset.cookieModal = 'closed';
    setTimeout(() => (modal.style.display = 'none'), 300);
    localStorage.setItem('cookieConsent', value);
  }

  acceptBtn.addEventListener('click', () => hidePopup('accepted'));
  declineBtn.addEventListener('click', () => hidePopup('declined'));
}
