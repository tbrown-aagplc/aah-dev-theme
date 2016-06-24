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

          $(element).delay(400).queue(function(next) {

            if(element.is(":hover")) {

              next();

            } else {

              $(element).slideUp('fast');
              next();

            }

          });

        });

        // DISABLE Y SCROLL ON WINDOW

        var $body = $(document);
        $body.bind('scroll', function() {
            // "Disable" the horizontal scroll.
            if ($body.scrollLeft() !== 0) {
                $body.scrollLeft(0);
            }
        });

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

        // MAIN FORM
        $('.main-menu li.calc-button a').on('click', openForm); 
        $('.close-form').on('click', openForm);
        $('.aahbutton-1').on('click', openForm);

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

        // MOBILE MENU
        $('#mobile-menu-button').on('click', openMobileMenu);

        // STICKY HEADER
        $(window).scroll(function() {

          if ($(this).scrollTop() > 60){ 

              $('header .bg-dark').addClass("sticky");

            } else {

              $('header .bg-dark').removeClass("sticky");

            }
        });

        // Links two inputs together on seperate forms
        function formSync(elClass, elClass2) {

          var element = $('.' + elClass);
          // Set optional variable
          if (typeof elClass2 === 'undefined') { 
            elClass2 = 'default';
          }

          function switcher(index, element2) {
            element.removeAttr('checked').parent().removeClass('active');
            element2.removeAttr('checked').parent().removeClass('active');
            $('.' + elClass + ':eq(' + index + ')').attr('checked', true).parent().addClass('active');
            $('.' + elClass2 + ':eq(' + index + ')').attr('checked', true).parent().addClass('active');
          }

          // Text inputs and select dropdowns
          if(element.is('input[type=text]') || element.is('select')) {
            element.change(function(){
              element.val($(this).val());
            });
          } // Endif

          // Radio Buttons
          if(element.is('input[type=radio]')) {

            var element2 = $('.' + elClass2);
            
            element.change(function() {
                var index = $(this).index(element);
                switcher(index, element2);
            });

            element2.change(function() {
                var index = $(this).index(element2);
                switcher(index, element2);
            });

          } // Endif

        } // Function formSync()

        // SYNC FORM ELEMENTS

        var htmlInlineForm = '<div class="inline-form">' +
            '<form>' +
                '<div class="col-md-6">' +
                    '<fieldset class="form-group">' +
                        '<!-- <label for="name">Name</label> -->' +
                        '<input id="name" class="form-control sync-name" type="text" placeholder="Name" required>' +
                    '</fieldset>' +
                    '<fieldset class="form-group">' +
                        '<!-- <label for="email">Phone Number</label> -->' +
                        '<input id="phone" class="form-control sync-phone" type="text" placeholder="Phone Number" required>' +
                    '</fieldset>' +
                    '<div class="form-group">' +
                        '<select class="form-control sync-type" id="sel1">' +
                            '<option>Where were you injured? (select one)</option>' +
                            '<option>Head</option>' +
                            '<option>Neck</option>' +
                            '<option>Shoulder</option>' +
                            '<option>Back</option>' +
                            '<option>Arm</option>' +
                            '<option>Elbow</option>' +
                            '<option>Wrist</option>' +
                            '<option>Hand</option>' +
                            '<option>Pelvis/Hip</option>' +
                            '<option>Knee</option>' +
                            '<option>Leg</option>' +
                            '<option>Hand</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="col-md-6">' +
                    '<div class="clearfix radio-group">' +
                            '<span class="radio-title pull-left">Injured in the last 3 years?</span>' +
                            '<div class="btn-group pull-right" data-toggle="buttons">' +
                                '<label class="btn btn-primary active" for="yes-injured">' +
                                    '<input id="yes-injured" type="radio" value="1" name="injured" class="sync-yearsB">Yes' +
                                '</label>' +
                                '<label class="btn btn-primary" for="no-injured">' +
                                    '<input id="no-injured" type="radio" value="0" name="injured" class="sync-yearsB">No' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="clearfix radio-group">' +
                            '<span class="radio-title pull-left">Was the accident your fault?</span>' +
                            '<div class="btn-group pull-right" data-toggle="buttons">' +
                                '<label class="btn btn-primary" for="yes-fault">' +
                                    '<input id="yes-fault" type="radio" value="1" name="fault" class="sync-faultB">Yes' +
                                '</label>' +
                                '<label class="btn btn-primary active" for="no-fault">' +
                                    '<input id="no-fault" type="radio" value="0" name="fault" class="sync-faultB">No' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="clearfix radio-group">' +
                            '<span class="radio-title pull-left">Did you recieve medical attention?</span>' +
                            '<div class="btn-group pull-right" data-toggle="buttons">' +
                                '<label class="btn btn-primary active" for="yes-medical">' +
                                    '<input id="yes-medical" type="radio" value="1" name="medical" class="sync-medicalB">Yes' +
                                '</label>' +
                                '<label class="btn btn-primary" for="no-medical">' +
                                    '<input id="no-medical" type="radio" value="0" name="medical" class="sync-medicalB">No' +
                                    '</label>' +
                            '</div>' +
                        '</div>' +
                    '<button type="submit" class="btn btn-success btn-block btn-lg" style="border: 1px solid #348f34">Calculate Claim</button>' +
                '</div>' +
            '</form>' +
            '<div class="clearfix"></div>' +
            '</div>';

        $('.aahbutton-2').after(htmlInlineForm).next('.inline-form').hide();

        function showInlineForm() {

          $(this).toggleClass('open');

          if($(this).hasClass('open')) {

            $(this).html('Close Calculator');
            $(this).data('width', $(this).width());
            $(this).animate({width: '100%'}, 800, 'easeOutCubic', function(){
              $(this).next('.inline-form').slideDown();
            });

          } else {

            $(this).html('Open Calculator');
            $(this).next('.inline-form').slideUp(600, function(){
              var defaultWidth = $(this).prev().data('width') + 
                                  parseInt($(this).prev().css('padding-left')) + 
                                  parseInt($(this).prev().css('padding-right')) + 2;
              $(this).prev().animate({width: defaultWidth}, 600, 'easeInBack');
            });

          }

        }

        $('.aahbutton-2').on('click', showInlineForm);

        $(document).keypress(function(e) {
           if(e.which == 13) {
              
              if($('.aahbutton-3.open').length) {

                if($('.aahbutton.open input:focus').length) {
                  console.log('Pressed "Enter" whilst on a dynamic form input');
                  $('.aahbutton.open .continue-button').trigger('click');
                }

                if($('.aahbutton.open select:focus').length) {
                  console.log('Pressed "Enter" whilst on a dynamic form select');
                  $('.aahbutton.open .continue-button').trigger('click');
                }

              }

              if($('.aahbutton-3.open .continue-button.step-8').length) {
                $('.aahbutton.open .continue-button').trigger('click');
              }

           }
        });

        $('.aahbutton-3').click(function(event){

          if($(event.target).hasClass('continue-button')) {

            console.log("Clicked continue button");

            var that = $(this);
            var partWidth = 20 + (that.width() / 6);

            $(this).children('input[type=text], select, span, a, div').fadeOut('fast').promise().done(function(){

              if($(event.target).hasClass('step-2')) {

                console.log("Loading step 2...");

                var prevName = that.find('input').attr('name');
                var prevVal = that.find('input').val();
                console.log('Writing to local storgae: ' + prevName + '=' + prevVal);
                localStorage.setItem(prevName, prevVal);

                partWidth = (-3000 + (partWidth * 1)) + 'px';
                that.animate({'background-position-x' : partWidth}, 600);

                that.find('input').remove();
                that.find('span').text('What is your Phone Numer?');
                that.append('<input type="text" name="claim-phone" class="phone" placeholder="Please enter your phone number" autocomplete="off">');
                that.find('input').hide();
                that.find('a').remove();
                that.append('<a href="#" class="step-3 continue-button">Continue</a>');
                that.find('a').hide();

                console.log("Finished step 2...");

              }

              if($(event.target).hasClass('step-3')) {

                console.log("Loading step 3...");

                var prevName = that.find('input').attr('name');
                var prevVal = that.find('input').val();
                console.log('Writing to local storgae: ' + prevName + '=' + prevVal);
                localStorage.setItem(prevName, prevVal);

                partWidth = (-3000 + (partWidth * 2)) + 'px';
                that.animate({'background-position-x' : partWidth}, 600);

                that.find('input').remove();
                that.find('span').text('Where were you injured?');
                that.append('<br><select name="claim-where" class="injured"><option>Head</option><option>Foot</option><option>Leg</option></select>');
                that.find('select').hide();
                that.find('a').remove();
                that.append('<a href="#" class="step-4 continue-button">Continue</a>');
                that.find('a').hide();

                console.log("Finished step 3...");

              }

              if($(event.target).hasClass('step-4')) {

                console.log("Loading step 4...");

                var prevName = that.find('select').attr('name');
                var prevVal = that.find('select').val();
                console.log('Writing to local storage: ' + prevName + '=' + prevVal);
                localStorage.setItem(prevName, prevVal);

                partWidth = (-3000 + (partWidth * 3)) + 'px';
                that.animate({'background-position-x' : partWidth}, 600);

                that.find('select').remove();
                that.find('span').text('Were you injured in the last 3 years?');

                that.append('<select name="claim-injured"><option>Yes</option><option>No</option></select>');

                that.find('select').hide();
                that.find('a').remove();
                that.append('<a href="#" class="step-5 continue-button">Continue</a>');
                that.find('a').hide();

                console.log("Finished step 4...");

              }

              if($(event.target).hasClass('step-5')) {

                console.log("Loading step 5...");

                var prevName = that.find('select').attr('name');
                var prevVal = that.find('select').val();
                console.log('Writing to local storage: ' + prevName + '=' + prevVal);
                localStorage.setItem(prevName, prevVal);

                partWidth = (-3000 + (partWidth * 4)) + 'px';
                that.animate({'background-position-x' : partWidth}, 600);

                that.find('select').remove();
                that.find('span').text('Was the accident your fault?');
                
                that.append('<select name="claim-fault"><option>Yes</option><option selected>No</option></select>');

                that.find('select').hide();
                that.find('a').remove();
                that.append('<a href="#" class="step-6 continue-button">Continue</a>');
                that.find('a').hide();

                console.log("Finished step 5...");

              }

              if($(event.target).hasClass('step-6')) {

                console.log("Loading step 6...");

                var prevName = that.find('select').attr('name');
                var prevVal = that.find('select').val();
                console.log('Writing to local storage: ' + prevName + '=' + prevVal);
                localStorage.setItem(prevName, prevVal);

                partWidth = (-3000 + (partWidth * 5)) + 'px';
                that.animate({'background-position-x' : partWidth}, 600);

                that.find('select').remove();
                that.find('span').text('Did you recieve medical attention?');
                
                that.append('<select name="claim-medical"><option>Yes</option><option>No</option></select>');

                that.find('select').hide();
                that.find('a').remove();
                that.append('<a href="#" class="step-7 continue-button">Continue</a>');
                that.find('a').hide();

                console.log("Finished step 6...");

              }

              if($(event.target).hasClass('step-7')) {

                console.log("Loading step 7...");

                var prevName = that.find('select').attr('name');
                var prevVal = that.find('select').val();
                console.log('Writing to local storage: ' + prevName + '=' + prevVal);
                localStorage.setItem(prevName, prevVal);

                partWidth = (-3000 + (partWidth * 6)) + 'px';
                that.animate({'background-position-x' : partWidth, 'background-position-y' : '240px', 'height' : '250px'}, 600);

                that.find('select').remove();
                that.find('span').text('Please review your information, click submit if everything looks right...');
                var html = '<div class="text">';
                html += 'Name: <b>' + localStorage.getItem('claim-name') + '</b><br>';
                html += 'Phone: <b>' + localStorage.getItem('claim-phone') + '</b><br>';
                html += 'Injury to your: <b>' + localStorage.getItem('claim-where') + '</b><br>';
                html += 'Injured in the last 3 years?: <b>' + localStorage.getItem('claim-injured') + '</b><br>';
                html += 'Accident your fault?: <b>' + localStorage.getItem('claim-fault') + '</b><br>';
                html += 'Recieved medical attention?: <b>' + localStorage.getItem('claim-medical') + '</b></div>';

                that.append(html);
                that.find('a').remove();
                that.append('<a href="#" class="step-8 continue-button">Submit Claim</a>');
                that.find('a').hide();

                console.log("Finished step 7...");

              }

              if($(event.target).hasClass('step-8')) {

                console.log("Loading step 8...");

                partWidth = (-3000 + (partWidth * 7)) + 'px';
                that.animate({'height' : '50px'}, 600);

                that.find('div').remove();
                that.find('span').text('Congratulations! Your claim has been submited!');

                that.find('a').remove();

                console.log("Finished step 8...");

                that.delay(3000).animate({'width' : '160px', 'background-color' : '#fa501e', 'cursor': 'pointer', 'font-size' : '14px'}, 600, function(){
                  that.css('font-weight', 'normal');
                  that.removeClass('open');
                  that.find('span').remove();
                  that.html('Start your claim');
                });

              }

              that.children('input[type=text], select, span, a, div').delay(500).fadeIn('fast', function(){

                that.find('input').focus();
                that.find('select').focus();

              });

            });

            return;

          } else if ( $(event.target).hasClass('aahbutton-3')) {

            if($(this).hasClass('open')) {
              console.log("The form is already open");
              
            } else {

              $(this).addClass('open');

              $(this).animate({color : '#1a99cd', width : '100%', height : '120px', backgroundColor : '#1a99cd'}, 1000, function(){
                $(this).html("");
                $(this).append("<span>What is your Name?</span>").css({fontSize : '20px', fontWeight : '900', cursor : 'default'});
                $(this).animate({color : '#FFFFFF'}, 1000, function(){

                  $(this).append('<input type="text" name="claim-name" class="name" autocomplete="off" placeholder="Please enter your name">');
                  $('.name').hide().delay(500).fadeIn('slow', function(){
                    $(this).focus();
                  });

                  $(this).append('<a href="#" class="step-2 continue-button">Continue</a>');
                  $('.continue-button').hide().delay(500).fadeIn('slow');

                });
              });

            }

          }

        });


        formSync('sync-name');
        formSync('sync-phone');
        formSync('sync-type');
        formSync('sync-yearsA', 'sync-yearsB');
        formSync('sync-faultA', 'sync-faultB');
        formSync('sync-medicalA', 'sync-medicalB');

        $('.googlemaps').on('click', function () {
          console.log('Ifrmae Clicked');
          $('.googlemaps iframe').css({"pointer-events" : "auto"});
          $(this).css("box-shadow", "0px 3px 5px rgba(0,0,0,0.4)");
        });


        $(window).on('scroll', function(){
          var ishovered = $('.googlemaps:hover').length;
          if(!ishovered) {
            $('.googlemaps iframe').css("pointer-events", "none");
            $('.googlemaps').css("box-shadow", "0px 0px 5px rgba(0,0,0,0)");
          }
        });

		
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
