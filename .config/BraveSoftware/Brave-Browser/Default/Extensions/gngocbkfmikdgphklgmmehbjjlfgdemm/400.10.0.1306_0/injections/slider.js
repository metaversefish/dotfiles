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
exports.ContentInjectionType = void 0;
var ContentInjectionType;
(function (ContentInjectionType) {
    ContentInjectionType[ContentInjectionType["SerpInjection"] = 0] = "SerpInjection";
    ContentInjectionType[ContentInjectionType["Slider"] = 1] = "Slider";
    ContentInjectionType[ContentInjectionType["ViewCoupons"] = 2] = "ViewCoupons";
    ContentInjectionType[ContentInjectionType["ApplyCoupons"] = 3] = "ApplyCoupons";
    ContentInjectionType[ContentInjectionType["CouponWorker"] = 4] = "CouponWorker";
    ContentInjectionType[ContentInjectionType["Notification"] = 5] = "Notification";
    ContentInjectionType[ContentInjectionType["ExtInstalledMessenger"] = 6] = "ExtInstalledMessenger";
    ContentInjectionType[ContentInjectionType["ExtPresentMessenger"] = 7] = "ExtPresentMessenger";
})(ContentInjectionType = exports.ContentInjectionType || (exports.ContentInjectionType = {}));

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderType = void 0;
var SliderType;
(function (SliderType) {
    SliderType[SliderType["Activation"] = 0] = "Activation";
    SliderType[SliderType["Coupons"] = 1] = "Coupons";
    SliderType[SliderType["SHM"] = 2] = "SHM";
})(SliderType = exports.SliderType || (exports.SliderType = {}));

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"../../enums/clients":1,"../../enums/log-levels":3,"../../enums/runtime-message-types":6,"../runtime-message":14}],10:[function(require,module,exports){
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

},{"../../enums/clients":1,"../../enums/runtime-message-types":6,"../runtime-message":14,"./content-injection-base":9}],11:[function(require,module,exports){
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

},{"../../enums/page-ids":4,"../../enums/runtime-message-types":6,"../../enums/url-types":8,"../runtime-message":14,"./interactable-injection-base":10}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderBase = void 0;
const content_injection_type_1 = require("../../enums/content-injection-type");
const redirect_context_1 = require("../../enums/redirect-context");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const slider_type_1 = require("../../enums/slider-type");
const url_types_1 = require("../../enums/url-types");
const runtime_message_1 = require("../runtime-message");
const merchant_injection_base_1 = require("./merchant-injection-base");
const slider_positioner_1 = require("./slider-positioner");
class SliderBase extends merchant_injection_base_1.MerchantInjectionBase {
    constructor(params) {
        super(params);
        this.REWARDS_ACTIVATED = 'rewards-activated';
        this.SELECTORS = {
            X: '#x',
            CTA: '#cta',
            AND: '#and',
            LOGO: '#logo',
            SLIDER: '#slider',
            DISMISS: '.dismiss',
            DISMISS_LINK: '#interaction .dismiss'
        };
        this.setElements();
        this.initEventHandlers();
        this.logImpression();
    }
    get cta() { return this.getElement(this.SELECTORS.CTA); }
    get slider() { return this.getElement(this.SELECTORS.SLIDER); }
    get couponCount() { return this.data.merchant.coupons?.length; }
    get isApplyCoupons() { return this.isCheckout && this.data.merchant.hasMerchantScript && (this.data.merchant.couponApplyEnabled || this.data.memberIsTester); }
    async setElements() {
        await this.setLogo();
        await this.setCTA();
        await this.setAnd();
        await this.setDismiss();
        if (this.data.activated && this.data.urlType !== url_types_1.UrlTypes.Checkout) {
            this.showActivated();
        }
        this.show();
        if (this.data.activated && (this.data.type !== slider_type_1.SliderType.Coupons && this.data.urlType !== url_types_1.UrlTypes.Checkout)) {
            this.showActivated();
        }
        this.onUIConstructed();
    }
    async setLogo() {
        const path = 'assets/redesign/images/slider-logo.svg';
        const img = this.getElement(this.SELECTORS.LOGO);
        img.onerror = () => { img.parentElement.remove(); };
        img.src = await this.getExtensionFilePath(path);
    }
    async setCTA() {
        await this.setCTAText();
        this.cta.onclick = () => { this.onInteraction(); };
    }
    async setCTAText() {
        let cta;
        if (this.data.type === slider_type_1.SliderType.Activation) {
            cta = await this.constructCtaString(runtime_message_types_1.RuntimeMessageTypes.ConstructActivateString);
        }
        else if (this.data.type === slider_type_1.SliderType.Coupons) {
            // TODO: move this string construction into the messages.json files rather than manually cobbling it together.
            // https://jira.prodegehq.com/browse/BTN-2207 
            let rewardHtml = '';
            const reward = await this.constructCtaString(runtime_message_types_1.RuntimeMessageTypes.ConstructActivateString, true);
            if (reward && !this.data.activated) {
                const and = await this.getLocalizedString('and');
                rewardHtml = `<span>${and} ${reward}</span>`;
            }
            const couponWorker = await this.waitForWindowInstance('CouponWorker');
            if (this.isApplyCoupons && couponWorker.initialElementsCheckPassed) {
                const count = couponWorker.dedupeCoupons().length;
                cta = await this.getLocalizedString(count === 1 ? 'applyCoupon' : 'applyCoupons', count.toString());
                if (!this.data.activated && !this.data.merchant.isZeroPayout) {
                    cta += rewardHtml;
                }
                this.couponWorkerInitialElementsCheckPassed = true;
            }
            else {
                if (!this.data.memberId && !this.couponCount) {
                    cta = reward;
                }
                else {
                    const showCoupons = await this.getLocalizedString(this.couponCount === 1 ? 'showCoupon' : 'showCoupons', this.couponCount.toString());
                    if (this.data.urlType === url_types_1.UrlTypes.Checkout || (!this.data.merchant.couponApplyEnabled && !this.data.activated)) {
                        cta = `${showCoupons} ${rewardHtml}`;
                    }
                    else {
                        cta = this.data.activated ? showCoupons : `${showCoupons} ${rewardHtml}`;
                    }
                }
            }
        }
        this.cta.innerHTML = cta;
    }
    async setAnd() {
        const and = this.getElement(this.SELECTORS.AND);
        const couponCount = this.data.merchant.coupons?.length;
        if (this.data.type === slider_type_1.SliderType.Activation && this.data.urlType !== url_types_1.UrlTypes.Checkout && !this.data.activated && couponCount) {
            if (couponCount === 1) {
                and.innerHTML = await this.getLocalizedString('slider_and_coupon');
            }
            else {
                and.innerHTML = await this.getLocalizedString('slider_and_coupons', this.couponCount.toString());
            }
            and.classList.remove('hidden');
        }
        else {
            this.cta.classList.add('no-and');
        }
    }
    async setDismiss() {
        this.setX();
        this.getElement(this.SELECTORS.DISMISS_LINK).innerText = await this.getLocalizedString('remindMeLater');
        this.getElements(this.SELECTORS.DISMISS).forEach(a => {
            a.onclick = () => { this.dismiss(); };
        });
    }
    show() {
        // Wait for more things to be loaded on the page to keep the animation from being choppy.
        // It also makes the slider feel separate from the rest of the page.
        setTimeout(() => {
            this.slider.classList.add('slide');
            setTimeout(() => {
                this.positioner.check();
            }, 1000);
        }, 1000);
    }
    initEventHandlers() {
        document.addEventListener(this.REWARDS_ACTIVATED, (evt) => {
            // don't show the activated slider if the user clicked to show coupons. MTJ-TODO
            //if (!this.showingCoupons) {
            if (evt.detail.client === this.data.client) {
                this.data.activated = true;
                this.showActivated();
            }
            //}
        });
    }
    logImpression() {
        // In the current code, this seems to fire regardless of the slider type: activation, view coupons, or apply coupons. Is that correct?
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.LogImpression, this.data.tabId));
        // Don't show slider when user is deep into the site
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.SetActivationInjected, { tabId: this.data.tabId }));
        if (this.data.activated) {
            // We've activated and injected, effectively "confirming activation."
            // Mark the tab injection state accordingly.
            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.SetActivationConfirmed, { tabId: this.data.tabId }));
        }
    }
    async showActivated() {
        await this.setCTAText();
        this.cta.classList.add('activated');
        this.getElement(this.SELECTORS.DISMISS_LINK).classList.add('hidden');
        this.getElement(this.BASE_SELECTORS.X).onclick = () => { this.hide(); }; // reset so we don't log the dismissed event 
        if (!this.slider.classList.contains('slide')) {
            this.slider.classList.add('slide');
        }
        setTimeout(() => {
            this.hide();
        }, 5000);
    }
    dismiss() {
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.DismissActivation, { tabId: this.data.tabId }));
        this.hide();
    }
    hide() {
        this.slider.classList.remove('slide');
    }
    onInteraction(redirectContext = redirect_context_1.RedirectContext.Default) {
        if (!this.data.activated) {
            this.activate(redirectContext);
        }
        if (this.data.type === slider_type_1.SliderType.Coupons) {
            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.SetActivationConfirmed, { tabId: this.data.tabId }));
            const injection = this.isApplyCoupons && this.couponWorkerInitialElementsCheckPassed ? content_injection_type_1.ContentInjectionType.ApplyCoupons : content_injection_type_1.ContentInjectionType.ViewCoupons;
            this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.InjectContent, {
                type: injection,
                tabId: this.data.tabId,
                data: this.data
            }));
            this.slider.classList.add('hidden');
            this.hide();
        }
        else {
            setTimeout(() => {
                this.hide();
            }, 500);
        }
    }
    onUIConstructed() {
        this.positioner = new slider_positioner_1.SliderPositioner(this.slider, this.shadowId);
    }
}
exports.SliderBase = SliderBase;

},{"../../enums/content-injection-type":2,"../../enums/redirect-context":5,"../../enums/runtime-message-types":6,"../../enums/slider-type":7,"../../enums/url-types":8,"../runtime-message":14,"./merchant-injection-base":11,"./slider-positioner":13}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderPositioner = void 0;
class SliderPositioner {
    constructor(slider, shadowContainerId) {
        this.rechecks = 0;
        this.slider = slider;
        this.shadowContainerId = shadowContainerId;
    }
    async check() {
        // 1. See if there is another element above this slider.
        // 2. If there is, move up or down, depending on current position, so this slider is visible.
        // Assuming slider is initially covered.
        // Move wait half sec
        // Slider still covered
        // Move wait half sec
        // Slider NOT covered
        // start 5 rechecks now... every 5 seconds... (nothing ever covering)
        const bounds = this.slider.getBoundingClientRect();
        const coveringEl = this.getCoveringElement(bounds);
        if (coveringEl) {
            this.move(bounds);
            setTimeout(() => {
                this.check();
                this.rechecks = 0;
            }, 500);
        }
        else if (this.rechecks < 5) {
            // Keep checking a few times. Sometimes other sliders or whatever show up late and cover.
            setTimeout(() => {
                this.check();
            }, 5000);
            this.rechecks++;
        }
    }
    getCoveringElement(bounds) {
        let coveringEl;
        // Get the left and right points
        const horizontalPoints = [
            bounds.left + (0.1 * bounds.width),
            bounds.right - (0.1 * bounds.width)
        ];
        // Get the top and bottom points
        const verticalPoints = [
            bounds.top + (0.1 * bounds.height),
            bounds.bottom - (0.1 * bounds.height)
        ];
        // See if there is a different element above this one
        for (let x = 0; x < horizontalPoints.length; x++) {
            for (let y = 0; y < verticalPoints.length; y++) {
                const el = document.elementFromPoint(horizontalPoints[x], verticalPoints[y]);
                if (el && el.id !== this.shadowContainerId) {
                    coveringEl = el;
                    break;
                }
            }
            if (coveringEl) {
                break;
            }
        }
        return coveringEl;
    }
    move(bounds) {
        // If the slider starts at the top of the page, move it down. Otherwise up.
        if (bounds.top < (screen.height / 2)) {
            this.slider.style.top = `${bounds.top + bounds.height + 20}px`;
        }
        else {
            this.slider.style.bottom = 'auto';
            this.slider.style.top = `${bounds.top - bounds.height - 20}px`;
        }
    }
}
exports.SliderPositioner = SliderPositioner;

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const slider_base_1 = require("../../../objects/src/lib/models/content-injection/slider-base");
class Slider extends slider_base_1.SliderBase {
    constructor(params) {
        super(params);
    }
}
exports.Slider = Slider;
(() => {
    const brand = 'SB';
    window['Prdg'] = window['Prdg'] || {};
    window['Prdg'][brand] = window['Prdg'][brand] || {};
    window['Prdg'][brand]['Slider'] = Slider;
})();

},{"../../../objects/src/lib/models/content-injection/slider-base":12}]},{},[15]);
