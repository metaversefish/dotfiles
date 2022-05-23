window.CSGO_ORIGINS = null;
$.getJSON(chrome.runtime.getURL('/assets/json/csgo_origin_names.json'), (data) => {
  CSGO_ORIGINS = data;
});

window.PROVIDERS_LIST = null;

var priceUtils = document.createElement('script');
priceUtils.src = chrome.runtime.getURL('js/priceutils.script.js');
(document.head || document.documentElement).appendChild(priceUtils);
priceUtils.onload = function () {
  priceUtils.parentNode.removeChild(priceUtils);
};

var sKnifePhaseDetector = document.createElement('script');
sKnifePhaseDetector.src = chrome.runtime.getURL('js/knifephasedetector.script.js');
(document.head || document.documentElement).appendChild(sKnifePhaseDetector);
sKnifePhaseDetector.onload = function () {
  sKnifePhaseDetector.parentNode.removeChild(sKnifePhaseDetector);

  var sInventoryItemRarity = document.createElement('script');
  sInventoryItemRarity.src = chrome.runtime.getURL('js/inventoryitemrarity.script.js');
  (document.head || document.documentElement).appendChild(sInventoryItemRarity);
  sInventoryItemRarity.onload = function () {
    sInventoryItemRarity.parentNode.removeChild(sInventoryItemRarity);
  };
};

var cssInventoryItemRarity = document.createElement('link');
cssInventoryItemRarity.href = chrome.runtime.getURL('css/colorizeinventoryitem.css');
cssInventoryItemRarity.rel = 'stylesheet';
cssInventoryItemRarity.type = 'text/css';
(document.head || document.documentElement).appendChild(cssInventoryItemRarity);

var cssSwitcher = document.createElement('link');
cssSwitcher.href = chrome.runtime.getURL('css/switcher.css');
cssSwitcher.rel = 'stylesheet';
cssSwitcher.type = 'text/css';
(document.head || document.documentElement).appendChild(cssSwitcher);

var sSwitcher = document.createElement('script');
sSwitcher.src = chrome.runtime.getURL('js/jquery/jquery.switcher.min.js');
(document.head || document.documentElement).appendChild(sSwitcher);
sSwitcher.onload = function () {
  sSwitcher.parentNode.removeChild(sSwitcher);
};

var cssJqueryUI = document.createElement('link');
cssJqueryUI.href = chrome.runtime.getURL('css/jquery-ui.css');
cssJqueryUI.rel = 'stylesheet';
cssJqueryUI.type = 'text/css';
(document.head || document.documentElement).appendChild(cssJqueryUI);

var sJqueryUI = document.createElement('script');
sJqueryUI.src = chrome.runtime.getURL('js/jquery/jquery-ui.min.js');
(document.head || document.documentElement).appendChild(sJqueryUI);
sJqueryUI.onload = function () {
  sJqueryUI.parentNode.removeChild(sJqueryUI);
}

var cssProfilesInventory = document.createElement('link');
cssProfilesInventory.href = chrome.runtime.getURL('js/siteExt/profilesInventory.css');
cssProfilesInventory.rel = 'stylesheet';
cssProfilesInventory.type = 'text/css';
(document.head || document.documentElement).appendChild(cssProfilesInventory);

var sCacher = document.createElement('script');
sCacher.src = chrome.runtime.getURL('bundle/js/RequestCacher.js');
(document.head || document.documentElement).appendChild(sCacher);
sCacher.onload = function () {
  sCacher.parentNode.removeChild(sCacher);
};

var sPriceQueue = document.createElement('script');
sPriceQueue.src = chrome.runtime.getURL('js/PriceQueue.js');
(document.head || document.documentElement).appendChild(sPriceQueue);
sPriceQueue.onload = function () {
  sPriceQueue.parentNode.removeChild(sPriceQueue);
};

var cssPQ = document.createElement('link');
cssPQ.href = chrome.runtime.getURL('css/priceQueue.css');
cssPQ.rel = 'stylesheet';
cssPQ.type = 'text/css';
(document.head || document.documentElement).appendChild(cssPQ);

var sHelper = document.createElement('script');
sHelper.src = chrome.runtime.getURL('js/helper.js');
(document.head || document.documentElement).appendChild(sHelper);
sHelper.onload = function () {
  sHelper.parentNode.removeChild(sHelper);
};

var sGlobal = document.createElement('script');
sGlobal.src = chrome.runtime.getURL('js/steam/global.js');
(document.head || document.documentElement).appendChild(sGlobal);
sGlobal.onload = function () {
  sGlobal.parentNode.removeChild(sGlobal);
};

var sScroll = document.createElement('script');
sScroll.src = chrome.runtime.getURL('js/jquery/jquery.scrollbar.min.js');
(document.head || document.documentElement).appendChild(sScroll);
sScroll.onload = function () {
  sScroll.parentNode.removeChild(sScroll);
};

var cssF = document.createElement('link');
cssF.href = chrome.runtime.getURL('css/inventscript.css');
cssF.rel = 'stylesheet';
cssF.type = 'text/css';
(document.head || document.documentElement).appendChild(cssF);

var cssM = document.createElement('link');
cssM.href = window.location.protocol + '//steamcommunity-a.akamaihd.net/public/css/skin_1/economy_market.css';
cssM.rel = 'stylesheet';
cssM.type = 'text/css';
(document.head || document.documentElement).appendChild(cssM);

