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

},{"../../enums/clients":1,"../../enums/log-levels":2,"../../enums/runtime-message-types":3,"../runtime-message":7}],5:[function(require,module,exports){
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

},{"../../enums/clients":1,"../../enums/runtime-message-types":3,"../runtime-message":7,"./content-injection-base":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationBase = void 0;
const runtime_message_types_1 = require("../../enums/runtime-message-types");
const runtime_message_1 = require("../runtime-message");
const interactable_injection_base_1 = require("./interactable-injection-base");
class NotificationBase extends interactable_injection_base_1.InteractableInjectionBase {
    constructor(params) {
        super(params);
        this.SELECTORS = {
            ICON: '#icon img',
            TEXT: '#text',
            LINK: '#link',
            TITLE: '#title',
            NOTIFICATION: '#notification'
        };
        this.setElements();
    }
    async setElements() {
        await this.setIcon();
        this.setTitle();
        this.setText();
        this.setLink();
        this.setX();
        this.setDismissClicks();
    }
    async setIcon() {
        const src = await this.getExtensionFilePath(this.data.icon);
        this.getElement(this.SELECTORS.ICON).src = src;
    }
    setTitle() {
        if (this.data.title) {
            this.getElement(this.SELECTORS.TITLE).innerHTML = this.data.title;
        }
    }
    setText() {
        if (this.data.text) {
            this.getElement(this.SELECTORS.TEXT).innerHTML = this.data.text;
        }
    }
    setLink() {
        const link = this.getElement(this.SELECTORS.LINK);
        link.innerHTML = this.data.linkText;
        link.onclick = () => { this.onInteraction(); };
    }
    hide() {
        this.getElement(this.SELECTORS.NOTIFICATION).classList.add('hidden');
    }
    dismiss() {
        this.hide();
    }
    onInteraction(detail) {
        this.sendExtensionMessage(new runtime_message_1.RuntimeMessage(runtime_message_types_1.RuntimeMessageTypes.NotificationClicked, this.data.id));
        this.hide();
    }
    onUIConstructed() {
        throw new Error("Method not implemented.");
    }
}
exports.NotificationBase = NotificationBase;

},{"../../enums/runtime-message-types":3,"../runtime-message":7,"./interactable-injection-base":5}],7:[function(require,module,exports){
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
exports.Notification = void 0;
const notification_base_1 = require("../../../objects/src/lib/models/content-injection/notification-base");
class Notification extends notification_base_1.NotificationBase {
    constructor(params) {
        super(params);
    }
}
exports.Notification = Notification;
(() => {
    const brand = 'SB';
    window['Prdg'] = window['Prdg'] || {};
    window['Prdg'][brand] = window['Prdg'][brand] || {};
    window['Prdg'][brand]['Notification'] = Notification;
})();

},{"../../../objects/src/lib/models/content-injection/notification-base":6}]},{},[8]);
