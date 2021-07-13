(function($) {

    "use strict";

    $(window).on('load', function() {


        //Animated Background Slider
        $('#backgrounds.animated').flexslider({
            animation: "fade",
            directionNav: false,
            controlNav: true,
            keyboard: false,
            slideshowSpeed: 8000,
            start: function() {
                $('#backgrounds').find(".slides > li.flex-active-slide").each(function() {
                    var $content = $(this);
                    $content.css({
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        'transform': 'scale(1)'
                    });
                })
            },
            before: function() {
                $('#backgrounds').find(".slides > li").each(function() {
                    var $content = $(this);
                    $content.css({
                        '-webkit-transform': 'scale(1.1)',
                        '-moz-transform': 'scale(1.1)',
                        'transform': 'scale(1.1)'
                    });
                })
            },
            after: function() {
                $('#backgrounds').find(".slides > li.flex-active-slide").each(function() {
                    var $content = $(this);
                    $content.css({
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        'transform': 'scale(1)'
                    });
                })
            },
        });



        //Video background
        $(".player").mb_YTPlayer({
            containment: '#video-wrapper',
            mute: true,
            showControls: false,
            quality: 'default',
            startAt: 5
        });

    });



    // Show and hide color-switcher
    $(".color-switcher .switcher-button").on('click', function() {
        $(".color-switcher").toggleClass("show-color-switcher", "hide-color-switcher", 800);
    });

    // Color Skins
    $('a.color').on('click', function() {
        var title = $(this).attr('title');
        $('#style-colors').attr('href', 'css/skin-' + title + '.css');
        return false;
    });




    //Elements animation
    $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if (animationDelay) {
            var timeSet = setTimeout(function() {
                element.addClass(animation + " visible");
                if (element.hasClass('counter')) {
                    element.find('.value').countTo();
                }
            }, animationDelay);
        } else {
            element.addClass(animation + " visible");
            if (element.hasClass('counter')) {
                element.find('.value').countTo();
            }
            clearTimeout(timeSet);
        }
    }, { accY: -150 });




    //Notify me 

    $("#notifyMe").notifyMe();

    //Google Maps
    function initMap() {
        var myLatlng = new google.maps.LatLng(51.498609000000000000, -0.133906000000024500); // <- Your latitude and longitude
        var styles = [{ "featureType": "water", "stylers": [{ "visibility": "on" }, { "color": "#acbcc9" }] }, { "featureType": "landscape", "stylers": [{ "color": "#f2e5d4" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#c5c6c6" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#e4d7c6" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#fbfaf7" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#c5dac6" }] }, { "featureType": "administrative", "stylers": [{ "visibility": "on" }, { "lightness": 33 }] }, { "featureType": "road" }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": 20 }] }, {}, { "featureType": "road", "stylers": [{ "lightness": 20 }] }]

        var mapOptions = {
            zoom: 15,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: false,
            styles: styles
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var infowindow = new google.maps.InfoWindow({
            content: "We are here!"
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'images/pin.png',
            title: 'We are here!'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }

    if ($('#map').length) {
        google.maps.event.addDomListener(window, 'load', initMap);
        $('#map').css('position', 'absolute');
    }


})(jQuery);

//Placeholder

$('input,textarea').on('focus', function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
});
$('input,textarea').blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
});

$('input, textarea').placeholder();

//Tabs
$('#skillsTab a').on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})
