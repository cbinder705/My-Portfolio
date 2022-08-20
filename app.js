const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controller');
const sectBtn = document.querySelectorAll ('.control');
const allSections = document.querySelectorAll ('.main-content');

function Transitions(){
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', () =>{
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn'
    })
  }
}
