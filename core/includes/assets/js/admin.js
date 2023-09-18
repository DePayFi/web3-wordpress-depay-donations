!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="/Users/sebastian/Work/DePay/web3-wordpress-depay-donations/src/admin.js";!function(t,l){const i=window.React.useEffect,s=window.React.useState,a=function(l){const[a,r]=s(!1),[n,m]=s(!1),[_,o]=s(),[c,u]=s(),[d,N]=s(),[f,b]=s(),[h,g]=s(),[p,y]=s(),[E,v]=s(),[w,x]=s(),[P,D]=s(),[k,B]=s(),[C,F]=s(),[R,S]=s(),[T,A]=s(),[W,L]=s([]),I=(e,t,l)=>{let i=[...W];if(e&&0!==e.length)try{e="solana"===l?new SolanaWeb3js.PublicKey(e).toString():ethers.ethers.utils.getAddress(e),i[t].error=void 0}catch(e){i[t].error="This address is invalid!"}else i[t].error="Please enter a receiver address!";i[t].receiver=e,L(i)};return i((()=>{S(`button {\n  border-radius: ${d||2}px;\n  color: ${h||"#FFFFFF"};\n  background: ${f||"#32373c"};\n}`)}),[d,h,f]),i((()=>{A(`.ButtonPrimary { color: ${w||"#FFFFFF"}; border-radius: ${E}px;}`)}),[p,w,E,P,k]),i((()=>{wp.api.loadPromise.then((()=>{(new wp.api.models.Settings).fetch().then((e=>{e.DePay_donations_accepted_payments&&(e.DePay_donations_accepted_payments.forEach((t=>{void 0===t.receiver&&e.DePay_donations_receiving_wallet_address&&(t.receiver=e.DePay_donations_receiving_wallet_address)})),L(e.DePay_donations_accepted_payments)),F(e.DePay_donations_button_label||"Support Us"),S(e.DePay_donations_button_css||"button {\n  border-radius: 2px;\n  color: #FFFFFF;\n  background: #32373c;\n}"),A(e.DePay_donations_widget_css||".ButtonPrimary { color: #FFFFFF; border-radius: 2px;}"),b(e.DePay_donations_button_background_color||"#32373c"),g(e.DePay_donations_button_text_color||"#FFFFFF"),N(e.DePay_donations_button_border_radius||"2"),y(e.DePay_donations_widget_color_primary||"#32373c"),v(e.DePay_donations_widget_button_border_radius||"2"),x(e.DePay_donations_widget_color_button_text||"#FFFFFF"),D(),B(),m(!0)}))})).catch((()=>{}))}),[]),i((()=>{u(!(W&&W.length&&W.every((e=>e.receiver&&e.receiver.length>0&&void 0===e.error))))}),[W]),i((()=>{r(!1)}),[d,f,h,p,E,w,P,k,C,R,T,W]),n?t.createElement("div",{className:"wrap",__self:this,__source:{fileName:e,lineNumber:147}},t.createElement("h1",{className:"wp-heading-inline",__self:this,__source:{fileName:e,lineNumber:149}},"DePay Donations"),t.createElement("p",{__self:this,__source:{fileName:e,lineNumber:151}},"To view received donation payments, please open the ",t.createElement("a",{href:"https://app.depay.com/payments",target:"_blank",__self:this,__source:{fileName:e,lineNumber:151}},"DePay App"),"."),t.createElement("table",{className:"form-table",role:"presentation",__self:this,__source:{fileName:e,lineNumber:153}},t.createElement("tbody",{__self:this,__source:{fileName:e,lineNumber:154}},t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:155}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:156}},"Accepted Payments"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:159}},t.createElement("div",{style:{paddingBottom:"1rem"},__self:this,__source:{fileName:e,lineNumber:160}},"Select the tokens that you want to receive as payment:"),W&&W.map(((l,i)=>t.createElement("table",{key:`${i}-${l.blockchain}-${l.symbol}`,className:"wp-list-table widefat fixed striped table-view-list page",style:{maxWidth:"600px",marginBottom:"0.4rem"},__self:this,__source:{fileName:e,lineNumber:166}},t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:167}},t.createElement("td",{style:{padding:"1rem 1rem 0.4rem 1rem",display:"flex"},__self:this,__source:{fileName:e,lineNumber:168}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:169}},t.createElement("div",{style:{position:"relative",display:"block"},__self:this,__source:{fileName:e,lineNumber:170}},t.createElement("img",{src:l.logo,style:{background:"white",borderRadius:"99px",height:"3rem",width:"3rem"},__self:this,__source:{fileName:e,lineNumber:171}}),t.createElement("img",{src:Web3Blockchains[l.blockchain].logo,style:{position:"absolute",bottom:"2px",right:"0px",width:"20px",height:"20px",border:"1px solid white",borderRadius:"4px",backgroundColor:Web3Blockchains[l.blockchain].logoBackgroundColor},__self:this,__source:{fileName:e,lineNumber:172}}))),t.createElement("div",{style:{paddingLeft:"1rem",paddingBottom:"0.3rem",flex:1},__self:this,__source:{fileName:e,lineNumber:175}},t.createElement("div",{style:{display:"flex",justifyontent:"space-between",fontSize:"1rem"},__self:this,__source:{fileName:e,lineNumber:176}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:177}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:178}},l.symbol)," (",l.name,") on ",Web3Blockchains[l.blockchain].label),t.createElement("div",{className:"row-actions visible",style:{marginLeft:"auto"},__self:this,__source:{fileName:e,lineNumber:180}},t.createElement("span",{className:"delete",__self:this,__source:{fileName:e,lineNumber:181}},t.createElement("a",{href:"#",onClick:()=>(e=>{let t=W.slice();t.splice(e,1),L(t)})(i),__self:this,__source:{fileName:e,lineNumber:182}},"Remove")))),t.createElement("div",{style:{paddingTop:".5rem"},__self:this,__source:{fileName:e,lineNumber:186}},t.createElement("label",{style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:187}},t.createElement("span",{className:"",style:{opacity:.7,paddingBottom:"1px",display:"block"},__self:this,__source:{fileName:e,lineNumber:188}},"Receiver"),t.createElement("div",{className:"components-base-control",__self:this,__source:{fileName:e,lineNumber:189}},t.createElement("input",{required:"required",style:{width:"100%"},id:"depay-woocommerce-payment-receiver-address",type:"text",value:l.receiver,onChange:e=>I(e.target.value,i,l.blockchain),__self:this,__source:{fileName:e,lineNumber:190}})),l.error&&t.createElement("div",{className:"notice inline notice-warning notice-alt",style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:200}},l.error))),t.createElement("div",{className:"row-actions visible",__self:this,__source:{fileName:e,lineNumber:206}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:207}},t.createElement("button",{style:{marginTop:"0.5rem"},type:"button",className:"button button-secondary",onClick:()=>(async(e,t)=>{let{account:l,accounts:i,wallet:s}=await window.DePayWidgets.Connect();I(l,e,t)})(i,l.blockchain),__self:this,__source:{fileName:e,lineNumber:208}},"Connect Wallet"))))))))),t.createElement("div",{style:{paddingTop:"0.2rem"},__self:this,__source:{fileName:e,lineNumber:218}},t.createElement("button",{onClick:async()=>{let e=await DePayWidgets.Select({what:"token"});W instanceof Array&&W.find((t=>t.blockchain==e.blockchain&&t.address==e.address))||(e.error="Please enter a receiver address!",L(W instanceof Array?W.concat([e]):[e]))},style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-secondary",__self:this,__source:{fileName:e,lineNumber:219}},"Add Token")),t.createElement("div",{style:{paddingTop:"1.6rem",paddingBottom:"1.5rem"},__self:this,__source:{fileName:e,lineNumber:221}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:222}},"Each incoming payment will be converted on-the-fly into your selected tokens on the selected blockchains."),t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:225}},"Customers will be able to use any convertible token as means of payment."),t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:228}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:229}},"Payments are sent directly into your wallet."))))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:234}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:235}},"Button"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:238}},t.createElement("div",{style:{display:"inline-block"},__self:this,__source:{fileName:e,lineNumber:239}},t.createElement(DePayButtons.DePayButton,{css:R,label:C,widget:"Payment",configuration:{accept:W},__self:this,__source:{fileName:e,lineNumber:240}})),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:247}},t.createElement("label",{style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:248}},t.createElement("span",{className:"",style:{opacity:.7,paddingBottom:"0.8rem",display:"block"},__self:this,__source:{fileName:e,lineNumber:249}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:249}},"Label")),t.createElement("div",{className:"components-base-control",__self:this,__source:{fileName:e,lineNumber:250}},t.createElement("input",{required:"required",type:"text",value:C,onChange:e=>F(e.target.value),__self:this,__source:{fileName:e,lineNumber:251}})))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:260}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:261}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:261}},"Style")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:262}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:262}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:f,onChange:e=>{b(e.target.value)},__self:this,__source:{fileName:e,lineNumber:262}}),"Background")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:263}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:263}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:h,onChange:e=>{g(e.target.value)},__self:this,__source:{fileName:e,lineNumber:263}}),"Text")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:264}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:264}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"range",value:d,min:"0",max:"36",onChange:e=>{N(e.target.value)},__self:this,__source:{fileName:e,lineNumber:264}}),"Border"))),t.createElement("div",{style:{paddingTop:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:266}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:267}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:267}},"Usage"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:269}},t.createElement("p",{className:"description",style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:270}},"Search for the ",t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:270}},'"DePay Donations"')," block in the editor and drop the button into layouts, pages and posts.")),t.createElement("img",{style:{maxWidth:"600px",marginBottom:"2rem"},src:"/wp-content/plugins/depay-donations/core/includes/assets/img/button.gif",__self:this,__source:{fileName:e,lineNumber:272}}))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:275}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:276}},"Widget"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:279}},t.createElement("div",{className:"widget-example",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialog ReactDialogOpen",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialogRow",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialogCell",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialogStack active forward",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialogStackRow",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialogStackCell",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"ReactDialogAnimation",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"Dialog",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"DialogHeader",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"DialogHeaderTitle",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"PaddingTopS PaddingLeftM PaddingRightM",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"FontSizeL TextLeft",__self:this,__source:{fileName:e,lineNumber:280}},"Donation"))),t.createElement("div",{className:"DialogHeaderActionRight PaddingTopS PaddingLeftS PaddingRightS",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("button",{className:"ButtonCircular",title:"Close dialog",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("svg",{className:"CloseIcon Icon",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("line",{x1:"18",x2:"6",y1:"6",y2:"18",__self:this,__source:{fileName:e,lineNumber:280}}),t.createElement("line",{x1:"6",x2:"18",y1:"6",y2:"18",__self:this,__source:{fileName:e,lineNumber:280}}))))),t.createElement("div",{className:"DialogBody",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"PaddingLeftM PaddingRightM PaddingBottomXS",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"Card",title:"Change amount",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"CardBody",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"CardBodyWrapper",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"CardTitle",__self:this,__source:{fileName:e,lineNumber:280}},"Amount"),t.createElement("div",{className:"CardText",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"TokenAmountRow",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("span",{className:"TokenAmountCell",__self:this,__source:{fileName:e,lineNumber:280}},"$10.00"))))),t.createElement("div",{className:"CardAction",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("svg",{className:"ChevronRight Icon",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z","fill-rule":"evenodd","stroke-width":"1",__self:this,__source:{fileName:e,lineNumber:280}})))),t.createElement("div",{className:"Card",title:"Change payment",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"CardImage",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("img",{className:"js-widget-payment-example-image",src:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",__self:this,__source:{fileName:e,lineNumber:280}})),t.createElement("div",{className:"CardBody",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"CardBodyWrapper",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("h2",{className:"CardText",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"TokenAmountRow",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("span",{className:"TokenSymbolCell js-widget-example-symbol",__self:this,__source:{fileName:e,lineNumber:280}},"USDT"),t.createElement("span",{className:"TokenAmountCell js-widget-example-amount",__self:this,__source:{fileName:e,lineNumber:280}},"10"))))),t.createElement("div",{className:"CardAction",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("svg",{className:"ChevronRight Icon",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z","fill-rule":"evenodd","stroke-width":"1",__self:this,__source:{fileName:e,lineNumber:280}})))))),t.createElement("div",{className:"DialogFooter",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomM",__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("button",{className:"ButtonPrimary",style:{color:w,backgroundColor:p,borderRadius:`${E}px`},__self:this,__source:{fileName:e,lineNumber:280}},"Pay"))))))))))))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:282}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:282}},"Style")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:283}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:283}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:p,onChange:e=>{y(e.target.value)},__self:this,__source:{fileName:e,lineNumber:283}}),"Primary")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:284}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:284}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:w,onChange:e=>{x(e.target.value)},__self:this,__source:{fileName:e,lineNumber:284}}),"Button Text")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:285}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:285}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"range",value:E,min:"0",max:"36",onChange:e=>{v(e.target.value)},__self:this,__source:{fileName:e,lineNumber:285}}),"Button Border"))),t.createElement("div",{style:{paddingTop:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:287}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:288}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:288}},"Usage"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:290}},t.createElement("p",{className:"description",style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:291}},"Link any text to ",t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:291}},"#depay-donation-widget")," and it will open your donation widget upon click.")),t.createElement("img",{style:{maxWidth:"600px"},src:"/wp-content/plugins/depay-donations/core/includes/assets/img/widget.gif",__self:this,__source:{fileName:e,lineNumber:293}}))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:296}},t.createElement("th",{__self:this,__source:{fileName:e,lineNumber:297}}," "),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:298}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:299}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:300}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:301}},a&&t.createElement("button",{style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-secondary",onClick:()=>{},__self:this,__source:{fileName:e,lineNumber:303}},"✓ Settings Saved"),c&&t.createElement("div",{className:"notice inline notice-warning notice-alt",style:{marginBottom:0,maxWidth:"300px"},__self:this,__source:{fileName:e,lineNumber:311}},"Please fix all errors before saving!"),!a&&t.createElement("button",{style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-primary",onClick:()=>(o(!0),void new window.wp.api.models.Settings({DePay_donations_accepted_payments:W,DePay_donations_button_css:R,DePay_donations_button_background_color:f,DePay_donations_button_text_color:h,DePay_donations_button_border_radius:d,DePay_donations_button_label:C,DePay_donations_widget_color_primary:p,DePay_donations_widget_button_border_radius:E,DePay_donations_widget_color_button_text:w,DePay_donations_widget_color_icons:void 0,DePay_donations_widget_color_text:void 0,DePay_donations_widget_css:T}).save().then((e=>{o(!1),r(!0)}))),disabled:_||c,__self:this,__source:{fileName:e,lineNumber:316}},"Save Settings"))))))))):null};document.addEventListener("DOMContentLoaded",(function(i){l.render(t.createElement(a,{__self:this,__source:{fileName:e,lineNumber:337}}),document.getElementById("depay-donations-admin"))}))}(window.React,window.ReactDOM)}));
