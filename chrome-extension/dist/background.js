(()=>{var t={228:t=>{t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},858:t=>{t.exports=function(t){if(Array.isArray(t))return t}},926:t=>{function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:t=>{function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}},860:t=>{t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},884:t=>{t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}},521:t=>{t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(t,e,r)=>{var n=r(858),o=r(884),i=r(379),a=r(521);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()}},551:(t,e,r)=>{var n=r(858),o=r(860),i=r(379),a=r(521);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},379:(t,e,r)=>{var n=r(228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},757:(t,e,r)=>{t.exports=r(666)},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new I(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==r&&n.call(x,i)&&(w=x);var L=g.prototype=d.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=L.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),c(L,u,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(38),e=r.n(t),n=r(551),o=r.n(n),i=r(757),a=r.n(i),u=r(926),c=r.n(u),s=r(575),f=r.n(s),l=r(913),h=r.n(l),p=function(){function t(e,r){f()(this,t),this.serverUrl=e,this.user=r.user,this.repo=r.repo,this.pr=r.pr}var e;return h()(t,[{key:"fetchPullRequestCommitsDetails",value:function(){var t=this.serverUrl+"/api/pullRequestInfo/"+this.user+"/"+this.repo+"/"+this.pr;return fetch(t).then((function(t){if(t.ok)return t.json();throw"Could not fetch pull request information for this PR! Response status: ".concat(t.status," for url: ").concat(t.url)}))}},{key:"fetchPullRequestCommitsDetails",value:function(){var t=this.serverUrl+"/api/pullRequestInfo/"+this.user+"/"+this.repo+"/"+this.pr;return fetch(t).then((function(t){if(t.ok)return t.json();throw"Could not fetch pull request information for this PR! Response status: ".concat(t.status," for url: ").concat(t.url)}))}},{key:"fetchFilesInfo",value:function(t,e){var r=this.fetchFileInfo(t.targetOid,e),n=this.fetchFileInfo(t.commitOids[0],e);return Promise.all([r,n]).then((function(t){return{oldPackageInfo:t[0],newPackageInfo:t[1]}}))}},{key:"fetchFileInfo",value:(e=c()(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.serverUrl+"/api/projectInfo/"+this.user+"/"+this.repo+"/"+e,t.abrupt("return",fetch(n,{method:"POST",credentials:"omit",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(t){if(t.ok)return t.json();if(404===t.status)return{};throw"Could not fetch izuna project info! Response status: ".concat(t.status," for url: ").concat(t.url)})));case 2:case"end":return t.stop()}}),t,this)}))),function(t,r){return e.apply(this,arguments)})}]),t}();chrome.runtime.onInstalled.addListener((function(){chrome.storage.sync.set({enableIzuna:!0})})),chrome.tabs.onUpdated.addListener((function(t,r,n){chrome.declarativeContent.onPageChanged.removeRules(void 0,(function(){chrome.declarativeContent.onPageChanged.addRules([{conditions:[new chrome.declarativeContent.PageStateMatcher({pageUrl:{hostEquals:"github.com"}})],actions:[new chrome.declarativeContent.ShowPageAction]}])})),chrome.storage.sync.get("enableIzuna",(function(t){if(t.enableIzuna){var i=function(t,r,n){var i=new URL(n.url);if(r&&r.status&&"complete"===r.status&&n.active&&"complete"===n.status&&"github.com"===i.hostname){var a=i.pathname.split("/")[3],u=i.pathname.split("/")[5];if("pull"===a&&"files"===u){var c=i.pathname.split("/"),s=o()(c),f=(s[0],s[1]),l=s[2],h=(s[3],s[4]),p=(s.slice(5),{user:f,repo:l,pr:h});return Object.entries(p).forEach((function(t){var r=e()(t,2),n=r[0];if(!r[1])throw"Could not retrieve pull request info for key: ".concat(n)})),p}}return!1}(0,r,n);if(i){var a=new p("https://izuna.app",i);a.fetchPullRequestCommitsDetails(i).then((function(t){chrome.tabs.sendMessage(n.id,{cmd:"whichFiles"},(function(e){a.fetchFilesInfo(t,e).then((function(t){chrome.tabs.sendMessage(n.id,t,(function(t){}))}))}))}))}}}))}))})()})();