!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="/Users/sebastian/Work/DePay/web3-wordpress-depay-donations/src/admin.js";!function(t,l){const i=window.React.useEffect,a=window.React.useState,s=function(l){const[s,r]=a(!1),[n,m]=a(!1),[_,o]=a(),[c,u]=a(),[d,N]=a(),[f,b]=a(),[h,g]=a(),[p,y]=a(),[E,v]=a(),[w,x]=a(),[P,D]=a(),[k,B]=a(),[C,F]=a(),[R,T]=a(),[S,A]=a(),[L,W]=a([]),[I,M]=a([]),j=(e,t,l)=>{let i=[...I];if(e&&0!==e.length)try{e="solana"===l?new SolanaWeb3js.PublicKey(e).toString():ethers.ethers.utils.getAddress(e),i[t]=void 0}catch(e){i[t]="This address is invalid!"}else i[t]="Please enter a receiver address!";M(i);let a=[...L];a[t].receiver=e,W(a)};return i((()=>{T(`button {\n  border-radius: ${d||2}px;\n  color: ${h||"#FFFFFF"};\n  background: ${f||"#32373c"};\n}`)}),[d,h,f]),i((()=>{A(`.ButtonPrimary { color: ${w||"#FFFFFF"}; border-radius: ${E}px;}`)}),[p,w,E,P,k]),i((()=>{wp.api.loadPromise.then((()=>{(new wp.api.models.Settings).fetch().then((e=>{e.DePay_donations_accepted_payments&&(e.DePay_donations_accepted_payments.forEach((t=>{void 0===t.receiver&&e.DePay_donations_receiving_wallet_address&&(t.receiver=e.DePay_donations_receiving_wallet_address)})),W(e.DePay_donations_accepted_payments)),F(e.DePay_donations_button_label||"Support Us"),T(e.DePay_donations_button_css||"button {\n  border-radius: 2px;\n  color: #FFFFFF;\n  background: #32373c;\n}"),A(e.DePay_donations_widget_css||".ButtonPrimary { color: #FFFFFF; border-radius: 2px;}"),b(e.DePay_donations_button_background_color||"#32373c"),g(e.DePay_donations_button_text_color||"#FFFFFF"),N(e.DePay_donations_button_border_radius||"2"),y(e.DePay_donations_widget_color_primary||"#32373c"),v(e.DePay_donations_widget_button_border_radius||"2"),x(e.DePay_donations_button_text_color||"#FFFFFF"),D(),B(),m(!0)}))})).catch((()=>{}))}),[]),i((()=>{u(!(L&&L.length&&L.every((e=>e.receiver&&e.receiver.length>0))&&0===I.filter(Boolean).length))}),[L,I]),i((()=>{r(!1)}),[d,f,h,p,E,w,P,k,C,R,S,L]),n?t.createElement("div",{className:"wrap",__self:this,__source:{fileName:e,lineNumber:152}},t.createElement("h1",{className:"wp-heading-inline",__self:this,__source:{fileName:e,lineNumber:154}},"DePay Donations"),t.createElement("p",{__self:this,__source:{fileName:e,lineNumber:156}},"To view received donation payments, please open the ",t.createElement("a",{href:"https://app.depay.com/payments",target:"_blank",__self:this,__source:{fileName:e,lineNumber:156}},"DePay App"),"."),t.createElement("table",{className:"form-table",role:"presentation",__self:this,__source:{fileName:e,lineNumber:158}},t.createElement("tbody",{__self:this,__source:{fileName:e,lineNumber:159}},t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:160}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:161}},"Accepted Payments"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:164}},t.createElement("div",{style:{paddingBottom:"1rem"},__self:this,__source:{fileName:e,lineNumber:165}},"Select the tokens that you want to receive as payment:"),L&&L.map(((l,i)=>t.createElement("table",{key:i,className:"wp-list-table widefat fixed striped table-view-list page",style:{maxWidth:"600px",marginBottom:"0.4rem"},__self:this,__source:{fileName:e,lineNumber:171}},t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:172}},t.createElement("td",{style:{padding:"1rem 1rem 0.4rem 1rem",display:"flex"},__self:this,__source:{fileName:e,lineNumber:173}},t.createElement("img",{src:l.logo,style:{background:"white",borderRadius:"99px",height:"3rem",width:"3rem"},__self:this,__source:{fileName:e,lineNumber:174}}),t.createElement("div",{style:{paddingLeft:"1rem",paddingBottom:"0.3rem",flex:1},__self:this,__source:{fileName:e,lineNumber:175}},t.createElement("div",{style:{display:"flex",justifyontent:"space-between"},__self:this,__source:{fileName:e,lineNumber:176}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:177}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:178}},l.symbol)," (",l.name,") on ",Web3Blockchains[l.blockchain].label,t.createElement("img",{src:Web3Blockchains[l.blockchain].logo,style:{position:"relative",top:"3px",left:"5px",width:"18px",height:"18px",borderRadius:"99px",background:"white"},__self:this,__source:{fileName:e,lineNumber:179}})),t.createElement("div",{className:"row-actions visible",style:{marginLeft:"auto"},__self:this,__source:{fileName:e,lineNumber:181}},t.createElement("span",{className:"delete",__self:this,__source:{fileName:e,lineNumber:182}},t.createElement("a",{href:"#",onClick:()=>(e=>{let t=L.slice();t.splice(e,1),W(t)})(i),__self:this,__source:{fileName:e,lineNumber:183}},"Remove")))),t.createElement("div",{style:{paddingTop:".5rem"},__self:this,__source:{fileName:e,lineNumber:187}},t.createElement("label",{style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:188}},t.createElement("span",{className:"",style:{opacity:.7,paddingBottom:"1px",display:"block"},__self:this,__source:{fileName:e,lineNumber:189}},"Receiver"),t.createElement("div",{className:"components-base-control",__self:this,__source:{fileName:e,lineNumber:190}},t.createElement("input",{required:"required",style:{width:"100%"},id:"depay-woocommerce-payment-receiver-address",type:"text",value:l.receiver,onChange:e=>j(e.target.value,i,l.blockchain),__self:this,__source:{fileName:e,lineNumber:191}})),I[i]&&t.createElement("div",{className:"notice inline notice-warning notice-alt",style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:201}},I[i]))),t.createElement("div",{className:"row-actions visible",__self:this,__source:{fileName:e,lineNumber:207}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:208}},t.createElement("button",{style:{marginTop:"0.5rem"},type:"button",className:"button button-secondary",onClick:()=>(async(e,t)=>{let{account:l,accounts:i,wallet:a}=await window.DePayWidgets.Connect();j(l,e,t)})(i,l.blockchain),__self:this,__source:{fileName:e,lineNumber:209}},"Connect Wallet"))))))))),t.createElement("div",{style:{paddingTop:"0.2rem"},__self:this,__source:{fileName:e,lineNumber:219}},t.createElement("button",{onClick:async()=>{let e=await DePayWidgets.Select({what:"token"});if(L instanceof Array&&L.find((t=>t.blockchain==e.blockchain&&t.address==e.address)))return;let t=[...I];t[L.length]="Please enter a receiver address!",M(t),W(L instanceof Array?L.concat([e]):[e])},style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-secondary",__self:this,__source:{fileName:e,lineNumber:220}},"Add Token")),t.createElement("div",{style:{paddingTop:"1.6rem",paddingBottom:"1.5rem"},__self:this,__source:{fileName:e,lineNumber:222}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:223}},"Each incoming payment will be converted on-the-fly into your selected tokens on the selected blockchains."),t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:226}},"Customers will be able to use any convertible token as means of payment."),t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:229}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:230}},"Payments are sent directly into your wallet."))))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:235}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:236}},"Button"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:239}},t.createElement("div",{style:{display:"inline-block"},__self:this,__source:{fileName:e,lineNumber:240}},t.createElement(DePayButtons.DePayButton,{css:R,label:C,widget:"Payment",configuration:{accept:L},__self:this,__source:{fileName:e,lineNumber:241}})),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:248}},t.createElement("label",{style:{marginBottom:0},__self:this,__source:{fileName:e,lineNumber:249}},t.createElement("span",{className:"",style:{opacity:.7,paddingBottom:"0.8rem",display:"block"},__self:this,__source:{fileName:e,lineNumber:250}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:250}},"Label")),t.createElement("div",{className:"components-base-control",__self:this,__source:{fileName:e,lineNumber:251}},t.createElement("input",{required:"required",type:"text",value:C,onChange:e=>F(e.target.value),__self:this,__source:{fileName:e,lineNumber:252}})))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:261}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:262}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:262}},"Style")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:263}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:263}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:f,onChange:e=>{b(e.target.value)},__self:this,__source:{fileName:e,lineNumber:263}}),"Background")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:264}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:264}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:h,onChange:e=>{g(e.target.value)},__self:this,__source:{fileName:e,lineNumber:264}}),"Text")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:265}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:265}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"range",value:d,min:"0",max:"36",onChange:e=>{N(e.target.value)},__self:this,__source:{fileName:e,lineNumber:265}}),"Border"))),t.createElement("div",{style:{paddingTop:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:267}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:268}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:268}},"Usage"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:270}},t.createElement("p",{className:"description",style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:271}},"Search for the ",t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:271}},'"DePay Donations"')," block in the editor and drop the button into layouts, pages and posts.")),t.createElement("img",{style:{maxWidth:"600px",marginBottom:"2rem"},src:"/wp-content/plugins/depay-donations/core/includes/assets/img/button.gif",__self:this,__source:{fileName:e,lineNumber:273}}))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:276}},t.createElement("th",{scope:"row",__self:this,__source:{fileName:e,lineNumber:277}},"Widget"),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:280}},t.createElement("div",{className:"widget-example",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialog ReactDialogOpen",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialogRow",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialogCell",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialogStack active forward",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialogStackRow",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialogStackCell",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"ReactDialogAnimation",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"Dialog",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"DialogHeader",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"DialogHeaderTitle",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"PaddingTopS PaddingLeftM PaddingRightM",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"FontSizeL TextLeft",__self:this,__source:{fileName:e,lineNumber:281}},"Donation"))),t.createElement("div",{className:"DialogHeaderActionRight PaddingTopS PaddingLeftS PaddingRightS",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("button",{className:"ButtonCircular",title:"Close dialog",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("svg",{className:"CloseIcon Icon",height:"24","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("line",{x1:"18",x2:"6",y1:"6",y2:"18",__self:this,__source:{fileName:e,lineNumber:281}}),t.createElement("line",{x1:"6",x2:"18",y1:"6",y2:"18",__self:this,__source:{fileName:e,lineNumber:281}}))))),t.createElement("div",{className:"DialogBody",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"PaddingLeftM PaddingRightM PaddingBottomXS",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"Card",title:"Change amount",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"CardBody",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"CardBodyWrapper",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"CardTitle",__self:this,__source:{fileName:e,lineNumber:281}},"Amount"),t.createElement("div",{className:"CardText",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"TokenAmountRow",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("span",{className:"TokenAmountCell",__self:this,__source:{fileName:e,lineNumber:281}},"$10.00"))))),t.createElement("div",{className:"CardAction",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("svg",{className:"ChevronRight Icon",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z","fill-rule":"evenodd","stroke-width":"1",__self:this,__source:{fileName:e,lineNumber:281}})))),t.createElement("div",{className:"Card",title:"Change payment",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"CardImage",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("img",{className:"js-widget-payment-example-image",src:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",__self:this,__source:{fileName:e,lineNumber:281}})),t.createElement("div",{className:"CardBody",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"CardBodyWrapper",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("h2",{className:"CardText",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"TokenAmountRow",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("span",{className:"TokenSymbolCell js-widget-example-symbol",__self:this,__source:{fileName:e,lineNumber:281}},"USDT"),t.createElement("span",{className:"TokenAmountCell js-widget-example-amount",__self:this,__source:{fileName:e,lineNumber:281}},"10"))))),t.createElement("div",{className:"CardAction",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("svg",{className:"ChevronRight Icon",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("path",{d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z","fill-rule":"evenodd","stroke-width":"1",__self:this,__source:{fileName:e,lineNumber:281}})))))),t.createElement("div",{className:"DialogFooter",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{className:"PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomM",__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:281}},t.createElement("button",{className:"ButtonPrimary",style:{color:w,backgroundColor:p,borderRadius:`${E}px`},__self:this,__source:{fileName:e,lineNumber:281}},"Pay"))))))))))))),t.createElement("div",{style:{paddingTop:"1.4rem"},__self:this,__source:{fileName:e,lineNumber:282}},t.createElement("p",{className:"description",style:{paddingBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:283}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:283}},"Style")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:284}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:284}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:p,onChange:e=>{y(e.target.value)},__self:this,__source:{fileName:e,lineNumber:284}}),"Primary")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:285}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:285}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"color",value:w,onChange:e=>{x(e.target.value)},__self:this,__source:{fileName:e,lineNumber:285}}),"Button Text")),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:286}},t.createElement("label",{style:{display:"flex",alignItems:"center"},__self:this,__source:{fileName:e,lineNumber:286}},t.createElement("input",{style:{marginRight:"0.6rem"},type:"range",value:E,min:"0",max:"36",onChange:e=>{v(e.target.value)},__self:this,__source:{fileName:e,lineNumber:286}}),"Button Border"))),t.createElement("div",{style:{paddingTop:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:288}},t.createElement("p",{className:"description",__self:this,__source:{fileName:e,lineNumber:289}},t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:289}},"Usage"))),t.createElement("div",{style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:291}},t.createElement("p",{className:"description",style:{marginBottom:"0.8rem"},__self:this,__source:{fileName:e,lineNumber:292}},"Link any text to ",t.createElement("strong",{__self:this,__source:{fileName:e,lineNumber:292}},"#depay-donation-widget")," and it will open your donation widget upon click.")),t.createElement("img",{style:{maxWidth:"600px"},src:"/wp-content/plugins/depay-donations/core/includes/assets/img/widget.gif",__self:this,__source:{fileName:e,lineNumber:294}}))),t.createElement("tr",{__self:this,__source:{fileName:e,lineNumber:297}},t.createElement("th",{__self:this,__source:{fileName:e,lineNumber:298}}," "),t.createElement("td",{__self:this,__source:{fileName:e,lineNumber:299}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:300}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:301}},t.createElement("div",{__self:this,__source:{fileName:e,lineNumber:302}},s&&t.createElement("button",{style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-secondary",onClick:()=>{},__self:this,__source:{fileName:e,lineNumber:304}},"✓ Settings Saved"),c&&t.createElement("div",{className:"notice inline notice-warning notice-alt",style:{marginBottom:0,maxWidth:"300px"},__self:this,__source:{fileName:e,lineNumber:312}},"Please fix all errors before saving!"),!s&&t.createElement("button",{style:{fontSize:"1.1rem",padding:"0 1rem",marginTop:"0.5rem"},type:"button",className:"button button-primary",onClick:()=>(o(!0),void new window.wp.api.models.Settings({DePay_donations_accepted_payments:L,DePay_donations_button_css:R,DePay_donations_button_background_color:f,DePay_donations_button_text_color:h,DePay_donations_button_border_radius:d,DePay_donations_button_label:C,DePay_donations_widget_color_primary:p,DePay_donations_widget_button_border_radius:E,DePay_donations_widget_color_buttons:void 0,DePay_donations_widget_color_icons:void 0,DePay_donations_widget_color_text:void 0,DePay_donations_widget_css:S}).save().then((e=>{o(!1),r(!0)}))),disabled:_||c,__self:this,__source:{fileName:e,lineNumber:317}},"Save Settings"))))))))):null};document.addEventListener("DOMContentLoaded",(function(i){l.render(t.createElement(s,{__self:this,__source:{fileName:e,lineNumber:338}}),document.getElementById("depay-donations-admin"))}))}(window.React,window.ReactDOM)}));
