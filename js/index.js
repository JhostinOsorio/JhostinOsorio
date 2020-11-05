const buttonToggle = document.getElementById("button-toggle");
const mainNav = document.getElementById('main-nav');
const menuListLinks = document.querySelectorAll('.menulist__link');
const main = document.querySelector('.main');
const redes = document.getElementById('redes');
const redesContainer = document.getElementById('redes--container');
const year = document.getElementById('year');

buttonToggle.addEventListener("click", (e) => {
  buttonToggle.classList.toggle("active");
  mainNav.classList.toggle('main-nav--active');
});

menuListLinks.forEach(element => {
  element.addEventListener('click', e => {
    buttonToggle.classList.toggle("active");
    mainNav.classList.toggle('main-nav--active')
  })
});

main.addEventListener('touchstart', e => {
  if(buttonToggle.classList.contains("active")){
    buttonToggle.classList.toggle("active");
    mainNav.classList.toggle('main-nav--active');
  }
})

redes.addEventListener('click', e => {
  redes.classList.toggle('redes--active');
  redes.classList.toggle('redes--static');
  redesContainer.classList.toggle('redes--container--show');
})

year.textContent = (new Date()).getFullYear();