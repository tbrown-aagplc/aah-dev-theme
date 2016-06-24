<script>console.log('-> content-page.php ->');</script>

<?php echo (get_edit_post_link()) ? '<a href="'.get_edit_post_link().'" target="_blank">Edit this Page</a>' : false; ?> 
<?php the_content(); ?>
<?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']); ?>
