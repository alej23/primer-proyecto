var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:30,
    nav: false,
    autoplay: true,
    autoplayTimeout:4000,
    responsive:{
        200:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:6
        }
    }
})




owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

