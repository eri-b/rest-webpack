const showMenu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'tab');
  const menuInfo = document.createElement('ul');
  const item1 = document.createElement('li');
  item1.appendChild(document.createTextNode('$9 - Tacos'));
  const item2 = document.createElement('li');
  item2.appendChild(document.createTextNode('$0 - Beer'));
  const item3 = document.createElement('li');
  item3.appendChild(document.createTextNode('$.99 - Fruit'));
  const item4 = document.createElement('li');
  item4.appendChild(document.createTextNode('$999 - T-Shirt'));
  menuInfo.appendChild(item1);
  menuInfo.appendChild(item2);
  menuInfo.appendChild(item3);
  menuInfo.appendChild(item4);

  menu.appendChild(menuInfo);
  document.body.appendChild(menu);
};

export default showMenu;
