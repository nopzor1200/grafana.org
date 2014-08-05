define(["../core","../var/rnotwhite","../var/strundefined","../data/var/data_priv","../core/init"],function(e,t,n,r){var o=/[\t\r\n\f]/g;e.fn.extend({addClass:function(n){var r,i,u,a,s,l,c="string"==typeof n&&n,f=0,d=this.length;if(e.isFunction(n))return this.each(function(t){e(this).addClass(n.call(this,t,this.className))});if(c)for(r=(n||"").match(t)||[];d>f;f++)if(i=this[f],u=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(o," "):" ")){for(s=0;a=r[s++];)u.indexOf(" "+a+" ")<0&&(u+=a+" ");l=e.trim(u),i.className!==l&&(i.className=l)}return this},removeClass:function(n){var r,i,u,a,s,l,c=0===arguments.length||"string"==typeof n&&n,f=0,d=this.length;if(e.isFunction(n))return this.each(function(t){e(this).removeClass(n.call(this,t,this.className))});if(c)for(r=(n||"").match(t)||[];d>f;f++)if(i=this[f],u=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(o," "):"")){for(s=0;a=r[s++];)for(;u.indexOf(" "+a+" ")>=0;)u=u.replace(" "+a+" "," ");l=n?e.trim(u):"",i.className!==l&&(i.className=l)}return this},toggleClass:function(o,i){var u=typeof o;return"boolean"==typeof i&&"string"===u?i?this.addClass(o):this.removeClass(o):e.isFunction(o)?this.each(function(t){e(this).toggleClass(o.call(this,t,this.className,i),i)}):this.each(function(){if("string"===u)for(var i,a=0,s=e(this),l=o.match(t)||[];i=l[a++];)s.hasClass(i)?s.removeClass(i):s.addClass(i);else(u===n||"boolean"===u)&&(this.className&&r.set(this,"__className__",this.className),this.className=this.className||o===!1?"":r.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(o," ").indexOf(t)>=0)return!0;return!1}})});