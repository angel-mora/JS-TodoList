!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([,function(t,e,n){var r=n(3),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}var i,s,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&a[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],a=0;a<t.length;a++){var o=t[a],u=e.base?o[0]+e.base:o[0],c=n[u]||0,d="".concat(u," ").concat(c);n[u]=c+1;var l=s(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:d,updater:p(f,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function m(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,g=0;function p(t,e){var n,r,a;if(e.singleton){var o=g++;n=h||(h=c(e)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=c(e),r=m.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=u(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=o}}}},function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r)()(!1);a.push([t.i,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n*:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.todoHeader {\r\n  display: flex !important;\r\n  justify-content: space-between !important;\r\n  width: 100% !important;\r\n  color: #555;\r\n}\r\n\r\n.addTodoBtn {\r\n  margin-left: 45%;\r\n}\r\n\r\n.project-accordon {\r\n  width: 70%;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .project-accordon {\r\n    width: 97%;\r\n  }\r\n}\r\n",""]),e.default=a},function(t,e,n){"use strict";n.r(e);n(1);function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){r(1,arguments);var e=a(t);return!isNaN(e)}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],s=r.match(i);if(!s)return null;var u,c=s[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(c.length)}}}var f,m={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof i[t]?i[t]:1===e?i[t].one:i[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(f.matchPattern);if(!a)return null;var o=a[0],i=n.match(f.parsePattern);if(!i)return null;var s=f.valueCallback?f.valueCallback(i[0]):i[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(o.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(t,e){r(2,arguments);var n=a(t).getTime(),o=h(e);return new Date(n+o)}function p(t,e){r(2,arguments);var n=h(e);return g(t,-n)}function v(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var y={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return v("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):v(n+1,2)},d:function(t,e){return v(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return v(t.getUTCHours()%12||12,e.length)},H:function(t,e){return v(t.getUTCHours(),e.length)},m:function(t,e){return v(t.getUTCMinutes(),e.length)},s:function(t,e){return v(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return v(Math.floor(r*Math.pow(10,n-3)),e.length)}};function b(t){r(1,arguments);var e=1,n=a(t),o=n.getUTCDay(),i=(o<e?7:0)+o-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function w(t){r(1,arguments);var e=a(t),n=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var i=b(o),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function T(t){r(1,arguments);var e=w(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=b(n);return a}function M(t,e){r(1,arguments);var n=e||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:h(i),u=null==n.weekStartsOn?s:h(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function S(t,e){r(1,arguments);var n=a(t,e),o=n.getUTCFullYear(),i=e||{},s=i.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:h(u),d=null==i.firstWeekContainsDate?c:h(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,d),l.setUTCHours(0,0,0,0);var f=M(l,e),m=new Date(0);m.setUTCFullYear(o,0,d),m.setUTCHours(0,0,0,0);var g=M(m,e);return n.getTime()>=f.getTime()?o+1:n.getTime()>=g.getTime()?o:o-1}function C(t,e){r(1,arguments);var n=e||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:h(o),s=null==n.firstWeekContainsDate?i:h(n.firstWeekContainsDate),u=S(t,e),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=M(c,e);return d}var x="midnight",D="noon",P="morning",k="afternoon",E="evening",U="night";function O(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+v(o,2)}function j(t,e){return t%60==0?(t>0?"-":"+")+v(Math.abs(t)/60,2):N(t,e)}function N(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+v(Math.floor(a/60),2)+n+v(a%60,2)}var q={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){var a=S(t,r),o=a>0?a:1-a;return"YY"===e?v(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):v(o,e.length)},R:function(t,e){return v(w(t),e.length)},u:function(t,e){return v(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return v(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return v(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return v(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,o){var i=function(t,e){r(1,arguments);var n=a(t),o=M(n,e).getTime()-C(n,e).getTime();return Math.round(o/6048e5)+1}(t,o);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):v(i,e.length)},I:function(t,e,n){var o=function(t){r(1,arguments);var e=a(t),n=b(e).getTime()-T(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(o,{unit:"week"}):v(o,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){var o=function(t){r(1,arguments);var e=a(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var o=e.getTime(),i=n-o;return Math.floor(i/864e5)+1}(t);return"Do"===e?n.ordinalNumber(o,{unit:"dayOfYear"}):v(o,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return v(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return v(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return v(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?D:0===a?x:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?E:a>=12?k:a>=4?P:U,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):v(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return j(a);case"XXXX":case"XX":return N(a);case"XXXXX":case"XXX":default:return N(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return j(a);case"xxxx":case"xx":return N(a);case"xxxxx":case"xxx":default:return N(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(a,":");case"OOOO":default:return"GMT"+N(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(a,":");case"zzzz":default:return"GMT"+N(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return v(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return v((r._originalDate||t).getTime(),e.length)}};function W(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function $(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Y={p:$,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return W(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",W(a,e)).replace("{{time}}",$(o,e))}};function L(t){return t.getTime()%6e4}function H(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+L(e))%6e4:L(e))}var z=["D","DD"],B=["YY","YYYY"];function I(t){return-1!==z.indexOf(t)}function A(t){return-1!==B.indexOf(t)}function F(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,G=/''/g,R=/[a-zA-Z]/;function _(t,e,n){r(2,arguments);var i=String(e),s=n||{},u=s.locale||m,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:h(c),l=null==s.firstWeekContainsDate?d:h(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=u.options&&u.options.weekStartsOn,g=null==f?0:h(f),v=null==s.weekStartsOn?g:h(s.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var y=a(t);if(!o(y))throw new RangeError("Invalid time value");var b=H(y),w=p(y,b),T={firstWeekContainsDate:l,weekStartsOn:v,locale:u,_originalDate:y},M=i.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,u.formatLong,T):t})).join("").match(X).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return V(n);var a=q[r];if(a)return!s.useAdditionalWeekYearTokens&&A(n)&&F(n,e,t),!s.useAdditionalDayOfYearTokens&&I(n)&&F(n,e,t),a(w,n,u.localize,T);if(r.match(R))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return M}function V(t){return t.match(J)[1].replace(G,"'")}const K=(t,e,n)=>{const r=e.list;t.innerHTML+=`\n    <div class="card">\n      <div class="card-header" id="headingOne">\n        <h2 class="mb-0">\n          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${n}">\n            ${e.name} \n          </button>\n        </h2>\n      </div>\n\n      <div id="collapse${n}" class="collapse ${0===n?"show":""}" data-parent="#accordionExample">\n        <div class="card-body">\n\n          \x3c!--Todo Starts here --\x3e\n          <div class="accordion ml-auto mr-auto" id="todos${n}" style="width: 90%;">\n            \n          </div>\n            \n        </div>\n        <div class="text-center mb-3">\n          <button class="btn btn-primary" data-toggle="modal" data-target="#newTodoModal${n}">Add Todo</button>\n          \n          <div class="modal fade" id="newTodoModal${n}" tabindex="-1">\n            <div class="modal-dialog">\n              <div class="modal-content">\n                <div class="modal-header">\n                  <h5 class="modal-title">NEW TODO</h5>\n                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n\n                <form class="modal-body">\n                  <div class="form-group">\n                    <input type="text" class="form-control" id="todoTitle${n}" placeholder="Enter Todo Title" name="todoTitle">\n                    <input type="text" class="form-control my-1" id="description${n}" placeholder="Enter Description" name="description">\n                    <input type="date" class="form-control" id="dueDate${n}" placeholder="select Due date" name="dueDate">\n                    <select class="custom-select custom-select-md my-1 form-control" id="priority${n}" name="priority">\n                      <option selected>Select Priority</option>\n                      <option value="1">Low</option>\n                      <option value="2">Medium</option>\n                      <option value="3">High</option>\n                    </select>\n                  </div>\n                </form>\n\n                <div class="modal-footer">\n                  <button type="button" class="btn btn-primary btnNewTodo">Create Todo</button>\n                </div>\n              </div>\n            </div>\n          </div> \n\n        </div>\n      </div>\n    </div>\n    `,((t,e)=>{const n=document.querySelector("#todos"+e);t.sort((t,e)=>e.priority-t.priority).forEach((t,r)=>{((t,e,n,r)=>{t.innerHTML+=`\n  <div class="card">\n    <div class="card-header">\n      <h2 class="mb-0">\n        <div class="btn btn-link btn-block text-left todoHeader" type="button" data-toggle="collapse" data-target="#todo${n}">\n          <div>${e.title}</div>\n          <div>${e.dueDate}</div>\n        </div>\n      </h2>\n    </div>\n\n    <div id="todo${n}" class="collapse" data-parent="#todos${r}">\n      <div class="card-body">\n        <p>Description: ${e.description}</p>\n        <p>Priority: ${(t=>{switch(t){case 1:return"Low";case 2:return"Medium";case 3:default:return"High"}})(e.priority)}</p>\n        <button class="btn btn-warning editBtn" id="${r}${n}" data-toggle="modal" data-target="#editTodoModal${r}${n}">Edit</button>\n\n\n          <div class="modal fade" id="editTodoModal${r}${n}" tabindex="-1">\n            <div class="modal-dialog">\n              <div class="modal-content">\n                <div class="modal-header">\n                  <h5 class="modal-title">Edit TODO</h5>\n                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n\n                <form class="modal-body">\n                  <div class="form-group">\n                    <input type="text" class="form-control" id="editTitle${r}${n}" placeholder="Enter Todo Title" name="todoTitle">\n                    <input type="text" class="form-control my-1" id="editDesc${r}${n}" placeholder="Enter Description" name="description">\n                    <input type="date" class="form-control" id="editDate${r}${n}" placeholder="select Due date" name="dueDate">\n                    <select class="custom-select custom-select-md my-1 form-control" id="editPriority${r}${n}" name="priority">\n                      <option selected>Select Priority</option>\n                      <option value="1">Low</option>\n                      <option value="2">Medium</option>\n                      <option value="3">High</option>\n                    </select>\n                  </div>\n                </form>\n                <div class="modal-footer">\n                  <button type="button" class="btn btn-primary btnEditTodo" id="${r}${n}u">Update Todo</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        <button class="btn btn-danger dltBtn" id="${r}${n}D">Delete</button>\n      </div>\n    </div>\n  </div>\n  `})(n,t,r,e)})})(r,n)};var Z=t=>{const e=document.querySelector("#accordionExample");e.innerHTML="",t.forEach((t,n)=>{K(e,t,n)})};const tt={name:"Do dummy",list:[{title:"Do 20 Squats before breakfast",description:"I need squats to .... Lorem ipsim jseft yug huger serdagh montergh dergrats",dueDate:_(new Date(2020,8,11),"yyyy/MM/dd"),priority:2},{title:"Do 20 pushups after breakfast",description:"Pushups are good for strength and cardio .... Lorem ipsim jseft yug huger serdagh montergh dergrats",dueDate:_(new Date(2020,9,11),"yyyy/MM/dd"),priority:1},{title:"Do planks for 3 min after work",description:"Planks are great for the circuit .... Lorem ipsim jseft yug huger serdagh montergh dergrats",dueDate:_(new Date(2020,10,11),"yyyy/MM/dd"),priority:3}]},et=[tt,tt],nt=()=>{const t=JSON.parse(localStorage.getItem("allProjects"));if(t)Z(t);else{Z(et);const t=JSON.stringify(et);localStorage.setItem("allProjects",t)}};var rt=class{constructor(t,e,n,r){this.title=t,this.description=e,this.dueDate=n,this.priority=r}};var at=class{constructor(t){this.name=t,this.list=[]}addTodo(t,e,n,r){const a=new rt(t,e,n,r);this.list.push(a)}};var ot=()=>{const t=document.querySelector("#projectTitle");document.querySelector("#btnNewProject").addEventListener("click",()=>{const e=new at(t.value),n=JSON.parse(localStorage.getItem("allProjects"));if(n){n.push(e);const t=JSON.stringify(n);localStorage.setItem("allProjects",t)}else et.push(e);nt(),t.value=""})};var it=()=>{document.querySelectorAll(".btnNewTodo").forEach((t,e)=>{t.addEventListener("click",()=>{const[t,n,r,a,o]=(t=>[JSON.parse(localStorage.getItem("allProjects")),document.querySelector("#todoTitle"+t),document.querySelector("#description"+t),document.querySelector("#dueDate"+t),document.querySelector("#priority"+t)])(e);let i=a.value.split("-");i=i.map(t=>parseInt(t,10));const s=_(new Date(i[0],i[1],i[2]),"yyyy/MM/dd"),u=parseInt(o.value,10),c=new rt(n.value,r.value,s,u);t[e].list.push(c),localStorage.setItem("allProjects",JSON.stringify(t)),nt(),location.reload()})})};var st=()=>{document.querySelectorAll(".dltBtn").forEach(t=>{t.addEventListener("click",t=>{const e=JSON.parse(localStorage.getItem("allProjects")),n=t.target.id.split("").map(t=>parseInt(t,10)),[r,a]=n,o=e[r].list.sort((t,e)=>e.priority-t.priority);o.splice(a,1),e[r].list=o,localStorage.setItem("allProjects",JSON.stringify(e)),nt(),location.reload()})})};const ut=t=>{const e=JSON.parse(localStorage.getItem("allProjects")),n=t.target.id.split("").map(t=>parseInt(t,10)),[r,a]=n;return[document.querySelector(`#editTitle${r}${a}`),document.querySelector(`#editDesc${r}${a}`),document.querySelector(`#editDate${r}${a}`),document.querySelector(`#editPriority${r}${a}`),e,r,a]};var ct=()=>{const t=document.querySelectorAll(".btnEditTodo");document.querySelectorAll(".editBtn").forEach(t=>{t.addEventListener("click",t=>{const[e,n,r,a,o,i,s]=ut(t);if(o){const t=o[i].list.sort((t,e)=>e.priority-t.priority)[s];e.value=t.title,n.value=t.description,r.value=t.dueDate.split("/").join("-"),a.value=t.priority}})}),t.forEach(t=>{t.addEventListener("click",t=>{const[e,n,r,a,o,i,s]=ut(t);let u=r.value.split("-");u=u.map(t=>parseInt(t,10));const c=_(new Date(u[0],u[1],u[2]),"yyyy/MM/dd"),d=new rt(e.value,n.value,c,parseInt(a.value,10));o[i].list[s]=d,localStorage.setItem("allProjects",JSON.stringify(o)),nt(),location=location.href})})};nt(),ot(),it(),ct(),st()}]);