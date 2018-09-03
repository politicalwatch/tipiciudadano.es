let hamburger = document.querySelector('.navbar-toggle');
let menu = document.querySelector(hamburger.dataset.target);

console.log(menu);

function collapseMenu(e) {
  e.preventDefault();
  menu.classList.toggle('in');
}

hamburger.addEventListener('click', collapseMenu);
