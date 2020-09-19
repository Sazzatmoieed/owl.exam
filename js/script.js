$('.owl-carousel') .owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            itams:3
        },
        1000:{
            items:5
        }
    }
})