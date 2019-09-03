const showMenu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'tab');
  menu.innerHTML = '<ul><li>$9 - TACOS</li><li>$999 - ICE CREAM</li><li>$.99 - FRUIT</li><li>$99 - WATER</li><li>$FREE - BEER</li></ul>';
  document.body.appendChild(menu);
};

export default showMenu;
