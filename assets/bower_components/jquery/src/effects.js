define(["./core","./var/pnum","./css/var/cssExpand","./css/var/isHidden","./css/defaultDisplay","./data/var/data_priv","./core/init","./effects/Tween","./queue","./css","./deferred","./traversing"],function(e,t,n,r,i,o){function s(){return setTimeout(function(){f=void 0}),f=e.now()}function a(e,t){var r,i=0,o={height:e};for(t=t?1:0;4>i;i+=2-t)r=n[i],o["margin"+r]=o["padding"+r]=e;return t&&(o.opacity=o.width=e),o}function l(e,t,n){for(var r,i=(y[t]||[]).concat(y["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function u(t,n,s){var a,u,c,d,f,p,m,g,v=this,y={},b=t.style,x=t.nodeType&&r(t),w=o.get(t,"fxshow");s.queue||(f=e._queueHooks(t,"fx"),null==f.unqueued&&(f.unqueued=0,p=f.empty.fire,f.empty.fire=function(){f.unqueued||p()}),f.unqueued++,v.always(function(){v.always(function(){f.unqueued--,e.queue(t,"fx").length||f.empty.fire()})})),1===t.nodeType&&("height"in n||"width"in n)&&(s.overflow=[b.overflow,b.overflowX,b.overflowY],m=e.css(t,"display"),g="none"===m?o.get(t,"olddisplay")||i(t.nodeName):m,"inline"===g&&"none"===e.css(t,"float")&&(b.display="inline-block")),s.overflow&&(b.overflow="hidden",v.always(function(){b.overflow=s.overflow[0],b.overflowX=s.overflow[1],b.overflowY=s.overflow[2]}));for(a in n)if(u=n[a],h.exec(u)){if(delete n[a],c=c||"toggle"===u,u===(x?"hide":"show")){if("show"!==u||!w||void 0===w[a])continue;x=!0}y[a]=w&&w[a]||e.style(t,a)}else m=void 0;if(e.isEmptyObject(y))"inline"===("none"===m?i(t.nodeName):m)&&(b.display=m);else{w?"hidden"in w&&(x=w.hidden):w=o.access(t,"fxshow",{}),c&&(w.hidden=!x),x?e(t).show():v.done(function(){e(t).hide()}),v.done(function(){var n;o.remove(t,"fxshow");for(n in y)e.style(t,n,y[n])});for(a in y)d=l(x?w[a]:0,a,v),a in w||(w[a]=d.start,x&&(d.end=d.start,d.start="width"===a||"height"===a?1:0))}}function c(t,n){var r,i,o,s,a;for(r in t)if(i=e.camelCase(r),o=n[i],s=t[r],e.isArray(s)&&(o=s[1],s=t[r]=s[0]),r!==i&&(t[i]=s,delete t[r]),a=e.cssHooks[i],a&&"expand"in a){s=a.expand(s),delete t[i];for(r in s)r in t||(t[r]=s[r],n[r]=o)}else n[i]=o}function d(t,n,r){var i,o,a=0,u=v.length,d=e.Deferred().always(function(){delete p.elem}),p=function(){if(o)return!1;for(var e=f||s(),n=Math.max(0,h.startTime+h.duration-e),r=n/h.duration||0,i=1-r,a=0,l=h.tweens.length;l>a;a++)h.tweens[a].run(i);return d.notifyWith(t,[h,i,n]),1>i&&l?n:(d.resolveWith(t,[h]),!1)},h=d.promise({elem:t,props:e.extend({},n),opts:e.extend(!0,{specialEasing:{}},r),originalProperties:n,originalOptions:r,startTime:f||s(),duration:r.duration,tweens:[],createTween:function(n,r){var i=e.Tween(t,h.opts,n,r,h.opts.specialEasing[n]||h.opts.easing);return h.tweens.push(i),i},stop:function(e){var n=0,r=e?h.tweens.length:0;if(o)return this;for(o=!0;r>n;n++)h.tweens[n].run(1);return e?d.resolveWith(t,[h,e]):d.rejectWith(t,[h,e]),this}}),m=h.props;for(c(m,h.opts.specialEasing);u>a;a++)if(i=v[a].call(h,t,m,h.opts))return i;return e.map(m,l,h),e.isFunction(h.opts.start)&&h.opts.start.call(t,h),e.fx.timer(e.extend(p,{elem:t,anim:h,queue:h.opts.queue})),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always)}var f,p,h=/^(?:toggle|show|hide)$/,m=new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i"),g=/queueHooks$/,v=[u],y={"*":[function(t,n){var r=this.createTween(t,n),i=r.cur(),o=m.exec(n),s=o&&o[3]||(e.cssNumber[t]?"":"px"),a=(e.cssNumber[t]||"px"!==s&&+i)&&m.exec(e.css(r.elem,t)),l=1,u=20;if(a&&a[3]!==s){s=s||a[3],o=o||[],a=+i||1;do l=l||".5",a/=l,e.style(r.elem,t,a+s);while(l!==(l=r.cur()/i)&&1!==l&&--u)}return o&&(a=r.start=+a||+i||0,r.unit=s,r.end=o[1]?a+(o[1]+1)*o[2]:+o[2]),r}]};return e.Animation=e.extend(d,{tweener:function(t,n){e.isFunction(t)?(n=t,t=["*"]):t=t.split(" ");for(var r,i=0,o=t.length;o>i;i++)r=t[i],y[r]=y[r]||[],y[r].unshift(n)},prefilter:function(e,t){t?v.unshift(e):v.push(e)}}),e.speed=function(t,n,r){var i=t&&"object"==typeof t?e.extend({},t):{complete:r||!r&&n||e.isFunction(t)&&t,duration:t,easing:r&&n||n&&!e.isFunction(n)&&n};return i.duration=e.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in e.fx.speeds?e.fx.speeds[i.duration]:e.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){e.isFunction(i.old)&&i.old.call(this),i.queue&&e.dequeue(this,i.queue)},i},e.fn.extend({fadeTo:function(e,t,n,i){return this.filter(r).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,n,r,i){var s=e.isEmptyObject(t),a=e.speed(n,r,i),l=function(){var n=d(this,e.extend({},t),a);(s||o.get(this,"finish"))&&n.stop(!0)};return l.finish=l,s||a.queue===!1?this.each(l):this.queue(a.queue,l)},stop:function(t,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof t&&(r=n,n=t,t=void 0),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var n=!0,s=null!=t&&t+"queueHooks",a=e.timers,l=o.get(this);if(s)l[s]&&l[s].stop&&i(l[s]);else for(s in l)l[s]&&l[s].stop&&g.test(s)&&i(l[s]);for(s=a.length;s--;)a[s].elem!==this||null!=t&&a[s].queue!==t||(a[s].anim.stop(r),n=!1,a.splice(s,1));(n||!r)&&e.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,r=o.get(this),i=r[t+"queue"],s=r[t+"queueHooks"],a=e.timers,l=i?i.length:0;for(r.finish=!0,e.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),n=a.length;n--;)a[n].elem===this&&a[n].queue===t&&(a[n].anim.stop(!0),a.splice(n,1));for(n=0;l>n;n++)i[n]&&i[n].finish&&i[n].finish.call(this);delete r.finish})}}),e.each(["toggle","show","hide"],function(t,n){var r=e.fn[n];e.fn[n]=function(e,t,i){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(a(n,!0),e,t,i)}}),e.each({slideDown:a("show"),slideUp:a("hide"),slideToggle:a("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){e.fn[t]=function(e,t,r){return this.animate(n,e,t,r)}}),e.timers=[],e.fx.tick=function(){var t,n=0,r=e.timers;for(f=e.now();n<r.length;n++)t=r[n],t()||r[n]!==t||r.splice(n--,1);r.length||e.fx.stop(),f=void 0},e.fx.timer=function(t){e.timers.push(t),t()?e.fx.start():e.timers.pop()},e.fx.interval=13,e.fx.start=function(){p||(p=setInterval(e.fx.tick,e.fx.interval))},e.fx.stop=function(){clearInterval(p),p=null},e.fx.speeds={slow:600,fast:200,_default:400},e});