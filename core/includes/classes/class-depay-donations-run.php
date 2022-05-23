<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

class DePay_Donations_Run{

	function __construct(){
		$this->add_hooks();
	}

	private function add_hooks(){

		wp_register_style('depay-donations-frontend-style', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/css/frontend.css', '1.0.0');
    wp_enqueue_style('depay-donations-frontend-style');

    wp_register_script(
      'depay-donations-widgets',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js',
      array(),
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js'
    );
    wp_enqueue_script( 'depay-donations-widgets' );

    wp_register_script(
      'depay-donations-react-shadow-dom',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js',
      ['wp-element'],
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js'
    );
    wp_enqueue_script( 'depay-donations-react-shadow-dom' );

    wp_register_script(
      'depay-donations-buttons',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/buttons.js',
      ['wp-element'],
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/buttons.js'
    );
    wp_enqueue_script( 'depay-donations-buttons' );

    wp_register_script(
      'depay-donations-init-buttons',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/init-buttons.js',
      [],
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/init-buttons.js',
      true
    );
    wp_enqueue_script( 'depay-donations-init-buttons' );
	
		add_action( 'admin_enqueue_scripts', array( 'DePay_Donations_Admin', 'add_scripts_and_styles' ));
		add_action( 'admin_menu', array( 'DePay_Donations_Admin', 'add_admin_menu' ));
		add_action( 'admin_init', array( 'DePay_Donations_Admin', 'add_admin_settings' ));
		add_action( 'init', array( 'DePay_Donations_Block', 'register' ));
		add_action( 'init', array( 'DePay_Donations_Link', 'register' ));
		
	}
}
