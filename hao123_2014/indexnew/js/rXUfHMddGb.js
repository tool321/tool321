__d("widget.shortcut.shortcut","common.js.widget,common.js.browser,common.js.cookie,common.js.query,common.js.log,common.js.pageEvents".split(","),function(m,n,k,b){b("common.js.widget");var h=b("common.js.browser");b("common.js.cookie");var e=b("common.js.query"),l=b("common.js.log"),i=b("common.js.pageEvents"),j=70,f=!1;6==h.ie&&(j=10);$.widget("hao123.shortcut",{options:{bottom:200,anchor:[],gotopClass:"js_gotop",gobottomClass:"js_gobottom",gositesClass:"js_sites"},_init:function(){var a=this,
d=window.location.hash,g=$(d);a.gotop=$("."+a.options.gotopClass,a.element);a.gobottom=$("."+a.options.gobottomClass,a.element);a.gosites=$("."+a.options.gositesClass,a.element);i.on("viewport.deferchange",function(){a._onDeferChange.call(a)});i.on("viewport.change",function(){a._onChange.call(a)});for(var c=0,b=a.options.anchor;c<b.length;c++)$("."+b[c][0],a.element).click(function(c){return function(){var d=$("#"+b[c][1]);a._scrollTop(d);b[c][2]&&a._animate(d);return!1}}(c));a.gobottom.click(a._onGobottomClick);
a.gotop.click(a._onGotopClick);a._showOrHide();0<g.length&&(a._scrollTop(g,!0),e||(e={}),e.type=d.split("#")[1],l(e))},_scrollTop:function(a,d){var b=0;"newbottomsites"!=a.attr("id")&&!f&&(b=94,f=!0);d?$(window).scrollTop(a.offset().top-b):$(window).scrollTop(a.offset().top-b-j)},_onGotopClick:function(){f=!1;$(window).scrollTop(0);return!1},_onGobottomClick:function(){$(window).scrollTop(document.documentElement.scrollHeight-$(window).height());return!1},_onChange:function(){this._showOrHide()},
_onDeferChange:function(){if(6==h.ie){var a=document.documentElement.scrollTop+document.documentElement.clientHeight-this.element.height()-this.options.bottom;this.element.stop(!0,!0);this.element.animate({top:a})}},_showOrHide:function(){1E3>$(window).scrollTop()?(this.gobottom.show(),this.gosites.show(),this.gotop.hide()):(this.gobottom.hide(),this.gosites.hide(),this.gotop.show());$(window).width()<1020+2*this.element.width()?this.element.hide():this.element.fadeIn()},destroy:function(){$.Widget.prototype.destroy.call(this)},
_animate:function(a){var b=a.offset(),g=a.width(),a=a.height(),c=$('<div class="shortcutnew-decorate"></div>'),e={top:b.top-5,left:b.left-5},f=a+10;c.width(g+10);c.height(f);c.offset(e);c.css({position:"absolute"});$("body").append(c);c.animate({width:g,height:a,left:b.left,top:b.top},1E3,function(){c.remove()})}});return k});window.js_rXUfHMddGb&&window.js_rXUfHMddGb(!0);