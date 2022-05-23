<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

class DePay_Donations_Link {

  public static function register() {

    wp_register_script(
      'depay-donations-frontend-script',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/frontend.js',
      [],
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/frontend.js',
      '1.0.0',
      true
    );

    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_widget_color_primary', get_option( 'DePay_donations_widget_color_primary' ));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_widget_color_buttons', get_option( 'DePay_donations_widget_color_buttons' ));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_widget_color_icons', get_option( 'DePay_donations_widget_color_icons' ));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_widget_color_text', get_option( 'DePay_donations_widget_color_text' ));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_widget_css', preg_replace('~[\r\n]+~', '', get_option( 'DePay_donations_widget_css' )));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_button_css', preg_replace('~[\r\n]+~', '', get_option( 'DePay_donations_button_css' )));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_button_label', get_option( 'DePay_donations_button_label' ));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_receiving_wallet_address', get_option( 'DePay_donations_receiving_wallet_address' ));
    wp_localize_script('depay-donations-frontend-script', 'DePay_donations_accepted_payments', get_option('DePay_donations_accepted_payments'));

    wp_register_script(
      'depay-donations-widgets',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js',
      array(),
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js'
    );
    wp_enqueue_script( 'depay-donations-widgets' );

    wp_enqueue_script('depay-donations-frontend-script');
  }
}
