/* eslint no-use-before-define: "off" */
/* eslint-env es6 */

const setPage = () => {
  const content = document.querySelector('#content');
  const bg = '<main><h1>Pizza Hut</h1></main>';
  const links = "<nav><a id='home' class='active'>Home</a><a id='contact'>Contact</a><a id='menu'>Menu</a></nav>";
  const newContent = bg + links;
  content.innerHTML = newContent;
  showHome();
};

const showHome = () => {
  const home = document.createElement('div');
  home.setAttribute('id', 'tab');
  home.innerHTML = "There's nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don't settle for anything less than food we're proud to serve. And we don't just clock in. Not when we can also become our best, make friends, and have fun while we're at it. We're the pizza company that lives life unboxed.";
  document.querySelector('#content').appendChild(home);
};

export { setPage, showHome };
