var gamestat=webpackJsonp_name_([12],{291:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var o=e[a](i),c=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=n(12),u=n.n(c),s=n(28),p=n(9),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};window.SIHID||(window.SIHID=chrome.runtime.id||"cmeakgjggjdlcpncigglobpjbkabhmjl");var f=[{attributes:{target:"page",targetType:"page",action:"view"},addListener:function(t){t(this.attributes)}},{attributes:{target:"add-to-your-wishlist",targetType:"button",action:"click"},el:function(){return u()("#add_to_wishlist_area>a.add_to_wishlist")},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}},{attributes:{target:"follow",targetType:"button",action:"click"},el:function(){return u()("#queueBtnFollow>div.queue_btn_inactive")},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}},{attributes:{target:"ignore",targetType:"button",action:"click"},el:function(){return u()("#ignoreBtn>div.queue_btn_ignore>div.queue_btn_inactive")},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}},{attributes:{target:"share",targetType:"button",action:"click"},el:function(){return u()("#shareEmbedRow").children().eq(0)},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}},{attributes:{target:"Embed",targetType:"button",action:"click"},el:function(){return u()("#shareEmbedRow").children().eq(1)},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}},{attributes:{target:"report-this-product",targetType:"button",action:"click"},el:function(){return u()("#shareEmbedRow").children().eq(2)},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}},{attributes:{target:"community-hub",targetType:"button",action:"click"},el:function(){return u()('div.apphub_OtherSiteInfo>a>span:contains("Community Hub")').parent()},addListener:function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.el().click(function(){return t.apply(void 0,[e.attributes].concat(r))})}}],h=function(t){function e(n){a(this,e);var r=i(this,t.call(this));return r.events=n,r}return o(e,t),e.prototype.onLoad=function(){function t(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function t(){var n,r,a,i,o,c,u,s,l,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:e.parseGameName(),appId:p.a.getAppId(window.location.href)},r=e.parseLangAndCountry(),a=r.country,i=r.lang,t.next=4,e.getUID();case 4:o=t.sent,c=this.events,u=Array.isArray(c),s=0,c=u?c:c[Symbol.iterator]();case 6:if(!u){t.next=12;break}if(!(s>=c.length)){t.next=9;break}return t.abrupt("break",20);case 9:l=c[s++],t.next=16;break;case 12:if(s=c.next(),!s.done){t.next=15;break}return t.abrupt("break",20);case 15:l=s.value;case 16:f=l,f.addListener(function(t){var r=t.target,c=t.targetType,u=t.action;return e.registerEvent({data:n,target:r,targetType:c,action:u,lang:i,country:a,uid:o})});case 18:t.next=6;break;case 20:case"end":return t.stop()}},t,this)}));return t}(),e.parseGameName=function(){return u()(".apphub_AppName:first").text().replace(/(\u2122)/g,"").replace(/(\xAE)/g,"")},e.registerEvent=function(t){var n={type:e.EVENT_TYPE,payload:l({},t,{group:e.EVENT_GROUP,link:location.href})};chrome.runtime.sendMessage(window.SIHID,{type:"EVENT_STORE",data:n})},e.parseLangAndCountry=function(){var t={lang:e.DEFAULT_LANG,country:e.DEFAULT_COUNTRY};try{var n=JSON.parse(u()("#application_config").attr("data-config"));t.lang=(n.LANGUAGE||e.DEFAULT_LANG).toLowerCase(),t.country=(n.COUNTRY||e.DEFAULT_COUNTRY).toLowerCase()}catch(t){}return t},e.getUID=function(){function t(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",new Promise(function(t){chrome.storage.sync.get({sih_token:""},function(n){var r=n.sih_token;return t(r||e.DEFAULT_UID)})}));case 4:t.prev=4,t.t0=t.catch(0);case 6:return t.abrupt("return",e.DEFAULT_UID);case 7:case"end":return t.stop()}},t,this,[[0,4]])}));return t}(),e}(s.a);h.EVENT_GROUP="game-page-events",h.EVENT_TYPE="events",h.DEFAULT_COUNTRY="n/a",h.DEFAULT_LANG="n/a",h.DEFAULT_UID="n/a",e.default=new h(f)},579:function(t,e,n){n(5),t.exports=n(291)}},[579]);