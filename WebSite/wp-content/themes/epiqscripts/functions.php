<?php
/**
 * Include Theme Functions
 *
 * @package EpiqScripts Theme
 * @subpackage Functions
 * @version 1.0.0
 */

/**
 * Setup Child Theme
 */
function epiqscripts_setup_child_theme()
{
    // Add Child Theme Text Domain.
    load_child_theme_textdomain('generatepress', get_stylesheet_directory() . '/languages');

    add_theme_support('editor-styles');
    add_editor_style('gutenberg/block-editor.css');
}

add_action('after_setup_theme', 'epiqscripts_setup_child_theme', 99);


/**
 * Get all necessary theme files
 */
$child_theme_dir = get_stylesheet_directory();

/**
 * Enqueue Child Theme Assets
 */
add_action('wp_enqueue_scripts', 'epiqscripts_child_assets', 99);

function epiqscripts_child_assets()
{
    $version = wp_get_theme()->get('Version');

    if (!is_admin()) {
        wp_enqueue_style('epiqscripts_child_css', trailingslashit(get_stylesheet_directory_uri()) . 'style.css');
        wp_enqueue_style('dashicons');
    }
}


/* Apply style for Gutenburge editor */
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('epiqscripts_gblock_css', get_stylesheet_directory_uri() . "/assets/css/block-editor.css", false, '1.0', 'all');
});

