<header class="banner">
    <div class="container-fluid">

        <?php get_template_part('templates/header', 'pre'); ?>

        <div class="row bg-dark">

            <div class="col-md-12">

                <div class="logo pull-left">
                    <a href="<?php echo get_home_url(); ?>"><img src="<?php echo get_template_directory_uri() . '/dist/images/logo-796x152.png'; ?>" width="180px" height="auto"></a>
                </div>

                <?php get_template_part('templates/main', 'menu'); ?>

                <?php get_template_part('templates/mobile', 'menu'); ?>

            </div>

        </div>
        
        <?php if(is_front_page()) { ?>
        <?php get_template_part('templates/home', 'slider'); ?>
        <?php } // is_home() ?>
    </div>
</header>