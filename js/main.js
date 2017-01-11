$(document).ready(function(){

	/**
	 * Home Services Tabs 
	 */
	$('.serviceOpener').on('click', function(e){
		e.stopPropagation();
		var target = $(this).attr('href');
		$('.serviceOpener').removeClass('active');
		$(this).addClass('active');

		var tl = new TimelineMax();
		tl.staggerTo($('.serviceDescr').children(), .5, {autoAlpha: 0, display: 'none', opacity: 0}, .2)
			.staggerFromTo($(target).children(), .5, {autoAlpha: 0, display: 'none', opacity: 0}, {autoAlpha: 1, display: 'block', opacity: 1}, .2);
		$(target).show()
	});



}); /* end of document ready */