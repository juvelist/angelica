// slider
$('#slider-block').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        '<span aria-label="' + 'Previous' + '"><i class="fas fa-chevron-left"></i></span>',
        '<span aria-label="' + 'Next' + '"><i class="fas fa-chevron-right"></i></span>'
    ],
    responsive:{
        0:{
            items:1
        }
    },
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:3000,
    autoplayHoverPause:true
});


// fancybox
$('.gallery').fancybox();