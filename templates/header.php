<div class="mask"></div>
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

        <?php if(!is_front_page() && (is_page() || is_single())) { ?>
            <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
            <div class="row">
                <div class="rich-page-header<?php echo ($image[0] ? ' darken' : '' ); ?>" style="background-image: url('<?php echo $image[0]; ?>')">
                    <h1><?php the_title(); ?></h1>
                </div>
            </div>
        <?php } ?>



    </div>
</header>