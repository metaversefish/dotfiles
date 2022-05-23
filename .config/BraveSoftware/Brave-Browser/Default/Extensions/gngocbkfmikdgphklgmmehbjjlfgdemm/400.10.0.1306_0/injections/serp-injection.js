(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = void 0;
var Clients;
(function (Clients) {
    Clients[Clients["sb"] = 22] = "sb";
    Clients[Clients["mp"] = 257] = "mp";
    Clients[Clients["tada"] = 258] = "tada";
    Clients[Clients["ibd"] = 260] = "ibd";
    Clients[Clients["upm"] = 263] = "upm";
})(Clients = exports.Clients || (exports.Clients = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogLevels = void 0;
var ConsoleLogLevels;
(function (ConsoleLogLevels) {
    ConsoleLogLevels[ConsoleLogLevels["Off"] = 0] = "Off";
    ConsoleLogLevels[ConsoleLogLevels["Error"] = 1] = "Error";
    ConsoleLogLevels[ConsoleLogLevels["Warn"] = 2] = "Warn";
    ConsoleLogLevels[ConsoleLogLevels["Info"] = 3] = "Info";
    ConsoleLogLevels[ConsoleLogLevels["Debug"] = 4] = "Debug";
    ConsoleLogLevels[ConsoleLogLevels["Trace"] = 5] = "Trace";
    ConsoleLogLevels[ConsoleLogLevels["All"] = 6] = "All";
})(ConsoleLogLevels = exports.ConsoleLogLevels || (exports.ConsoleLogLevels = {}));

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeMessageTypes = void 0;
var RuntimeMessageTypes;
(function (RuntimeMessageTypes) {
    RuntimeMessageTypes[RuntimeMessageTypes["DataInsightsResults"] = 0] = "DataInsightsResults";
    RuntimeMessageTypes[RuntimeMessageTypes["Activate"] = 1] = "Activate";
    RuntimeMessageTypes[RuntimeMessageTypes["CallBrandServiceFunction"] = 2] = "CallBrandServiceFunction";
    RuntimeMessageTypes[RuntimeMessageTypes["CloseSettings"] = 3] = "CloseSettings";
    RuntimeMessageTypes[RuntimeMessageTypes["ConstructActivateString"] = 4] = "ConstructActivateString";
    RuntimeMessageTypes[RuntimeMessageTypes["ConstructRewardString"] = 5] = "ConstructRewardString";
    RuntimeMessageTypes[RuntimeMessageTypes["DismissActivation"] = 6] = "DismissActivation";
    RuntimeMessageTypes[RuntimeMessageTypes["ExecuteCallback"] = 7] = "ExecuteCallback";
    RuntimeMessageTypes[RuntimeMessageTypes["ExecuteReflect"] = 8] = "ExecuteReflect";
    RuntimeMessageTypes[RuntimeMessageTypes["ExecuteReflectCmd"] = 9] = "ExecuteReflectCmd";
    RuntimeMessageTypes[RuntimeMessageTypes["GetAllReflects"] = 10] = "GetAllReflects";
    RuntimeMessageTypes[RuntimeMessageTypes["GetCdnHost"] = 11] = "GetCdnHost";
    RuntimeMessageTypes[RuntimeMessageTypes["GetCurrencySymbol"] = 12] = "GetCurrencySymbol";
    RuntimeMessageTypes[RuntimeMessageTypes["GetFeaturedMerchants"] = 13] = "GetFeaturedMerchants";
    RuntimeMessageTypes[RuntimeMessageTypes["GetFeaturedOfferPlacement"] = 14] = "GetFeaturedOfferPlacement";
    RuntimeMessageTypes[RuntimeMessageTypes["GetFilePath"] = 15] = "GetFilePath";
    RuntimeMessageTypes[RuntimeMessageTypes["GetLocalizedString"] = 16] = "GetLocalizedString";
    RuntimeMessageTypes[RuntimeMessageTypes["GetPopupData"] = 17] = "GetPopupData";
    RuntimeMessageTypes[RuntimeMessageTypes["GetSerpMerchantMetasByUrls"] = 18] = "GetSerpMerchantMetasByUrls";
    RuntimeMessageTypes[RuntimeMessageTypes["GetStorageItem"] = 19] = "GetStorageItem";
    RuntimeMessageTypes[RuntimeMessageTypes["InjectContent"] = 20] = "InjectContent";
    RuntimeMessageTypes[RuntimeMessageTypes["Log"] = 21] = "Log";
    RuntimeMessageTypes[RuntimeMessageTypes["LogCouponResults"] = 22] = "LogCouponResults";
    RuntimeMessageTypes[RuntimeMessageTypes["LogImpression"] = 23] = "LogImpression";
    RuntimeMessageTypes[RuntimeMessageTypes["Login"] = 24] = "Login";
    RuntimeMessageTypes[RuntimeMessageTypes["NavigateToFeaturedMerchant"] = 25] = "NavigateToFeaturedMerchant";
    RuntimeMessageTypes[RuntimeMessageTypes["NotificationClicked"] = 26] = "NotificationClicked";
    RuntimeMessageTypes[RuntimeMessageTypes["NotificationRemoveClicked"] = 27] = "NotificationRemoveClicked";
    RuntimeMessageTypes[RuntimeMessageTypes["OpenGoTab"] = 28] = "OpenGoTab";
    RuntimeMessageTypes[RuntimeMessageTypes["OpenSettings"] = 29] = "OpenSettings";
    RuntimeMessageTypes[RuntimeMessageTypes["OpenSiteTab"] = 30] = "OpenSiteTab";
    RuntimeMessageTypes[RuntimeMessageTypes["RefreshAccountBalance"] = 31] = "RefreshAccountBalance";
    RuntimeMessageTypes[RuntimeMessageTypes["Register"] = 32] = "Register";
    RuntimeMessageTypes[RuntimeMessageTypes["ResetCouponCoolDown"] = 33] = "ResetCouponCoolDown";
    RuntimeMessageTypes[RuntimeMessageTypes["SendDataFromHostToExt"] = 34] = "SendDataFromHostToExt";
    RuntimeMessageTypes[RuntimeMessageTypes["SendPasswordReminder"] = 35] = "SendPasswordReminder";
    RuntimeMessageTypes[RuntimeMessageTypes["SetActivationConfirmed"] = 36] = "SetActivationConfirmed";
    RuntimeMessageTypes[RuntimeMessageTypes["SetActivationInjected"] = 37] = "SetActivationInjected";
    RuntimeMessageTypes[RuntimeMessageTypes["SetStorageItem"] = 38] = "SetStorageItem";
    RuntimeMessageTypes[RuntimeMessageTypes["SetTabShopperMarketingInjected"] = 39] = "SetTabShopperMarketingInjected";
    RuntimeMessageTypes[RuntimeMessageTypes["ShowTutorial"] = 40] = "ShowTutorial";
    RuntimeMessageTypes[RuntimeMessageTypes["UpdateMemberPrefs"] = 41] = "UpdateMemberPrefs";
    RuntimeMessageTypes[RuntimeMessageTypes["UserClickedInPage"] = 42] = "UserClickedInPage";
})(RuntimeMessageTypes = exports.RuntimeMessageTypes || (exports.RuntimeMessageTypes = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentInjectionBase = void 0;
const clients_1 = require("../../enums/clients");
const log_levels_1 = require("../../enums/log-levels");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
class ContentInjectionBase {
    constructor(params) {
        this.showDebugging = false; // leave false normally, flip to true to see logs when debugging.
        this.data = params.data;
        this.extensionRuntimeId = params.extensionRuntimeId;
        if (params.data?.consoleLogLevel >= log_levels_1.ConsoleLogLevels.Debug) {
            this.showDebugging = true;
        }
    }
    get clientName() {
        return clients_1.Clients[this.data.client];
    }
    createElement(tag, fn) {
        let el = document.createElement(tag);
        if (fn) {
            fn(el);
        }
        return el;
    }
    async getExtensionFilePath(relativePath) {
        const message = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.GetFilePath, relativePath);
        return await this.sendExtensionMessage(message);
    }
    sendExtensionMessage(message) {
        return new Promise((res) => {
            const fn = window['__browserApi'].runtime.sendMessage;
            const cb = function (response) {
                res(response);
            };
            fn(this.extensionRuntimeId, message, {}, cb);
        });
    }
    // Debug output will go to the clientPage/browser debugger and not the extension/background debugger
    log(message, data) {
        let consoleArgs = ['*CI', message]; // prifix makes it easier to filter
        if (this.showDebugging) {
            if (data) {
                // Errors/Exception come through as plain object (so you can't check typeof), but Errors don't stringify, have to make an object.
                if (data.message && data.stack) {
                    data = { error: data.message, stack: data.stack };
                }
                consoleArgs.push(JSON.stringify(data, null, 2));
            }
            console.log.apply(null, consoleArgs);
        }
    }
    async constructMerchantCtaString(merchant, activated, type, isShort = false) {
        return this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(type, {
            reward: merchant.reward,
            clientId: this.data.client,
            locationId: merchant.loc,
            isShort,
            activated
        }));
    }
}
exports.ContentInjectionBase = ContentInjectionBase;

},{"../../enums/clients":1,"../../enums/log-levels":2,"../../enums/runtime-message-types":3,"../runtime-message":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerpInjectionBase = void 0;
const content_injection_base_1 = require("./content-injection-base");
const runtime_message_1 = require("../runtime-message");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
class SerpInjectionBase extends content_injection_base_1.ContentInjectionBase {
    constructor(params) {
        super(params);
        this.INJECT_TYPE = 'small';
        this.urls = [];
        this.merchantObjects = [];
        this.setSearchUsed();
        this.injectContent();
    }
    setSearchUsed() {
        const smallElements = document.querySelectorAll(this.data.pattern);
        smallElements.forEach(el => {
            let url = el.getAttribute('href');
            if (url && url.indexOf('http') === 0 && el.getAttribute('sbSearchUsed') !== 'true') {
                if (url.indexOf('url=http') > 0) {
                    url = unescape(url.match(/url=([^&]+)/).pop());
                }
                else if (this.data.matchURL && url.indexOf(this.data.matchURL) > 0) {
                    const matchUrl = this.data.matchURL ? new RegExp(`${this.data.matchURL}([^&]+)`) : null;
                    url = unescape(url.match(matchUrl).pop());
                }
                el['injectUrl'] = url;
                el['injectType'] = this.INJECT_TYPE;
                this.merchantObjects.push(el);
                this.urls.push(url);
                el.setAttribute(`searchUsed${this.data.client}`, 'true');
            }
        });
    }
    async injectContent() {
        const idStarter = "prdg" + this.data.client;
        if (this.urls.length > 0) {
            // TODO: ADD flagHtml
            // const uCountry = await this.sendExtensionMessage<number>(new RuntimeMessage(RuntimeMessageTypes.getUserCountry));
            let metas = await this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.GetSerpMerchantMetasByUrls, {
                urls: this.urls,
                clientId: this.data.client
            }));
            if (metas) {
                let idCounter = 0;
                for (const i in this.urls) {
                    let element = this.merchantObjects[i];
                    let meta = metas[i];
                    if (meta) {
                        // TODO: ADD flagHtml
                        // let flagHtml = '';
                        // if (uCountry && meta.loc != uCountry) {
                        //   let flag = this.getFlagSuffix(meta.loc);
                        //   flagHtml = chrome.extension.getURL(`assets/images/shopearn/flag-${flag}.png`);
                        // }
                        let parent = element;
                        // Required currently for google as they have a different order of the links and the text that doesn't work with old layout.
                        // Not very clean as you are working from inner element (the title), not the one it looks like it is hovering over.
                        if (this.data.manuallyPushUpLevels) {
                            for (let i = 0; i < this.data.manuallyPushUpLevels; i++) {
                                if (parent.parentElement) {
                                    parent = parent.parentElement;
                                }
                            }
                        }
                        const alreadyInjected = Array.from(parent.childNodes).some((element) => element.id?.startsWith(idStarter));
                        if (parent.childNodes && !alreadyInjected) {
                            const container = this.createElement('div', async (div) => {
                                div.id = idStarter + '_' + idCounter;
                                div.style.display = "table";
                                div.appendChild(await this.injectImage());
                                div.appendChild(await this.injectText(meta));
                            });
                            parent.insertBefore(container, parent.childNodes[0]);
                            idCounter++;
                        }
                    }
                }
            }
        }
    }
    injectImage() {
        return this.createElement('img', async (img) => {
            img.src = await this.getExtensionFilePath(`assets/images/serp/inject-${this.INJECT_TYPE}-icon.png`);
            img.style.margin = "0";
            img.style.float = "left";
        });
    }
    injectText(meta) {
        return this.createElement('span', async (span) => {
            const cashBackText = await this.constructMerchantCtaString(meta, false, runtime_message_types_1.RuntimeMessageTypes.ConstructRewardString);
            span.style.fontFamily = 'Helvetica, Arial, sans-serif';
            span.style.fontSize = '14px';
            span.style.marginLeft = '3px';
            span.style.marginRight = '3px';
            span.style.color = 'red';
            span.style.display = 'inline-block';
            span.style.textDecoration = 'none !important';
            span.style.float = 'left';
            span.innerHTML = cashBackText;
        });
    }
}
exports.SerpInjectionBase = SerpInjectionBase;

},{"../../enums/runtime-message-types":3,"../runtime-message":6,"./content-injection-base":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeMessage = void 0;
class RuntimeMessage {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
exports.RuntimeMessage = RuntimeMessage;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerpInjection = void 0;
const serp_injection_base_1 = require("../../../objects/src/lib/models/content-injection/serp-injection-base");
class SerpInjection extends serp_injection_base_1.SerpInjectionBase {
    constructor(params) {
        super(params);
    }
}
exports.SerpInjection = SerpInjection;
(() => {
    const brand = 'SB';
    window['Prdg'] = window['Prdg'] || {};
    window['Prdg'][brand] = window['Prdg'][brand] || {};
    window['Prdg'][brand]['SerpInjection'] = SerpInjection;
})();

},{"../../../objects/src/lib/models/content-injection/serp-injection-base":5}]},{},[7]);
