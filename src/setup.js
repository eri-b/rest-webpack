/* eslint no-use-before-define: "off" */
/* eslint-env es6 */

const setPage = () => {
  const content = document.querySelector('#content');

  const main = document.createElement('main');
  const h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode('Pizza Hut'));
  main.appendChild(h1);
  content.appendChild(main);

  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.className = 'active';
  homeLink.setAttribute('id', 'home');
  homeLink.appendChild(document.createTextNode('Home'));
  const contactLink = document.createElement('a');
  contactLink.setAttribute('id', 'contact');
  contactLink.appendChild(document.createTextNode('Contact'));
  const menuLink = document.createElement('a');
  menuLink.setAttribute('id', 'menu');
  menuLink.appendChild(document.createTextNode('Menu'));

  nav.appendChild(homeLink);
  nav.appendChild(contactLink);
  nav.appendChild(menuLink);

  content.appendChild(nav);
  showHome();
};

const showHome = () => {
  const home = document.createElement('div');
  home.setAttribute('id', 'tab');
  const homeInfo = document.createTextNode("There's nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don't settle for anything less than food we're proud to serve. And we don't just clock in. Not when we can also become our best, make friends, and have fun while we're at it. We're the pizza company that lives life unboxed.");
  home.appendChild(homeInfo);
  document.querySelector('#content').appendChild(home);
};

export { setPage, showHome };
