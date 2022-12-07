const menu = document.querySelector('.b-menu');
const navMenu = document.querySelector('.nav-bar')

const menuBtn = document.querySelector('.nav-bar');

menu.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu');
})

menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu');
})