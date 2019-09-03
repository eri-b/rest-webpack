const showMenu = () =>{
  const menu = document.createElement('div');
  menu.setAttribute("id", "tab");
  menu.innerHTML = "Menu here"
  document.body.appendChild(menu);
}

export default showMenu;
