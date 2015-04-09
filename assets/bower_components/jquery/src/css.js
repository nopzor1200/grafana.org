define(["./core","./var/pnum","./core/access","./css/var/rmargin","./css/var/rnumnonpx","./css/var/cssExpand","./css/var/isHidden","./css/var/getStyles","./css/curCSS","./css/defaultDisplay","./css/addGetHookIf","./css/support","./data/var/data_priv","./core/init","./css/swap","./core/ready","./selector"],function(e,t,n,r,o,i,a,s,u,l,c,f,d){function p(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,o=_.length;o--;)if(t=_[o]+n,t in e)return t;return r}function h(e,t,n){var r=b.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function m(t,n,r,o,a){for(var s=r===(o?"border":"content")?4:"width"===n?1:0,u=0;4>s;s+=2)"margin"===r&&(u+=e.css(t,r+i[s],!0,a)),o?("content"===r&&(u-=e.css(t,"padding"+i[s],!0,a)),"margin"!==r&&(u-=e.css(t,"border"+i[s]+"Width",!0,a))):(u+=e.css(t,"padding"+i[s],!0,a),"padding"!==r&&(u+=e.css(t,"border"+i[s]+"Width",!0,a)));return u}function g(t,n,r){var i=!0,a="width"===n?t.offsetWidth:t.offsetHeight,l=s(t),c="border-box"===e.css(t,"boxSizing",!1,l);if(0>=a||null==a){if(a=u(t,n,l),(0>a||null==a)&&(a=t.style[n]),o.test(a))return a;i=c&&(f.boxSizingReliable()||a===t.style[n]),a=parseFloat(a)||0}return a+m(t,n,r||(c?"border":"content"),i,l)+"px"}function v(t,n){for(var r,o,i,s=[],u=0,c=t.length;c>u;u++)o=t[u],o.style&&(s[u]=d.get(o,"olddisplay"),r=o.style.display,n?(s[u]||"none"!==r||(o.style.display=""),""===o.style.display&&a(o)&&(s[u]=d.access(o,"olddisplay",l(o.nodeName)))):(i=a(o),"none"===r&&i||d.set(o,"olddisplay",i?r:e.css(o,"display"))));for(u=0;c>u;u++)o=t[u],o.style&&(n&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=n?s[u]||"":"none"));return t}var y=/^(none|table(?!-c[ea]).+)/,b=new RegExp("^("+t+")(.*)$","i"),w=new RegExp("^([+-])=("+t+")","i"),x={position:"absolute",visibility:"hidden",display:"block"},T={letterSpacing:"0",fontWeight:"400"},_=["Webkit","O","Moz","ms"];return e.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=u(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,n,r,o){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,a,s,u=e.camelCase(n),l=t.style;return n=e.cssProps[u]||(e.cssProps[u]=p(l,u)),s=e.cssHooks[n]||e.cssHooks[u],void 0===r?s&&"get"in s&&void 0!==(i=s.get(t,!1,o))?i:l[n]:(a=typeof r,"string"===a&&(i=w.exec(r))&&(r=(i[1]+1)*i[2]+parseFloat(e.css(t,n)),a="number"),null!=r&&r===r&&("number"!==a||e.cssNumber[u]||(r+="px"),f.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&void 0===(r=s.set(t,r,o))||(l[n]=r)),void 0)}},css:function(t,n,r,o){var i,a,s,l=e.camelCase(n);return n=e.cssProps[l]||(e.cssProps[l]=p(t.style,l)),s=e.cssHooks[n]||e.cssHooks[l],s&&"get"in s&&(i=s.get(t,!0,r)),void 0===i&&(i=u(t,n,o)),"normal"===i&&n in T&&(i=T[n]),""===r||r?(a=parseFloat(i),r===!0||e.isNumeric(a)?a||0:i):i}}),e.each(["height","width"],function(t,n){e.cssHooks[n]={get:function(t,r,o){return r?y.test(e.css(t,"display"))&&0===t.offsetWidth?e.swap(t,x,function(){return g(t,n,o)}):g(t,n,o):void 0},set:function(t,r,o){var i=o&&s(t);return h(t,r,o?m(t,n,o,"border-box"===e.css(t,"boxSizing",!1,i),i):0)}}}),e.cssHooks.marginRight=c(f.reliableMarginRight,function(t,n){return n?e.swap(t,{display:"inline-block"},u,[t,"marginRight"]):void 0}),e.each({margin:"",padding:"",border:"Width"},function(t,n){e.cssHooks[t+n]={expand:function(e){for(var r=0,o={},a="string"==typeof e?e.split(" "):[e];4>r;r++)o[t+i[r]+n]=a[r]||a[r-2]||a[0];return o}},r.test(t)||(e.cssHooks[t+n].set=h)}),e.fn.extend({css:function(t,r){return n(this,function(t,n,r){var o,i,a={},u=0;if(e.isArray(n)){for(o=s(t),i=n.length;i>u;u++)a[n[u]]=e.css(t,n[u],!1,o);return a}return void 0!==r?e.style(t,n,r):e.css(t,n)},t,r,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){a(this)?e(this).show():e(this).hide()})}}),e});