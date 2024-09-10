=== Web3 Cryptocurrency Donations by DePay for Wordpress ===
Contributors: depayfi
Tags: donations, cryptocurrency, web3, DePay, USDC
Requires at least: 5.0
Tested up to: 6.6
Stable tag: 2.3.8
Requires PHP: 5.6
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Accept Web3 Donations. Supporting various cryptocurrency tokens and wallets. MetaMask, Phantom, USDC, USDT, ETH, SOL, BSC…

== Description ==

**Accept Web3 Donations. Supporting various cryptocurrency tokens and wallets. MetaMask, Phantom, USDC, USDT, ETH, SOL, BSC…**

A Block-enabled WordPress plugin for Web3, onchain, cryptocurrency donations supporting various blockchains and tokens (auto-conversion).

[youtube https://www.youtube.com/watch?v=bc1sPOnlGyk]

= Features =
> 📌 Check out the [live demo](https://web3wordpress.xyz "Wordpress Plugin for Crypto P2P donations (live demo) by DePay").

* **Wallet-to-wallet**: Donations are sent directly to your wallet without the need for an intermediary..
* **Automatic token-conversion**: Donations are automatically converted into the token you’ve selected for receiving.
* **Open-source**: You can find our [Web3 Donation Plugin on GitHub](https://github.com/DePayFi/web3-wordpress-depay-donations).
* **Block-enabled**: Supports WordPress Gutenberg blocks.
* **Customize style**: Customize the look of your payment button with your own CSS in the WordPress plugin dashboard.

= Supported wallets =

DePay supports [most crypto wallets](https://depay.com/wallets).

= Supported blockchains =
* Ethereum
* BNB Smart Chain
* Polygon
* Solana
* Fantom
* Gnosis
* Avalanche
* Arbitrum
* Optimism
* Base

== Installation ==

[youtube https://www.youtube.com/watch?v=bc1sPOnlGyk]

-> [How to Accept Web3 Cryptocurrency Donations on Wordpress](https://depay.com/how-to/accept-web3-cryptocurrency-donations-on-wordpress-3kmut5La6fMFiv7lHCfaeF)

== Frequently Asked Questions ==

== What are "Web3 Payments"? ==

Building on the idea that "Web3" is the next generation of a blockchain-based and therefore decentralized Internet, "Web3 payments" are a new type of direct wallet-to-wallet payments that you can receive directly into your own crypto wallet.
Besides being decentralized and peer-to-peer, they are also characterized by being "permissionless" and not requiring you to trust ("trustless") in centralized entities such as intermediaries.
Furthermore, Web3 payments are censorship-resistant. Read more: [What are Web3 Payments?](https://depay.com/web3-payments).

== How does "on-the-fly" conversion work? ==

* You configure which tokens you want to receive (e.g. USDT, BUSD) per blockchain
* Website visitors can make payments with any token they currently have in their wallets (e.g. ETH or any other token)
* DePay's smart contracts auto-converts the payment into the tokens you have configured to be received.
* The payments always arrive directly in your own wallet.

== Pricing ==

Start for free. Pay-as-you-go 1.5% per transaction.

== Screenshots ==

1. Performing a Web3 Donation with DePay.
2. Inline links can also trigger the donation.
3. Block-enabled WordPress Plugin for crypto donations.
4. Insert inline donation links.
5. Simple Setup: Connect wallet & configure tokens.
6. Customize the CSS & label of your Web3 donation button.
7. Customize the theme appearance with a live preview.

== Changelog ==

= 2.3.8 =
* fix loading payment options (rpc settings & rotation)

= 2.3.7 =
* fix prevents deadlock: widget loading payment options forever

= 2.3.6 =
* fix wordpress.org description

= 2.3.5 =
* fixes some wallet connectivity issues

= 2.3.4 =
* fixes edge-case routing issues with low-liquidity tokens on Uniswap v3

= 2.3.3 =
* fixes Solana RPC failover issues

= 2.3.1 =
* linking the widget is not supported anymore, please use the button component

= 2.3.8 =
* fixes mobile wallet connectivity (WalletConnect)

= 2.3.0 =
* adds Magic Eden wallet support + Brave solana support

= 2.2.2 =
* upgrade dependencies
* fix polygon rpc

= 2.2.1 =
* upgrade widgets

= 2.2.0 =
* load javascript async defer (to speed up pageload & pagespeed)

= 2.1.4 =
* fix wrap<>unwrap payments
* fix applied gas

= 2.1.3 =
* fix: Trust Wallet mobile connections

= 2.1.2 =
* fix: replaces broken polygon rpc

= 2.1.1 =
* Upgrades widgets and fixes wrongfully flagged 'failed' payments

= 2.1.0 =
* Upgrades widgets and fixes various wallet connection issues

= 2.0.3 =
* Fix amount selection and connecting MetaMask mobile

= 2.0.2 =
* Fix wordpress.org release

= 2.0.1 =
* Fixes Safe wallet connection issues

= 2.0.0 =
* DePay V2: 6 new blockchains + lots of other improvements

= 1.7.2 =
* fixes WalletConnect v2 issue

= 1.7.1 =
* fixes connection to wallets that require WalletConnect v2

= 1.7.0 =
* adds support for SolanaPay protocol

= 1.6.11 =
* fix metamask mobile wallet connections

= 1.6.10 =
* fix polygon logo
* fix some solana routing

= 1.6.9 =
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
