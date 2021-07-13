$("#fakeLoader").fakeLoader({

    timeToHide: 1200, //Time in milliseconds for fakeLoader disappear
    zIndex: 999, // Default zIndex
    spinner: "spinner6", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
    bgColor: "#51D1C4", //Hex, RGB or RGBA colors

});


//Sidebar open

$('#menu-left #menu-toggle').on('click', function(event) {
    $(this).toggleClass('active');
    $('#menu-left').toggleClass('open');
});

//Sidebar Navigation

$('#main-menu a, .download').on('click', function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    }
    var timeSet = setTimeout(function(e) {
        $('#menu-toggle').trigger('click');
    }, 1000);

    clearTimeout(timeSet);
    return false;
});


//Initiat WOW JS
new WOW().init();

//Notify me 

$("#notifyMe").notifyMe();


// screenshots carousel
$(document).ready(function() {

    $("#screenshot-carousel").owlCarousel({
        autoPlay: 3000,
        items: 5,
        navigation: false
    });

    //team carousel

    $("#team-carousel").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        pagination: false,
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [768, 2],

    });

    // Owl Carousel for Testimonial

    $('#testimonials-slider').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        pagination: true
    });


    // magnific popup

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    //Company Stats Count

    $('#stat').waypoint(function() {
        //Execute CountTo Plugin
        $('.stats-count').countTo();
    }, {
        offset: 300
    });

});

//Toggle menu button transition
$(window).scroll(function(event) {
    if ($(document).scrollTop() >= $('#home').height()) {
        $('#menu-toggle').addClass('light');
    } else {
        $('#menu-toggle').removeClass('light');
    }
}).trigger('scroll');
