document.addEventListener('click', e => {
  const { target } = e;
  if (target.matches('[href="#depay-donation-widget"]')) {
    e.preventDefault();
    e.stopImmediatePropagation();

    let accept = DePay_donations_accepted_payments.map((token)=>{
      return {
        blockchain: token.blockchain,
        token: token.address,
        receiver: DePay_donations_receiving_wallet_address
      }
    })

    let configuration = {
      accept,
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

    DePayWidgets.Donation(configuration);

    return false;
  }
});
