!function(){function t(t){I.set(t)}function e(t){if(!t||""==t)return"";for(;t[c](0)[h]>0&&" \n\r	"[l](t[c](0))>-1;)t=t[b](1);for(;t[c](t[h]-1)[h]>0&&" \n\r	"[l](t[c](t[h]-1))>-1;)t=t[b](0,t[h]-1);return t}var n=void 0,i=encodeURIComponent,s=String,a=Math,r="push",o="cookie",c="charAt",l="indexOf",u="getTime",d="toString",f="window",h="length",p="document",g="split",m="location",v="protocol",_="href",b="substring",y="join",x="toLowerCase",w="_gat",C="_gaq",k="4.9.4",S="_gaUserPrefs",T="ioo",F="&",E="=",j="__utma=",D="__utmb=",A="__utmc=",$="__utmk=",N="__utmv=",q="__utmz=",M="__utmx=",L="GASO=",H=function(){var t=this,e=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";t.set=function(t){e[t]=!0},t.Sc=function(){for(var t=[],i=0;i<e[h];i++)e[i]&&(t[a.floor(i/6)]^=1<<i%6);for(i=0;i<t[h];i++)t[i]=n[c](t[i]||0);return t[y]("")+"~"}},I=new H,O=function(t,e){var n=this;n.window=t,n.document=e,n.setTimeout=function(t,e){setTimeout(t,e)},n.Jb=function(t){return navigator.userAgent[l](t)>=0},n.Xc=function(){return n.Jb("Firefox")&&![].reduce},n.Vc=function(){return z[f][S]},n.Gc=function(){return z[f].external},n.Hc=function(){return z[f].performance||z[f].webkitPerformance},n.Ic=function(){return z[f].top==z[f]},n.Ya=function(t){var e=z[f]&&z[f].gaGlobal;return t&&!e&&(e={},z[f].gaGlobal=e),e},n.ec=function(t){z[p][m].href=t},n.qb=function(t){if(!t||!n.Jb("Firefox"))return t;for(var t=t.replace(/\n|\r/g," "),e=0,i=t[h];i>e;++e){var s=255&t.charCodeAt(e);(10==s||13==s)&&(t=t[b](0,e)+"?"+t[b](e+1))}return t}},z=new O(window,document),P=function(e){return function(n,i,s){return e[n]=function(){return t(i),s.apply(e,arguments)},s}},R=function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent&&t.attachEvent("on"+e,n)},W=function(t){return"[object Array]"==Object.prototype[d].call(Object(t))},B=function(t){return n==t||"-"==t||""==t},X=function(t,e,n){var i,s="-";return!B(t)&&!B(e)&&!B(n)&&(i=t[l](e),i>-1&&(n=t[l](n,i),0>n&&(n=t[h]),s=t[b](i+e[l](E)+1,n))),s},Q=function(t){var e,n,i=!1,s=0;if(!B(t))for(i=!0,e=0;e<t[h];e++)n=t[c](e),s+="."==n?1:0,i=i&&1>=s&&(0==e&&"-"==n||".0123456789"[l](n)>-1);return i},U=function(e,n){var s=i;return s instanceof Function?n?encodeURI(e):s(e):(t(68),escape(e))},Z=function(e,n){var i,s=decodeURIComponent,e=e[g]("+")[y](" ");if(s instanceof Function)try{i=n?decodeURI(e):s(e)}catch(a){t(17),i=unescape(e)}else t(68),i=unescape(e);return i},V=function(t,e){return t[l](e)>-1},G=function(e,n){e[r]||t(94),e[e[h]]=n},Y=function(t){var e,n=1,i=0;if(!B(t))for(n=0,e=t[h]-1;e>=0;e--)i=t.charCodeAt(e),n=(268435455&n<<6)+i+(i<<14),i=266338304&n,n=0!=i?n^i>>21:n;return n},K=function(){return a.round(2147483647*a.random())},J=function(){},te=function(t,e){this.ib=t,this.jb=e},ee=function(){function t(t){for(var e,n=[],t=t[g](","),i=0;i<t[h];i++)e=t[i][g](":"),n[r](new te(e[0],e[1]));return n}var e=this;e.Ca="utm_campaign",e.Da="utm_content",e.Ea="utm_id",e.Fa="utm_medium",e.Ga="utm_nooverride",e.Ha="utm_source",e.Ia="utm_term",e.Ja="gclid",e.vc="dclid",e.U=0,e.w=0,e.La=15768e6,e.Ma=18e5,e.s=63072e6,e.V=[],e.W=[],e.wc="cse",e.xc="q",e.Ta=50,e.J=t("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words"),e.f="/",e.L=100,e.ga="/__utm.gif",e.la=1,e.ma=1,e.u="|",e.ka=1,e.Ka=1,e.Ua=1,e.b="auto",e.B=1,e.Wb=10,e.zc=10,e.Ac=.2,e.o=n},ne=function(e){function n(t,e,n,i){var s="",r=0,s=X(t,"2"+e,";");if(!B(s)){if(t=s[l]("^"+n+"."),0>t)return["",0];s=s[b](t+n[h]+2),s[l]("^")>0&&(s=s[g]("^")[0]),n=s[g](":"),s=n[1],r=parseInt(n[0],10),!i&&r<a.m&&(s="")}return B(s)&&(s=""),[s,r]}function i(t,e){return"^"+[[e,t[1]][y]("."),t[0]][y](":")}function s(t){var e=new Date,t=new Date(e[u]()+t);return"expires="+t.toGMTString()+"; "}var a=this,r=e;a.m=(new Date)[u]();var c=[j,D,A,q,N,M,L];a.g=function(){var t=z[p][o];return r.o?a.Nc(t,r.o):t},a.Nc=function(t,e){for(var i,s=[],a=0;a<c[h];a++)i=n(t,c[a],e)[0],B(i)||(s[s[h]]=c[a]+i+";");return s[y]("")},a.l=function(e,n,i){var c=i>0?s(i):"";r.o&&(n=a.Oc(z[p][o],e,r.o,n,i),e="2"+e,c=i>0?s(r.s):""),e+=n,e=z.qb(e),e[h]>2e3&&(t(69),e=e[b](0,2e3)),c=e+"; path="+r.f+"; "+c+a.hb(),be.pb()||(z[p].cookie=c)},a.Oc=function(t,e,s,o,c){var l="",c=c||r.s,o=i([o,a.m+1*c],s),l=X(t,"2"+e,";");return B(l)?o:(t=i(n(t,e,s,!0),s),l=l[g](t)[y](""),l=o+l)},a.hb=function(){return B(r.b)?"":"domain="+r.b+";"}},ie=function(t){function e(t){return t=W(t)?t[y]("."):"",B(t)?"-":t}function i(t,e){var n,i=[];if(!B(t)&&(i=t[g]("."),e))for(n=0;n<i[h];n++)Q(i[n])||(i[n]="-");return i}function a(t,e,n){var i,s,a=m.I;for(i=0;i<a[h];i++)s=a[i][0],s+=B(e)?e:e+a[i][4],a[i][2](X(t,s,n))}var r,o,c,l,u,d,f,p,m=this,v=t;m.i=new ne(t),m.Ba=function(){return n==p||p==m.K()},m.g=function(){return m.i.g()},m.ea=function(){return u?u:"-"},m.Pa=function(t){u=t},m.fa=function(t){p=Q(t)?1*t:"-"},m.da=function(){return e(d)},m.X=function(t){d=i(t)},m.yc=function(){m.i.l(N,"",-1)},m.Rb=function(){return p?p:"-"},m.hb=function(){return B(v.b)?"":"domain="+v.b+";"},m.ba=function(){return e(r)},m.Na=function(t){r=i(t,1)},m.z=function(){return e(o)},m.$=function(t){o=i(t,1)},m.ca=function(){return e(c)},m.Oa=function(t){c=i(t,1)},m.qa=function(){return e(l)},m.ra=function(t){for(l=i(t),t=0;t<l[h];t++)4>t&&!Q(l[t])&&(l[t]="-")},m.Fc=function(){return f},m.Dc=function(t){f=t},m.Qb=function(){r=[],o=[],c=[],l=[],u=n,d=[],p=n},m.K=function(){for(var t="",e=0;e<m.I[h];e++)t+=m.I[e][1]();return Y(t)},m.Z=function(t){var e=m.g(),n=!1;return e&&(a(e,t,";"),m.fa(s(m.K())),n=!0),n},m.Sb=function(t){a(t,"",F),m.fa(X(t,$,F))},m.Tb=function(){var t,e=m.I,n=[];for(t=0;t<e[h];t++)G(n,e[t][0]+e[t][1]());return G(n,$+m.K()),n[y](F)},m.Ub=function(t,e){var n=m.I,i=v.f;m.Z(t),v.f=e;for(var s=0;s<n[h];s++)B(n[s][1]())||n[s][3]();v.f=i},m.Qa=function(){m.i.l(j,m.ba(),v.s)},m.aa=function(){m.i.l(D,m.z(),v.Ma)},m.Ra=function(){m.i.l(A,m.ca(),0)},m.sa=function(){m.i.l(q,m.qa(),v.La)},m.Sa=function(){m.i.l(M,m.ea(),v.s)},m.Y=function(){m.i.l(N,m.da(),v.s)},m.Ec=function(){m.i.l(L,m.Fc(),0)},m.I=[[j,m.ba,m.Na,m.Qa,"."],[D,m.z,m.$,m.aa,""],[A,m.ca,m.Oa,m.Ra,""],[M,m.ea,m.Pa,m.Sa,""],[q,m.qa,m.ra,m.sa,"."],[N,m.da,m.X,m.Y,"."]]},se="https:"==z[p][m][v]?"https://ssl.google-analytics.com/":"http://www.google-analytics.com/",ae=se+"p/__utm.gif",re=function(){var t=this;t.Bb=function(e,n,i,s,a){n[h]<=2036||a?t.Aa(e+"?"+n,s):n[h]<=8192?z.Xc()?t.Aa(e+"?"+i+"&err=ff2post&len="+n[h],s):t.fd(n,s):t.Aa(e+"?"+i+"&err=len&max=8192&len="+n[h],s)},t.Aa=function(t,e){var n=new Image(1,1);n.src=t,n.onload=function(){n.onload=null,(e||J)()}},t.fd=function(e,n){t.ed(e,n)||t.Ob(e,n)},t.ed=function(t,e){var n,i=z[f].XDomainRequest;return i?(n=new i,n.open("POST",ae)):(i=z[f].XMLHttpRequest)&&(i=new i,"withCredentials"in i&&(n=i,n.open("POST",ae,!0),n.setRequestHeader("Content-Type","text/plain"))),n?(n.onreadystatechange=function(){4==n.readyState&&(e&&e(),n=null)},n.send(t),!0):!1},t.Ob=function(e,n){var s=z[p];if(s.body){e=i(e);try{var a=s.createElement('<iframe name="'+e+'"></iframe>')}catch(r){a=s.createElement("iframe"),a.name=e}a.height="0",a.width="0",a.style.display="none",a.style.visibility="hidden";var o=s[m],o=o[v]+"//"+o.host+"/favicon.ico",o=se+"u/post_iframe.html#"+i(o),c=function(){a.src="",a.parentNode&&a.parentNode.removeChild(a)};R(z[f],"beforeunload",c);var l=!1,u=0,d=function(){if(!l){try{if(u>9||a.contentWindow[m].host==s[m].host){l=!0,c();var t=z[f],e="beforeunload",i=c;return t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i),n&&n(),void 0}}catch(r){}u++,z.setTimeout(d,200)}};R(a,"load",d),s.body.appendChild(a),a.src=o}else z.setTimeout(function(){t.Ob(e,n)},100)}},oe=function(t){var e=this,n=t,i=new ie(n),s=null,r=!be.pb(),o=function(){};e.Uc=function(){return"https:"==z[p][m][v]?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif"},e.A=function(t,c,l,d,f,h){s||(s=new re);var v=n.B,_=z[p][m];i.Z(l);var b=i.z()[g](".");if(b[1]<500||d){if(f){var x,w=(new Date)[u]();x=(w-b[3])*(n.Ac/1e3),x>=1&&(b[2]=a.min(a.floor(1*b[2]+x),n.zc),b[3]=w)}(d||!f||b[2]>=1)&&(!d&&f&&(b[2]=1*b[2]-1),d=1*b[1]+1,b[1]=d,f="utmwv="+k,w="&utms="+d,x="&utmn="+K(),d=f+"e"+w+x,t=f+w+x+(B(_.hostname)?"":"&utmhn="+U(_.hostname))+(100==n.L?"":"&utmsp="+U(n.L))+t,(0==v||2==v)&&(_=2==v?o:h||o,r&&s.Bb(n.ga,t,d,_,!0)),(1==v||2==v)&&(c="&utmac="+c,d+=c,t+=c+"&utmcc="+e.Tc(l),be.Ab&&(l="&aip=1",d+=l,t+=l),t+="&utmu="+I.Sc(),r&&s.Bb(e.Uc(),t,d,h)))}i.$(b[y](".")),i.aa()},e.Tc=function(t){for(var e,n=[],s=[j,q,N,M],a=i.g(),r=0;r<s[h];r++)if(e=X(a,s[r]+t,";"),!B(e)){if(s[r]==N){if(e=e[g](t+".")[1][g]("|")[0],B(e))continue;e=t+"."+e}G(n,s[r]+e+";")}return U(n[y]("+"))}},ce=function(){var t=this;t.N=[],t.Va=function(e){for(var n,i=t.N,s=0;s<i[h];s++)n=e==i[s].q?i[s]:n;return n},t.Xb=function(e,i,s,a,r,o,c,l){var u=t.Va(e);return n==u?(u=new ce.Wc(e,i,s,a,r,o,c,l),G(t.N,u)):(u.tb=i,u.zb=s,u.yb=a,u.wb=r,u.ub=o,u.xb=c,u.vb=l),u}};ce.Qc=function(t,e,n,i,s,a){var r=this;r.Fb=t,r.va=e,r.n=n,r.Cb=i,r.Db=s,r.Eb=a,r.ha=function(){return"&"+["utmt=item","tid="+U(r.Fb),"ipc="+U(r.va),"ipn="+U(r.n),"iva="+U(r.Cb),"ipr="+U(r.Db),"iqt="+U(r.Eb)][y]("&utm")}},ce.Wc=function(t,e,i,s,a,r,o,c){var l=this;l.q=t,l.tb=e,l.zb=i,l.yb=s,l.wb=a,l.ub=r,l.xb=o,l.vb=c,l.M=[],l.Vb=function(t,e,i,s,a){var r=l.Rc(t),o=l.q;n==r?G(l.M,new ce.Qc(o,t,e,i,s,a)):(r.Fb=o,r.va=t,r.n=e,r.Cb=i,r.Db=s,r.Eb=a)},l.Rc=function(t){for(var e,n=l.M,i=0;i<n[h];i++)e=t==n[i].va?n[i]:e;return e},l.ha=function(){return"&"+["utmt=tran","id="+U(l.q),"st="+U(l.tb),"to="+U(l.zb),"tx="+U(l.yb),"sp="+U(l.wb),"ci="+U(l.ub),"rg="+U(l.xb),"co="+U(l.vb)][y]("&utmt")}};var le=function(t){function e(){var t,e,i;e="ShockwaveFlash";var a="$version",r=z[f].navigator;if((r=r?r.plugins:n)&&r[h]>0)for(t=0;t<r[h]&&!i;t++)e=r[t],V(e.name,"Shockwave Flash")&&(i=e.description[g]("Shockwave Flash ")[1]);else{e=e+"."+e;try{t=new ActiveXObject(e+".7"),i=t.GetVariable(a)}catch(o){}if(!i)try{t=new ActiveXObject(e+".6"),i="WIN 6,0,21,0",t.we="always",i=t.GetVariable(a)}catch(c){}if(!i)try{t=new ActiveXObject(e),i=t.GetVariable(a)}catch(l){}i&&(i=i[g](" ")[1][g](","),i=i[0]+"."+i[1]+" r"+i[2])}return i?i:s}var i=this,s="-",a=z[f].screen,r=z[f].navigator;i.Nb=a?a.width+"x"+a.height:s,i.Mb=a?a.colorDepth+"-bit":s,i.cd=U(z[p].characterSet?z[p].characterSet:z[p].charset?z[p].charset:s),i.Lb=(r&&r.language?r.language:r&&r.browserLanguage?r.browserLanguage:s)[x](),i.Kb=r&&r.javaEnabled()?1:0,i.dd=t?e():s,i.dc=function(){return F+"utm"+["cs="+U(i.cd),"sr="+i.Nb,"sc="+i.Mb,"ul="+i.Lb,"je="+i.Kb,"fl="+U(i.dd)][y]("&utm")},i.cc=function(){for(var t=z[f].navigator,e=z[f].history[h],t=t.appName+t.version+i.Lb+t.platform+t.userAgent+i.Kb+i.Nb+i.Mb+(z[p][o]?z[p][o]:"")+(z[p].referrer?z[p].referrer:""),n=t[h];e>0;)t+=e--^n++;return Y(t)}},ue=function(t,e,i,s){function a(t){var e="",e=t[g]("://")[1][x]();return V(e,"/")&&(e=e[g]("/")[0]),e}var r=s,o=this;o.a=t,o.ob=e,o.m=i,o.mb=function(t){var e=o.ua();return new ue.v(X(t,r.Ea+E,F),X(t,r.Ha+E,F),X(t,r.Ja+E,F),o.R(t,r.Ca,"(not set)"),o.R(t,r.Fa,"(not set)"),o.R(t,r.Ia,e&&!B(e.G)?Z(e.G):n),o.R(t,r.Da,n),X(t,r.vc+E,F))},o.nb=function(t){var e,n=a(t);e=t;var i="";return e=e[g]("://")[1][x](),V(e,"/")&&(e=e[g]("/")[1],V(e,"?")&&(i=e[g]("?")[0])),e=i,V(n,"google")&&(t=t[g]("?")[y](F),V(t,F+r.xc+E)&&e==r.wc)?!0:!1},o.ua=function(){var t,e,i=o.ob,s=r.J;if(!B(i)&&"0"!=i&&V(i,"://")&&!o.nb(i)){t=a(i);for(var c=0;c<s[h];c++)if(e=s[c],V(t,e.ib[x]())&&(i=i[g]("?")[y](F),V(i,F+e.jb+E)))return t=i[g](F+e.jb+E)[1],V(t,F)&&(t=t[g](F)[0]),new ue.v(n,e.ib,n,"(organic)","organic",t,n,n)}},o.R=function(t,e,n){return t=X(t,e+E,F),n=B(t)?B(n)?"-":n:Z(t)},o.Bc=function(t){var e=r.V,n=!1;if(t&&"organic"==t.P)for(var t=Z(t.G)[x](),i=0;i<e[h];i++)n=n||e[i][x]()==t;return n},o.lb=function(){var t="",e="",t=o.ob;return B(t)||"0"==t||!V(t,"://")||o.nb(t)?void 0:(t=t[g]("://")[1],V(t,"/")&&(e=t[b](t[l]("/")),e=e[g]("?")[0],t=t[g]("/")[0][x]()),0==t[l]("www.")&&(t=t[b](4)),new ue.v(n,t,n,"(referral)","referral",n,e,n))},o.kb=function(t){var e="";return r.U&&(e=t&&t.hash?t[_][b](t[_][l]("#")):"",e=""!=e?e+F:e),e+=t.search},o.ta=function(){return new ue.v(n,"(direct)",n,"(direct)","(none)",n,n,n)},o.Cc=function(t){var e=!1,n=r.W;if(t&&"referral"==t.P)for(var t=U(t.Q)[x](),i=0;i<n[h];i++)e=e||V(t,n[i][x]());return e},o.h=function(t){return n!=t&&t.fb()},o.te=function(t){var t=X(t,q+o.a+".",";"),e=t[g]("."),t=new ue.v;return t.gb(e.slice(4)[y](".")),o.h(t)?(e=z[p][m],e=o.kb(e),e=o.mb(e),o.h(e)||(e=o.ua(),o.h(e)||(e=o.lb())),o.h(e)&&t.H()[x]()!=e.H()[x]()):!0},o.Pb=function(t,e){if(r.Ka){var n,i,s,a="",c="-",l=0,u=o.a;if(t){if(s=t.g(),a=o.kb(z[p][m]),r.w&&t.Ba()&&(c=Z(t.qa()),!B(c)&&!V(c,";")))return t.ra(c),t.sa(),void 0;if(c=X(s,q+u+".",";"),n=o.mb(a),o.h(n)&&(a=X(a,r.Ga+E,F),"1"==a&&!B(c)))return;if(!o.h(n)){if(n=o.ua(),a=o.Bc(n),!B(c)&&a)return;a&&(n=o.ta())}if(!o.h(n)&&e){if(n=o.lb(),a=o.Cc(n),!B(c)&&a)return;a&&(n=o.ta())}o.h(n)||B(c)&&e&&(n=o.ta()),o.h(n)&&(B(c)||(l=c[g]("."),i=new ue.v,i.gb(l.slice(4)[y](".")),i=i.H()[x]()==n.H()[x](),l=1*l[3]),!i||e)&&(s=X(s,j+u+".",";"),i=s.lastIndexOf("."),s=i>9?1*s[b](i+1):0,l++,s=0==s?1:s,t.ra([u,o.m,s,l,n.H()][y](".")),t.sa())}}}};ue.v=function(t,e,n,i,s,a,r,o){var c=this;c.q=t,c.Q=e,c.ya=n,c.n=i,c.P=s,c.G=a,c.Gb=r,c.xa=o,c.H=function(){var t,e,n=[],i=[["cid",c.q],["csr",c.Q],["gclid",c.ya],["ccn",c.n],["cmd",c.P],["ctr",c.G],["cct",c.Gb],["dclid",c.xa]];if(c.fb())for(t=0;t<i[h];t++)B(i[t][1])||(e=i[t][1][g]("+")[y]("%20"),e=e[g](" ")[y]("%20"),G(n,"utm"+i[t][0]+E+e));return z.qb(n[y]("|"))},c.fb=function(){return!(B(c.q)&&B(c.Q)&&B(c.ya)&&B(c.xa))},c.gb=function(t){var e=function(e){return Z(X(t,"utm"+e+E,"|"))};c.q=e("cid"),c.Q=e("csr"),c.ya=e("gclid"),c.n=e("ccn"),c.P=e("cmd"),c.G=e("ctr"),c.Gb=e("cct"),c.xa=e("dclid")}};var de=function(t,e,n,i){var s=this,a=e,r=E,o=t,c=i;s.S=n,s.wa="",s.r={},s.$b=function(){var t;if(t=X(s.S.g(),N+a+".",";")[g](a+".")[1],!B(t)){t=t[g]("|");var e,n=s.r,i=t[1];if(!B(i))for(var i=i[g](","),o=0;o<i[h];o++)e=i[o],B(e)||(e=e[g](r),4==e[h]&&(n[e[0]]=[Z(e[1]),Z(e[2]),1]));s.wa=Z(t[0]),s.T()}},s.T=function(){s.Pc();var t,e,n=U(s.wa),i="";for(t in s.r)(e=s.r[t])&&1===e[2]&&(i+=t+r+U(e[0])+r+U(e[1])+r+1+",");B(i)||(n+="|"+i),B(n)?s.S.yc():(s.S.X(a+"."+n),s.S.Y())},s.bc=function(t){s.wa=t,s.T()},s.ac=function(t,e,n,i){1!=i&&2!=i&&3!=i&&(i=3);var a=!1;if(e&&n&&t>0&&t<=o.Ta){var r=U(e),c=U(n);r[h]+c[h]<=64&&(s.r[t]=[e,n,i],s.T(),a=!0)}return a},s.Zb=function(t){return(t=s.r[t])&&1===t[2]?t[1]:void 0},s.Yb=function(t){var e=s.r;e[t]&&(delete e[t],s.T())},s.Pc=function(){c.t(8),c.t(9),c.t(11);var t,e,n=s.r;for(e in n)(t=n[e])&&(c.j(8,e,t[0]),c.j(9,e,t[1]),(t=t[2])&&3!=t&&c.j(11,e,""+t))}},fe=function(){function t(t,e,i,s){n==l[t]&&(l[t]={}),n==l[t][e]&&(l[t][e]=[]),l[t][e][i]=s}function e(t,e,i){return n!=l[t]&&n!=l[t][e]?l[t][e][i]:void 0}function i(t,e){if(n!=l[t]&&n!=l[t][e]){l[t][e]=n;var i,s=!0;for(i=0;i<p[h];i++)if(n!=l[t][p[i]]){s=!1;break}s&&(l[t]=n)}}function s(t){var e,i,s="",a=!1;for(e=0;e<p[h];e++)if(i=t[p[e]],n!=i){a&&(s+=p[e]);for(var a=[],r=n,o=n,o=0;o<i[h];o++)if(n!=i[o]){r="",o!=w&&n==i[o-1]&&(r+=o[d]()+_);var l;l=i[o];for(var u="",f=n,b=n,C=n,f=0;f<l[h];f++)b=l[c](f),C=x[b],u+=n!=C?C:b;l=u,r+=l,G(a,r)}i=g+a[y](v)+m,s+=i,a=!1}else a=!0;return s}var r=this,o=P(r),l={},u="k",f="v",p=[u,f],g="(",m=")",v="*",_="!",b="'",x={};x[b]="'0",x[m]="'1",x[v]="'2",x[_]="'3";var w=1;r.Yc=function(t){return n!=l[t]},r.C=function(){var t,e="";for(t in l)n!=l[t]&&(e+=t[d]()+s(l[t]));return e},r.hc=function(t){if(t==n)return r.C();var e,i=t.C();for(e in l)n!=l[e]&&!t.Yc(e)&&(i+=e[d]()+s(l[e]));return i},r.j=o("_setKey",89,function(e,n,i){return"string"!=typeof i?!1:(t(e,u,n,i),!0)}),r.ja=o("_setValue",90,function(e,i,s){return("number"==typeof s||n!=Number&&s instanceof Number)&&a.round(s)==s&&0/0!=s&&1/0!=s?(t(e,f,i,s[d]()),!0):!1}),r.fc=o("_getKey",87,function(t,n){return e(t,u,n)}),r.gc=o("_getValue",88,function(t,n){return e(t,f,n)}),r.t=o("_clearKey",85,function(t){i(t,u)}),r.ia=o("_clearValue",86,function(t){i(t,f)})},he=function(t,e){var n=this,i=P(n);n.ze=e,n.gd=t,n.Za=i("_trackEvent",91,function(t,i,s){return e.Za(n.gd,t,i,s)})},pe=function(t,e){var i=this,s=z.Gc(),r=z.Hc(),o=10;i.rb=new fe,i.Kc=function(){var t,e="timing",i="onloadT";return s&&s[i]!=n&&s.isValidLoadTime?t=s[i]:r&&r[e]&&(t=r[e].loadEventStart-r[e].fetchStart),t},i.Mc=function(){return t.D()&&t.Xa()%100<o},i.Lc=function(){var n="&utmt=event&utme="+U(i.rb.C())+t.na();e.A(n,t.p,t.a,!1,!0)},i.Jc=function(t){return t=a.min(a.floor(t/100),5e3),t>0?t+"00":"0"},i.sb=function(){var t=i.Kc();if(t==n||isNaN(t))return!1;if(0>=t)return!0;if(t>2147483648)return!1;var e=i.rb;e.t(14),e.ia(14);var a=i.Jc(t);return e.j(14,1,a)&&e.ja(14,1,t)&&i.Lc(),s&&s.isValidLoadTime!=n&&s.setPageReadyTime(),!1},i.Wa=function(){return i.Mc()?z.Ic()?(i.sb()&&R(z[f],"load",i.sb,!1),!0):!1:!1}},ge=function(){};ge.Zc=function(t){var e="gaso=",n=z[p][m].hash;return t=n&&1==n[l](e)?X(n,e,F):(n=z[f].name)&&0<=n[l](e)?X(n,e,F):X(t.g(),L,";")},ge.ad=function(t,e){var n=(e||"www")+".google.com",n="https://"+n+"/analytics/reporting/overlay_js?gaso="+t+F+K(),i="_gasojs",s=z[p].createElement("script");s.type="text/javascript",s.src=n,i&&(s.id=i),(z[p].getElementsByTagName("head")[0]||z[p].getElementsByTagName("body")[0]).appendChild(s)},ge.load=function(t,e){if(!ge.$c){var n=ge.Zc(e),i=n&&n.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);i&&(e.Dc(n),e.Ec(),be._gasoDomain=t.b,be._gasoCPath=t.f,ge.ad(i[2],i[1])),ge.$c=!0}};var me=function(i,r,o){function d(){if("auto"==N.b){var t=z[p].domain;"www."==t[b](0,4)&&(t=t[b](4)),N.b=t}N.b=N.b[x]()}function w(){d();var t=N.b,e=t[l]("www.google.")*t[l](".google.")*t[l]("google.");return e||"/"!=N.f||t[l]("google.org")>-1}function C(t,e,n){return B(t)||B(e)||B(n)?"-":(t=X(t,j+T.a+".",e),B(t)||(t=t[g]("."),t[5]=""+(t[5]?1*t[5]+1:1),t[3]=t[4],t[4]=n,t=t[y](".")),t)}function S(){return"file:"!=z[p][m][v]&&w()}var T=this,E=P(T),$=n,N=new ee,q=!1,M=n;T.n=i,T.m=a.round((new Date)[u]()/1e3),T.p=r||"UA-XXXXX-X",T.ab=z[p].referrer,T.oa=n,T.d=n,T.F=!1,T.O=n,T.e=n,T.bb=n,T.pa=n,T.a=n,T.k=n,N.o=o?U(o):n,T.eb=!1,T.mc=function(){return K()^2147483647&T.O.cc()},T.lc=function(){return N.b&&""!=N.b&&"none"!=N.b?(d(),N.Ua?Y(N.b):1):(N.b="",1)},T.kc=function(t,e){if(B(t))t="-";else{e+=N.f&&"/"!=N.f?N.f:"";var n=t[l](e),t=n>=0&&8>=n?"0":"["==t[c](0)&&"]"==t[c](t[h]-1)?"-":t}return t},T.na=function(t){var e="";e+=N.ka?T.O.dc():"",e+=N.la&&!B(z[p].title)?"&utmdt="+U(z[p].title):"";var n;return n=z.Ya(!0),n.hid||(n.hid=K()),n=n.hid,e+="&utmhid="+n+"&utmr="+U(s(T.oa))+"&utmp="+U(T.pc(t))},T.pc=function(e){var i=z[p][m];return e&&t(13),e=n!=e&&""!=e?U(e,!0):U(i.pathname+i.search,!0)},T.uc=function(t){if(T.D()){var e="";T.e!=n&&T.e.C()[h]>0&&(e+="&utme="+U(T.e.C())),e+=T.na(t),$.A(e,T.p,T.a)}},T.jc=function(){var t=new ie(N);return t.Z(T.a)?t.Tb():n},T.cb=E("_getLinkerUrl",52,function(t,e){var n=t[g]("#"),i=t,s=T.jc();return s&&(e&&1>=n[h]?i+="#"+s:(!e||1>=n[h])&&(1>=n[h]?i+=(V(t,"?")?F:"?")+s:i=n[0]+(V(t,"?")?F:"?")+s+"#"+n[1])),i}),T.nc=function(){var t,e,i=T.m,a=T.k,r=a.g(),o=T.a+"",c=z.Ya(),u=V(r,j+o+"."),d=V(r,D+o),h=V(r,A+o),v=[],x="",w=!1,r=B(r)?"":r;if(N.w&&!T.eb){t=z[p][m]&&z[p][m].hash?z[p][m][_][b](z[p][m][_][l]("#")):"",N.U&&!B(t)&&(x=t+F),x+=z[p][m].search,!B(x)&&V(x,j)&&(a.Sb(x),a.Ba()||a.Qb(),e=a.ba(),T.eb=!0),t=a.ea;var k=a.Pa,S=a.Sa;B(t())||(k(Z(t())),V(t(),";")||S()),t=a.da,k=a.X,S=a.Y,B(t())||(k(t()),V(t(),";")||S())}B(e)?u?(e=!d||!h)?(e=C(r,";",s(i)),T.F=!0):(e=X(r,j+o+".",";"),v=X(r,D+o,";")[g](".")):(e=[o,T.mc(),i,i,i,1][y]("."),w=T.F=!0):B(a.z())||B(a.ca())?(e=C(x,F,s(i)),T.F=!0):(v=a.z()[g]("."),o=v[0]),e=e[g]("."),z[f]&&c&&c.dh==o&&!N.o&&(e[4]=c.sid?c.sid:e[4],w&&(e[3]=c.sid?c.sid:e[4],c.vid&&(i=c.vid[g]("."),e[1]=i[0],e[2]=i[1]))),a.Na(e[y](".")),v[0]=o,v[1]=v[1]?v[1]:0,v[2]=n!=v[2]?v[2]:N.Wb,v[3]=v[3]?v[3]:e[4],a.$(v[y](".")),a.Oa(o),B(a.Rb())||a.fa(a.K()),a.Qa(),a.aa(),a.Ra()},T.oc=function(){$=new oe(N)},T.getName=E("_getName",58,function(){return T.n}),T.c=E("_initData",2,function(){var t;q||(T.O||(T.O=new le(N.ma)),T.a=T.lc(),T.k=new ie(N),T.e=new fe,M=new de(N,s(T.a),T.k,T.e),T.oc()),S()&&(q||(T.oa=T.kc(T.ab,z[p].domain),t=new ue(s(T.a),T.oa,T.m,N)),T.nc(t),M.$b()),q||(S()&&t.Pb(T.k,T.F),T.bb=new fe,ge.load(N,T.k),q=!0)}),T.Xa=E("_visitCode",54,function(){T.c();var t=X(T.k.g(),j+T.a+".",";"),t=t[g](".");return t[h]<4?"":t[1]}),T.qd=E("_cookiePathCopy",30,function(t){T.c(),T.k&&T.k.Ub(T.a,t)}),T.D=function(){return T.Xa()%1e4<100*N.L},T.re=E("_trackPageview",1,function(t){S()&&(T.c(),T.uc(t),T.F=!1)}),T.se=E("_trackTrans",18,function(){var t,e,n,i=T.a,s=[];if(T.c(),T.d&&T.D()){for(t=0;t<T.d.N[h];t++)for(e=T.d.N[t],G(s,e.ha()),n=0;n<e.M[h];n++)G(s,e.M[n].ha());for(t=0;t<s[h];t++)$.A(s[t],T.p,i,!0)}}),T.me=E("_setTrans",20,function(){var t,i,s,a;if(t=z[p].getElementById?z[p].getElementById("utmtrans"):z[p].utmform&&z[p].utmform.utmtrans?z[p].utmform.utmtrans:n,T.c(),t&&t.value)for(T.d=new ce,a=t.value[g]("UTM:"),N.u=N.u&&""!=N.u?N.u:"|",t=0;t<a[h];t++){for(a[t]=e(a[t]),i=a[t][g](N.u),s=0;s<i[h];s++)i[s]=e(i[s]);"T"==i[0]?T.$a(i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]):"I"==i[0]&&T.ic(i[1],i[2],i[3],i[4],i[5],i[6])}}),T.$a=E("_addTrans",21,function(t,e,n,i,s,a,r,o){return T.d=T.d?T.d:new ce,T.d.Xb(t,e,n,i,s,a,r,o)}),T.ic=E("_addItem",19,function(t,e,n,i,s,a){var r;T.d=T.d?T.d:new ce,(r=T.d.Va(t))||(r=T.$a(t,"","","","","","","")),r.Vb(e,n,i,s,a)}),T.oe=E("_setVar",22,function(t){t&&""!=t&&w()&&(T.c(),M.bc(t),T.D()&&$.A("&utmt=var",T.p,T.a))}),T.Yd=E("_setCustomVar",10,function(t,e,n,i){return T.c(),M.ac(t,e,n,i)}),T.td=E("_deleteCustomVar",35,function(t){T.c(),M.Yb(t)}),T.Cd=E("_getVisitorCustomVar",50,function(t){return T.c(),M.Zb(t)}),T.fe=E("_setMaxCustomVariables",71,function(t){N.Ta=t}),T.link=E("_link",101,function(t,e){N.w&&t&&(T.c(),z.ec(T.cb(t,e)))}),T.Fd=E("_linkByPost",102,function(t,e){N.w&&t&&t.action&&(T.c(),t.action=T.cb(t.action,e))}),T.pe=E("_setXKey",83,function(t,e,n){T.e.j(t,e,n)}),T.qe=E("_setXValue",84,function(t,e,n){T.e.ja(t,e,n)}),T.Dd=E("_getXKey",76,function(t,e){return T.e.fc(t,e)}),T.Ed=E("_getXValue",77,function(t,e){return T.e.gc(t,e)}),T.od=E("_clearXKey",72,function(t){T.e.t(t)}),T.pd=E("_clearXValue",73,function(t){T.e.ia(t)}),T.sd=E("_createXObj",75,function(){return T.c(),new fe}),T.qc=E("_sendXEvent",78,function(t){var e="";T.c(),T.D()&&(e+="&utmt=event&utme="+U(T.e.hc(t))+T.na(),$.A(e,T.p,T.a,!1,!0))}),T.rd=E("_createEventTracker",74,function(t){return T.c(),new he(t,T)}),T.Za=E("_trackEvent",4,function(t,e,i,s){T.c();var a=T.bb;return n!=t&&n!=e&&""!=t&&""!=e?(a.t(5),a.ia(5),(t=a.j(5,1,t)&&a.j(5,2,e)&&(n==i||a.j(5,3,i))&&(n==s||a.ja(5,1,s)))&&T.qc(a)):t=!1,t}),T.Wa=E("_trackPageLoadTime",100,function(){return T.c(),T.pa||(T.pa=new pe(T,$)),T.pa.Wa()}),T.wd=function(){return N},T.ae=E("_setDomainName",6,function(t){N.b=t}),T.kd=E("_addOrganic",14,function(t,e,n){N.J.splice(n?0:N.J[h],0,new te(t,e))}),T.nd=E("_clearOrganic",70,function(){N.J=[]}),T.hd=E("_addIgnoredOrganic",15,function(t){G(N.V,t)}),T.ld=E("_clearIgnoredOrganic",97,function(){N.V=[]}),T.jd=E("_addIgnoredRef",31,function(t){G(N.W,t)}),T.md=E("_clearIgnoredRef",32,function(){N.W=[]}),T.Id=E("_setAllowHash",8,function(t){N.Ua=t?1:0}),T.Td=E("_setCampaignTrack",36,function(t){N.Ka=t?1:0}),T.Ud=E("_setClientInfo",66,function(t){N.ka=t?1:0}),T.vd=E("_getClientInfo",53,function(){return N.ka}),T.Vd=E("_setCookiePath",9,function(t){N.f=t}),T.ne=E("_setTransactionDelim",82,function(t){N.u=t}),T.Xd=E("_setCookieTimeout",25,function(t){T.rc(1e3*t)}),T.rc=E("_setCampaignCookieTimeout",29,function(t){N.La=t}),T.Zd=E("_setDetectFlash",61,function(t){N.ma=t?1:0}),T.xd=E("_getDetectFlash",65,function(){return N.ma}),T.$d=E("_setDetectTitle",62,function(t){N.la=t?1:0}),T.yd=E("_getDetectTitle",56,function(){return N.la}),T.ce=E("_setLocalGifPath",46,function(t){N.ga=t}),T.zd=E("_getLocalGifPath",57,function(){return N.ga}),T.ee=E("_setLocalServerMode",92,function(){N.B=0}),T.ie=E("_setRemoteServerMode",63,function(){N.B=1}),T.de=E("_setLocalRemoteServerMode",47,function(){N.B=2}),T.Ad=E("_getServiceMode",59,function(){return N.B}),T.je=E("_setSampleRate",45,function(t){N.L=t}),T.ke=E("_setSessionTimeout",27,function(t){T.sc(1e3*t)}),T.sc=E("_setSessionCookieTimeout",26,function(t){N.Ma=t}),T.Jd=E("_setAllowLinker",11,function(t){N.w=t?1:0}),T.Hd=E("_setAllowAnchor",7,function(t){N.U=t?1:0}),T.Qd=E("_setCampNameKey",41,function(t){N.Ca=t}),T.Md=E("_setCampContentKey",38,function(t){N.Da=t}),T.Nd=E("_setCampIdKey",39,function(t){N.Ea=t}),T.Od=E("_setCampMediumKey",40,function(t){N.Fa=t}),T.Pd=E("_setCampNOKey",42,function(t){N.Ga=t}),T.Rd=E("_setCampSourceKey",43,function(t){N.Ha=t}),T.Sd=E("_setCampTermKey",44,function(t){N.Ia=t}),T.Ld=E("_setCampCIdKey",37,function(t){N.Ja=t}),T.ud=E("_getAccount",64,function(){return T.p}),T.Gd=E("_setAccount",3,function(t){T.p=t}),T.ge=E("_setNamespace",48,function(t){N.o=t?U(t):n}),T.Bd=E("_getVersion",60,function(){return k}),T.Kd=E("_setAutoTrackOutbound",79,J),T.le=E("_setTrackOutboundSubdomains",81,J),T.be=E("_setHrefExamineLimit",80,J),T.he=E("_setReferrerOverride",49,function(t){T.ab=t}),T.Wd=E("_setCookiePersistence",24,function(t){T.tc(t)}),T.tc=E("_setVisitorCookieTimeout",28,function(t){N.s=t})},ve=function(){var e=this,i=P(e);e.Ab=!1,e.Ib={},e.bd=0,e._gasoDomain=n,e._gasoCPath=n,e.ve=i("_getTracker",0,function(t,i){return e.za(t,n,i)}),e.za=i("_createTracker",55,function(e,i,s){return i&&t(23),s&&t(67),i==n&&(i="~"+be.bd++),be.Ib[i]=new me(i,e,s)}),e.Hb=i("_getTrackerByName",51,function(t){return t=t||"",be.Ib[t]||be.za(n,t)}),e.pb=function(){var t=z.Vc();return t&&t[T]&&t[T]()},e.ue=i("_anonymizeIp",16,function(){e.Ab=!0})},_e=function(){var e=this,n=P(e);e.xe=n("_createAsyncTracker",33,function(t,e){return be.za(t,e||"")}),e.ye=n("_getAsyncTracker",34,function(t){return be.Hb(t)}),e.push=function(){t(5);for(var e=arguments,n=0,i=0;i<e[h];i++)try{if("function"==typeof e[i])e[i]();else{var s="",a=e[i][0],r=a.lastIndexOf(".");r>0&&(s=a[b](0,r),a=a[b](r+1));var o=s==w?be:s==C?xe:be.Hb(s);o[a].apply(o,e[i].slice(1))}}catch(c){n++}return n}},be=new ve,ye=z[f][w];ye&&"function"==typeof ye._getTracker?be=ye:z[f][w]=be;var xe=new _e,we=z[f][C],Ce=!1;(!we||"function"!=typeof we[r]||(Ce=W(we)))&&(z[f][C]=xe,Ce&&xe[r].apply(xe,we))}();