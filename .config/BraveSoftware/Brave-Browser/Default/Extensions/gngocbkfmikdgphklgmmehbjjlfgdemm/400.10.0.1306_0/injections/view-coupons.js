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
exports.PageIds = void 0;
var PageIds;
(function (PageIds) {
    PageIds[PageIds["Default"] = 274] = "Default";
    PageIds[PageIds["AutoRedirect"] = 280] = "AutoRedirect";
    PageIds[PageIds["ActivationSliderClick"] = 281] = "ActivationSliderClick";
    PageIds[PageIds["CouponSliderClick"] = 282] = "CouponSliderClick";
    PageIds[PageIds["PopupMerchantClick"] = 283] = "PopupMerchantClick";
    PageIds[PageIds["PopupFeaturedMerchantClick"] = 284] = "PopupFeaturedMerchantClick";
})(PageIds = exports.PageIds || (exports.PageIds = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectContext = void 0;
/**
 * In most cases, we shouldn't have to specify this value and we should use normal business logic
 * to determine which tab to activate/redirect in.  But sometimes, business logic is illogical.
 */
var RedirectContext;
(function (RedirectContext) {
    RedirectContext[RedirectContext["Default"] = 0] = "Default";
    RedirectContext[RedirectContext["Background"] = 1] = "Background";
    RedirectContext[RedirectContext["CurrentTab"] = 2] = "CurrentTab";
    RedirectContext[RedirectContext["SilentTab"] = 3] = "SilentTab"; // Force silent tab (e.g. for this post-registration and/or login scenario)
})(RedirectContext = exports.RedirectContext || (exports.RedirectContext = {}));

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlTypes = void 0;
var UrlTypes;
(function (UrlTypes) {
    UrlTypes["Merchant"] = "MERCHANT";
    UrlTypes["Checkout"] = "CHECKOUT";
    UrlTypes["PostPurchase"] = "POSTPURCHASE";
    UrlTypes["Serp"] = "SERP";
})(UrlTypes = exports.UrlTypes || (exports.UrlTypes = {}));

},{}],7:[function(require,module,exports){
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

},{"../../enums/clients":1,"../../enums/log-levels":2,"../../enums/runtime-message-types":5,"../runtime-message":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponInjectionBase = void 0;
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
const merchant_injection_base_1 = require("./merchant-injection-base");
class CouponInjectionBase extends merchant_injection_base_1.MerchantInjectionBase {
    constructor(params) {
        super(params);
        this.initLogging();
    }
    initLogging() {
        this.logItem = this.constructLogItem();
        window.addEventListener('beforeunload', () => { this.trySendLog(); });
        window.addEventListener('close', () => { this.trySendLog(); });
    }
    trySendLog() {
        // change details from map to object for posting log to db
        let couponDetails = JSON.stringify(Object.fromEntries(this.logItem.trackingCouponDetails));
        this.logItem.couponDetails = couponDetails;
        if (!this.logSent) {
            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.LogCouponResults, this.logItem));
            this.logSent = true;
        }
    }
    formatCurrencyForLog(val) {
        if (val) {
            return Math.floor(val * 100);
        }
        else {
            return 0;
        }
    }
}
exports.CouponInjectionBase = CouponInjectionBase;

},{"../../enums/runtime-message-types":5,"../runtime-message":15,"./merchant-injection-base":13}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineRegistration = void 0;
const redirect_context_1 = require("../../enums/redirect-context");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
const merchant_injection_base_1 = require("./merchant-injection-base");
class InlineRegistration extends merchant_injection_base_1.MerchantInjectionBase {
    constructor(params) {
        super(params);
        this.SELECTORS = {
            FORM: '#reg form',
            INPUT: '#reg form input',
            STATUS: '#reg-status',
            BUTTON: '#reg form button',
            INLINE_REG: '#reg',
            REG_REWARD: '#reg-reward'
        };
        this.setStyle();
        this.addUI();
    }
    get input() { return this.getElement(this.SELECTORS.INPUT); }
    async fetchFile(path) {
        const response = await fetch(path);
        return await response.text();
    }
    async setStyle() {
        const path = await this.getExtensionFilePath('injections/inline-registration.css');
        const css = await this.fetchFile(path);
        this.getElement('style').innerHTML = css;
    }
    async addUI() {
        await this.setContent();
        await this.setContainer();
        await this.setReward();
        await this.setForm();
    }
    async setContent() {
        const path = await this.getExtensionFilePath('injections/inline-registration.html');
        const html = await this.fetchFile(path);
        this.injectionContainer.innerHTML = html;
        this.injectionContainer.classList.add('reg-container', this.clientName);
    }
    async setContainer() {
        const container = this.getElement(this.SELECTORS.INLINE_REG);
        const background = await this.getExtensionFilePath('assets/images/bg_coupons_join_cta.png');
        container.style.background = `url(${background})`;
    }
    async setReward() {
        const reward = await this.constructCtaString(runtime_message_types_1.RuntimeMessageTypes.ConstructRewardString);
        if (reward) {
            // TODO: another string construction thing.
            this.getElement(this.SELECTORS.REG_REWARD).innerHTML = `Get ${reward}`;
        }
    }
    async setForm() {
        const form = this.getElement(this.SELECTORS.FORM);
        form.onsubmit = (e) => { this.onInteraction(e); };
        this.getElement(this.SELECTORS.BUTTON).innerHTML = await this.getLocalizedString('joinBtnLabel');
        this.input.placeholder = await this.getLocalizedString('joinEmailPlaceholder');
    }
    async onInteraction(detail) {
        const e = detail;
        e.preventDefault();
        const status = this.getElement(this.SELECTORS.STATUS);
        const email = this.input.value;
        const response = await this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.Register, { email }));
        if (response?.data) {
            status.innerHTML = '';
            status.classList.add('success');
            status.appendChild(this.createElement('b', async (b) => {
                b.innerHTML = await this.getLocalizedString('regConfirmHeadline');
            }));
            status.appendChild(this.createElement('span', async (span) => {
                span.innerHTML = await this.getLocalizedString('regConfirmCheckEmail');
            }));
            await this.activate(redirect_context_1.RedirectContext.SilentTab, this.data.urlType);
            this.getElement(this.SELECTORS.INLINE_REG).classList.add('hidden');
        }
        else {
            status.classList.add('error');
            status.innerHTML = await this.getLocalizedString('popup_error_generic');
        }
        status.classList.remove('hidden');
    }
    hide() {
        throw new Error("Method not implemented.");
    }
    dismiss() {
        throw new Error("Method not implemented.");
    }
    onUIConstructed() {
        throw new Error("Method not implemented.");
    }
}
exports.InlineRegistration = InlineRegistration;

},{"../../enums/redirect-context":4,"../../enums/runtime-message-types":5,"../runtime-message":15,"./merchant-injection-base":13}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractableInjectionBase = void 0;
const clients_1 = require("../../enums/clients");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
const content_injection_base_1 = require("./content-injection-base");
class InteractableInjectionBase extends content_injection_base_1.ContentInjectionBase {
    constructor(params) {
        super(params);
        this.FONT_FAMILY = 'OpenSans';
        this.UPM_FONT_FAMILY = 'Century Gothic Pro';
        this.BASE_SELECTORS = {
            X: '#x',
            DISMISS: '.dismiss'
        };
        this.css = params.css;
        this.html = params.html;
        this.injectionId = params.injectionId;
        this.parent = params.parent || document.documentElement;
        this.injectDOMContainer();
    }
    get shadowId() {
        return `${this.injectionId}-shadow-container`;
    }
    injectDOMContainer() {
        if (!document.getElementById(this.injectionId)) {
            // For SPAs, this element may already exist. Remove it and inject a new one.
            const container = document.getElementById(this.shadowId);
            if (container) {
                container.remove();
            }
            let shadowContainer = this.createElement('div');
            shadowContainer.id = this.shadowId;
            shadowContainer.style.zIndex = '2147483647';
            if (typeof shadowContainer.attachShadow === 'function') { // Shadow dom is available 
                let shadowRoot = shadowContainer.attachShadow({ mode: 'open' });
                this.root = shadowRoot;
                this.parent.appendChild(shadowContainer);
            }
            else {
                this.root = this.parent;
            }
            let style = this.createElement('style');
            if (this.css) {
                style.innerHTML = Sanitizer.escapeHTML(this.css);
            }
            this.appendStyle(style);
            let injectionContainer = this.createElement('div');
            injectionContainer.id = this.injectionId;
            injectionContainer.style.fontFamily = `${this.data.client === clients_1.Clients.upm ? this.UPM_FONT_FAMILY : this.FONT_FAMILY}, Helvetica, Arial`;
            if (this.html) {
                injectionContainer.innerHTML = this.html;
            }
            this.root.appendChild(injectionContainer);
            this.injectionContainer = injectionContainer;
            return true;
        }
        else {
            return false;
        }
    }
    appendStyle(style) {
        if (this.root === document.documentElement) {
            document.head.appendChild(style);
        }
        else if (this.root) {
            this.root.insertBefore(style, this.root.firstChild);
        }
    }
    getElement(selector) {
        return this.root.querySelector(selector);
    }
    getElements(selector) {
        return Array.from(this.root.querySelectorAll(selector));
    }
    async getLocalizedString(messageName, ...substitutions) {
        var extensionMessage = new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.GetLocalizedString, [messageName, substitutions]);
        return await this.sendExtensionMessage(extensionMessage);
    }
    async setX() {
        const x = this.getElement(this.BASE_SELECTORS.X).querySelector('img');
        x.onerror = () => { x.parentElement.remove(); };
        x.src = await this.getExtensionFilePath('assets/images/close.svg');
    }
    setDismissClicks() {
        this.getElements(this.BASE_SELECTORS.DISMISS).forEach(a => {
            a.onclick = () => { this.dismiss(); };
        });
    }
}
exports.InteractableInjectionBase = InteractableInjectionBase;

},{"../../enums/clients":1,"../../enums/runtime-message-types":5,"../runtime-message":15,"./content-injection-base":7}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponLogDetail = exports.CouponSliderType = exports.CouponLogItem = void 0;
class CouponLogItem {
    constructor(sliderType, data) {
        this.sliderType = sliderType;
        this.merchantID = data.merchant.id;
        this.checkoutUrl = document.location.href;
        this.couponsAvailable = data.merchant.coupons?.length || 0;
        this.merchantSessionID = data.merchantSessionID;
        this.trackingCouponDetails = new Map();
        data.merchant?.coupons?.forEach(c => {
            this.trackingCouponDetails.set(c.code, new CouponLogDetail(c.id));
        });
    }
}
exports.CouponLogItem = CouponLogItem;
var CouponSliderType;
(function (CouponSliderType) {
    CouponSliderType[CouponSliderType["View"] = 1] = "View";
    CouponSliderType[CouponSliderType["Apply"] = 2] = "Apply";
})(CouponSliderType = exports.CouponSliderType || (exports.CouponSliderType = {}));
class CouponLogDetail {
    constructor(id) {
        this.id = id;
    }
}
exports.CouponLogDetail = CouponLogDetail;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewCouponsLogItem = void 0;
const coupon_log_item_1 = require("./coupon-log-item");
class ViewCouponsLogItem extends coupon_log_item_1.CouponLogItem {
    constructor(data) {
        super(coupon_log_item_1.CouponSliderType.View, data);
        this.couponsCopied = 0;
    }
}
exports.ViewCouponsLogItem = ViewCouponsLogItem;

},{"./coupon-log-item":11}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantInjectionBase = void 0;
const page_ids_1 = require("../../enums/page-ids");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const url_types_1 = require("../../enums/url-types");
const runtime_message_1 = require("../runtime-message");
const interactable_injection_base_1 = require("./interactable-injection-base");
class MerchantInjectionBase extends interactable_injection_base_1.InteractableInjectionBase {
    get isCheckout() { return this.data.urlType === url_types_1.UrlTypes.Checkout; }
    async constructCtaString(type, isShort = false) {
        return await this.constructMerchantCtaString(this.data.merchant, this.data.activated, type, isShort);
    }
    activate(redirectContext, urlType = this.data.urlType) {
        let pageId = page_ids_1.PageIds.Default;
        if (this.isCheckout) {
            pageId = page_ids_1.PageIds.CouponSliderClick;
        }
        else if (this.data.urlType === url_types_1.UrlTypes.Merchant) {
            pageId = page_ids_1.PageIds.ActivationSliderClick;
        }
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.Activate, {
            urlType,
            pageId,
            redirectContext,
            merchantId: this.data.merchant.id,
            tabId: this.data.tabId
        }));
    }
    waitForWindowInstance(name) {
        let tries = 1;
        const limit = 10;
        const timeout = 500;
        const prop = `Prdg${this.clientName.toUpperCase()}${name}`;
        return new Promise(res => {
            const wait = () => {
                setTimeout(() => {
                    const instance = window[prop];
                    if (instance) {
                        res(instance);
                    }
                    else if (tries === limit) {
                        res(null);
                    }
                    else {
                        tries++;
                        wait();
                    }
                }, timeout);
            };
            wait();
        });
    }
}
exports.MerchantInjectionBase = MerchantInjectionBase;

},{"../../enums/page-ids":3,"../../enums/runtime-message-types":5,"../../enums/url-types":6,"../runtime-message":15,"./interactable-injection-base":10}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewCouponsBase = void 0;
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const data_utils_1 = require("../../utils/data-utils");
const coupon_injection_base_1 = require("./coupon-injection-base");
const view_coupons_log_item_1 = require("./logging/view-coupons-log-item");
class ViewCouponsBase extends coupon_injection_base_1.CouponInjectionBase {
    constructor(params) {
        super(params);
        this.SELECTORS = {
            COUPON: '.coupon',
            COUPONS: '#coupons',
            NO_COUPONS: '#no-coupons',
            COUPON_CODE: '.coupon-code',
            CLIENT_LOGO: '#client-logo',
            VIEW_COUPONS: '#view-coupons',
            COUPON_COPIED: '.coupon-copied',
            MERCHANT_LOGO: '#merchant-logo',
            COUPON_INTERACTION: '.coupon-interaction',
            MERCHANT_LOGO_CONTAINER: '#merchant-logo-container'
        };
        this.setElements();
    }
    async setElements() {
        await this.setMerchantLogo();
        if (this.data.merchant.coupons.length) {
            await this.setCoupons();
        }
        else {
            await this.setNoCoupons();
        }
        await this.setClientLogo();
        await this.setX();
        this.setDismissClicks();
        this.onUIConstructed();
    }
    async setMerchantLogo() {
        const el = this.getElement(this.SELECTORS.MERCHANT_LOGO);
        el.src = this.data.merchant.img || '';
        el.addEventListener('error', () => {
            const container = this.getElement(this.SELECTORS.MERCHANT_LOGO_CONTAINER);
            container.removeChild(el);
            container.appendChild(this.createElement('h3', async (span) => {
                span.innerText = await this.getLocalizedString('merchantCoupons', this.data.merchant.name);
            }));
        });
    }
    async setCoupons() {
        const copied = await this.getLocalizedString('copied');
        const coupons = this.getElement(this.SELECTORS.COUPONS);
        this.data.merchant.coupons?.forEach((coupon, index) => {
            coupons.appendChild(this.createElement('div', elCoupon => {
                const code = coupon.code;
                elCoupon.className = 'coupon';
                elCoupon.appendChild(this.createElement('div', text => {
                    text.className = 'coupon-text';
                    text.innerText = coupon.description;
                }));
                elCoupon.appendChild(this.createElement('div', interaction => {
                    interaction.className = 'coupon-interaction';
                    interaction.appendChild(this.createElement('span', elCode => {
                        elCode.className = 'coupon-code';
                        elCode.innerText = code;
                    }));
                    interaction.appendChild(this.createElement('span', async (elCopied) => {
                        elCopied.className = 'coupon-copied opaque';
                        elCopied.innerText = copied;
                    }));
                }));
                elCoupon.onclick = () => { this.onInteraction({ index, code }); };
            }));
        });
    }
    async setNoCoupons() {
        const el = this.getElement(this.SELECTORS.NO_COUPONS);
        // TODO: More reward string construction
        const cta = await this.constructCtaString(runtime_message_types_1.RuntimeMessageTypes.ConstructActivateString);
        const plus = await this.getLocalizedString('joinBonusOfferLoggedOutStart');
        const bonus = await this.getLocalizedString('joinBonusOfferLoggedOutMiddle');
        const bottom = await this.getLocalizedString('joinBonusOfferLoggedOutEnd');
        el.innerHTML = `<b>${cta}</b><br />${plus} <b>${bonus}</b> ${bottom}`;
        el.classList.remove('hidden');
    }
    async setClientLogo() {
        const img = this.getElement(this.SELECTORS.CLIENT_LOGO);
        img.onerror = () => { img.remove(); };
        img.src = await this.getExtensionFilePath(this.clientLogoPath);
    }
    dismiss() {
        this.hide();
    }
    hide() {
        this.getElement(this.SELECTORS.VIEW_COUPONS).classList.add('slide');
    }
    onInteraction(detail) {
        const el = this.getElements(this.SELECTORS.COUPON)[detail.index];
        const interaction = el.querySelector(this.SELECTORS.COUPON_INTERACTION);
        const code = interaction.querySelector(this.SELECTORS.COUPON_CODE);
        const copied = interaction.querySelector(this.SELECTORS.COUPON_COPIED);
        interaction.classList.add('active');
        code.classList.add('opaque');
        copied.classList.remove('opaque');
        data_utils_1.DataUtils.copyTextToClipboard(detail.code);
        this.logItem.sliderClicked = 1;
        this.logItem.couponsCopied++;
        setTimeout(() => {
            interaction.classList.remove('active');
            code.classList.remove('opaque');
            copied.classList.add('opaque');
        }, 2000);
    }
    constructLogItem() {
        return new view_coupons_log_item_1.ViewCouponsLogItem(this.data);
    }
}
exports.ViewCouponsBase = ViewCouponsBase;

},{"../../enums/runtime-message-types":5,"../../utils/data-utils":16,"./coupon-injection-base":8,"./logging/view-coupons-log-item":12}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataUtils = void 0;
class DataUtils {
    static getCashBack(amount, isPercentage) {
        amount /= 100;
        let result = Number.isInteger(amount) ? amount : amount.toFixed(2);
        return isPercentage ? `${result}%` : `${result}`;
    }
    static formatCurrencyAmount(amount, currency) {
        let formatted;
        if (currency === '€') {
            formatted = `${amount} ${currency}`; // 10 €
        }
        else {
            formatted = `${currency}${amount}`; // // $10, £10
        }
        return formatted;
    }
    static copyTextToClipboard(couponCode) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(couponCode);
        }
        else {
            const el = document.createElement('textarea');
            el.value = couponCode;
            el.style.opacity = '0';
            el.style.position = 'fixed';
            el.style.width = '0';
            el.style.height = '0';
            el.style.margin = '0';
            el.style.padding = '0';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    }
}
exports.DataUtils = DataUtils;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewCoupons = void 0;
const view_coupons_base_1 = require("../../../objects/src/lib/models/content-injection/view-coupons-base");
const inline_registration_1 = require("../../../objects/src/lib/models/content-injection/inline-registration");
class ViewCoupons extends view_coupons_base_1.ViewCouponsBase {
    constructor(params) {
        super(params);
        this.clientLogoPath = 'assets/images/logo.svg';
    }
    onUIConstructed() {
        if (!this.data.memberId) {
            const target = this.getElement('#inline');
            target.classList.add(this.clientName);
            target.classList.remove('hidden');
            const reg = new inline_registration_1.InlineRegistration({
                injectionId: `${this.clientName}-inline-reg`,
                extensionRuntimeId: this.extensionRuntimeId,
                parent: target,
                data: this.data
            });
        }
    }
}
exports.ViewCoupons = ViewCoupons;
(() => {
    const brand = 'SB';
    window['Prdg'] = window['Prdg'] || {};
    window['Prdg'][brand] = window['Prdg'][brand] || {};
    window['Prdg'][brand]['ViewCoupons'] = ViewCoupons;
})();

},{"../../../objects/src/lib/models/content-injection/inline-registration":9,"../../../objects/src/lib/models/content-injection/view-coupons-base":14}]},{},[17]);
