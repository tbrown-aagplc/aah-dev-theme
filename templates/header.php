<header class="banner">
  <div class="container">
    <a class="brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
    <ul class="m-menu" >
    <li><a href="#">Home</a></li>
    <li>
        <a href="#" class="dropdown-toggle">Overview</a>
        <div class="m-menu-container" data-role="dropdown" data-no-close="true">
            <div class="grid no-margin">
                <div class="row cells5">
                    <div class="cell padding10">
                        <img src="images/me.jpg">
                    </div>
                    <div class="cell colspan2">
                        <h2 class="fg-white text-bold text-shadow">Metro UI CSS 3.0</h2>
                        <p class="padding20 no-padding-top no-padding-left no-padding-bottom fg-white">
                            Metro UI CSS a set of styles to create a site with an interface similar to Windows 8.
                        </p>
                        <p class="fg-white text-bold">
                            Sergey Pimenov
                        </p>
                    </div>
                    <div class="cell colspan2">
                        <ul class="unstyled-list">
                            <li><h3 class="text-shadow">Begin with Metro UI CSS</h3></li>
                            <li><a class="fg-white" href="#">Requirements</a></li>
                            <li><a class="fg-white" href="#">Doctype</a></li>
                            <li><a class="fg-white" href="#">JavaScript</a></li>
                            <li><a class="fg-white" href="#">Browsers support</a></li>
                            <li><a class="fg-white" href="#">License</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li>
        <a href="#" class="dropdown-toggle">Download</a>
        <div class="m-menu-container" data-role="dropdown" data-no-close="true">
            <ul class="inline-list">
                <li><a href="#">Windows</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">Skype</a></li>
                <li><a href="#">Internet Explorer</a></li>
                <li><a href="#">Visio</a></li>
            </ul>
        </div>
    </li>
    <li>
        <a href="#" class="dropdown-toggle">Devices</a>
        <div class="m-menu-container" data-role="dropdown">
            <ul class="inline-list">
                <li><a href="#">Surface</a></li>
                <li><a href="#">Xbox</a></li>
                <li><a href="#">PC & Tables</a></li>
                <li><a href="#">Phones</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
        </div>
    </li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Store</a></li>
</ul>
</header>
