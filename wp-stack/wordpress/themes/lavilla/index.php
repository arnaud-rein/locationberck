<?php
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>
<main style="padding:2rem;max-width:900px;margin:auto;">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article>
      <h1><?php the_title(); ?></h1>
      <div><?php the_content(); ?></div>
    </article>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>