/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
		
		    var $regText = $('.regulation-text');

        // Hide the regulation text
      	$regText.find('span.text').hide();

        // Show the button
        $regText.find('.toggle').removeClass('hidden');

      	$regText.find('.toggle a').toggle(function(){

          // Change button text
          $(this).html('Hide Regulation Text');

          // Reveal regulation text
      		$regText.find('span.text').slideDown();

          // Scroll page to bottom
          $("html, body").animate({ scrollTop: $(document).height() }, 1000);

          // Change arrow icon to up
          $regText.find('.toggle i').removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-up');

      	}, function() {

          // Change button text
          $(this).html('Show Regulation Text');

          // Hide regulation text
      		$regText.find('span.text').slideUp();

          // Change arrow icon to down
          $regText.find('.toggle i').removeClass('fa-arrow-circle-up').addClass('fa-arrow-circle-down');

      	});

        $('.main-menu li:not(.calc-button)').not('.main-menu li li').hover(function(){

          $('.main-menu .child').not('li.calc-button .child').stop().slideUp('fast');

          $(this).find('.child').stop().slideDown({
            duration: 'slow',
            easing: 'easeOutCubic',
            queue: false
          });
          $(this).find('.child').css('z-index', '2000');

        }, function(){

          var element = $(this).find('.child');
          $(element).css('z-index', '1000');

          $(element).delay(1000).queue(function(next) {

            if(element.is(":hover")) {

              next();

            } else {

              $(element).slideUp('fast');
              next();

            }

          });

        });

        // MAIN FORM
        $('.main-menu li.calc-button a').on('click', openForm); 
        $('.close-form').on('click', openForm);

        function openForm() {

          if($('.calc-button a').parent().hasClass('open')) {

            $('#layerslider_1').layerSlider('start');
            $('.mask').fadeOut();
            $('#mobile-menu-button').on('click', openMobileMenu);

          } else {

            $('#layerslider_1').layerSlider('stop');
            $('.mask').fadeIn();
            $('#mobile-menu-button').off('click');

          }

          $('body').toggleClass('formOpen');
          $('.calc-button a').parent().toggleClass('open');

        }

        // MOBILE MENU
        $('#mobile-menu-button').on('click', openMobileMenu);


        function openMobileMenu() {

          if($('#mobile-menu-button').hasClass('open')) {

            $('#layerslider_1').layerSlider('start');
            $('#mobile-menu-button').html('<i class="fa fa-bars" aria-hidden="true"></i>&nbsp;&nbsp;Open Menu');
            $('.main-menu li.calc-button a').on('click', openForm);

          } else {

            $('#layerslider_1').layerSlider('stop');
            $('#mobile-menu-button').html('<i class="fa fa-bars" aria-hidden="true"></i>&nbsp;&nbsp;Close Menu');
            $('.main-menu li.calc-button a').off('click');

          }
          $('#mobile-menu-button').toggleClass('open');
          $('body').toggleClass('menuOpen');

        }

        // STICKY HEADER
        $(window).scroll(function() {

          if ($(this).scrollTop() > 60){ 

              $('header .bg-dark').addClass("sticky");

            } else {

              $('header .bg-dark').removeClass("sticky");

            }
        });

        // SYNC FORM ELEMENTS

        formSync('sync-name');
        formSync('sync-phone');
        formSync('sync-type');
        formSync('sync-yearsA', 'sync-yearsB');

        function formSync(elClass, elClass2 = null) {

          element = $('.' + elClass);
          element2 = $('.' + elClass2);

          if(element.is('input[type=text]')) {
            element.keyup(function(){
              element.val($(this).val());
            });
          }

          if(element.is('select')) {
            element.change(function(){
              element.val($(this).val());
            });
          }

          if(element.is('input[type=radio]')) {

            element.change(function() {
                var index = $(this).index(element);
                $(element2 + ':eq(' + index + ')').attr('checked','checked');
            });

          }



        }

		
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
