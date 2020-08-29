/**
 * Industrial
 *
 * This file contains all template JS functions
 *
 * @package Industrial
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Owl Carousel
 * 02 - Smooth Scroll
 * 03 - Mailchimp Form
 * 04 - Projects Filter
 * 05 - Navigation 
 * 06 - Facts Count
 * 07 - Quantity Increase Decrease
 * 08 - Price Slider / Filter
 * 09 - Product Zoom 
 * 10 - Search
 * 11 - Preloader

--------------------------------------------------------------*/
(function($) {
  "use strict";

// Owl Carousel 
    // Home Slider    
      $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });

    // Featured Slider
    $("#featured-slider").owlCarousel({
      loop: true,
      items: 4,
      dots: false,
      nav: true,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 300,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: true,
        },
        1100: {
            items: 4,
            nav: true,
        }
      }
    });

    // Testimonials Slider    
    $("#testimonials-slider").owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: true,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 2,
            nav: true,
            dots: false,
        }
      }
    });
    
    // Clients Slider    
    $("#client-slider").owlCarousel({
      loop: true,
      items: 6,
      dots: false,
      nav: false,
      autoplayTimeout: 9000,
      smartSpeed: 900,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 900,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 4,
            nav: false,
            dots: false,
        },
        1100: {
            items: 6,
            nav: false,
            dots: false,
        }
      }
    });

  // Love Us Slider    
      $("#love-us-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    });

  // Love Us Gallery Slider    
      $("#love-us-gallery").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: false,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 10,
      autoplay: true,
      slideSpeed: 600,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 3,
            nav: false,
        }
      }
    });

  // News Two Slider    
    $("#news-two-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
            dots: false,
        },
        1100: {
            items: 3,
            nav: true,
            dots: false,
        }
      }
    });

  // Featured Slider Two
    $("#featured-slider-two").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: true,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 300,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 4,
            nav: true,
        },
        1100: {
            items: 5,
            nav: true,
        }
      }
    });     

// Smooth Scroll
    smoothScroll.init();
    
// Mailchimp Form
    $('#subscribe-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

// Projects Filter
    $(function() {
        var selectedClass = "";
        $(".fil-cat").on('click',function(){ 
        selectedClass = $(this).attr("data-rel"); 
         $("#projects-gallery").fadeTo(100, 0.1);
        $("#projects-gallery .projects-gallery-block").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
          $("."+selectedClass).fadeIn().addClass('scale-anm');
          $("#projects-gallery").fadeTo(300, 1);
        }, 300);     
      });
    });

// Navigation 
    // Navigation / Menu
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

// Facts Count 
    if ($('.counter').length) {   
      $(function( $ ) {
        $('.counter').counterUp({
          delay: 20,
          time: 2000
        });
      });  
    }

// Quantity Increase Decrease
    $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');
      $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == " ") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      } else {
      newVal = 0;
        }
        }
    $button.parent().find("input").val(newVal);
    });    

// Price Slider / Filter
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 50, 250 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

// Product Zoom 
    $(window).load(function() {
      $("#zoom-01").elevateZoom({gallery:'gallery-01', zoomType: 'lens', lensShape: 'round', lensSize : 200, galleryActiveClass: 'active', imageCrossfade: true}); 
      $("#zoom-01").on("click", function(e) {  
        var ez =   $('#zoom-01').data('elevateZoom'); 
        $.fancybox(ez.getGalleryList());
        return false;
      }); 
    });  
    
// Search
  $('.search-icon').on('click', function (e) {
    e.preventDefault();
    $('.search').addClass('active');
  });

  $('.search-close').on('click', function (e) {
    e.preventDefault();
    $('.search').removeClass('active');
  });

// Preloader   
    $(window).on('load', function()  { 
      $('.status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow'); 
    }); 
    
})(jQuery);