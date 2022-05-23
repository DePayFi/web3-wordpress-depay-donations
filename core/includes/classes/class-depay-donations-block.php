<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

class DePay_Donations_Block {

  public static function register() {
    add_action( 'enqueue_block_editor_assets', array( 'DePay_Donations_Block', 'enqueue_block' ));
    register_block_type( 'depay-donations/block', 
      array(
        'editor_script' => 'depay-donations-editor-block',
        'render_callback' => array( 'DePay_Donations_Block', 'render_block' )
      )
    );
  }

  public static function enqueue_block() {

    wp_register_script(
      'depay-donations-editor-block',
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/block.js',
      array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-editor' ),
      DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/block.js'
    );

    wp_localize_script('depay-donations-editor-block', 'DePay_donations_widget_color_primary', get_option( 'DePay_donations_widget_color_primary' ));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_widget_color_buttons', get_option( 'DePay_donations_widget_color_buttons' ));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_widget_color_icons', get_option( 'DePay_donations_widget_color_icons' ));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_widget_color_text', get_option( 'DePay_donations_widget_color_text' ));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_widget_css', preg_replace('~[\r\n]+~', '', get_option( 'DePay_donations_widget_css' )));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_button_css', preg_replace('~[\r\n]+~', '', get_option( 'DePay_donations_button_css' )));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_button_label', get_option( 'DePay_donations_button_label' ));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_receiving_wallet_address', get_option( 'DePay_donations_receiving_wallet_address' ));
    wp_localize_script('depay-donations-editor-block', 'DePay_donations_accepted_payments', get_option('DePay_donations_accepted_payments'));

    wp_enqueue_script( 'depay-donations-script' );

  }

  public static function render_block(array $attributes) {
    $wrapper_attributes = get_block_wrapper_attributes();
    $additional_classes = array();
    $additional_styles = array();
    if(
      array_key_exists('style', $attributes) &&
      array_key_exists('spacing', $attributes['style']) &&
      array_key_exists('padding', $attributes['style']['spacing'])
    ) {
      foreach ($attributes['style']['spacing']['padding'] as $key => $value) {
        $additional_styles[] = 'padding-' . $key . ': ' . $value . '!important;';
      }
    }
    if(
      array_key_exists('style', $attributes) &&
      array_key_exists('spacing', $attributes['style']) &&
      array_key_exists('margin', $attributes['style']['spacing'])
    ) {
      foreach ($attributes['style']['spacing']['margin'] as $key => $value) {
        $additional_styles[] = 'margin-' . $key . ': ' . $value . ' !important;';
      }
    }
    foreach ($attributes as $key => $value) {
      if(is_array($value)) { continue; }
      $class = $key . '_' . $value;
      $additional_classes[] = $class;
    }
    $wrapper_attributes = preg_replace(
      '/class="/', 
      sprintf(
        'class="%1$s ',
        implode(' ', $additional_classes),
      ),
      $wrapper_attributes
    );

    $wrapper_attributes = preg_replace(
      '/class="/', 
      sprintf(
        'style="%1$s" class="',
        implode(' ', $additional_styles),
      ),
      $wrapper_attributes
    );

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

    $widgetColorPrimary = get_option( 'DePay_donations_widget_color_primary' );
    $widgetColorButtons = get_option( 'DePay_donations_widget_color_buttons' );
    $widgetColorIcons = get_option( 'DePay_donations_widget_color_icons' );
    $widgetColorText = get_option( 'DePay_donations_widget_color_text' );
    $widgetCSS = preg_replace('~[\r\n]+~', '', get_option( 'DePay_donations_widget_css' ));
    $buttonCSS = preg_replace('~[\r\n]+~', '', get_option( 'DePay_donations_button_css' ));
    $buttonLabel = get_option( 'DePay_donations_button_label' );
    $receiver = get_option('DePay_donations_receiving_wallet_address');
    $accept = [];

    if(empty(get_option('DePay_donations_accepted_payments'))) { 
      $html = '<a href="/wp-admin/admin.php?page=depay-donations" target="_blank">!!! Please finish your donation configuration !!!</a>';

      return sprintf(
        '<div %1$s>%2$s</div>',
        $wrapper_attributes,
        $html
      );
    }

    foreach (get_option('DePay_donations_accepted_payments') as $accepted) {
      $accepted = (object) $accepted;
      array_push($accept, (object)[
        'blockchain' => $accepted->blockchain,
        'token' => $accepted->address,
        'receiver' => $receiver
      ]);
    }
    $accept = json_encode($accept);
    $html = '<div class="DePayButton" label="'.esc_html($buttonLabel).'" widget="Donation" configuration=\'{ "style": { "colors": { "primary": "'.esc_html($widgetColorPrimary).'", "buttonText": "'.esc_html($widgetColorButtons).'", "icons": "'.esc_html($widgetColorIcons).'", "text": "'.esc_html($widgetColorText).'" }, "css": "'.esc_html($widgetCSS).'" }, "accept": '.str_replace('&quot;', '"', esc_html($accept)).', "fee": { "amount": "1%", "receiver": "0x7b94266CA5cC36005b3043e1ffE5EBd624494731" } }\' css="'.esc_html($buttonCSS).'"></div><script>if(typeof DePayButtons != "undefined") { DePayButtons.init({document: document}); }</script>';

    return sprintf(
      '<div %1$s>%2$s</div>',
      $wrapper_attributes,
      $html
    );
  }
}
