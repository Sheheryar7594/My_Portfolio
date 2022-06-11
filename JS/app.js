$(document).ready(function(){

$('.slider').slick({
   
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


// Creating variable
let hamburger = document.querySelector('.hamburger');

// let variable name = document.querySelector('varible Selection')
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile_nav');
// let mobilelogo  = document.querySelector('.mobile_logo')
// let mobilelogo1  = document.querySelector('.mobile_logo1')
// let list_item = document.querySelector('.list_item');



hamburger.addEventListener('click', function(){

    // mobileNav.remove('button');
    mobileNav.classList.add('open');
    // to hide the mobile_nav button when the navigation open
    hamburger.classList.add('hidden_nav');
    // mobilelogo.classList.add('logo_animation')
    // mobilelogo1.classList.add('logo1_animation')
});


// list_item.addEventListener('click', function(){

//     mobileNav.classList.remove('open');
// })




times.addEventListener('click', function(){

    mobileNav.classList.remove('open');

    // jesay he times per click ho hamburger wapis show hojaya
    hamburger.classList.remove('hidden_nav');

});

});