define("be0eefb",function(t,e){"use strict";function r(t){if(t.scheme&&!c.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!p.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(d.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}function n(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==y&&(e=y+e):e=y}return e}function o(t,e){for(var r=void 0,n=-1,o=0;o<t.length;o++){var i=t.charCodeAt(o);if(i>=97&&122>=i||i>=65&&90>=i||i>=48&&57>=i||45===i||46===i||95===i||126===i||e&&47===i)-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),void 0!==r&&(r+=t.charAt(o));else{void 0===r&&(r=t.substr(0,o));var h=C[i];void 0!==h?(-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),r+=h):-1===n&&(n=o)}}return-1!==n&&(r+=encodeURIComponent(t.substring(n))),void 0!==r?r:t}function i(t){for(var e=void 0,r=0;r<t.length;r++){var n=t.charCodeAt(r);35===n||63===n?(void 0===e&&(e=t.substr(0,r)),e+=C[n]):void 0!==e&&(e+=t[r])}return void 0!==e?e:t}function h(t){var e;return e=t.authority&&t.path.length>1&&"file"===t.scheme?"//"+t.authority+t.path:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&t.path.charCodeAt(1)<=90||t.path.charCodeAt(1)>=97&&t.path.charCodeAt(1)<=122)&&58===t.path.charCodeAt(2)?t.path[1].toLowerCase()+t.path.substr(2):t.path,s&&(e=e.replace(/\//g,"\\")),e}function a(t,e){var r=e?i:o,n="",h=t.scheme,a=t.authority,s=t.path,u=t.query,f=t.fragment;if(h&&(n+=h,n+=":"),(a||"file"===h)&&(n+=y,n+=y),a){var c=a.indexOf("@");if(-1!==c){var p=a.substr(0,c);a=a.substr(c+1),c=p.indexOf(":"),-1===c?n+=r(p,!1):(n+=r(p.substr(0,c),!1),n+=":",n+=r(p.substr(c+1),!1)),n+="@"}a=a.toLowerCase(),c=a.indexOf(":"),-1===c?n+=r(a,!1):(n+=r(a.substr(0,c),!1),n+=a.substr(c))}if(s){if(s.length>=3&&47===s.charCodeAt(0)&&58===s.charCodeAt(2)){var d=s.charCodeAt(1);d>=65&&90>=d&&(s="/"+String.fromCharCode(d+32)+":"+s.substr(3))}else if(s.length>=2&&58===s.charCodeAt(1)){var d=s.charCodeAt(0);d>=65&&90>=d&&(s=String.fromCharCode(d+32)+":"+s.substr(2))}n+=r(s,!0)}return u&&(n+="?",n+=r(u,!1)),f&&(n+="#",n+=e?f:o(f,!1)),n}Object.defineProperty(e,"__esModule",{value:!0});var s,u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();if("object"==typeof navigator){var f=navigator.userAgent;s=f.indexOf("Windows")>=0}var c=/^\w[\w\d+.-]*$/,p=/^\//,d=/^\/\//,m="",y="/",l=/^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,g=function(){function t(t,e,o,i,h){"object"==typeof t?(this.scheme=t.scheme||m,this.authority=t.authority||m,this.path=t.path||m,this.query=t.query||m,this.fragment=t.fragment||m):(this.scheme=t||m,this.authority=e||m,this.path=n(this.scheme,o||m),this.query=i||m,this.fragment=h||m,r(this))}return t.isUri=function(e){return e instanceof t?!0:e?"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme:!1},Object.defineProperty(t.prototype,"fsPath",{get:function(){return h(this)},enumerable:!0,configurable:!0}),t.prototype.with=function(t){if(!t)return this;var e=t.scheme,r=t.authority,n=t.path,o=t.query,i=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=m),void 0===r?r=this.authority:null===r&&(r=m),void 0===n?n=this.path:null===n&&(n=m),void 0===o?o=this.query:null===o&&(o=m),void 0===i?i=this.fragment:null===i&&(i=m),e===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new b(e,r,n,o,i)},t.parse=function(t){var e=l.exec(t);return e?new b(e[2]||m,decodeURIComponent(e[4]||m),decodeURIComponent(e[5]||m),decodeURIComponent(e[7]||m),decodeURIComponent(e[9]||m)):new b(m,m,m,m,m)},t.file=function(t){var e=m;if(s&&(t=t.replace(/\\/g,y)),t[0]===y&&t[1]===y){var r=t.indexOf(y,2);-1===r?(e=t.substring(2),t=y):(e=t.substring(2,r),t=t.substring(r)||y)}return new b("file",e,t,m,m)},t.from=function(t){return new b(t.scheme,t.authority,t.path,t.query,t.fragment)},t.prototype.toString=function(t){return void 0===t&&(t=!1),a(this,t)},t.prototype.toJSON=function(){return this},t.revive=function(e){if(e){if(e instanceof t)return e;var r=new b(e);return r._fsPath=e.fsPath,r._formatted=e.external,r}return e},t}();e.default=g;var v,b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return u(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=h(this)),this._fsPath},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?a(this,!0):(this._formatted||(this._formatted=a(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(g),C=(v={},v[58]="%3A",v[47]="%2F",v[63]="%3F",v[35]="%23",v[91]="%5B",v[93]="%5D",v[64]="%40",v[33]="%21",v[36]="%24",v[38]="%26",v[39]="%27",v[40]="%28",v[41]="%29",v[42]="%2A",v[43]="%2B",v[44]="%2C",v[59]="%3B",v[61]="%3D",v[32]="%20",v)});