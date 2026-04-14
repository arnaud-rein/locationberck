<?php
/**
 * Fallback template.
 *
 * @package lavilla-child-berck
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>
<main class="berck-site">
    <section class="berck-section">
        <div class="container">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article>
                        <h1><?php the_title(); ?></h1>
                        <div><?php the_content(); ?></div>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <p><?php esc_html_e('Aucun contenu pour le moment.', 'lavilla-child-berck'); ?></p>
            <?php endif; ?>
        </div>
    </section>
</main>
<?php
get_footer();