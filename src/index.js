import { setPage, showHome } from './setup';
import showMenu from './menu';
import showContact from './contact';

setPage();

document.querySelector('#home').addEventListener('click', (e) => {
  activeNav(e);
  hideContent();
  showHome();
});

document.querySelector('#menu').addEventListener('click', (e) => {
  activeNav(e);
  hideContent();
  showMenu();
});

document.querySelector('#contact').addEventListener('click', (e) => {
  activeNav(e);
  hideContent();
  showContact();
});

const hideContent = () => {
  const tab = document.getElementById('tab');
  if (tab) {
    tab.remove();
  }
};

const activeNav = (e) => {
  document.querySelectorAll('nav a').forEach((item) => {
    item.classList.remove('active');
  });
  e.target.className += 'active';
};
