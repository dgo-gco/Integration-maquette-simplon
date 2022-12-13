const menuOpen = document.querySelector('.b-menu');
const navMenu = document.querySelector('.nav-links');

const menuClose = document.querySelector('.b-menu-ouvert');

const temoignageDroite = document.querySelector('.slide-right');
const temoignageOne = document.querySelector('.first-temoin');
const temoignageTwo = document.querySelector('.second-temoin');
const temoignagethree = document.querySelector('.third-temoin');
const temoignageGauche = document.querySelector('.slide-left');

const temoignagesSlide = document.querySelectorAll('.testimonials');

const temJon = document.querySelector('#tem-btn-left');
const temIma = document.querySelector('#tem-btn-left-imane');
const temAlcha = document.querySelector('#tem--btn-left-alcha');

// ------------------------DISPLAYING THE MOBILE MENU --------
menuClose.style.display = 'none';

menuOpen.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu'); //It adds a new class to the .nav-links ul in HTML thanks to toggle
    menuClose.style.display = 'block';
    menuOpen.style.display = 'none';

})

menuClose.addEventListener('click', function(){
    navMenu.classList.toggle('mobile-menu');
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
})

// ------------------------DISPLAYING TEMOINS ---------------------------------
const theParent = document.querySelector('#temoignages');

theParent.addEventListener('click', passNextTestimon, false);

function passNextTestimon(e) { //event as a parameter

    if (e.target !== e.currentTarget) {//check im not clicking on the parent but other element inside
        var clickedItem = e.target.id;

        temoignagesSlide.forEach((testimonial, i) => {
        let containerDimensions = testimonial.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        
            if (clickedItem === 'tem-btn-right' || clickedItem === 'tem-btn-right-imane') {
                testimonial.scrollLeft += containerWidth;
            } else if (clickedItem === 'tem-btn-left' || 
                       clickedItem === 'tem-btn-left-imane' ||
                       clickedItem === 'tem-btn-left-alch') {
                testimonial.scrollLeft -= containerWidth;
            }
        })

        console.log('Hello' + clickedItem);

    }
}

// ------------------------DISPLAYING SPONSORS ---------------------------------

    const slider = document.querySelector(".soutiens");
    const sliderWidth = slider.offsetWidth;
    const slideList = document.querySelector(".sponsors-list");
    var count = 1;
    const items = slideList.querySelectorAll("#sponsors-simplon").length;
    const prev = document.querySelector(".v-l");
    const next = document.querySelector(".v-r");

    const pause = document.querySelector('.icon-stop');

    window.addEventListener('resize', function() { //Making the automatic slider works on all screens
        sliderWidth = slider.offsetWidth;
    });

    function nextSlide(){
    if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
    }
    }

    function prevSlide(){
    if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count = 1){
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    }

    next.addEventListener("click", function(){
    nextSlide();
    });

    prev.addEventListener("click", function(){
    prevSlide();
    });

    let intervalSponsors;

    //Making the slider automatic
    function displaySponsors() {
        if (!intervalSponsors) {
            intervalSponsors = setInterval(function() {
                nextSlide()
                }, 3000);
        }
    }

    displaySponsors();
    

    pause.addEventListener('click', function(){
        clearInterval(intervalSponsors);
        if (intervalSponsors){
            intervalSponsors = null;
        } else if (!intervalSponsors) {
            displaySponsors();
        }
    })