var highlight=webpackJsonp_name_([11],{293:function(t,n,i){"use strict";function e(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,i){function e(o,s){try{var r=n[o](s),a=r.value}catch(t){return void i(t)}if(!r.done)return Promise.resolve(a).then(function(t){e("next",t)},function(t){e("throw",t)});t(a)}return e("next")})}}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function s(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=i(12),h=i.n(a),l=i(14),c=i(6),d=i(28),g=["wishlist_show","wishlist_color","owned_show","owned_color"],u=window.MutationObserver||window.WebKitMutationObserver,f=function(t){function n(){return o(this,n),s(this,t.apply(this,arguments))}return r(n,t),n.prototype.onLoad=function(){function t(){return i.apply(this,arguments)}var i=e(regeneratorRuntime.mark(function t(){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(g);case 2:i=t.sent,void 0===i.wishlist_color&&(i.wishlist_show=!0,i.wishlist_color=l.b.wishlist),void 0===i.owned_color&&(i.owned_show=!0,i.owned_color=l.b.owned),c.a.set(i),(i.wishlist_show||i.owned_show)&&(n.addHighlightCSS(i),n.startHighlights(i),n.bindAjaxContentHighlighting(i));case 7:case"end":return t.stop()}},t,this)}));return t}(),n.startHighlights=function(t){setTimeout(function(){h.a.each(h()(".ds_flagged"),function(i,e){n.highlightNode(e,t)})},500)},n.highlightNode=function(t,i){var e=t;if(h()(t).hasClass("item")){e=h()(t).find(".info")[0]}if(h()(t).hasClass("home_area_spotlight")){e=h()(t).find(".spotlight_content")[0]}i.owned_show&&h()(t).find(".ds_owned_flag").length>0&&n.highlightOwned(e),i.wishlist_show&&h()(t).find(".ds_wishlist_flag").length>0&&n.highlightWishlist(e)},n.removeBadge=function(t){h()(t).removeClass("ds_flagged").find(".ds_flag").remove(),h()(t).find(".ds_flagged").removeClass("ds_flagged")},n.addHighlightCSS=function(t){var n="\n    .sih_highlight_price {\n      display: inline-block;\n      padding: 1px 4px;\n      background-color: rgba(20,31,44,0.4) !important;\n      border-radius: 1px;\n    }\n    .sih_wishlist {\n      background-color: "+t.wishlist_color+" !important;\n      background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 90%) !important;\n    }\n    .sih_owned {\n      background-color: "+t.owned_color+" !important;\n      background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 90%) !important;\n    }";h()("head").append("<style id='sih_highlight_styles' type='text/css'>"+n+"</style>")},n.hlPrice=function(t){h.a.each(h()(t).find(".discount_prices"),function(t,n){h()(n).addClass("sih_highlight_price")})},n.highlightOwned=function(t){h()(t).addClass("sih_owned"),n.hlPrice(t),n.removeBadge(t)},n.highlightWishlist=function(t){h()(t).addClass("sih_wishlist"),n.hlPrice(t),n.removeBadge(t)},n.bindAjaxContentHighlighting=function(t){new u(function(i){i.forEach(function(i){for(var e=0;e<i.addedNodes.length;e+=1){var o=i.addedNodes[e];("search_result_container"===o.id||o.classList&&o.classList.contains("browse_tag_games"))&&n.startHighlights(t),o.classList&&(o.classList.contains("match")||o.classList.contains("search_result_row")||o.classList.contains("tab_item"))&&n.highlightNode(o,t)}})}).observe(document,{subtree:!0,childList:!0})},n}(d.a);n.default=new f},581:function(t,n,i){i(5),t.exports=i(293)}},[581]);