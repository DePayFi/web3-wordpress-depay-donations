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
    ?>
    <div class="wrap">
      <h1 class="wp-heading-inline">DePay Donations</h1>
      <p>
        To view received donation payments, please open the <a href="https://app.depay.fi/payments" target="_blank">DePay App</a>.
      </p>
      <form action='options.php' method='post'>

          <?php
            settings_fields( 'DePay_donations' );
            do_settings_sections( 'DePay_donations' );
          ?>

          <?php
            if(
              empty(get_option('DePay_donations_receiving_wallet_address')) &&
              empty(get_option('DePay_donations_accepted_payments'))
            ) {
          ?>
            <input type='hidden' name='DePay_donations_button_css' value="&#10;button {&#10;  border-radius: 2px;&#10;  background: #32373c;&#10;}&#10;&#10;button:hover {&#10;  opacity: 0.9;&#10;}&#10;"/>
            <input type='hidden' name='DePay_donations_button_label' value="Support Us"/>
            <input type="hidden" name='DePay_donations_widget_color_primary'  value="#32373c"/>
            <input type="hidden" name='DePay_donations_widget_color_buttons' value="#ffffff"/>
            <input type="hidden" name='DePay_donations_widget_color_icons' value="#000000"/>
            <input type="hidden" name='DePay_donations_widget_color_text' value="#212529>"/>
            <input type='hidden' name='DePay_donations_widget_css' value="&#10;.ButtonPrimary {&#10;  border-radius: 2px;&#10;}&#10;&#10;.ButtonPrimary:hover {&#10;  opacity: 0.9;&#10;}&#10;"/>
          <?php
            }
          ?>

          <?php
            submit_button();
          ?>

      </form>
    </div>
    <?php
    
    if(
      !empty(get_option('DePay_donations_receiving_wallet_address')) &&
      !empty(get_option('DePay_donations_accepted_payments'))
    ) {
    ?>
      <script>
        window.getAccept = ()=>{
          let accept = []
          document.querySelectorAll('.DePay_donations_accepted_payment').forEach((element)=>{
            accept.push({
              blockchain: element.querySelector('[name*="blockchain"]').value,
              token: element.querySelector('[name*="address"]').value,
              receiver: document.getElementById('DePay_donations_receiving_wallet_address').value
            })
          })
          return accept
        }
        var widgetEditor = ace.edit("widgetEditor")
        widgetEditor.session.setOptions({ tabSize: 2, useSoftTabs: true })
        widgetEditor.session.setMode("ace/mode/css")
        let unmount
        window.initDonationWidget = async()=> {
          if(unmount) { unmount(); unmount = undefined }
          ({ unmount } = await DePayWidgets.Donation({
            container: document.getElementById('depayDonationWidgetDemo'),
            closable: false,
            style: {
              colors: {
                primary: document.getElementById('depayDonationWidgetStyleColorPrimary').value,
                buttonText: document.getElementById('depayDonationWidgetStyleColorButtonText').value,
                icons: document.getElementById('depayDonationWidgetStyleColorIcons').value,
                text: document.getElementById('depayDonationWidgetStyleColorText').value
              },
              css: widgetEditor.getValue()
            },
            accept: getAccept(),
            fee: { amount: '1%', receiver: '0x7b94266CA5cC36005b3043e1ffE5EBd624494731' }
          }))
        }
        widgetEditor.session.on('change', _debounce(()=>{
          let css = widgetEditor.getValue()
          document.getElementById('DePay_donations_widget_css').value = css
          initDonationWidget()
        }, 800));

        var buttonEditor = ace.edit("buttonEditor")
        buttonEditor.session.setOptions({ tabSize: 2, useSoftTabs: true })
        buttonEditor.session.setMode("ace/mode/css")
        buttonEditor.session.on('change', _debounce(function(delta) {
          let css = buttonEditor.getValue()
          document.getElementById('DePay_donations_button_css').value = css
          initDonationButton()
        }, 500));
        window.initDonationButton = ()=>{
          let button = document.getElementById('DePayButton')
          button.setAttribute('css', document.getElementById('DePay_donations_button_css').value)
          button.setAttribute('label', document.getElementById('DePay_donations_button_label').value)
          button.setAttribute('configuration', JSON.stringify({
            style: {
              colors: {
                primary: document.getElementById('depayDonationWidgetStyleColorPrimary').value,
                buttonText: document.getElementById('depayDonationWidgetStyleColorButtonText').value,
                icons: document.getElementById('depayDonationWidgetStyleColorIcons').value,
                text: document.getElementById('depayDonationWidgetStyleColorText').value
              },
              css: widgetEditor.getValue()
            },
            accept: getAccept(),
            fee: { amount: '1%', receiver: '0x7b94266CA5cC36005b3043e1ffE5EBd624494731' }
          }))
          button.removeAttribute('initialized')
          button.innerHTML = ''
          DePayButtons.init({document: document})
        }
        document.getElementById('DePay_donations_button_label').addEventListener('keydown', _debounce(initDonationButton, 300))
        document.getElementById('DePay_donations_receiving_wallet_address').addEventListener('keydown', _debounce(()=>{
          initDonationButton()
          initDonationWidget()
        }, 300))

        initDonationButton()
        initDonationWidget()
      </script>
    <?php
    }
  }

  public static function add_admin_settings() {

    add_settings_section(
      'DePay_donations_section',
      null,
      null,
      'DePay_donations'
    );

    // Wallet Address
  
    add_settings_field(
      'DePay_donations_receiving_wallet_address',
      'Receiving Wallet Address',
      array('DePay_Donations_Admin', 'render_wallet'),
      'DePay_donations',
      'DePay_donations_section',
      array( 'label_for' => 'DePay_donations_receiving_wallet_address' )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_receiving_wallet_address',
      array(
        'type' => 'string'
      )
    );

    // Accepted Payments
  
    add_settings_field(
      'DePay_donations_accepted_payments',
      'Accepted Payments',
      array('DePay_Donations_Admin', 'render_payments'),
      'DePay_donations',
      'DePay_donations_section',
      array( 'label_for' => 'DePay_donations_add_token' )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_accepted_payments',
      array('type' => 'array')
    );

    // Button

    add_settings_field(
      'DePay_donations_button',
      'Button',
      array('DePay_Donations_Admin', 'render_button'),
      'DePay_donations',
      'DePay_donations_section',
      array('class' => (empty(get_option('DePay_donations_receiving_wallet_address')) && empty(get_option('DePay_donations_accepted_payments'))) ? 'hiddenRow' : '')
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_css',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_button_label',
      array(
        'type' => 'string'
      )
    );

    // Widget

    add_settings_field(
      'DePay_donations_widget',
      'Widget',
      array('DePay_Donations_Admin', 'render_widget'),
      'DePay_donations',
      'DePay_donations_section',
      array('class' => (empty(get_option('DePay_donations_receiving_wallet_address')) && empty(get_option('DePay_donations_accepted_payments'))) ? 'hiddenRow' : '')
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_primary',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_buttons',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_icons',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_color_text',
      array(
        'type' => 'string'
      )
    );

    register_setting(
      'DePay_donations',
      'DePay_donations_widget_css',
      array(
        'type' => 'string'
      )
    );
  }

  public static function add_scripts_and_styles() {
    wp_enqueue_style( 'DEPAYDONATIONS-styles-admin', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/css/admin.css', array(), DEPAYDONATIONS_VERSION, 'all' );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-debounce', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/debounce.js', array(), DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-ace', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/ace.js', array(), DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-widgets', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/widgets.bundle.js', array(), DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-react-shadow-dom', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/react-shadow-dom.js', ['wp-element'], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-buttons', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/buttons.js', ['wp-element'], DEPAYDONATIONS_VERSION, false );
    wp_enqueue_script( 'DEPAYDONATIONS-scripts-admin', DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/js/admin.js', array(), DEPAYDONATIONS_VERSION, false );
  }

  public static function render_wallet() {
    $value = get_option( 'DePay_donations_receiving_wallet_address' );
    ?>
      <input type='text' class='regular-text ltr' id='DePay_donations_receiving_wallet_address' name='DePay_donations_receiving_wallet_address' value='<?php echo esc_html($value); ?>'/>
      <div style="padding-top: 0.5rem;">
        <button type="button" class="button button-secondary" aria-label="Click to connect your wallet" onclick="DePayWidgets.Connect().then(({ account })=>{ document.getElementById('DePay_donations_receiving_wallet_address').value = account })">
          Connect Wallet
        </button>
      </div>
      <p class="description">This address is used to receive donations.<br/><strong>Please double check that it is set to your wallet address.</strong></p>
    <?php
  }

  public static function render_payments() {
    $accepted = get_option('DePay_donations_accepted_payments');
    $accepted = empty($accepted)? [] : $accepted;
    ?><div id="DePay_donations_accepted_payments"><?php

    foreach ($accepted as $index => $token) {
      $token = (object) $token
      ?>
        <div class="DePay_donations_accepted_payment DePay_donations_accepted_payment_<?php echo esc_html($token->blockchain) ?>_<?php echo esc_html($token->address) ?>">
          <table class="wp-list-table widefat fixed striped table-view-list page" style ="margin-bottom: 0.4rem;">
            <tr style="display: none;"><td><td></tr>
            <tr>
              <td style="padding: 1rem 1rem 0.4rem 1rem;">
                <img src="<?php echo esc_html($token->logo) ?>" style="width: 3rem; height: 3rem;"/>
                <div style="padding-left: 1rem;">
                  <div><strong><?php echo esc_html($token->symbol) ?></strong> (<?php echo esc_html($token->name) ?>)</div>
                  <div>on <?php echo esc_html(strtoupper($token->blockchain)) ?></div>
                  <div class="row-actions visible">
                    <span class="delete">
                      <a href="#" onclick="removeAcceptedPayment('DePay_donations_accepted_payment_<?php echo esc_html($token->blockchain) ?>_<?php echo esc_html($token->address) ?>')">Remove</a>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <input type='hidden' name='DePay_donations_accepted_payments[<?php echo esc_html($index); ?>][address]' value='<?php echo esc_html($token->address); ?>'/>
          <input type='hidden' name='DePay_donations_accepted_payments[<?php echo esc_html($index); ?>][blockchain]' value='<?php echo esc_html($token->blockchain); ?>'/>
          <input type='hidden' name='DePay_donations_accepted_payments[<?php echo esc_html($index); ?>][decimals]' value='<?php echo esc_html($token->decimals); ?>'/>
          <input type='hidden' name='DePay_donations_accepted_payments[<?php echo esc_html($index); ?>][logo]' value='<?php echo esc_html($token->logo); ?>'/>
          <input type='hidden' name='DePay_donations_accepted_payments[<?php echo esc_html($index); ?>][name]' value='<?php echo esc_html($token->name); ?>'/>
          <input type='hidden' name='DePay_donations_accepted_payments[<?php echo esc_html($index); ?>][symbol]' value='<?php echo esc_html($token->symbol); ?>'/>
        </div>
      <?php
    }

    ?></div><!-- DePay_donations_accepted_payments --><?php

    ?>
      <div style="padding-top: 0.5rem;">
        <button type="button" id="DePay_donations_add_token" class="button button-secondary" aria-label="Click to add token" onclick="DePayWidgets.Select({ what: 'token' }).then(addAcceptedPayment)">
          Add Token
        </button>
      </div>
      <p class="description">Each incoming payment will be converted on-the-fly into your selected tokens on the selected blockchain.</p>
      <p class="description">Payment senders will be able to use any routable token as means of payment.</p>
      <p class="description">Tokens will be converted on-the-fly using decentralized finance to ensure you will always get the tokens you've configured.</p>
      <p class="description"><strong>Payments are peer-to-peer and will always be sent directly to your wallet.</strong></p>
    <?php
  }

  public static function render_button() {
    $buttonCSS = get_option( 'DePay_donations_button_css' );
    $buttonLabel = get_option( 'DePay_donations_button_label' );
    ?>
      <div>
        <div><p class="description" ><strong>CSS</strong></p></div>
        <div><p class="description">You can add CSS attributes like <strong>background-color</strong>, <strong>border-radius</strong> etc.</p></div>
        <div id="buttonEditor" class="editor" style="margin-top:0.8rem"><?php echo esc_html($buttonCSS) ?></div>
        <input type='hidden' id='DePay_donations_button_css' name='DePay_donations_button_css' value='<?php echo esc_html($buttonCSS); ?>'/>
      </div>
      <div style="margin-top: 0.8rem">
        <label>
          <div><p class="description" ><strong>Label</strong></p></div>
          <input type='text' id='DePay_donations_button_label' name='DePay_donations_button_label' value='<?php echo esc_html($buttonLabel); ?>'/>
        </label>
      </div>
      <p class="description" style="margin-bottom: 0.8rem; padding-top: 0.8rem;"><strong>Demo</strong></p>

    <?php
      if(
        !empty(get_option('DePay_donations_receiving_wallet_address')) &&
        !empty(get_option('DePay_donations_accepted_payments'))
      ) {
    ?>
      <div style="display: inline-block;">
        <div
          class="DePayButton"
          id="DePayButton"
          label="Donate"
          widget="Donation"
        ></div>
      </div>
    <?php
      }
    ?>

      <div style="padding-top: 0.8rem;">
        <p class="description"><strong>Usage</strong></p>
      </div>
      <div style="margin-bottom: 0.8rem;">
        <p class="description" style="margin-bottom: 0.8rem">Search for the <strong>"DePay Donations"</strong> block in the editor and drop the button into layouts, pages and posts.</p>
      </div>
      <img style="max-width: 100%" src="<?php echo DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/img/button.gif' ?>"/>
    <?php
  }

  public static function render_widget() {
    $widgetColorPrimary = get_option( 'DePay_donations_widget_color_primary' );
    $widgetColorButtons = get_option( 'DePay_donations_widget_color_buttons' );
    $widgetColorIcons = get_option( 'DePay_donations_widget_color_icons' );
    $widgetColorText = get_option( 'DePay_donations_widget_color_text' );
    $widgetCSS = get_option( 'DePay_donations_widget_css' );
    ?>
      <div style="margin-bottom: 1.6rem">
        <p class="description" style="margin-bottom: 0.8rem"><strong>Style</strong></p>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_donations_widget_color_primary' id="depayDonationWidgetStyleColorPrimary" onchange="initDonationWidget()" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorPrimary) ?>"/>Primary</label></div>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_donations_widget_color_buttons' id="depayDonationWidgetStyleColorButtonText" onchange="initDonationWidget()" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorButtons) ?>"/>Button Text</label></div>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_donations_widget_color_icons' id="depayDonationWidgetStyleColorIcons" onchange="initDonationWidget()" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorIcons) ?>"/>Icon Color</label></div>
        <div style="margin-bottom: 0.8rem"><label style="display: flex; align-items: center;"><input name='DePay_donations_widget_color_text' id="depayDonationWidgetStyleColorText" onchange="initDonationWidget()" style="margin-right: 0.6rem" type="color" value="<?php echo esc_html($widgetColorText) ?>"/>Text</label></div>
      </div>
      <div>
        <p class="description"><strong>CSS</strong></p>
        <div><p class="description">You can style classes like <strong>.Dialog</strong>, <strong>.ButtonPrimary</strong>: <a href="https://github.com/DePayFi/widgets/tree/master/src/styles" target="_blank">See all available classes</a></p></div>
        <div id="widgetEditor" class="editor" style="margin-top: 0.8rem"><?php echo esc_html($widgetCSS) ?></div>
        <input type='hidden' id='DePay_donations_widget_css' name='DePay_donations_widget_css' value='<?php echo esc_html($widgetCSS); ?>'/>
      </div>
      <p class="description" style="margin-bottom: 0.8rem; padding-top: 0.8rem;"><strong>Demo</strong></p>
      <div id="depayDonationWidgetDemo"></div>
      
      <div style="padding-top: 0.8rem;">
        <p class="description"><strong>Usage</strong></p>
      </div>
      <div style="margin-bottom: 0.8rem;">
        <p class="description" style="margin-bottom: 0.8rem">Link any text to <strong>#depay-donation-widget</strong> and it will open your donation widget upon click.</p>
      </div>
      <img style="max-width: 100%" src="<?php echo DEPAYDONATIONS_PLUGIN_URL . 'core/includes/assets/img/widget.gif' ?>"/>
    <?php
  }

}
