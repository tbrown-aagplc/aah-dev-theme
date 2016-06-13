<header class="banner">
  <div class="container-fluid">

    <?php get_template_part('templates/header', 'pre'); ?>

    <div class="row bg-dark">
    	
      <div class="col-md-12">

        <div class="logo pull-left">
          <img src="<?php echo get_template_directory_uri() . '/dist/images/logo-796x152.png'; ?>" width="180px" height="auto">
        </div>
        
        <div class="main-menu">
          <ul>
            <li class="visible-xs">
              <a href="#" id="mobile-menu-button" onclick="event.preventDefault();"><i class="fa fa-bars" aria-hidden="true"></i>&nbsp;&nbsp;Open Menu</a>
            </li>
            <li class="hidden-xs">
              <a href="#" onclick="event.preventDefault();">What We Do</a>
              <div class="child">
                <ul class="simple-menu">
                  <li><a href="">Accidents at Work</a><span class="bar-seperator">|</span></li>
                  <li><a href="">Slips, Trips & Falls</a><span class="bar-seperator">|</span></li>
                  <li><a href="">Road Traffic Accidents</a><span class="bar-seperator">|</span></li>
                  <li><a href="">Other Accidents</a></li>
                </ul>
              </div>
            </li>
            <li class="hidden-xs">
              <a href="#" onclick="event.preventDefault();">How It Works</a>
              <div class="child">
                <ul class="simple-menu">
                  <li><a href="">Step 1</a><span class="bar-seperator">|</span></li>
                  <li><a href="">Step 2</a><span class="bar-seperator">|</span></li>
                  <li><a href="">Step 3</a><span class="bar-seperator">|</span></li>
                  <li><a href="">Step 4</a></li>
                </ul>
              </div>
            </li>
            <li class="hidden-xs">
              <a href="#" onclick="event.preventDefault();">Contact Us</a>
              <div class="child">
                
                <div class="container extended">
                  
                  <div class="row">
                    
                    <div class="col-md-4">
                      <strong>Address</strong><br><br>
                      ROYALTY HOUSE<br>
                      123 Street Rd<br>
                      Watford<br>
                      AB12 3YZ<br>
                      United Kingdom
                    </div>
                    <div class="col-md-4">
                      <strong>Email:</strong><br>office@accidentadvicehelpline.co.uk<br><br>
                      <strong>Telephone:</strong><br>01234 567 890<br><br>
                      <strong>Fax:</strong><br>02312 321 212
                    </div>
                    <div class="col-md-4">
                      <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:250px;width:100%;'><div id='gmap_canvas' style='height:250px;width:100%;'></div><div><small><a href="http://embedgooglemaps.com">                 embed google maps             </a></small></div><div><small><a href="https://privacypolicygenerator.info">privacy policy example</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(51.653703,-0.3945099999999684),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(51.653703,-0.3945099999999684)});infowindow = new google.maps.InfoWindow({content:'<strong>Accident Advice Helpline</strong><br>Royalty House, 10 King Street Watford, Hertfordshire WD18 0BW<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
                    </div>

                  </div>

                </div>

              </div>
            </li>
            <li class="calc-button">
              <a href="#" onclick="event.preventDefault();"><i class="fa fa-angle-down" aria-hidden="true"></i> Claim Calculater</a>
              <div class="child calculator">

                <div class="container-fluid text-center">

                  <span class="title">Find out in 30 seconds how much you could claim...</span><br><br>
                
                  <form>
                    
                    <fieldset class="form-group">
                      <!-- <label for="name">Name</label> -->
                      <input id="name" class="form-control" type="text" placeholder="Name" required>
                    </fieldset>
                    
                    <fieldset class="form-group">
                      <!-- <label for="email">Phone Number</label> -->
                      <input id="phone" class="form-control" type="text" placeholder="Phone Number" required>
                    </fieldset>
                    
                    <div class="clearfix radio-group">
                      <span class="radio-title pull-left">Injured in the last 3 years?</span>
                      <div class="btn-group pull-right" data-toggle="buttons">
                        <label class="btn btn-primary active" for="yes-injured"><input id="yes-injured" type="radio" value="1" name="injured">Yes</label>
                        <label class="btn btn-primary" for="no-injured"><input id="no-injured" type="radio" value="0" name="injured">No</label>
                      </div>
                    </div>
                    
                    <div class="clearfix radio-group">
                      <span class="radio-title pull-left">Was the accident your fault?</span>
                      <div class="btn-group pull-right" data-toggle="buttons">
                        <label class="btn btn-primary" for="yes-fault"><input id="yes-fault" type="radio" value="1" name="fault">Yes</label>
                        <label class="btn btn-primary active" for="no-fault"><input id="no-fault" type="radio" value="0" name="fault">No</label>
                      </div>
                    </div>

                    <div class="clearfix radio-group">
                      <span class="radio-title pull-left">Did you recieve medical attention?</span>
                      <div class="btn-group pull-right" data-toggle="buttons">
                        <label class="btn btn-primary active" for="yes-medical"><input id="yes-medical" type="radio" value="1" name="medical">Yes</label>
                        <label class="btn btn-primary" for="no-medical"><input id="no-medical" type="radio" value="0" name="medical">No</label>
                      </div>
                    </div>

                    <div class="form-group">
                      <select class="form-control" id="sel1">
                        <option>Where were you injured? (select one)</option>
                        <option>Head</option>
                        <option>Neck</option>
                        <option>Shoulder</option>
                        <option>Back</option>
                        <option>Arm</option>
                        <option>Elbow</option>
                        <option>Wrist</option>
                        <option>Hand</option>
                        <option>Pelvis/Hip</option>
                        <option>Knee</option>
                        <option>Leg</option>
                        <option>Hand</option>
                      </select>
                    </div>

                    <button type="submit" class="btn btn-success btn-block btn-lg" style="border: 1px solid #348f34">Find out now</button>
                  </form>

                </div>

              </div>
            </li>
          </ul>
        </div>

        <div class="mobile-menu visible-xs">
          <ul>
            <li>
              <a href="#" onclick="event.preventDefault();">&nbsp;What We Do</a>
              <div class="child">
                <ul class="simple-menu">
                  <li><a href="">Accidents at Work</a></li>
                  <li><a href="">Slips, Trips & Falls</a></li>
                  <li><a href="">Road Traffic Accidents</a></li>
                  <li><a href="">Other Accidents</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" onclick="event.preventDefault();">&nbsp;How It Works</a>
              <div class="child">
                <ul class="simple-menu">
                  <li><a href="">Step 1</a></li>
                  <li><a href="">Step 2</a></li>
                  <li><a href="">Step 3</a></li>
                  <li><a href="">Step 4</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" onclick="event.preventDefault();">&nbsp;Contact Us</a>
              <div class="child">
                <ul class="simple-menu">
                  <li>
                      <strong>Address</strong><br>
                      ROYALTY HOUSE<br>
                      123 Street Rd<br>
                      Watford<br>
                      AB12 3YZ<br>
                      United Kingdom<br><br>

                      <strong>Email:</strong><br>office@accidentadvicehelpline.co.uk<br><br>
                      <strong>Telephone:</strong><br>01234 567 890<br><br>
                      <strong>Fax:</strong><br>02312 321 212
                    </li>
                  </ul>
                </div>

              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>

    <div class="row feature-image">


    <div id="slider">
        <img src="<?= get_template_directory_uri() . '/dist/images/header-photo.jpg'; ?>" alt="Minimum required attributes">
        <img src="<?= get_template_directory_uri() . '/dist/images/header-photo2.jpeg'; ?>" alt="Minimum required attributes">
        <img src="<?= get_template_directory_uri() . '/dist/images/header-photo.jpg'; ?>" alt="Minimum required attributes">
        <img src="<?= get_template_directory_uri() . '/dist/images/header-photo2.jpeg'; ?>" alt="Minimum required attributes">
    </div>
    
    <script>
    jQuery(document).ready(function(){
      var slider = new IdealImageSlider.Slider({
          selector: '#slider',
          height: 600, // Required but can be set by CSS
          interval: 6000,
          disableNav: false,
          effect: 'fade',
          transitionDuration: 1000
      });
    slider.start();
    });
    </script>     
          
      
    </div>

  </div>
</ul>
</header>
