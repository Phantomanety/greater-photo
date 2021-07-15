//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/slick-carousel/slick/slick.js



var $slideshow = $('.hero__slider').slick({
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.hero__slider-nav-dots')
});

$('.hero__slider-nav').on('click', 'a', function( e ) {

    var slideIndex = $(this).closest('a').data("index");

    $slideshow.slick( 'slickGoTo', parseInt( slideIndex ) );

    e.preventDefault();
});

/*const slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'side': 'right'
});*/
