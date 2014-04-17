/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */
!function(e){function t(e,t,n,r){var o,i,a,u,s,l,f,h,g,m;if((t?t.ownerDocument||t:F)!==M&&R(t),t=t||M,n=n||[],!e||"string"!=typeof e)return n;if(1!==(u=t.nodeType)&&9!==u)return[];if(B&&!r){if(o=vt.exec(e))if(a=o[1]){if(9===u){if(i=t.getElementById(a),!i||!i.parentNode)return n;if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&$(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=o[3])&&T.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(T.qsa&&(!q||!q.test(e))){if(h=f=O,g=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(l=d(e),(f=t.getAttribute("id"))?h=f.replace(wt,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",s=l.length;s--;)l[s]=h+p(l[s]);g=xt.test(e)&&c(t.parentNode)||t,m=l.join(",")}if(m)try{return Z.apply(n,g.querySelectorAll(m)),n}catch(y){}finally{f||t.removeAttribute("id")}}}return b(e.replace(st,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>N.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[O]=!0,e}function o(e){var t=M.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function i(e,t){for(var n=e.split("|"),r=e.length;r--;)N.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||_)-(~e.sourceIndex||_);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function s(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))})})}function c(e){return e&&typeof e.getElementsByTagName!==W&&e}function f(){}function d(e,n){var r,o,i,a,u,s,l,c=G[e+" "];if(c)return n?0:c.slice(0);for(u=e,s=[],l=N.preFilter;u;){(!r||(o=lt.exec(u)))&&(o&&(u=u.slice(o[0].length)||u),s.push(i=[])),r=!1,(o=ct.exec(u))&&(r=o.shift(),i.push({value:r,type:o[0].replace(st," ")}),u=u.slice(r.length));for(a in N.filter)!(o=ht[a].exec(u))||l[a]&&!(o=l[a](o))||(r=o.shift(),i.push({value:r,type:a,matches:o}),u=u.slice(r.length));if(!r)break}return n?u.length:u?t.error(e):G(e,s).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=z++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,a){var u,s,l=[P,i];if(a){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||o){if(s=t[O]||(t[O]={}),(u=s[r])&&u[0]===P&&u[1]===i)return l[2]=u[2];if(s[r]=l,l[2]=e(t,n,a))return!0}}}function g(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function m(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,l=null!=t;s>u;u++)(i=e[u])&&(!n||n(i,r,o))&&(a.push(i),l&&t.push(u));return a}function y(e,t,n,o,i,a){return o&&!o[O]&&(o=y(o)),i&&!i[O]&&(i=y(i,a)),r(function(r,a,u,s){var l,c,f,d=[],p=[],h=a.length,g=r||w(t||"*",u.nodeType?[u]:u,[]),y=!e||!r&&t?g:m(g,d,e,u,s),v=n?i||(r?e:h||o)?[]:a:y;if(n&&n(y,v,u,s),o)for(l=m(v,p),o(l,[],u,s),c=l.length;c--;)(f=l[c])&&(v[p[c]]=!(y[p[c]]=f));if(r){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,s)}for(c=v.length;c--;)(f=v[c])&&(l=i?tt.call(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else v=m(v===a?v.splice(h,v.length):v),i?i(null,a,v,s):Z.apply(a,v)})}function v(e){for(var t,n,r,o=e.length,i=N.relative[e[0].type],a=i||N.relative[" "],u=i?1:0,s=h(function(e){return e===t},a,!0),l=h(function(e){return tt.call(t,e)>-1},a,!0),c=[function(e,n,r){return!i&&(r||n!==D)||((t=n).nodeType?s(e,n,r):l(e,n,r))}];o>u;u++)if(n=N.relative[e[u].type])c=[h(g(c),n)];else{if(n=N.filter[e[u].type].apply(null,e[u].matches),n[O]){for(r=++u;o>r&&!N.relative[e[r].type];r++);return y(u>1&&g(c),u>1&&p(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(st,"$1"),n,r>u&&v(e.slice(u,r)),o>r&&v(e=e.slice(r)),o>r&&p(e))}c.push(n)}return g(c)}function x(e,n){var o=n.length>0,i=e.length>0,a=function(r,a,u,s,l){var c,f,d,p=0,h="0",g=r&&[],y=[],v=D,x=r||i&&N.find.TAG("*",l),w=P+=null==v?1:Math.random()||.1,b=x.length;for(l&&(D=a!==M&&a);h!==b&&null!=(c=x[h]);h++){if(i&&c){for(f=0;d=e[f++];)if(d(c,a,u)){s.push(c);break}l&&(P=w)}o&&((c=!d&&c)&&p--,r&&g.push(c))}if(p+=h,o&&h!==p){for(f=0;d=n[f++];)d(g,y,a,u);if(r){if(p>0)for(;h--;)g[h]||y[h]||(y[h]=Q.call(s));y=m(y)}Z.apply(s,y),l&&!r&&y.length>0&&p+n.length>1&&t.uniqueSort(s)}return l&&(P=w,D=v),g};return o?r(a):a}function w(e,n,r){for(var o=0,i=n.length;i>o;o++)t(e,n[o],r);return r}function b(e,t,n,r){var o,i,a,u,s,l=d(e);if(!r&&1===l.length){if(i=l[0]=l[0].slice(0),i.length>2&&"ID"===(a=i[0]).type&&T.getById&&9===t.nodeType&&B&&N.relative[i[1].type]){if(t=(N.find.ID(a.matches[0].replace(bt,Ct),t)||[])[0],!t)return n;e=e.slice(i.shift().value.length)}for(o=ht.needsContext.test(e)?0:i.length;o--&&(a=i[o],!N.relative[u=a.type]);)if((s=N.find[u])&&(r=s(a.matches[0].replace(bt,Ct),xt.test(i[0].type)&&c(t.parentNode)||t))){if(i.splice(o,1),e=r.length&&p(i),!e)return Z.apply(n,r),n;break}}return L(e,l)(r,t,!B,n,xt.test(e)&&c(t.parentNode)||t),n}var C,T,N,S,E,L,D,A,j,R,M,H,B,q,I,k,$,O="sizzle"+-new Date,F=e.document,P=0,z=0,X=n(),G=n(),U=n(),J=function(e,t){return e===t&&(j=!0),0},W="undefined",_=1<<31,V={}.hasOwnProperty,K=[],Q=K.pop,Y=K.push,Z=K.push,et=K.slice,tt=K.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",ot="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",it=ot.replace("w","w#"),at="\\["+rt+"*("+ot+")"+rt+"*(?:([*^$|!~]?=)"+rt+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+it+")|)|)"+rt+"*\\]",ut=":("+ot+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+at.replace(3,8)+")*)|.*)\\)|)",st=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),lt=new RegExp("^"+rt+"*,"+rt+"*"),ct=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),dt=new RegExp(ut),pt=new RegExp("^"+it+"$"),ht={ID:new RegExp("^#("+ot+")"),CLASS:new RegExp("^\\.("+ot+")"),TAG:new RegExp("^("+ot.replace("w","w*")+")"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+ut),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,yt=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xt=/[+~]/,wt=/'|\\/g,bt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),Ct=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{Z.apply(K=et.call(F.childNodes),F.childNodes),K[F.childNodes.length].nodeType}catch(Tt){Z={apply:K.length?function(e,t){Y.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}T=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},R=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:F,r=n.defaultView;return n!==M&&9===n.nodeType&&n.documentElement?(M=n,H=n.documentElement,B=!E(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){R()},!1):r.attachEvent&&r.attachEvent("onunload",function(){R()})),T.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=o(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=yt.test(n.getElementsByClassName)&&o(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),T.getById=o(function(e){return H.appendChild(e).id=O,!n.getElementsByName||!n.getElementsByName(O).length}),T.getById?(N.find.ID=function(e,t){if(typeof t.getElementById!==W&&B){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},N.filter.ID=function(e){var t=e.replace(bt,Ct);return function(e){return e.getAttribute("id")===t}}):(delete N.find.ID,N.filter.ID=function(e){var t=e.replace(bt,Ct);return function(e){var n=typeof e.getAttributeNode!==W&&e.getAttributeNode("id");return n&&n.value===t}}),N.find.TAG=T.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==W?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},N.find.CLASS=T.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==W&&B?t.getElementsByClassName(e):void 0},I=[],q=[],(T.qsa=yt.test(n.querySelectorAll))&&(o(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&q.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||q.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&q.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(T.matchesSelector=yt.test(k=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){T.disconnectedMatch=k.call(e,"div"),k.call(e,"[s!='']:x"),I.push("!=",ut)}),q=q.length&&new RegExp(q.join("|")),I=I.length&&new RegExp(I.join("|")),t=yt.test(H.compareDocumentPosition),$=t||yt.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},J=t?function(e,t){if(e===t)return j=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!T.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===F&&$(F,e)?-1:t===n||t.ownerDocument===F&&$(F,t)?1:A?tt.call(A,e)-tt.call(A,t):0:4&r?-1:1)}:function(e,t){if(e===t)return j=!0,0;var r,o=0,i=e.parentNode,u=t.parentNode,s=[e],l=[t];if(!i||!u)return e===n?-1:t===n?1:i?-1:u?1:A?tt.call(A,e)-tt.call(A,t):0;if(i===u)return a(e,t);for(r=e;r=r.parentNode;)s.unshift(r);for(r=t;r=r.parentNode;)l.unshift(r);for(;s[o]===l[o];)o++;return o?a(s[o],l[o]):s[o]===F?-1:l[o]===F?1:0},n):M},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==M&&R(e),n=n.replace(ft,"='$1']"),!(!T.matchesSelector||!B||I&&I.test(n)||q&&q.test(n)))try{var r=k.call(e,n);if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(o){}return t(n,M,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==M&&R(e),$(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==M&&R(e);var n=N.attrHandle[t.toLowerCase()],r=n&&V.call(N.attrHandle,t.toLowerCase())?n(e,t,!B):void 0;return void 0!==r?r:T.attributes||!B?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,o=0;if(j=!T.detectDuplicates,A=!T.sortStable&&e.slice(0),e.sort(J),j){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return A=null,e},S=t.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=S(t);return n},N=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(bt,Ct),e[3]=(e[4]||e[5]||"").replace(bt,Ct),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&dt.test(n)&&(t=d(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(bt,Ct).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=X[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&X(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==W&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(o){var i=t.attr(o,e);return null==i?"!="===n:n?(i+="","="===n?i===r:"!="===n?i!==r:"^="===n?r&&0===i.indexOf(r):"*="===n?r&&i.indexOf(r)>-1:"$="===n?r&&i.slice(-r.length)===r:"~="===n?(" "+i+" ").indexOf(r)>-1:"|="===n?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,s){var l,c,f,d,p,h,g=i!==a?"nextSibling":"previousSibling",m=t.parentNode,y=u&&t.nodeName.toLowerCase(),v=!s&&!u;if(m){if(i){for(;g;){for(f=t;f=f[g];)if(u?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[O]||(m[O]={}),l=c[e]||[],p=l[0]===P&&l[1],d=l[0]===P&&l[2],f=p&&m.childNodes[p];f=++p&&f&&f[g]||(d=p=0)||h.pop();)if(1===f.nodeType&&++d&&f===t){c[e]=[P,p,d];break}}else if(v&&(l=(t[O]||(t[O]={}))[e])&&l[0]===P)d=l[1];else for(;(f=++p&&f&&f[g]||(d=p=0)||h.pop())&&((u?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++d||(v&&((f[O]||(f[O]={}))[e]=[P,d]),f!==t)););return d-=o,d===r||0===d%r&&d/r>=0}}},PSEUDO:function(e,n){var o,i=N.pseudos[e]||N.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return i[O]?i(n):i.length>1?(o=[e,e,"",n],N.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,o=i(e,n),a=o.length;a--;)r=tt.call(e,o[a]),e[r]=!(t[r]=o[a])}):function(e){return i(e,0,o)}):i}},pseudos:{not:r(function(e){var t=[],n=[],o=L(e.replace(st,"$1"));return o[O]?r(function(e,t,n,r){for(var i,a=o(e,null,r,[]),u=e.length;u--;)(i=a[u])&&(e[u]=!(t[u]=i))}):function(e,r,i){return t[0]=e,o(t,null,i,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),lang:r(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(bt,Ct).toLowerCase(),function(t){var n;do if(n=B?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===M.activeElement&&(!M.hasFocus||M.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!N.pseudos.empty(e)},header:function(e){return mt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},N.pseudos.nth=N.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})N.pseudos[C]=u(C);for(C in{submit:!0,reset:!0})N.pseudos[C]=s(C);f.prototype=N.filters=N.pseudos,N.setFilters=new f,L=t.compile=function(e,t){var n,r=[],o=[],i=U[e+" "];if(!i){for(t||(t=d(e)),n=t.length;n--;)i=v(t[n]),i[O]?r.push(i):o.push(i);i=U(e,x(o,r))}return i},T.sortStable=O.split("").sort(J).join("")===O,T.detectDuplicates=!!j,R(),T.sortDetached=o(function(e){return 1&e.compareDocumentPosition(M.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||i("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||i("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||i(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:e.Sizzle=t}(window);