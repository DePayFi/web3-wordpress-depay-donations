window.addAcceptedPayment = (token)=>{
  let container = document.getElementById('DePay_donations_accepted_payments')
  let index = container.querySelectorAll('.DePay_donations_accepted_payment').length
  let className = `DePay_donations_accepted_payment_${token.blockchain}_${token.address}`
  if(container.querySelector(`.${className}`)) { return }
  var addition = `
    <div class="DePay_donations_accepted_payment ${className}">
      <table class="wp-list-table widefat fixed striped table-view-list page" style ="margin-bottom: 0.4rem;">
        <tr style="display: none;"><td><td></tr>
        <tr>
          <td style="padding: 1rem 1rem 0.4rem 1rem;">
            <img src="${token.logo}" style="width: 3rem; height: 3rem;"/>
            <div style="padding-left: 1rem;">
              <div><strong>${token.symbol}</strong> (${token.name})</div>
              <div>on ${token.blockchain.toUpperCase()}</div>
              <div class="row-actions visible">
                <span class="delete">
                  <a href="#" onclick="removeAcceptedPayment('DePay_donations_accepted_payment_${token.blockchain}_${token.address}')">Remove</a>
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <input type='hidden' name='DePay_donations_accepted_payments[${index}][address]' value='${token.address}'/>
      <input type='hidden' name='DePay_donations_accepted_payments[${index}][blockchain]' value='${token.blockchain}'/>
      <input type='hidden' name='DePay_donations_accepted_payments[${index}][decimals]' value='${token.decimals}'/>
      <input type='hidden' name='DePay_donations_accepted_payments[${index}][logo]' value='${token.logo}'/>
      <input type='hidden' name='DePay_donations_accepted_payments[${index}][name]' value='${token.name}'/>
      <input type='hidden' name='DePay_donations_accepted_payments[${index}][symbol]' value='${token.symbol}'/>
    </div>
  `;

  container.innerHTML = container.innerHTML + addition

  initDonationButton()
  initDonationWidget()
}

window.removeAcceptedPayment = (className)=>{
  let removedElement = document.querySelector(`.${className}`)
  let children = document.querySelector(`.${className}`).parentNode.children
  let removedElementIndex = Array.from(children).indexOf(removedElement)
  for (let i = 0; i < children.length; i++) {
    let child = children[i]
    let relevantElements = child.querySelectorAll('[name]')
    let elementName = relevantElements[0].getAttribute('name')
    let elementIndex = parseInt(elementName.match(/.*?\[(.*?)\]\[.*?\]/)[1], 10)
    for (let j = 0; j < relevantElements.length; j++) {
      let element = relevantElements[j]
      if(elementIndex > removedElementIndex) {
        elementName = element.getAttribute('name')
        element.setAttribute('name', elementName.replace(/\[\d?\]/, `[${elementIndex-1}]`))
      }
    }
  }
  removedElement.remove()

  initDonationButton()
  initDonationWidget()
}
