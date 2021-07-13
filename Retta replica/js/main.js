

$(document).ready(function() {

  //Topnav transition
  $(window).scroll(function(event) {
    if ($(document).scrollTop() >= $('#home').height() / 6) {
      $('#topnav').addClass('scrolled');
    } else{
      $('#topnav').removeClass('scrolled');
    }
  }).trigger('scroll');
  
  //Topnav Mobile-view toggle
  $('.navbar-toggle').on('click', function(event) {
    $(this).toggleClass('active');
  });

 //Portfolio masonry
    var $container = $('#projects');
    $container.isotope({
      masonry: {
       columnWidth: 0
      },
      itemSelector: '.project'
    });

    //Portfolio filters
    $('#filters').on( 'click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

//counting statistics

$('#stat').waypoint(function() {
        //Execute CountTo Plugin
        $('.stats-count').countTo();
    }, {
        offset: 300
    });
	
	});

//parallax
$('.parallax-window').parallax({imageSrc: 'image/parallax/1.jpg'});

//wow initiate
 new WOW().init();

//text-animation initiate
$('.tlt').textillate();