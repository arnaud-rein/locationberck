<?php
if (!defined('ABSPATH')) {
    exit;
}

function lavilla_temp_parent_enqueue(): void
{
    wp_enqueue_style(
        'lavilla-temp-style',
        get_stylesheet_uri(),
        [],
        filemtime(get_template_directory() . '/style.css')
    );
}
add_action('wp_enqueue_scripts', 'lavilla_temp_parent_enqueue');