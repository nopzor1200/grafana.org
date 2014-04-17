define(["./core","./var/slice","./callbacks"],function(t,e){return t.extend({Deferred:function(e){var n=[["resolve","done",t.Callbacks("once memory"),"resolved"],["reject","fail",t.Callbacks("once memory"),"rejected"],["notify","progress",t.Callbacks("memory")]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments;return t.Deferred(function(i){t.each(n,function(n,s){var a=t.isFunction(e[n])&&e[n];o[s[1]](function(){var e=a&&a.apply(this,arguments);e&&t.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[s[0]+"With"](this===r?i.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,r):r}},o={};return r.pipe=r.then,t.each(n,function(t,e){var s=e[2],a=e[3];r[e[1]]=s.add,a&&s.add(function(){i=a},n[1^t][2].disable,n[2][2].lock),o[e[0]]=function(){return o[e[0]+"With"](this===o?r:this,arguments),this},o[e[0]+"With"]=s.fireWith}),r.promise(o),e&&e.call(o,o),o},when:function(n){var i,r,o,s=0,a=e.call(arguments),l=a.length,c=1!==l||n&&t.isFunction(n.promise)?l:0,u=1===c?n:t.Deferred(),d=function(t,n,r){return function(o){n[t]=this,r[t]=arguments.length>1?e.call(arguments):o,r===i?u.notifyWith(n,r):--c||u.resolveWith(n,r)}};if(l>1)for(i=new Array(l),r=new Array(l),o=new Array(l);l>s;s++)a[s]&&t.isFunction(a[s].promise)?a[s].promise().done(d(s,o,a)).fail(u.reject).progress(d(s,r,i)):--c;return c||u.resolveWith(o,a),u.promise()}}),t});