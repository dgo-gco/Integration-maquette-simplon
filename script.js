const menuBrg = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-links')

// const menuBtn = document.querySelector('.nav-links');

// const temoignageDroite = document.querySelector('.');
// const temoignageGauche = document.querySelector('.');

// const soutienDroite = document.querySelector('.');
// const soutienGauche = document.querySelector('.');


menuBrg.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu');
})

// menuBtn.addEventListener('click', function(){
//     navMenu.classList.toggle('mobile-menu');
// })