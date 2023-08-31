const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon img')

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('active')
});
