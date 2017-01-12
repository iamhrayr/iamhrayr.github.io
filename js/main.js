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




}); /* end of document ready */