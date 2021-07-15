//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/slick-carousel/slick/slick.js

$(document).ready(function(){
    $('.hero__slider').slick({
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        appendDots: $('.hero__slider-nav')
    });
});

/*const slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'side': 'right'
});*/
