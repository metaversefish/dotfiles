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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyCouponsBase = void 0;
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
const coupon_injection_base_1 = require("./coupon-injection-base");
const apply_coupons_log_item_1 = require("./logging/apply-coupons-log-item");
class ApplyCouponsBase extends coupon_injection_base_1.CouponInjectionBase {
    constructor(params) {
        super(params);
        this.SELECTORS = {
            TITLE: '#title',
            HEADER: '#header',
            FOOTER: '#footer',
            RESULT: '#result',
            PROGRESS: '#progress-inner',
            CONTINUE: '#continue',
            COMPLETE: '#complete',
            CONTAINER: '#apply-coupons-container',
            PROCESSING: '#processing',
            STATUS_TEXT: '#status-text',
            STATUS_CODE: '#status-code',
            STATUS_COUNT: '#status-count',
            APPLY_COUPONS: '#apply-coupons'
        };
        this.HIDDEN_CLASS = 'hidden';
        this.couponIndex = 0;
        this.initWorker().then(() => {
            this.setEventListeners();
            this.setElements().then(() => {
                this.couponWorker.process();
            });
        });
    }
    get couponCount() { return this.data.merchant.coupons.length; }
    get statusCountElement() { return this.getElement(this.SELECTORS.STATUS_COUNT); }
    get titleElement() { return this.getElement(this.SELECTORS.TITLE); }
    get headerElement() { return this.getElement(this.SELECTORS.HEADER); }
    get footerElement() { return this.getElement(this.SELECTORS.FOOTER); }
    get continueElement() { return this.getElement(this.SELECTORS.CONTINUE); }
    get headerImageElement() { return this.headerElement.querySelector('img'); }
    async initWorker() {
        this.couponWorker = await this.waitForWindowInstance('CouponWorker');
        this.logItem.merchantScriptWorkerType = this.couponWorker.testerType;
        if (this.couponWorker.isJson) {
            this.logItem.merchantScriptActive = 1;
        }
        else {
            this.logItem.merchantScriptActive = this.data.merchant.hasMerchantScript ? 1 : 0;
        }
        this.data.merchant.coupons = this.couponWorker.dedupeCoupons();
        this.logItem.couponsAvailable = this.data.merchant.coupons.length;
    }
    async setElements() {
        await this.setHeader();
        await this.setTitle(this.titleElement);
        await this.setStatusText(this.getElement(this.SELECTORS.STATUS_TEXT));
        await this.setFooter(this.footerElement);
        await this.setX();
        this.setDismissClicks();
    }
    async setHeader() {
        this.headerElement.appendChild(this.createElement('img', async (img) => {
            img.src = await this.getHeaderImage();
        }));
    }
    async addTitleTestingCodesText(title) {
        title.appendChild(this.createElement('div', async (div) => {
            div.innerText = await this.getLocalizedString('testingCouponCodes');
        }));
    }
    async addTitleTestingCodesDescriptionText(title) {
        title.appendChild(this.createElement('div', async (div) => {
            div.id = 'testing-codes-desc';
            div.innerHTML = await this.getLocalizedString('testingCouponCodesSaveMoney');
        }));
    }
    async setStatusTextApplying(statusText) {
        statusText.innerText = await this.getLocalizedString('applyingCouponsPurchase');
    }
    async setStatusCountText(statusCount) {
        statusCount.innerText = await this.getLocalizedString('applyingCouponsCount', this.couponIndex.toString(), this.couponCount.toString());
    }
    async addFooterImage(footer, image) {
        footer.appendChild(this.createElement('img', img => {
            img.src = image;
        }));
    }
    setEventListeners() {
        this.couponWorker.onInitialTotal = (detail) => { this.setInitialTotal(detail); };
        this.couponWorker.onStartProcessCoupon = (detail) => { this.startProcessCoupon(detail); };
        this.couponWorker.onSaveCouponResult = (detail) => { this.saveCouponResult(detail); };
        this.couponWorker.onCompleted = (detail) => { this.onCompleted(detail); };
        this.couponWorker.onCouponInjectionError = (detail) => { this.onCouponInjectionError(detail); };
    }
    setInitialTotal(detail) {
        this.logItem.cartTotalInitial = this.formatCurrencyForLog(detail.total);
    }
    async startProcessCoupon(detail) {
        this.logItem.sliderClicked = 1;
        this.couponIndex++;
        await this.updateProgress();
        document.dispatchEvent(new CustomEvent('coupon-attempted'));
        this.setStatusCode(this.getElement(this.SELECTORS.STATUS_CODE), detail.coupon);
    }
    async updateProgress() {
        const percent = (this.couponIndex / this.couponCount) * 100;
        this.getElement(this.SELECTORS.PROGRESS).style.width = `${percent}%`;
        await this.setStatusCount(this.statusCountElement);
    }
    saveCouponResult(detail) {
        let logDetail = this.logItem.trackingCouponDetails.get(detail.couponCode);
        logDetail.attempted = 1;
        this.logItem.couponsAttempted++;
        logDetail.savings = this.formatCurrencyForLog(detail.savings);
        logDetail.cartTotal = this.formatCurrencyForLog(detail.total);
        switch (detail.message) {
            case 'failure':
                logDetail.failed = detail.savings ? 0 : 1;
                this.logItem.couponsFailed++;
                break;
            case 'success':
                logDetail.succeeded = detail.savings ? 1 : 0;
                this.logItem.couponsSucceeded++;
                break;
            default:
                logDetail.erred = 1;
                this.logItem.couponsErred++;
                break;
        }
        this.logItem.trackingCouponDetails.set(detail.couponCode, logDetail);
    }
    async onCompleted(detail) {
        this.logItem.cartDiscountCalculated = this.formatCurrencyForLog(detail.amount);
        this.calculateFinalTotal(detail.total);
        this.logCouponApplied(detail.couponCode, detail.couponCodes);
        if (detail.shouldRefresh) {
            this.shouldRefreshAfterContinueToCheckout = true;
        }
        this.trySendLog();
        this.showCompletedUI(detail);
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.ResetCouponCoolDown, this.data.tabId));
    }
    calculateFinalTotal(total) {
        if (total && total > 0) {
            this.logItem.cartTotalFinal = this.formatCurrencyForLog(total);
        }
        else {
            // api merchants might not have final coupon applied yet, need to loop through object and find lowest cartTotal
            this.logItem.cartTotalFinal = Array.from(this.logItem.trackingCouponDetails.values())
                .map((e) => e.cartTotal)
                .sort()[0];
        }
    }
    logCouponApplied(couponCode, couponCodes) {
        const setApplied = (code) => {
            let detail = this.logItem.trackingCouponDetails.get(code);
            detail.applied = 1;
            this.logItem.trackingCouponDetails.set(code, detail);
        };
        // if there is a couponcode, then we know that it applied the coupon, and we need to update the applied for that coupon.
        // stackable and more than one code worked. Only can happen with Stackable
        if (couponCodes) {
            couponCodes.forEach(code => {
                setApplied(code);
                this.logItem.couponsApplied++;
            });
        }
        else if (couponCode) {
            setApplied(couponCode);
            this.logItem.couponsApplied = 1;
        }
    }
    async showCompletedUI(detail) {
        this.getElement(this.SELECTORS.PROCESSING).classList.add(this.HIDDEN_CLASS);
        await this.showResult(this.getElement(this.SELECTORS.RESULT), detail);
        this.continueElement.innerText = await this.getLocalizedString('continueToCheckout');
        this.continueElement.onclick = () => { this.continueToCheckout(); };
        this.getElement(this.SELECTORS.COMPLETE).classList.remove(this.HIDDEN_CLASS);
    }
    async continueToCheckout() {
        this.hide();
        if (this.shouldRefreshAfterContinueToCheckout) {
            //reset cooldown in case user let Continue Checkout sit for awhile before clicking, since we are getting ready to reload for api merchant
            await this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.ResetCouponCoolDown, this.data.tabId));
            // Don't show activation slider after reloading no matter the tab is activated or not. We have already tried activation
            // Activated (Activation succeeded before applying coupons) OR Not Activated (Activation failed before applying coupons)
            await this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.SetActivationInjected, { tabId: this.data.tabId }));
            // Activated
            await this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.SetActivationConfirmed, { tabId: this.data.tabId }));
            document.location.reload();
        }
    }
    onCouponInjectionError(detail) {
        this.logItem.trackingCouponDetails.set('errors', {
            extCode: detail.extCode,
            message: detail.message
        });
    }
    async getContentInjectionImagePath(file) {
        return await this.getExtensionFilePath(`assets/images/coupon-injection/${file}`);
    }
    dismiss() {
        this.hide();
    }
    hide() {
        this.getElement(this.SELECTORS.CONTAINER).classList.add(this.HIDDEN_CLASS);
    }
    constructLogItem() {
        return new apply_coupons_log_item_1.ApplyCouponsLogItem(this.data);
    }
    onInteraction(detail) {
        throw 'Apply coupons is automatic. There is no onInteraction implementation.';
    }
    onUIConstructed() {
        throw new Error('Method not implemented.');
    }
}
exports.ApplyCouponsBase = ApplyCouponsBase;

},{"../../enums/runtime-message-types":4,"../runtime-message":13,"./coupon-injection-base":8,"./logging/apply-coupons-log-item":10}],7:[function(require,module,exports){
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

},{"../../enums/clients":1,"../../enums/log-levels":2,"../../enums/runtime-message-types":4,"../runtime-message":13}],8:[function(require,module,exports){
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

},{"../../enums/runtime-message-types":4,"../runtime-message":13,"./merchant-injection-base":12}],9:[function(require,module,exports){
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

},{"../../enums/clients":1,"../../enums/runtime-message-types":4,"../runtime-message":13,"./content-injection-base":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyCouponsLogItem = void 0;
const coupon_log_item_1 = require("./coupon-log-item");
class ApplyCouponsLogItem extends coupon_log_item_1.CouponLogItem {
    constructor(data) {
        super(coupon_log_item_1.CouponSliderType.Apply, data);
        this.couponsErred = 0;
        this.couponsFailed = 0;
        this.couponsApplied = 0;
        this.couponsAttempted = 0;
        this.couponsSucceeded = 0;
        this.cartTotalFinal = 0;
        this.cartTotalInitial = 0;
        this.cartDiscountCalculated = 0;
        this.autoApplyActive = data.merchant.couponApplyEnabled ? 1 : 0;
    }
}
exports.ApplyCouponsLogItem = ApplyCouponsLogItem;

},{"./coupon-log-item":11}],11:[function(require,module,exports){
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

},{"../../enums/page-ids":3,"../../enums/runtime-message-types":4,"../../enums/url-types":5,"../runtime-message":13,"./interactable-injection-base":9}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyCoupons = void 0;
const apply_coupons_base_1 = require("../../../objects/src/lib/models/content-injection/apply-coupons-base");
const runtime_message_types_1 = require("../../../objects/src/lib/enums/runtime-message-types");
const runtime_message_1 = require("../../../objects/src/lib/models/runtime-message");
const data_utils_1 = require("../../../objects/src/lib/utils/data-utils");
class ApplyCoupons extends apply_coupons_base_1.ApplyCouponsBase {
    constructor(params) {
        super(params);
    }
    async getHeaderImage() {
        return await this.getContentInjectionImagePath('working.gif');
    }
    async setTitle(el) {
        await this.addTitleTestingCodesText(el);
        await this.addTitleTestingCodesDescriptionText(el);
    }
    async setStatusText(el) {
        await this.setStatusTextApplying(el);
    }
    async setStatusCount(el) {
        await this.setStatusCountText(el);
    }
    async setFooter(el) {
        const image = await this.getContentInjectionImagePath('foot.png');
        this.addFooterImage(el, image);
    }
    setStatusCode(el, code) {
        el.classList.remove(this.HIDDEN_CLASS);
        el.innerText = code;
    }
    async showResult(el, detail) {
        await this.showFinalHeader(detail.success);
        await this.constructResultUI(el, detail.success, detail.amount);
    }
    async showFinalHeader(success) {
        const imageName = success ? 'flex' : 'towel';
        const image = await this.getContentInjectionImagePath(`${imageName}.gif`);
        this.headerImageElement.src = image;
    }
    async constructResultUI(el, success, amount) {
        const merchant = this.data.merchant;
        el.appendChild(this.createElement('div', async (div) => {
            const titleMsg = success ? 'successfullyAppliedCoupons' : 'didNotFindBetterCoupon';
            div.innerText = await this.getLocalizedString(titleMsg);
        }));
        el.appendChild(this.createElement('div', async (div) => {
            if (success) {
                const currency = await this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.GetCurrencySymbol, merchant));
                div.className = 'highlight-main';
                div.innerHTML = data_utils_1.DataUtils.formatCurrencyAmount(amount, currency);
            }
            else {
                div.className = 'highlight';
                div.innerText = await this.getLocalizedString('alreadyBestPrice');
            }
        }));
        if (merchant.reward?.amount) {
            el.appendChild(this.createElement('img', async (img) => {
                img.src = await this.getContentInjectionImagePath('plus.png');
            }));
            el.appendChild(this.createElement('div', async (div) => {
                div.className = 'highlight';
                div.innerHTML = await this.constructCtaString(runtime_message_types_1.RuntimeMessageTypes.ConstructRewardString);
            }));
            el.appendChild(this.createElement('div', async (div) => {
                const msg = this.data.merchant.reward.showUpTo ? 'popup_merchant_earn_currency_per_up_to' : 'popup_merchant_earn_currency_per';
                div.innerHTML = await this.getLocalizedString(msg, this.data.merchant.reward.amount.toString(), this.data.location.currencySymbol);
            }));
        }
    }
}
exports.ApplyCoupons = ApplyCoupons;
(() => {
    const brand = 'SB';
    window['Prdg'] = window['Prdg'] || {};
    window['Prdg'][brand] = window['Prdg'][brand] || {};
    window['Prdg'][brand]['ApplyCoupons'] = ApplyCoupons;
})();

},{"../../../objects/src/lib/enums/runtime-message-types":4,"../../../objects/src/lib/models/content-injection/apply-coupons-base":6,"../../../objects/src/lib/models/runtime-message":13,"../../../objects/src/lib/utils/data-utils":14}]},{},[15]);
