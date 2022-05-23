<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
if ( ! class_exists( 'DePay_Donations' ) ) :

	/**
	 * Main DePay_Donations Class.
	 *
	 * @package		DEPAYDONATIONS
	 * @subpackage	Classes/DePay_Donations
	 * @since		1.0.0
	 * @author		DePay
	 */
	final class DePay_Donations {

		/**
		 * The real instance
		 *
		 * @access	private
		 * @since	1.0.0
		 * @var		object|DePay_Donations
		 */
		private static $instance;

		/**
		 * DEPAYDONATIONS helpers object.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @var		object|DePay_Donations_Helpers
		 */
		public $helpers;

		/**
		 * DEPAYDONATIONS settings object.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @var		object|DePay_Donations_Settings
		 */
		public $settings;

		/**
		 * Throw error on object clone.
		 *
		 * Cloning instances of the class is forbidden.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @return	void
		 */
		public function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'You are not allowed to clone this class.', 'depay-donations' ), '1.0.0' );
		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @return	void
		 */
		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, __( 'You are not allowed to unserialize this class.', 'depay-donations' ), '1.0.0' );
		}

		/**
		 * Main DePay_Donations Instance.
		 *
		 * Insures that only one instance of DePay_Donations exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @access		public
		 * @since		1.0.0
		 * @static
		 * @return		object|DePay_Donations	The one true DePay_Donations
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof DePay_Donations ) ) {
				self::$instance					= new DePay_Donations;
				self::$instance->base_hooks();
				self::$instance->includes();
				self::$instance->helpers		= new DePay_Donations_Helpers();
				self::$instance->settings		= new DePay_Donations_Settings();

				//Fire the plugin logic
				new DePay_Donations_Run();

				/**
				 * Fire a custom action to allow dependencies
				 * after the successful plugin setup
				 */
				do_action( 'DEPAYDONATIONS/plugin_loaded' );
			}

			return self::$instance;
		}

		/**
		 * Include required files.
		 *
		 * @access  private
		 * @since   1.0.0
		 * @return  void
		 */
		private function includes() {
			require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/includes/classes/class-depay-donations-helpers.php';
			require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/includes/classes/class-depay-donations-settings.php';
			require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/includes/classes/class-depay-donations-admin.php';
			require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/includes/classes/class-depay-donations-block.php';
			require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/includes/classes/class-depay-donations-link.php';
			require_once DEPAYDONATIONS_PLUGIN_DIR . 'core/includes/classes/class-depay-donations-run.php';
		}

		/**
		 * Add base hooks for the core functionality
		 *
		 * @access  private
		 * @since   1.0.0
		 * @return  void
		 */
		private function base_hooks() {
			add_action( 'plugins_loaded', array( self::$instance, 'load_textdomain' ) );
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access  public
		 * @since   1.0.0
		 * @return  void
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'depay-donations', FALSE, dirname( plugin_basename( DEPAYDONATIONS_PLUGIN_FILE ) ) . '/languages/' );
		}

	}

endif; // End if class_exists check.
