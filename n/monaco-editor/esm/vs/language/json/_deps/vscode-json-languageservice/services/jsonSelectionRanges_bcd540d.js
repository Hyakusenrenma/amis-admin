define("b8264ed",function(e,t){"use strict";function n(e,t,n){function f(t){var r=e.offsetAt(t),a=n.getNodeFromOffset(r,!0);if(!a)return[];for(var o=[];a;){switch(a.type){case"string":case"object":case"array":var f=a.offset+1,i=a.offset+a.length-1;i>f&&r>=f&&i>=r&&o.push(s(f,i)),o.push(s(a.offset,a.offset+a.length));break;case"number":case"boolean":case"null":case"property":o.push(s(a.offset,a.offset+a.length))}if("property"===a.type||a.parent&&"array"===a.parent.type){var u=c(a.offset+a.length,5);-1!==u&&o.push(s(a.offset,u))}a=a.parent}return o}function s(t,n){return{range:r.Range.create(e.positionAt(t),e.positionAt(n)),kind:o.SelectionRangeKind.Declaration}}function c(e,t){i.setPosition(e);var n=i.scan();return n===t?i.getTokenOffset()+i.getTokenLength():-1}var i=a.createScanner(e.getText(),!0);return t.map(f)}Object.defineProperty(t,"__esModule",{value:!0});var r=e("4872c6c"),a=e("c2fdf10"),o=e("3607d51");t.getSelectionRanges=n});