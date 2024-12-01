(function ( React, ReactDOM ) {

  const useEffect = window.React.useEffect
  const useState = window.React.useState

  const DePayDonationsAdminPage = function(props) {

    const [ saved, setSaved ] = useState(false)
    const [ settingsAreLoaded, setSettingsAreLoaded ] = useState(false)
    const [ isSaving, setIsSaving ] = useState()
    const [ isDisabled, setIsDisabled ] = useState()
    const [ buttonRadius, setButtonRadius ] = useState()
    const [ buttonBackground, setButtonBackground ] = useState()
    const [ buttonText, setButtonText ] = useState()
    const [ widgetPrimary, setWidgetPrimary ] = useState()
    const [ widgetButtonRadius, setWidgetButtonRadius ] = useState()
    const [ widgetButtonText, setWidgetButtonText ] = useState()
    const [ widgetIconColor, setWidgetIconColor ] = useState()
    const [ widgetText, setWidgetText ] = useState()
    const [ label, setLabel ] = useState()
    const [ buttonCss, setButtonCss ] = useState()
    const [ widgetCss, setWidgetCss ] = useState()
    const [ payments, setPayments ] = useState([])

    const saveSettings = ()=>{
      setIsSaving(true)
      const settings = new window.wp.api.models.Settings({
        DePay_donations_accepted_payments: payments,
        DePay_donations_button_css: buttonCss,
        DePay_donations_button_background_color: buttonBackground,
        DePay_donations_button_text_color: buttonText,
        DePay_donations_button_border_radius: buttonRadius,
        DePay_donations_button_label: label,
        DePay_donations_widget_color_primary: widgetPrimary,
        DePay_donations_widget_button_border_radius: widgetButtonRadius,
        DePay_donations_widget_color_button_text: widgetButtonText,
        DePay_donations_widget_color_icons: undefined,
        DePay_donations_widget_color_text: undefined,
        DePay_donations_widget_css: widgetCss
      })

      settings.save().then((response) => {
        setIsSaving(false)
        setSaved(true)
      })
    }

    const setReceivingWalletAddress = (receiver, index, blockchain)=>{
    
      let newPayments = [...payments]
      if(!receiver || receiver.length === 0) {
        newPayments[index].error = 'Please enter a receiver address!'
      } else {
        try {
          if(blockchain === 'solana') {
            receiver = new SolanaWeb3js.PublicKey(receiver).toString()
          } else {
            receiver = ethers.ethers.utils.getAddress(receiver)
          }
          newPayments[index].error = undefined
        } catch {
          newPayments[index].error = 'This address is invalid!'
        }
      }

      newPayments[index].receiver = receiver
      setPayments(newPayments)
    }

    const connectWallet = async(index, blockchain)=> {
      let { account, accounts, wallet }  = await window.DePayWidgets.Connect()
      setReceivingWalletAddress(account, index, blockchain)
    }

    const addToken = async ()=>{
      let token = await DePayWidgets.Select({ what: 'token' })
      if((payments instanceof Array) && payments.find((selectedToken)=>(selectedToken.blockchain == token.blockchain && selectedToken.address == token.address))) { return }
      token.error = 'Please enter a receiver address!'
      if(payments instanceof Array) {
        setPayments(payments.concat([token]))
      } else {
        setPayments([token])
      }
    }

    const removeToken = (index)=> {
      let newPayments = payments.slice()
      newPayments.splice(index, 1)
      setPayments(newPayments)
    }

    const updateButtonStyle = () =>{
      setButtonCss(`button {\n  border-radius: ${buttonRadius || 2}px;\n  color: ${buttonText || "#FFFFFF"};\n  background: ${buttonBackground || "#32373c"};\n}`)
    }

    const updateWidgetStyle = () =>{
      setWidgetCss(`.ButtonPrimary { color: ${widgetButtonText || "#FFFFFF"}; border-radius: ${widgetButtonRadius}px;}`)
    }

    useEffect(()=>{
      updateButtonStyle()
    },[buttonRadius, buttonText, buttonBackground])

    useEffect(()=>{
      updateWidgetStyle()
    },[widgetPrimary, widgetButtonText, widgetButtonRadius, widgetIconColor, widgetText])

    useEffect(()=>{
      wp.api.loadPromise.then(() => {
        const settings = new wp.api.models.Settings()
        settings.fetch().then((response)=> {
          if(response.DePay_donations_accepted_payments) {
            response.DePay_donations_accepted_payments.forEach((payment)=>{
              if(payment.receiver === undefined && response.DePay_donations_receiving_wallet_address) {
                payment.receiver = response.DePay_donations_receiving_wallet_address
              }
            })
            setPayments(response.DePay_donations_accepted_payments)
          }
          setLabel(response.DePay_donations_button_label || 'Support Us')
          setButtonCss(response.DePay_donations_button_css || "button {\n  border-radius: 2px;\n  color: #FFFFFF;\n  background: #32373c;\n}")
          setWidgetCss(response.DePay_donations_widget_css || ".ButtonPrimary { color: #FFFFFF; border-radius: 2px;}")
          setButtonBackground(response.DePay_donations_button_background_color || "#32373c")
          setButtonText(response.DePay_donations_button_text_color || "#FFFFFF")
          setButtonRadius(response.DePay_donations_button_border_radius || "2")
          setWidgetPrimary(response.DePay_donations_widget_color_primary || "#32373c")
          setWidgetButtonRadius(response.DePay_donations_widget_button_border_radius || "2")
          setWidgetButtonText(response.DePay_donations_widget_color_button_text || "#FFFFFF")
          setWidgetIconColor()
          setWidgetText()
          setSettingsAreLoaded(true)
        })
      }).catch(()=>{})
    }, [])

    useEffect(()=>{
      setIsDisabled( ! (payments && payments.length && payments.every((token)=>token.receiver && token.receiver.length > 0 && token.error === undefined)) )
    }, [ payments ])

    useEffect(()=>{
      setSaved(false)
    }, [ buttonRadius, buttonBackground, buttonText, widgetPrimary, widgetButtonRadius, widgetButtonText, widgetIconColor, widgetText, label, buttonCss, widgetCss, payments ])

    if(!settingsAreLoaded) { return null }

    return (
      <div className="wrap">
        
        <h1 className="wp-heading-inline">DePay Donations</h1>

        <p><strong>This plugin has been deprecated!</strong></p>
        <p>Please install DePay's new plugin: <a href="https://wordpress.org/plugins/depay-payments/">DePay for Wordpress</a></p>

      </div>
    )
  }

  document.addEventListener( "DOMContentLoaded", function(event) {
    ReactDOM.render(
        <DePayDonationsAdminPage />,
        document.getElementById( 'depay-donations-admin' )
    )
  })

})(
  window.React,
  window.ReactDOM,
);
