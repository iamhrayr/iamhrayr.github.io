$(document).ready(function(){

	/**
	 * Home Services Tabs 
	 */
	$('.serviceOpener').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$('.serviceOpener').removeClass('active');
		$(this).addClass('active');

		var tl = new TimelineMax();
		tl.staggerTo($('.serviceDescr').children(), .5, {autoAlpha: 0, display: 'none', opacity: 0}, .2)
			.staggerFromTo($(target).children(), .5, {autoAlpha: 0, display: 'none', opacity: 0}, {autoAlpha: 1, display: 'block', opacity: 1}, .2);
		$(target).show()
	});


	/**
	 * Progress bar circle
	 */
	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 40,
        easing: 'ease',
        size: 100,
        trackcolor: '#151515',
        fillcolor: 'rgba(255,255,255,.1)',
        // barcolor: 'blue'

    });

	/**
	 * scrollr initialization
	 */
    var s = skrollr.init({
    	// animate: true,
    	// smoothScrolling: true,
    	// smoothScrollingDuration: 500,
    	// edgeStrategy: 'reset'
    });


    /**
	 * scroll smoothly
	 */
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;

	var goUp = true;
	var end = null;
	var interval = null;

	function wheel(event) {
	    var delta = 0;
	    if (event.wheelDelta) delta = event.wheelDelta / 120;
	    else if (event.detail) delta = -event.detail / 3;

	    handle(delta);
	    if (event.preventDefault) event.preventDefault();
	    event.returnValue = false;
	}

	function handle(delta) {
	    var animationInterval = 10; //lower is faster
	    var scrollSpeed = 30; //lower is faster

	    if (end == null) {
	        end = $(window).scrollTop();
	    }
	    end -= 20 * delta;
	    goUp = delta > 0;

	    if (interval == null) {
	        interval = setInterval(function() {
	            var scrollTop = $(window).scrollTop();
	            var step = Math.round((end - scrollTop) / scrollSpeed);
	            if (scrollTop <= 0 ||
	                scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
	                goUp && step > -1 ||
	                !goUp && step < 1) {
	                clearInterval(interval);
	                interval = null;
	                end = null;
	            }
	            $(window).scrollTop(scrollTop + step);
	        }, animationInterval);
	    }
	}




}); /* end of document ready */