define(["../core","../core/access","./support"],function(e,t,n){var r=/^(?:input|select|textarea|button)$/i;e.fn.extend({prop:function(n,r){return t(this,e.prop,n,r,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[e.propFix[t]||t]})}}),e.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,n,r){var o,i,u,a=t.nodeType;if(t&&3!==a&&8!==a&&2!==a)return u=1!==a||!e.isXMLDoc(t),u&&(n=e.propFix[n]||n,i=e.propHooks[n]),void 0!==r?i&&"set"in i&&void 0!==(o=i.set(t,r,n))?o:t[n]=r:i&&"get"in i&&null!==(o=i.get(t,n))?o:t[n]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||r.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),n.optSelected||(e.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),e.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){e.propFix[this.toLowerCase()]=this})});