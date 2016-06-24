<?php
/**
 * Template Name: Double Sidebar
 */
?>

<script>
console.log('-> template-custom.php ->');
</script>

<?php while (have_posts()) : the_post(); ?>

	

	<div class="col-md-2 hidden-sm hidden-xs">
		<?php dynamic_sidebar('sidebar-left'); ?>
	</div>

	<div class="col-md-7">
		<?php get_template_part('templates/page', 'header'); ?>
		<?php get_template_part('templates/content', 'page'); ?>
	</div>

	<div class="col-md-3">
		<?php dynamic_sidebar('sidebar-primary'); ?>
	</div>
  
<?php endwhile; ?>