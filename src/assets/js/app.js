//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/slick-carousel/slick/slick.js



var $slideshow = $('.hero__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.hero__slider-nav-dots')
});

$('.hero__slider-nav-block').on('click', 'a', function( e ) {

    const slideIndex = $(this).data("index");

    $slideshow.slick( 'slickGoTo', parseInt( slideIndex ) );

    e.preventDefault();
});

$('.hero__slider-nav-block').on('click', 'span', function( e ) {

    const slideIndex = $(this).text();

    $slideshow.slick( 'slickGoTo', (parseInt( slideIndex ) - 1) );

    e.preventDefault();
});


/*const slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'side': 'right'
});*/
