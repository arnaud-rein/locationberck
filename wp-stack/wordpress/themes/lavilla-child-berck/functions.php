<?php
/**
 * Theme functions.
 *
 * @package lavilla-child-berck
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once get_stylesheet_directory() . '/inc/site-data.php';

function berck_enqueue_assets(): void
{
    $parent_handle = 'lavilla-style';
    $parent_path = get_template_directory() . '/style.css';

    wp_enqueue_style(
        $parent_handle,
        get_template_directory_uri() . '/style.css',
        [],
        file_exists($parent_path) ? (string) filemtime($parent_path) : null
    );

    wp_enqueue_style(
        'lavilla-child-berck-style',
        get_stylesheet_directory_uri() . '/assets/css/berck.css',
        [$parent_handle],
        (string) filemtime(get_stylesheet_directory() . '/assets/css/berck.css')
    );

    wp_enqueue_script(
        'lavilla-child-berck-script',
        get_stylesheet_directory_uri() . '/assets/js/berck.js',
        [],
        (string) filemtime(get_stylesheet_directory() . '/assets/js/berck.js'),
        true
    );
}
add_action('wp_enqueue_scripts', 'berck_enqueue_assets', 20);

function berck_register_menu(): void
{
    register_nav_menus([
        'berck_primary' => __('Berck Primary Menu', 'lavilla-child-berck'),
    ]);
}
add_action('after_setup_theme', 'berck_register_menu');

function berck_theme_customizer(WP_Customize_Manager $wp_customize): void
{
    $wp_customize->add_section('berck_contact_section', [
        'title'    => __('Berck Contact', 'lavilla-child-berck'),
        'priority' => 35,
    ]);

    $wp_customize->add_setting('berck_owner_name', [
        'default'           => 'Benjamin PIERRE',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_setting('berck_owner_phone', [
        'default'           => '06 29 89 11 14',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_setting('berck_owner_email', [
        'default'           => 'locationberckodyssee@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ]);

    $wp_customize->add_control('berck_owner_name', [
        'label'   => __('Nom proprietaire', 'lavilla-child-berck'),
        'section' => 'berck_contact_section',
        'type'    => 'text',
    ]);

    $wp_customize->add_control('berck_owner_phone', [
        'label'   => __('Telephone', 'lavilla-child-berck'),
        'section' => 'berck_contact_section',
        'type'    => 'text',
    ]);

    $wp_customize->add_control('berck_owner_email', [
        'label'   => __('Email', 'lavilla-child-berck'),
        'section' => 'berck_contact_section',
        'type'    => 'email',
    ]);
}
add_action('customize_register', 'berck_theme_customizer');

function berck_get_owner_contact(): array
{
    return [
        'name'  => get_theme_mod('berck_owner_name', 'Benjamin PIERRE'),
        'phone' => get_theme_mod('berck_owner_phone', '06 29 89 11 14'),
        'email' => get_theme_mod('berck_owner_email', 'locationberckodyssee@gmail.com'),
    ];
}