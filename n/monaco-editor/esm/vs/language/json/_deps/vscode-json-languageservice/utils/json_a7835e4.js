define("d3f7126",function(e,r){"use strict";function n(e,r,t){if(null!==e&&"object"==typeof e){var f=r+"	";if(Array.isArray(e)){if(0===e.length)return"[]";for(var i="[\n",u=0;u<e.length;u++)i+=f+n(e[u],f,t),u<e.length-1&&(i+=","),i+="\n";return i+=r+"]"}var l=Object.keys(e);if(0===l.length)return"{}";for(var i="{\n",u=0;u<l.length;u++){var a=l[u];i+=f+JSON.stringify(a)+": "+n(e[a],f,t),u<l.length-1&&(i+=","),i+="\n"}return i+=r+"}"}return t(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.stringifyObject=n});