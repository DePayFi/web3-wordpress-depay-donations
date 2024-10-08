( function (blocks, editor, components, i18n, element, data ) {

	const icon = props => React.createElement("svg", Object.assign({
	  xmlns: "http://www.w3.org/2000/svg",
	  width: 20,
	  height: 20,
	  style: {
	    enableBackground: "new 0 0 20 20"
	  },
	  xmlSpace: "preserve"
	}, props), React.createElement("path", {
	  fill: "#1E1E1E",
	  d: "M17.4 13.2h-1.1c-.5.6-1 1.1-1.6 1.5H17v1.7H3v-1.7h2.3c-.6-.4-1.1-.9-1.6-1.5H2.6c-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1h14.8c.6 0 1.1-.5 1.1-1.1v-2.5c0-.6-.5-1.1-1.1-1.1z"
	}), React.createElement("path", {
	  fill: "#1E1E1E",
	  d: "M10 1.9a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4z"
	}));

	const el = wp.element.createElement
	const registerBlockType = wp.blocks.registerBlockType
	const { Fragment } = wp.element
	const { serverSideRender: ServerSideRender } = wp
	let isInitialized = false

	registerBlockType( 'depay-donations/block', {
		title: 'DePay Donations',
		description: 'Embed the DePay Donations button.',
		supports: {
			align: ["left", "right", "center"],
			spacing: {
        margin: true,
        padding: true
    	}
		},
		attributes: {
	    align: {
	      type: "string",
	      default: "center"
	    }
	  },
		icon,
		keywords: [ "donations", "cryptocurrency", "web3", "DePay", "USDC" ],
		category: 'widgets',
		example: {},
		edit: function (props) {
			if(!DePay_donations_accepted_payments || DePay_donations_accepted_payments[0] == '' || !DePay_donations_receiving_wallet_address){
				return wp.element.createElement(
            'a',
            { href: "/wp-admin/admin.php?page=depay-donations", target: '_blank' },
            '!!! Please finish your donation configuration !!!'
        );
			}

			let accept = DePay_donations_accepted_payments.map((token)=>{
				return {
					blockchain: token.blockchain,
					token: token.address,
					receiver: DePay_donations_receiving_wallet_address
				}
			})

			let configuration = {
				accept,
				title: 'Donation',
				style: {
					colors: {
					  primary: DePay_donations_widget_color_primary,
					  text: DePay_donations_widget_color_text,
					  buttonText: DePay_donations_widget_color_buttons,
					  icons: DePay_donations_widget_color_icons
					},
					css: DePay_donations_widget_css
				},
			}
			
			let element = React.createElement('div', { style: { pointerEvents: 'none' } }, React.createElement(DePayButtons.DePayButton, {
	      label: DePay_donations_button_label,
	      widget: 'Payment',
	      css: DePay_donations_button_css,
	      configuration
	    }))
			return element
		},
		save: function (props) {
			return null
		}
	})

})(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
	window.wp.data
)
