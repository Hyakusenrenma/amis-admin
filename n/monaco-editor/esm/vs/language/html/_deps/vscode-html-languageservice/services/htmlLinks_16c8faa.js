define("a55007b",function(e,t){"use strict";function r(e){var t=e[0],r=e[e.length-1];return t!==r||"'"!==t&&'"'!==t||(e=e.substr(1,e.length-2)),e}function n(e,t){if(!e.length)return!1;if("handlebars"===t&&/{{.*}}/.test(e))return!1;try{return!!g.default.parse(e)}catch(r){return!1}}function a(e,t,r,n){if(/^\s*javascript\:/i.test(t)||/^\s*\#/i.test(t)||/[\n\r]/.test(t))return null;if(t=t.replace(/^\s*/g,""),/^https?:\/\//i.test(t)||/^file:\/\//i.test(t))return t;if(/^\/\//i.test(t)){var a=l.startsWith(e,"https://")?"https":"http";return a+":"+t.replace(/^\s*/g,"")}return r?r.resolveReference(t,n||e):t}function i(e,t,i,u,o,c){var l=r(i,e.languageId);if(!n(l,e.languageId))return null;l.length<i.length&&(u++,o--);var g=a(e.uri,l,t,c);return g&&s(g)?{range:f.Range.create(e.positionAt(u),e.positionAt(o)),target:g}:null}function s(e){try{return g.default.parse(e),!0}catch(t){return!1}}function u(e,t){for(var n=[],a=c.createScanner(e.getText(),0),s=a.scan(),u=!1,o=!1,f=void 0;s!==p.TokenType.EOS;){switch(s){case p.TokenType.StartTag:if(!f){var l=a.getTokenText().toLowerCase();o="base"===l}break;case p.TokenType.AttributeName:var g=a.getTokenText().toLowerCase();u="src"===g||"href"===g;break;case p.TokenType.AttributeValue:if(u){var d=a.getTokenText();if(!o){var T=i(e,t,d,a.getTokenOffset(),a.getTokenEnd(),f);T&&n.push(T)}o&&"undefined"==typeof f&&(f=r(d,e.languageId),f&&t&&(f=t.resolveReference(f,e.uri))),o=!1,u=!1}}s=a.scan()}return n}Object.defineProperty(t,"__esModule",{value:!0});var o=e("849c8c1"),c=e("c2d9747"),f=e("b1903ef"),l=o.__importStar(e("99cd338")),g=o.__importDefault(e("63adda9")),p=e("4ee499b");t.findDocumentLinks=u});