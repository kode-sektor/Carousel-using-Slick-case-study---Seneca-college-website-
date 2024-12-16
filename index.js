

$(document).ready(function() {
    $('.demo').slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding:'550px',
        // draggable:false,
        edgeFriction: 0.95,
        initialSlide: 0,
        lazyLoad:'ondemand',    // 'ondemand' will load the image as soon as you slide to it. 'progressive' loads one image after the other when the page loads.
        cssEase:'ease',
        customPaging: function(slider, i) {
            return '<button type="button" data-role="none" style="border: 3px solid gold;">' + (i + 1) +'</button>';
        },
        dots:true,
        pauseOnHover:true,
        slidesPerRow: 1,
        speed: 500,
        swipe: true,    // Enables touch swipe
        touchMove:true, // Enables slide moving with touch
        useCSS:true,    // Enable/Disable CSS Transitions
        useTransform:true, // Enable/Disable CSS Transforms


        // responsive: [{
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         infinite: true
        //     }
        //     }, {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         dots: true
        //     }
        //     }, {
        //     breakpoint: 300,
        //     settings: "unslick" // destroys slick
        // }],
        prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>'
    });
});