var cssC = document.createElement('link');
cssC.href = chrome.runtime.getURL('css/jquery.scrollbar.css');
cssC.rel = 'stylesheet';
cssC.type = 'text/css';
(document.head || document.documentElement).appendChild(cssC);


chrome.storage.sync.get({
  fastdelta: -0.01,
  delaylistings: 200,
  quicksellbuttons: true,
  instantsellbuttons: false,
  buysetbuttons: true,
  selectallbuttons: true,
  inventoryprice: true,
  currency: '',
  lang: '',
  apikey: '',
  gpdelayscc: 3000,
  gpdelayerr: 30000,
  agp_hover: true,
  agp_gem: false,
  agp_sticker: true,
  usevector: false,
  simplyinvent: false,
  hidedefaultprice: false,
  extprice: true,
  extmasslisting: false,
  extbgcolor: '#0000FF',
  exttextcolor: '#FFFFFF',
  userUrl: '//steamcommunity.com/my/',
  show_float_value: true,
  tradableinfo: false,
  show_trade_unlock_date_badge: true,
  show_inventory_rarity_color: true,
  show_phase_color: true,
  show_improved_inventory_nav: true,
  show_price_difference_warning: true,
  price_update_time: 120000,
  market_cache_time: 300000,
  new_interface: true,
}, function (items) {

  const detectUserLanguage = () => {
    let navLang;
    if (window.navigator.languages && window.navigator.languages.length > 0) {
      [navLang] = window.navigator.languages;
    }
    if (!navLang) {
      navLang = window.navigator.language || window.navigator.userLanguage || '';
    }

    const VALID_LANGUAGES = [
      'bg', 'cs', 'de', 'en', 'es', 'fr', 'it', 'ka', 'lv', 'no', 'pl', 'pt',
      'ro', 'ru', 'sv', 'tr', 'vi', 'uk', 'zh', 'zh-CN', 'zh-TW'
    ];
    return (VALID_LANGUAGES.includes(navLang)) ? navLang : 'en';
  }
  items.lang = items.lang || detectUserLanguage();

  $.getJSON(chrome.runtime.getURL(`_locales/en/controls.json`), (enData) => {
    $.getJSON(chrome.runtime.getURL(`_locales/${items.lang}/controls.json`), (langData) => {
      langData = jQuery.extend(true, {}, enData, langData);
      $.getJSON(chrome.runtime.getURL('/assets/json/providers.json'), (data) => {
        PROVIDERS_LIST = data
        var actualCode = [
          `window.SIHID = '${chrome.runtime.id}';`,
          `window.PROVIDERS_LIST = ${JSON.stringify(PROVIDERS_LIST)}`,
          `window.CSGO_ORIGINS = ${JSON.stringify(CSGO_ORIGINS)}`,
          `window.priceUpdateTime = ${items.price_update_time}`,
          `window.marketCacheTime = ${items.market_cache_time}`,
          `window.SIHLang = ${JSON.stringify(langData)}`,
          `window.isNewInterface = ${items.new_interface}`,
        ];

        Object.keys(items).forEach((key) => {
          let prepValue;
          const value = items[key];
          if (typeof value === 'string') prepValue = `window.${key} = '${value}';`;
          else if (Array.isArray(value)) prepValue = `window.${key} = ${value};`;
          else if (typeof value === 'object') prepValue = `window.${key} = ${JSON.stringify(value)};`;
          else prepValue = `window.${key} = ${value};`;

          actualCode.push(prepValue);
        });
        if (items.simplyinvent) {
          $('body').addClass('simple');
        }

        chrome.storage.local.get({
          bookmarks: []
        }, function (subitems) {
          var actualCodeLocal = [
            'window.bookmarkeditems = ' + (JSON.stringify(subitems.bookmarks)) + ';'
          ].join('\r\n');

          var scriptsub = document.createElement('script');
          scriptsub.textContent = actualCodeLocal;
          (document.head || document.documentElement).appendChild(scriptsub);
          scriptsub.parentNode.removeChild(scriptsub);
        });

        // modStyle({ extbgcolor: items.extbgcolor, exttextcolor: items.exttextcolor });
        var script = document.createElement('script');
        script.textContent = actualCode.join('\r\n');
        // script.textContent = actualCode;
        (document.head || document.documentElement).appendChild(script);
        script.parentNode.removeChild(script);


        var sProfilesInventory = document.createElement('script');
        sProfilesInventory.src = chrome.runtime.getURL('js/siteExt/profilesInventory.bundle.js');
        (document.head || document.documentElement).appendChild(sProfilesInventory);
        sProfilesInventory.onload = function () {

          var sCommon = document.createElement('script');
          sCommon.src = chrome.runtime.getURL('js/inventprice.script.js');
          (document.head || document.documentElement).appendChild(sCommon);
          sCommon.onload = function () {
            sCommon.parentNode.removeChild(sCommon);

            var sInventoryDialog = document.createElement('script');
            sInventoryDialog.src = chrome.runtime.getURL('js/inventory.dialog.js');
            (document.head || document.documentElement).appendChild(sInventoryDialog);
            sInventoryDialog.onload = function () {
              sInventoryDialog.parentNode.removeChild(sInventoryDialog);


              var sInventory = document.createElement('script');
              sInventory.src = chrome.runtime.getURL('js/inventory.js');
              (document.head || document.documentElement).appendChild(sInventory);
              sInventory.onload = function () {
                sInventory.parentNode.removeChild(sInventory);


              };
            };
          };

          sProfilesInventory.parentNode.removeChild(sProfilesInventory);
        };
      });
    });
  })
});
