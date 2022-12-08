const menu = document.querySelector('.b-menu');
const navMenu = document.querySelector('.nav-bar')

const menuBtn = document.querySelector('.nav-bar');

const temoignageDroite = document.querySelector('.');
const temoignageGauche = document.querySelector('.');

const soutienDroite = document.querySelector('.');
const soutienGauche = document.querySelector('.');


menu.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu');
})

menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu');
})