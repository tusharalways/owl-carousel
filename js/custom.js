$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 15,
        items: 3,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});