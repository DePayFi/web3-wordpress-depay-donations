<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin
 * and defines a function that starts the plugin.
 * 
 * @link          https://depay.fi
 * @since         1.0.0
 * @package       DEPAYDONATIONS
 * 
 * @wordpress-plugin
 * Plugin Name:   DePay Donations
 * Plugin URI:    https://depay.fi/plugins/wordpress
 * Description:   Web3 donations directly into your own wallet. Block-enabled Wordpress plugin for P2P cryptocurrency donations on multiple blockchains, with on-the-fly token conversion.
 * Version:       1.3.0
 * License:       GPL-2.0+
 * License URI:   http://www.gnu.org/licenses/gpl-2.0.txt
 * Author:        DePay
 * Author URI:    https://depay.fi
 * Text Domain:   depay-donations
 * Domain Path:   /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
// Plugin name
define( 'DEPAYDONATIONS_NAME',      'DePay Donations' );

// Plugin version
define( 'DEPAYDONATIONS_VERSION',   '1.0.0' );

// Plugin Root File
define( 'DEPAYDONATIONS_PLUGIN_FILE', __FILE__ );

// Plugin base
define( 'DEPAYDONATIONS_PLUGIN_BASE', plugin_basename( DEPAYDONATIONS_PLUGIN_FILE ) );

// Plugin Folder Path
define( 'DEPAYDONATIONS_PLUGIN_DIR',  plugin_dir_path( DEPAYDONATIONS_PLUGIN_FILE ) );

// Plugin Folder URL
define( 'DEPAYDONATIONS_PLUGIN_URL',  plugin_dir_url( DEPAYDONATIONS_PLUGIN_FILE ) );

/**
 * Load the main class for the core functionality
 */
require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/class-depay-donations.php';

/**
 * The main function to load the only instance
 * of our master class.
 *
 * @author  DePay
 * @since   1.0.0
 * @return  object|DePay_Donations
 */
function DEPAYDONATIONS() {
  return DePay_Donations::instance();
}

DEPAYDONATIONS();
