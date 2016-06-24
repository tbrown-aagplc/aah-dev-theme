<?php
/**
 * Template Name: Single Sidebar (Right)
 */
?>

<script>
console.log('-> template-custom.php ->');
</script>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>