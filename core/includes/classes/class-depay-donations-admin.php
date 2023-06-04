<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class DePay_Donations_Admin
 *
 * Admin related functions
 *
 * @package   DEPAYDONATIONS
 * @subpackage  Classes/DePay_Donations_Admin
 * @author    DePay
 * @since   1.0.0
 */
class DePay_Donations_Admin{

  public static function add_admin_menu() {
    add_menu_page(
      'Donations',
      'Donations',
      'manage_options',
      'depay-donations',
      array( 'DePay_Donations_Admin', 'admin_page_contents' ),
      'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNy40LDEzLjJoLTEuMWMtMC41LDAuNi0xLDEuMS0xLjYsMS41SDE3djEuN0gzdi0xLjdoMi4zYy0wLjYtMC40LTEuMS0wLjktMS42LTEuNUgyLjYKCWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xdjIuNWMwLDAuNiwwLjUsMS4xLDEuMSwxLjFoMTQuOGMwLjYsMCwxLjEtMC41LDEuMS0xLjF2LTIuNUMxOC41LDEzLjcsMTgsMTMuMiwxNy40LDEzLjJ6Ii8+CjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTAsMS45Yy0zLjcsMC02LjcsMy02LjcsNi43czMsNi43LDYuNyw2LjdzNi43LTMsNi43LTYuN1MxMy43LDEuOSwxMCwxLjl6Ii8+Cjwvc3ZnPgo=',
      26
    );
  }

  public static function admin_page_contents() {
    echo '<div id="depay-donations-admin"></div>';
  }

  public static function register_rest_settings() {

    register_setting(
      'DePay_donations',
      'DePay_donations_receiving_wallet_address',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_accepted_payments',
      array(
        'type' => 'array',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_css',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_background_color',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_text_color',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_border_radius',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_label',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_primary',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_button_border_radius',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_button_text',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_icons',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_text',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_css',
      array(
        'type' => 'string',
        'show_in_rest' => true,
      )
    );
  }

  public static function add_scripts_and_styles() {
    wp_enqueue_style( 'DEPAYDONATIONS-styles-admin', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/css/admin.css', array(), DEPAYDONATIONS_VERSION, 'all' );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-debounce', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/debounce.js', array(), DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-widgets', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js', array(), DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-react-shadow-dom', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js', ['wp-element'], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-blockchains', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/blockchains.js', ['wp-element'], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-buttons', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/buttons.js', ['wp-element'], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-ethers', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/ethers-5.7.umd.min.js', [], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-solanaWeb3js', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/solana-web3.js', [], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-admin', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/admin.js', array('react', 'react-dom', 'wp-element', 'wp-components', 'wp-api', 'DEPAYDONATIONS-scripts-blockchains', 'DEPAYDONATIONS-scripts-ethers', 'DEPAYDONATIONS-scripts-solanaWeb3js'), DEPAYDONATIONS_VERSION, false );
  }
}
