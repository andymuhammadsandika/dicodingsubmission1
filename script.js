const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const menu = document.getElementById('listMenu');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});

if(menu) {
  menu.addEventListener('click', () => {
    nav.classList.remove('slide')
  });
}
