define(["./core","./var/rnotwhite","./core/access","./data/var/data_priv","./data/var/data_user"],function(e,t,n,i,r){function o(t,n,i){var o;if(void 0===i&&1===t.nodeType)if(o="data-"+n.replace(s,"-$1").toLowerCase(),i=t.getAttribute(o),"string"==typeof i){try{i="true"===i?!0:"false"===i?!1:"null"===i?null:+i+""===i?+i:a.test(i)?e.parseJSON(i):i}catch(c){}r.set(t,n,i)}else i=void 0;return i}var a=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,s=/([A-Z])/g;return e.extend({hasData:function(e){return r.hasData(e)||i.hasData(e)},data:function(e,t,n){return r.access(e,t,n)},removeData:function(e,t){r.remove(e,t)},_data:function(e,t,n){return i.access(e,t,n)},_removeData:function(e,t){i.remove(e,t)}}),e.fn.extend({data:function(t,a){var s,c,u,l=this[0],f=l&&l.attributes;if(void 0===t){if(this.length&&(u=r.get(l),1===l.nodeType&&!i.get(l,"hasDataAttrs"))){for(s=f.length;s--;)f[s]&&(c=f[s].name,0===c.indexOf("data-")&&(c=e.camelCase(c.slice(5)),o(l,c,u[c])));i.set(l,"hasDataAttrs",!0)}return u}return"object"==typeof t?this.each(function(){r.set(this,t)}):n(this,function(n){var i,a=e.camelCase(t);if(l&&void 0===n){if(i=r.get(l,t),void 0!==i)return i;if(i=r.get(l,a),void 0!==i)return i;if(i=o(l,a,void 0),void 0!==i)return i}else this.each(function(){var e=r.get(this,a);r.set(this,a,n),-1!==t.indexOf("-")&&void 0!==e&&r.set(this,t,n)})},null,a,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){r.remove(this,e)})}}),e});