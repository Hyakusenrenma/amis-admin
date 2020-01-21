define("22d9c7b",function(e,t){"use strict";function r(e,t){for(var r=new v,i=0,o=e.getChildren();i<o.length;i++){var a=o[i];switch(a.type){case u.NodeType.SelectorCombinator:if(t){var s=a.getText().split("&");if(1===s.length){r.addAttr("name",s[0]);break}if(r=t.cloneWithParent(),s[0]){var c=r.findRoot();c.prepend(s[0])}for(var l=1;l<s.length;l++){if(l>1){var h=t.cloneWithParent();r.addChild(h.findRoot()),r=h}r.append(s[l])}}break;case u.NodeType.SelectorPlaceholder:if("@at-root"===a.getText())return r;case u.NodeType.ElementNameSelector:var d=a.getText();r.addAttr("name","*"===d?"element":n(d));break;case u.NodeType.ClassSelector:r.addAttr("class",n(a.getText().substring(1)));break;case u.NodeType.IdentifierSelector:r.addAttr("id",n(a.getText().substring(1)));break;case u.NodeType.MixinDeclaration:r.addAttr("class",a.getName());break;case u.NodeType.PseudoSelector:r.addAttr(n(a.getText()),"");break;case u.NodeType.AttributeSelector:var p=a,f=p.getIdentifier();if(f){var m=p.getValue(),g=p.getOperator(),b=void 0;if(m)switch(n(g.getText())){case"|=":b=y.remove(n(m.getText()))+"-…";break;case"^=":b=y.remove(n(m.getText()))+"…";break;case"$=":b="…"+y.remove(n(m.getText()));break;case"~=":b=" … "+y.remove(n(m.getText()))+" … ";break;case"*=":b="…"+y.remove(n(m.getText()))+"…";break;default:b=y.remove(n(m.getText()))}r.addAttr(n(f.getText()),b)}}}return r}function n(e){var t=new d.Scanner;t.setSource(e);var r=t.scanUnquotedString();return r?r.text:e}function i(e){function t(e){e.getChildren().forEach(function(e){switch(e.type){case u.NodeType.IdentifierSelector:r[0]+=1;break;case u.NodeType.ClassSelector:case u.NodeType.AttributeSelector:r[1]+=1;break;case u.NodeType.ElementNameSelector:if("*"===e.getText())break;r[2]+=1;break;case u.NodeType.PseudoSelector:if(e.getText().match(/^::/))r[2]+=1;else{if(e.getText().match(/^:not/i))break;r[1]+=1}}e.getChildren().length>0&&t(e)})}var r=[0,0,0];return t(e),f.apply(void 0,["specificity","[Selector Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity): ({0}, {1}, {2})"].concat(r))}function o(e){var t=c(e),r=new b('"').print(t);return r.push(i(e)),r}function a(e){var t=r(e),n=new b('"').print(t);return n.push(i(e)),n}function s(e){switch(e.type){case u.NodeType.MixinDeclaration:case u.NodeType.Stylesheet:return!0}return!1}function c(e){if(e.matches("@at-root"))return null;var t=new m,r=[];if(e.getParent()instanceof u.RuleSet)for(var n=e.getParent().getParent();n&&!s(n);){if(n instanceof u.RuleSet){if(n.getSelectors().matches("@at-root"))break;r.push(n)}n=n.getParent()}for(var i=new S(t),o=r.length-1;o>=0;o--){var a=r[o].getSelectors().getChild(0);a&&i.processSelector(a)}return i.processSelector(e),t}Object.defineProperty(t,"__esModule",{value:!0});var l=e("849c8c1"),h=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=l.__importStar(e("0b0187d")),d=e("0d1fc26"),p=l.__importStar(e("da3a483")),f=p.loadMessageBundle(),v=function(){function e(){}return e.prototype.findAttribute=function(e){if(this.attributes)for(var t=0,r=this.attributes;t<r.length;t++){var n=r[t];if(n.name===e)return n.value}return null},e.prototype.addChild=function(t){t instanceof e&&(t.parent=this),this.children||(this.children=[]),this.children.push(t)},e.prototype.append=function(e){if(this.attributes){var t=this.attributes[this.attributes.length-1];t.value=t.value+e}},e.prototype.prepend=function(e){if(this.attributes){var t=this.attributes[0];t.value=e+t.value}},e.prototype.findRoot=function(){for(var e=this;e.parent&&!(e.parent instanceof m);)e=e.parent;return e},e.prototype.removeChild=function(e){if(this.children){var t=this.children.indexOf(e);if(-1!==t)return this.children.splice(t,1),!0}return!1},e.prototype.addAttr=function(e,t){this.attributes||(this.attributes=[]);for(var r=0,n=this.attributes;r<n.length;r++){var i=n[r];if(i.name===e)return void(i.value+=" "+t)}this.attributes.push({name:e,value:t})},e.prototype.clone=function(t){void 0===t&&(t=!0);var r=new e;if(this.attributes){r.attributes=[];for(var n=0,i=this.attributes;n<i.length;n++){var o=i[n];r.addAttr(o.name,o.value)}}if(t&&this.children){r.children=[];for(var a=0;a<this.children.length;a++)r.addChild(this.children[a].clone())}return r},e.prototype.cloneWithParent=function(){var e=this.clone(!1);if(this.parent&&!(this.parent instanceof m)){var t=this.parent.cloneWithParent();t.addChild(e)}return e},e}();t.Element=v;var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t}(v);t.RootElement=m;var g=function(e){function t(t){var r=e.call(this)||this;return r.addAttr("name",t),r}return h(t,e),t}(v);t.LabelElement=g;var y,b=function(){function e(e){this.quote=e}return e.prototype.print=function(e){this.result=[],e instanceof m?this.doPrint(e.children,0):this.doPrint([e],0);var t=this.result.join("\n");return[{language:"html",value:t}]},e.prototype.doPrint=function(e,t){for(var r=0,n=e;r<n.length;r++){var i=n[r];this.doPrintElement(i,t),i.children&&this.doPrint(i.children,t+1)}},e.prototype.writeLine=function(e,t){var r=new Array(e+1).join("  ");this.result.push(r+t)},e.prototype.doPrintElement=function(e,t){var r=e.findAttribute("name");if(e instanceof g||"…"===r)return void this.writeLine(t,r);var n=["<"];if(n.push(r?r:"element"),e.attributes)for(var i=0,o=e.attributes;i<o.length;i++){var a=o[i];if("name"!==a.name){n.push(" "),n.push(a.name);var s=a.value;s&&(n.push("="),n.push(y.ensure(s,this.quote)))}}n.push(">"),this.writeLine(t,n.join(""))},e}();!function(e){function t(e,t){return t+r(e)+t}function r(e){var t=e.match(/^['"](.*)["']$/);return t?t[1]:e}e.ensure=t,e.remove=r}(y||(y={})),t.toElement=r,t.selectorToMarkedString=o,t.simpleSelectorToMarkedString=a;var S=function(){function e(e){this.prev=null,this.element=e}return e.prototype.processSelector=function(e){var t=null;if(!(this.element instanceof m)&&e.getChildren().some(function(e){return e.hasChildren()&&e.getChild(0).type===u.NodeType.SelectorCombinator})){var n=this.element.findRoot();n.parent instanceof m&&(t=this.element,this.element=n.parent,this.element.removeChild(n),this.prev=null)}for(var i=0,o=e.getChildren();i<o.length;i++){var a=o[i];if(a instanceof u.SimpleSelector){if(this.prev instanceof u.SimpleSelector){var s=new g("…");this.element.addChild(s),this.element=s}else this.prev&&(this.prev.matches("+")||this.prev.matches("~"))&&this.element.parent&&(this.element=this.element.parent);this.prev&&this.prev.matches("~")&&(this.element.addChild(r(a)),this.element.addChild(new g("⋮")));var c=r(a,t),l=c.findRoot();this.element.addChild(l),this.element=c}(a instanceof u.SimpleSelector||a.type===u.NodeType.SelectorCombinatorParent||a.type===u.NodeType.SelectorCombinatorShadowPiercingDescendant||a.type===u.NodeType.SelectorCombinatorSibling||a.type===u.NodeType.SelectorCombinatorAllSiblings)&&(this.prev=a)}},e}();t.selectorToElement=c});