<div class="main-menu">

	<ul>

		<li class="visible-xs">
			<a href="#" id="mobile-menu-button" onclick="event.preventDefault();"><i class="fa fa-bars" aria-hidden="true"></i>&nbsp;&nbsp;Open Menu</a>
		</li>

		<li class="hidden-xs">
			<a href="<?php echo get_home_url(); ?>/what-we-do/">What We Do</a>
			<div class="child">
				<ul class="simple-menu">
					<li><a href="">Accidents at Work</a><span class="bar-seperator">|</span></li>
					<li><a href="">Slips, Trips &amp; Falls</a><span class="bar-seperator">|</span></li>
					<li><a href="<?php echo get_home_url(); ?>/road-traffic-accidents/">Road Traffic Accidents</a><span class="bar-seperator">|</span></li>
					<li><a href="">Other Accidents</a></li>
				</ul>
			</div>
		</li>

		<li class="hidden-xs">
			<a href="<?php echo get_home_url(); ?>/how-it-works">How It Works</a>
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
			<a href="<?php echo get_home_url(); ?>/contact-us/">Contact Us</a>
			<div class="child">

				<div class="container extended">

					<div class="row">

						<div class="col-md-4">
							<strong>Address</strong><br><br>
							ROYALTY HOUSE<br>
							10 King Street<br>
							Watford<br>
							WD18 0BW<br>
							United Kingdom
						</div>
						<div class="col-md-4">
							<strong>Email:</strong><br>office@accidentadvicehelpline.co.uk<br><br>
							<strong>Telephone:</strong><br>01234 567 890<br><br>
							<strong>Fax:</strong><br>02312 321 212<br><br>
						</div>
						<div class="col-md-4">
							<div class="googlemaps"><?php echo do_shortcode('[su_gmap address="Accident Advice Helpline, 10 Kind Street, Watford, WD18 0BW"]'); ?></div>
						</div>

					</div>

				</div>

			</div>
		</li>
		
		<li class="calc-button">
			<a href="#" onclick="event.preventDefault();"><i class="fa fa-angle-down" aria-hidden="true"></i> Claim Calculator</a>
			<div class="child calculator">

				<div class="container-fluid text-center">

					<i class="fa fa-times visible-xs pull-right close-form" aria-hidden="true"></i>

					<span class="title">Find out in 30 seconds how much you could claim...</span><br><br>

					<form>

						<fieldset class="form-group">
							<!-- <label for="name">Name</label> -->
							<input id="name" class="form-control sync-name" type="text" placeholder="Name" required>
						</fieldset>

						<fieldset class="form-group">
							<!-- <label for="email">Phone Number</label> -->
							<input id="phone" class="form-control sync-phone" type="text" placeholder="Phone Number" required>
						</fieldset>

						<div class="clearfix radio-group">
							<span class="radio-title pull-left">Injured in the last 3 years?</span>
							<div class="btn-group pull-right" data-toggle="buttons">
								<label class="btn btn-primary active" for="yes-injured">
									<input id="yes-injured" type="radio" value="1" name="injured" class="sync-yearsA">Yes
								</label>
								<label class="btn btn-primary" for="no-injured">
									<input id="no-injured" type="radio" value="0" name="injured" class="sync-yearsA">No
								</label>
							</div>
						</div>

						<div class="clearfix radio-group">
							<span class="radio-title pull-left">Was the accident your fault?</span>
							<div class="btn-group pull-right" data-toggle="buttons">
								<label class="btn btn-primary" for="yes-fault">
									<input id="yes-fault" type="radio" value="1" name="fault" class="sync-faultA">Yes
								</label>
								<label class="btn btn-primary active" for="no-fault">
									<input id="no-fault" type="radio" value="0" name="fault" class="sync-faultA">No
								</label>
							</div>
						</div>

						<div class="clearfix radio-group">
							<span class="radio-title pull-left">Did you recieve medical attention?</span>
							<div class="btn-group pull-right" data-toggle="buttons">
								<label class="btn btn-primary active" for="yes-medical">
									<input id="yes-medical" type="radio" value="1" name="medical" class="sync-medicalA">Yes
								</label>
								<label class="btn btn-primary" for="no-medical">
									<input id="no-medical" type="radio" value="0" name="medical" class="sync-medicalA">No
									</label>
							</div>
						</div>

						<div class="form-group">
							<select class="form-control sync-type" id="sel1">
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