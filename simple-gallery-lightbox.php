<?php
/*
Plugin Name: Simple Gallery Lightbox
Description: Adds a simple lightbox to default Gutenberg gallery
Version: 1.0.1
Requires at least: 5.0
Author: Gamevase
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: simple-gallery-lightbox
*/

add_action('wp_enqueue_scripts', 'gamevase_simple_gallery_lightbox_enqueue_scripts');

function gamevase_simple_gallery_lightbox_enqueue_scripts() {
	
	wp_enqueue_script('gamevase_simple_gallery_lightbox_js', plugin_dir_url(__FILE__) . 'js/main.js', array('jquery'), '1.0');
	wp_enqueue_style('gamevase_simple_gallery_lightbox_css', plugin_dir_url(__FILE__) . 'css/main.css');
	
}