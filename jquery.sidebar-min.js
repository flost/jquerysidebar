/**
 * jQuery simple sidebar plugin v0.3
 *
 * Copyright (c) 2011 fuzhe
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
**/
(function(a){a.fn.sidebar=function(b){b=a.extend({min:1,fadeSpeed:200,position:"bottom",ieOffset:10,relative:false,relativeWidth:960,backToTop:false,backContainer:"#backToTop",once:false,load:false,onShow:null},b);return this.each(function(){var g=a(this),d=a.browser,h=a(window),f=b.fadeSpeed;var i=function(){if(d.msie&&(d.version=="6.0")){g.css({position:"absolute"});if(b.position=="bottom"){g.css({top:h.scrollTop()+h.height()-g.height()-b.ieOffset})}if(b.position=="top"){g.css({top:h.scrollTop()+b.ieOffset})}}if(!b.load&&h.scrollTop()>=b.min){g.fadeIn(f);if(typeof(b.onShow)==="function"){b.onShow()}}else{if(!b.once){g.fadeOut(f)}}};if(b.min==0){i()}h.on("scroll",function(){i()});if(b.relative){var e=b.relativeWidth,c=(h.width()+e)/2;g.css("left",c);h.on("resize scroll",function(){if(h.width()>e){var j=(h.width()+e)/2}else{var j=e}g.css("left",j)})}if(b.backToTop){a(b.backContainer).click(function(){a("body, html").animate({scrollTop:0},100);return false})}})}})(jQuery);