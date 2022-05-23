<?php
/**
 * DePay Donations
 *
 * @package       DEPAYDONATIONS
 * @author        DePay
 * @version       1.0.5
 *
 * @wordpress-plugin
 * Plugin Name:   DePay Donations
 * Plugin URI:    https://depay.fi/products/donations/wordpress
 * Description:   Accept Web3 Donations with DePay. A WordPress donation plugin allowing you to receive cryptocurrency donations directly into your wallet. Supports all major blockchains, cryptocurrencies, tokens and wallets.
 * Version:       1.0.5
 * Author:        DePay
 * Author URI:    https://depay.fi
 * Text Domain:   depay-donations
 * Domain Path:   /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
// Plugin name
define( 'DEPAYDONATIONS_NAME',			'DePay Donations' );

// Plugin version
define( 'DEPAYDONATIONS_VERSION',		'1.0.5' );

// Plugin Root File
define( 'DEPAYDONATIONS_PLUGIN_FILE',	__FILE__ );

// Plugin base
define( 'DEPAYDONATIONS_PLUGIN_BASE',	plugin_basename( DEPAYDONATIONS_PLUGIN_FILE ) );

// Plugin Folder Path
define( 'DEPAYDONATIONS_PLUGIN_DIR',	plugin_dir_path( DEPAYDONATIONS_PLUGIN_FILE ) );

// Plugin Folder URL
define( 'DEPAYDONATIONS_PLUGIN_URL',	plugin_dir_url( DEPAYDONATIONS_PLUGIN_FILE ) );

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
