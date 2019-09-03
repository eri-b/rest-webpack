import setPage from './setup';
import showMenu from './menu';
import showContact from './contact';

setPage();

document.querySelector('#menu').addEventListener('click', ()=>{
  hideContent();
  showMenu();
})

document.querySelector('#contact').addEventListener('click', ()=>{
  hideContent();
  showContact();
})

const hideContent = () =>{
  const tab = document.getElementById('tab');
  if (tab){
    tab.remove();
  }
  
}
