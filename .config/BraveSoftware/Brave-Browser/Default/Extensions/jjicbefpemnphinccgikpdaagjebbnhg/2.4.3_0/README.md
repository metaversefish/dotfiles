<p align="center">
  <a href="https://csgofloat.com/">
    <img width="600" src="https://csgofloat.com/assets/full_logo.png"/>
  </a>
</p>

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Step7750/CSGOFloat/LICENSE)
[![Website](https://img.shields.io/website-up-down-green-red/https/csgofloat.com.svg)](https://csgofloat.com)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/d/jjicbefpemnphinccgikpdaagjebbnhg.svg)](https://chrome.google.com/webstore/detail/csgofloat-market-checker/jjicbefpemnphinccgikpdaagjebbnhg)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/jjicbefpemnphinccgikpdaagjebbnhg.svg)](https://chrome.google.com/webstore/detail/csgofloat-market-checker/jjicbefpemnphinccgikpdaagjebbnhg)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/rating-count/jjicbefpemnphinccgikpdaagjebbnhg.svg)](https://chrome.google.com/webstore/detail/csgofloat-market-checker/jjicbefpemnphinccgikpdaagjebbnhg)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/price/jjicbefpemnphinccgikpdaagjebbnhg.svg)](https://chrome.google.com/webstore/detail/csgofloat-market-checker/jjicbefpemnphinccgikpdaagjebbnhg)

CSGOFloat has an extension for Firefox/Chrome that lets you fetch floats directly from the market page! You can view the source code for the extensions here!

## Store Links
[Chrome Store Link](https://chrome.google.com/webstore/detail/csgofloat-market-checker/jjicbefpemnphinccgikpdaagjebbnhg)

[Firefox Add-ons Link](https://addons.mozilla.org/en-US/firefox/addon/csgofloat/)

## Features

* Allows you to retrieve the "float" and paint seed of any market or inventory item
* You can fetch all floats on the current page
* When using pagination, the float data is saved

## Compatibility:
* This extension has been tested to work with Steam Inventory Helper and Enhanced Steam
* Since this extension doesn't hook and modify HTTP headers to bypass steamcommunity.com CSP, it should have greater compatibility.

In order to bypass CSP, the extension uses page event listeners to communicate with the content script and injected DOM content.

## Changelog

v2.4.3

* Adds Glock Gamma Doppler phases

v2.4.2

* Improves dynamic banner support

v2.4.1

* Fixes FloatDB Link Generation for StatTrak Knives
* Changes styling of "Listed for X" button on item cards
* Adds CSGOFloat Auction Banner 

v2.4.0

* Provides fallback for unstable inventory loading ("Try Again using CSGOFloat")

v2.3.9

* Reverts CSMoney Banner

v2.3.8

* Updates CSMoney Banner

v2.3.7
* Fixes CSMoney logo path

v2.3.6

* Fixes Showing Floats on Market Pages WIth Your Own Listings

v2.3.5

* Improves Valve's fragment check for market listings (works across pagination now)
* Annotates pricing data on market listings

v2.3.4

* Adds CSMoney price banner
* Adds window level scope attribute to allow other extensions to know if CSGOFloat is installed (window.csgofloat)

v2.3.3

* Fixes CSGOFloat proof generation for some Steam languages

v2.3.2

* Allows buyers on CSGOFloat Market to auto-fill trades
* Shows warning for fake offers to CSGOFloat sellers

v2.3.1

* Updates Beta Market Endpoints to Production

v2.3.0

* Allows computing manual trade verification proofs on CSGOFloat Market
* Shows if an inventory item is listed on CSGOFloat Market Beta
* Allows auto-filling trades for CSGOFloat Market Beta
* Removes cs.money banner on market pages
* Implements fetching item data on trade offers

v2.2.2

* Prevents auto retrying failed CSGOFloat requests

v2.2.1

* FloatDB ranks now link to the relevant db.csgofloat.com page
* Allows filtering on item `price` (requires user to be logged in to Steam)
* Fixes link errors on Souvenir Package items

v2.2.0

* Shows ranks from FloatDB (db.csgofloat.com) if in the top 1000
* Colours inventory items gold/silver/bronze if ranked #1/#2-3/#4-5 respectively in either low or high float
* Allows filtering based on rank

v2.1.2

* Fixes cases where filters would not highlight if loaded slowly
* Removes Steam Inventory Helper (if installed) market stickers due to a visual conflict

v2.1.1

* Fixes Wear Range Extraction (fixes `percentile` and `percentileRange` functions)

v2.1.0

* Automatically loads floats/paintseeds at a glance in your inventory
* Allows easy inspecting of items on the market by clicking on their image
* Shows when an item will be tradable in other inventories
* Fixes instances of duplicate item data requests
* Lowers bandwidth used for item data requests

v2.0.3

* Fixes sticker image handling with stickers that have commas in the name
* Fixes cases where the utility bar can be added multiple times

v2.0.2

* Fixes sticker parsing on non-english pages
* Fixes race-condition in Opera for adding the utilities panel

v2.0.1

* Fixes automatic float fetching when Steam Inventory Helper is installed

v2.0.0

* Adds integrated screenshot and 3D models for market skins, powered by cs.money
* Automatically fetches market floats on page load
* Fetches float and paint seed for inventory skins
* Shows market skin stickers and their wear
* Shows doppler phase if applicable
* Restricts properties saved in global filters to save space
* Fixes filters using the "X in (Y, Z)" notation
* Allows filtering on doppler phase

v1.3.2

* Fixes float value sorting on pages where the user has items listed

v1.3.1

* Implements sorting listings by float value

v1.3.0

* Implements global filters: filters can now be toggled to apply to all skins
* Implements percentile and percentileRange filter functions

v1.2.2

* Fixes deletion of filter keys without any filters (applicable if you've put filters on 512 items)

v1.2.1

* Adds user-definable page size (up to 100)
* Page size is stored in sync storage

v1.2.0

* Adds simultaneous request functionality (up to 10)
* Adds Filtrex user-defined filters with highlight colours

v1.1.4
* Updates API Endpoint Port
* Fixes float selector when the user has items on sale (thanks @z32nissan)

v1.1.3
* Fixes 'Unknown Error' on Firefox

v1.1.2
* Implements proper sanitization of injected HTML during float retrieval

v1.1.1
* Fixes Slow Item Info Retrieval Handling

v1.1
* Rewrite of the extension to allow greater flexibility in the future

v1.0.2
* Added "Fetching" status to the "Get Float" button when that item is being processed
* Cleaned up the code w/ better commenting

v1.0.1
* Implemented support for requesting all floats on the given page

v1.0.0
* Initial release
