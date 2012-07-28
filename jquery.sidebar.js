/**
 * jQuery simple sidebar plugin v0.3
 *
 * Copyright (c) 2011 fuzhe
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * HTML:
	<div id="sidebar">
		<a id="backToTop" href="#top">Back to Top</a>
	</div>

 * CSS:
	#sidebar{display:none; position:fixed; right:5px; bottom:5px;}
**/

;(function($){
	$.fn.sidebar = function(settings){
		settings = $.extend({
			min: 1,
			fadeSpeed: 200,
			position: 'bottom',
			ieOffset: 10,
			relative: false,
			relativeWidth: 960,
			backToTop: false,
			backContainer: '#backToTop',
			once: false,
			load: false,
			onShow: null
		}, settings);
		
		return this.each(function(){
			var $this = $(this),
				$browser = $.browser,
				$window = $(window),
				fadeSpeed = settings.fadeSpeed;
			
			var update = function(){
				if($browser.msie && ($browser.version == '6.0')){
					$this.css({'position': 'absolute'});
					if(settings.position == 'bottom'){
						$this.css({'top': $window.scrollTop() + $window.height() - $this.height() - settings.ieOffset});
					}
					if(settings.position == 'top'){
						$this.css({'top': $window.scrollTop() + settings.ieOffset});
					}
				}
				if(!settings.load && $window.scrollTop() >= settings.min){
					$this.fadeIn(fadeSpeed);
					if(typeof(settings.onShow) === 'function'){
						settings.onShow();
					}
				}
				else{
					if(!settings.once){
						$this.fadeOut(fadeSpeed);
					}
				}
			};
			
			if(settings.min == 0){
				update();
			}
			$window.on('scroll', function(){
				update();
			});
			
			if(settings.relative){
				var w = settings.relativeWidth,
					x = ($window.width() + w) / 2;
				
				$this.css('left', x);
				$window.on('resize scroll', function(){
					if($window.width() > w){
						var x = ($window.width() + w) / 2;
					}
					else{
						var x = w;
					}
					$this.css('left', x);
				});
			}
			
			if(settings.backToTop){
				$(settings.backContainer).click(function(){
					$('body, html').animate({
						scrollTop : 0
					}, 100);
					return false;
				});
			}
		});
	};
})(jQuery);