=== Web3 Donations by DePay - Accept P2P Crypto Donations ===
Contributors: depayfi
Tags: donations, cryptocurrency, p2p, web3, depay
Requires at least: 5.0
Tested up to: 6.1
Stable tag: 1.6.8
Requires PHP: 5.6
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Web3 donations directly into your own wallet. A Block-enabled WordPress plugin for P2P crypto donations with on-the-fly conversion.

== Description ==
**Web3 donations directly into your own wallet.**

A Block-enabled WordPress plugin for P2P cryptocurrency donations on multiple blockchains.

[youtube https://www.youtube.com/watch?v=bc1sPOnlGyk]

= Features =
> 📌 Check out the [live demo](https://web3wordpress.xyz "Wordpress Plugin for Crypto P2P donations (live demo) by DePay").

* **Wallet-to-wallet**: Middleman-free P2P payments.
* **Multichain**: Your supporters can send crypto donations on various blockchains.
* **On-the-fly conversion**: 100% decentralized token conversion via decentralized liquidity pools such as Uniswap or PancakeSwap. 
* **Configure incoming tokens**: Receive the tokens you want while letting your supporters pay with tokens they hold. 
* **Open-source**: You can find our [Web3 Donation Plugin on GitHub](https://github.com/DePayFi/web3-wordpress-depay-donations).
* **Buttons & Links**: The widget can be triggered in various ways.
* **Block-enabled**: You can add DePay Donations as a WordPress Block.
* **Custom CSS**: Customize the look of your donation button with your own CSS in the WordPress plugin dashboard.

= Supported wallets =

DePay supports [most crypto wallets](https://depay.com/wallets).

= Supported blockchains =
* Ethereum
* BNB Smart Chain
* Polygon
* Solana


= About DePay = 
> [DePay](https://depay.com) pioneers Web3 Payments with the power of DeFi. 
> Driving mass adoption of blockchain-based payments, DePay merges the core ideas of decentralization and interoperability with state-of-the-art Web3 technologies.
> The first truly decentralized multichain payment protocol built on DeFi. ETHOnline finalist, made in Switzerland (Crypto Valley).

🤝 Do you want to integrate the DePay payment protocol into your own WordPress plugin or project? [We are happy to give you support](https://depay.com/documentation#support).

== Installation ==

[youtube https://www.youtube.com/watch?v=bc1sPOnlGyk]

-> [How to Accept Web3 Cryptocurrency Donations on Wordpress](https://depay.com/how-to/accept-web3-cryptocurrency-donations-on-wordpress-3kmut5La6fMFiv7lHCfaeF)

❤️ The DePay community is [here for you](https://depay.com/documentation#support) in case you need additional support.

= Pricing =

1.5% transaction fee.

== Frequently Asked Questions ==

= What does "P2P" mean? =
Another term we like to use is "wallet-to-wallet".
When someone sends you a crypto donation through your WordPress-based website via DePay, it goes directly from your supporter's wallet to your own wallet (this is referred to by the term "peer-to-peer" or "P2P"). There are no intermediaries in between, but smart contracts. These ensure that the payer can pay with any token on supported blockchains, whereupon the tokens are converted into the ones you want to receive.

= What are "Web3 payments"? =
Building on the idea that "Web3" is the next generation of a blockchain-based and therefore decentralized Internet, "Web3 payments" are a new type of P2P payments. Besides being decentralized and peer-to-peer, they are also characterized by being "permissionless" and not requiring you to trust ("trustless") in centralized entities such as intermediaries. Furthermore, Web3 payments are censorship-resistant. "Open source" code can often be an indicator of Web3 technologies. Read more: [What are Web3 Payments?](https://depay.com/web3-payments).

= How does "on-the-fly" conversion work? =
* You configure which tokens you want to receive (e.g. USDT, BUSD) per blockchain
* Your supporters can send you donations with any token they currently have in their wallets (e.g. ETH or any other token)
* Once a transaction is sent, DePay's smart contracts convert the sender token (via decentralized liquidity pools such as Uniswap) into the tokens you have configured to be received. The payments arrive directly in your own wallet after the real-time conversion.

== Screenshots ==

1. Performing a Web3 Donation with DePay.
2. Inline links can also trigger the donation.
3. Block-enabled WordPress Plugin for crypto donations.
4. Insert inline donation links.
5. Simple Setup: Connect wallet & configure tokens.
6. Customize the CSS & label of your Web3 donation button.
7. Customize the theme appearance with a live preview.

== Changelog ==

= 1.6.8 =
* upgrade widgets to fix wallet connect image problems

= 1.6.7 =
* fix removing tokens in admin

= 1.6.6 =
* fix set widget button text

= 1.6.5 =
* fix styling widget and button text color

= 1.6.4 =
* fix recovering widget css in admin

= 1.6.3 =
* fix accessing unset accepted->receiver

= 1.6.2 =
* fix wallet images in wallet connect dialog

= 1.6.1 =
* fix widget title: show "Donation"

= 1.6.0 =
* adds Solana support and allows to edit button and widget through admin

= 1.5.9 =
* fixes some token amount display issues

= 1.5.8 =
* fix: minor widget fixes and improvements

= 1.5.7 =
* fix: show switch network dialog also on approval

= 1.5.6 =
* fixes FIAT & USD conversion (UI/Widget)

= 1.5.5 =
* fixes wallet detection & enables generic Ethereum Wallet in "Connect a wallet"

= 1.5.4 =
* fixes edge-cases with 'Connect a wallet'

= 1.5.3 =
* fixes problem with Coinbase wallet

= 1.5.2 =
* minor fixes

= 1.5.1 =
* remove widget demo from admin page (to prevent constant auto focus)

= 1.5.0 =
* upgrade to latest widget version (improved "Connect a wallet")

= 1.4.1 =
* prevent unnecessary price updates in widget

= 1.4.0 =
* upgrade to latest DePay widget + buttons

= 1.3.3 =
* fix readme

= 1.3.2 =
* depay.com

= 1.3.0 =
* upgrade widgets+buttons to 7.13

= 1.2.4 =
* fix rollout of partial react 18 support
* upgrade widgets+buttons to 7.1

= 1.2.3 =
* fix "tested up to"

= 1.2.2 =
* temporary fall back to react 17

= 1.1.1 =
* fixes widget bundle

= 1.1.0 =
* updates widgets to support polygon
* fixes dependencies to enable polygon

= 1.0.12 =
* fixes conversion rates for some USD routes

= 1.0.11 =
* update youtube video link on wordpress.org

= 1.0.10 =
* improves plugin listing on wordpress.org

= 1.0.9 =
* improves plugin listing on wordpress.org

= 1.0.8 =
* improves plugin listing on wordpress.org

= 1.0.7 =
* minify widget.bundle
* compress more graphics

= 1.0.6 =
* plugin directory related improvements
* remove and reduce graphic files
* improve descriptions

= 1.0.5 =
* security relevant improvements to prevent XSS and other html injections

= 1.0.4 =
* Complete readme.txt

= 1.0.0 =
* First release
