!function(e,t,n){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.1.1",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0},init:function(t,n,r){Foundation.inherit(this,"add_custom_rule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(n,r),i.S("["+this.attr_name()+"]",this.scope).each(function(){var t=i.S(this),n=t.data(i.attr_name(!0)+"-init");i.S("section",this),e("> ul",this).first(),t.data("index",0);var r=t.parent();r.hasClass("fixed")||r.hasClass(n.sticky_class)?(i.settings.sticky_class=n.sticky_class,i.settings.sticky_topbar=t,t.data("height",r.outerHeight()),t.data("stickyoffset",r.offset().top)):t.data("height",t.outerHeight()),n.assembled||i.assemble(t),n.is_hover?i.S(".has-dropdown",t).addClass("not-click"):i.S(".has-dropdown",t).removeClass("not-click"),i.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),r.hasClass("fixed")&&i.S("body").addClass("f-topbar-fixed")})},toggle:function(n){var r=this;if(n)var i=r.S(n).closest("["+this.attr_name()+"]");else var i=r.S("["+this.attr_name()+"]");var o=i.data(this.attr_name(!0)+"-init"),s=r.S("section, .section",i);r.breakpoint()&&(r.rtl?(s.css({right:"0%"}),e(">.name",s).css({right:"100%"})):(s.css({left:"0%"}),e(">.name",s).css({left:"100%"})),r.S("li.moved",s).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),o.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(o.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(i.parent().hasClass(r.settings.sticky_class)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(){var e=this,n=this.S;n(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),e.toggle(this)}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var r=n(this),i=n(t.target),o=r.closest("["+e.attr_name()+"]"),s=o.data(e.attr_name(!0)+"-init");return i.data("revealId")?(e.toggle(),void 0):(e.breakpoint()||(!s.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),r.hasClass("hover")?(r.removeClass("hover").find("li").removeClass("hover"),r.parents("li.hover").removeClass("hover")):(r.addClass("hover"),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&t.preventDefault())),void 0)}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(e.breakpoint()){t.preventDefault();var r=n(this),i=r.closest("["+e.attr_name()+"]"),o=i.find("section, .section"),s=(r.next(".dropdown").outerHeight(),r.closest("li"));i.data("index",i.data("index")+1),s.addClass("moved"),e.rtl?(o.css({right:-(100*i.data("index"))+"%"}),o.find(">.name").css({right:100*i.data("index")+"%"})):(o.css({left:-(100*i.data("index"))+"%"}),o.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",r.siblings("ul").outerHeight(!0)+i.data("height"))}}),n(t).off(".topbar").on("resize.fndtn.topbar",e.throttle(function(){e.resize.call(e)},50)).trigger("resize"),n("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar",function(t){var r=n(t.target).closest("li").closest("li.hover");r.length>0||n("["+e.attr_name()+"] li").removeClass("hover")}),n(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var r=n(this),i=r.closest("["+e.attr_name()+"]"),o=i.find("section, .section"),s=(i.data(e.attr_name(!0)+"-init"),r.closest("li.moved")),a=s.parent();i.data("index",i.data("index")-1),e.rtl?(o.css({right:-(100*i.data("index"))+"%"}),o.find(">.name").css({right:100*i.data("index")+"%"})):(o.css({left:-(100*i.data("index"))+"%"}),o.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",a.outerHeight(!0)+i.data("height")),setTimeout(function(){s.removeClass("moved")},300)})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t=e.S(this);t.data(e.attr_name(!0)+"-init");var r,i=t.parent("."+e.settings.sticky_class);if(!e.breakpoint()){var o=t.hasClass("expanded");t.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&e.toggle(t)}i.length>0&&(i.hasClass("fixed")?(i.removeClass("fixed"),r=i.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(r-=t.data("height")),t.data("stickyoffset",r),i.addClass("fixed")):(r=i.offset().top,t.data("stickyoffset",r)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},assemble:function(t){var n=this,r=t.data(this.attr_name(!0)+"-init"),i=n.S("section",t);e("> ul",t).first(),i.detach(),n.S(".has-dropdown>a",i).each(function(){var t=n.S(this),i=t.siblings(".dropdown"),o=t.attr("href");if(!i.find(".title.back").length){if(r.mobile_show_parent_link&&o&&o.length>1)var s=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="'+o+'">'+t.text()+"</a></li>");else var s=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');1==r.custom_back_text?e("h5>a",s).html(r.back_text):e("h5>a",s).html("&laquo; "+t.html()),i.prepend(s)}}),i.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,r=this;return e("> li",t).each(function(){n+=r.S(this).outerHeight(!0)}),n},sticky:function(){var e=(this.S(t),this);this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,n=this.S(t),r=this;if(r.S(e).length>0){var i=this.settings.sticky_topbar.data("stickyoffset");r.S(e).hasClass("expanded")||(n.scrollTop()>i?r.S(e).hasClass("fixed")||(r.S(e).addClass("fixed"),r.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=i&&r.S(e).hasClass("fixed")&&(r.S(e).removeClass("fixed"),r.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,this,this.document);