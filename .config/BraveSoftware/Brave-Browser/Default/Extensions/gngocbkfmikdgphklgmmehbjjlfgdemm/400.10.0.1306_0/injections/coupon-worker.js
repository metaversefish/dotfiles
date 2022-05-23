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

},{"../../enums/clients":1,"../../enums/log-levels":3,"../../enums/runtime-message-types":4,"../runtime-message":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWorkerBase = void 0;
const content_injection_type_1 = require("../../enums/content-injection-type");
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
const content_injection_base_1 = require("./content-injection-base");
class CouponWorkerBase extends content_injection_base_1.ContentInjectionBase {
    constructor(params) {
        super(params);
        this._initialElementsCheckPassed = false;
        this.couponCodes = [];
        this.emptyFn = () => { };
        this.onInitialTotal = this.emptyFn;
        this.onStartProcessCoupon = this.emptyFn;
        this.onSaveCouponResult = this.emptyFn;
        this.onCompleted = this.emptyFn;
        this.onCouponInjectionError = this.emptyFn;
        this.setEventListeners();
        this.initWorker();
    }
    get isJson() { return this._isJson; }
    get testerType() { return this._testerType; }
    get initialElementsCheckPassed() { return this._initialElementsCheckPassed; }
    setEventListeners() {
        const set = (type, fn) => {
            document.addEventListener(type, (e) => {
                if (e.detail.extCode === this.data.client) {
                    fn(e.detail);
                }
            });
        };
        set('initialElementsChecked', (detail) => {
            this.log('Initial elements checked', detail);
            this.onInitialElementsChecked(detail);
        });
        set('initialTotal', (detail) => {
            this.log('Initial total:', detail);
            this.onInitialTotal(detail);
        });
        set('startProcessCoupon', (detail) => {
            this.log('Start process coupon', detail);
            this.onStartProcessCoupon(detail);
        });
        set('saveCouponResult', (detail) => {
            this.log('Save coupon result', detail);
            this.onSaveCouponResult(detail);
        });
        set('showFinalResult', (detail) => {
            this.log('Show final result', detail);
            this.onCompleted(detail);
        });
        set('couponInjectionError', (detail) => {
            this.log('Coupon injection error', detail);
            this.onCouponInjectionError(detail);
        });
        set('logMerchantPageError', (detail) => {
            this.log('C@C merchant script error', detail.errorMessage);
            if (detail.type === 'loudFail') {
                this.onCompleted({ success: false, total: null, amount: null, couponCode: null, couponCodes: null, shouldRefresh: null });
            }
        });
    }
    onInitialElementsChecked(detail) {
        this._initialElementsCheckPassed = detail.passed;
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.InjectContent, {
            data: this.data,
            tabId: this.data.tabId,
            type: content_injection_type_1.ContentInjectionType.Slider
        }));
    }
    initWorker() {
        this._isJson = !!this.data.jsonMerchantDefinition;
        window['CouponInjection'].testedCoupons = [];
        if (this.isJson) {
            this.log('CouponSliderBase is workertype = JSON');
            this._testerType = window['CouponInjection'].WORKER_TYPE_JSON;
            this.couponWorker = new Prdg.CouponInjection.JsonCouponWorker(this.data.jsonMerchantDefinition, this.extensionRuntimeId, this.data.client);
            this.couponWorker.checkInitialElementsJson();
        }
        else {
            var merchantWorker = new CouponMerchantWorker();
            merchantWorker.init($, function () { });
            //this creates couponWorker and kicks off checkInitialState which fires event initialElementsChecked    
            this.couponWorker = Prdg.CouponInjection.CouponWorkerFactory.construct(merchantWorker, this.extensionRuntimeId, this.data.client, Prdg.CouponInjection.elementIds, Prdg.CouponInjection.customFuncs);
            this._testerType = this.couponWorker.merchantWorker.testerType;
            this.log(`CouponSliderBase is Not Json. It is workertype : ${this.couponWorker.merchantWorker.testerType}`);
        }
        // Setting these because the non-JSON merchant "inheritance" pattern needs them
        if (typeof CouponMerchantWorker !== 'undefined') {
            const set = function (self, prop) {
                CouponMerchantWorker.prototype[prop] = self.couponWorker[prop];
                merchantWorker[prop] = merchantWorker[prop] || self.couponWorker[prop];
            };
            set(this, 'pollTimeoutCounter');
            set(this, 'pollInterval');
            set(this, 'waitFor');
            set(this, 'waitForRemoveCoupon');
            set(this, 'triggerEvent');
            set(this, 'setReactCouponCode');
            set(this, 'waitForApplyPromoCode');
            set(this, 'calculateTotalAsync');
            set(this, 'calculateTotal');
            set(this, 'getFirstVisible');
            set(this, 'getFirst');
            merchantWorker.elementIds = merchantWorker.elementIds || Prdg.CouponInjection.elementIds;
            merchantWorker.customFuncs = merchantWorker.customFuncs || Prdg.CouponInjection.customFuncs;
        }
    }
    dedupeCoupons() {
        let coupons = [];
        this.couponCodes = [];
        this.data.merchant.coupons?.forEach(coupon => {
            const code = coupon.code;
            if (!this.couponCodes.some(c => c === code)) {
                this.couponCodes.push(code);
                coupons.push(coupon);
            }
        });
        return coupons;
    }
    process() {
        this.couponWorker.process(this.couponCodes);
    }
}
exports.CouponWorkerBase = CouponWorkerBase;

},{"../../enums/content-injection-type":2,"../../enums/runtime-message-types":4,"../runtime-message":7,"./content-injection-base":5}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponWorker = void 0;
const coupon_worker_base_1 = require("../../../objects/src/lib/models/content-injection/coupon-worker-base");
class CouponWorker extends coupon_worker_base_1.CouponWorkerBase {
    constructor(params) {
        super(params);
    }
}
exports.CouponWorker = CouponWorker;
(() => {
    const brand = 'SB';
    window['Prdg'] = window['Prdg'] || {};
    window['Prdg'][brand] = window['Prdg'][brand] || {};
    window['Prdg'][brand]['CouponWorker'] = CouponWorker;
})();

},{"../../../objects/src/lib/models/content-injection/coupon-worker-base":6}]},{},[8]);
