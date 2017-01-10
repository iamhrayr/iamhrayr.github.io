$(document).ready(function(){
	$('.serviceOpener').on('click', function(e){
		e.stopPropagation();
		var target = $(this).attr('href');
		$('.serviceOpener').removeClass('active');
		$(this).addClass('active');
		var tl = new TimelineMax();
		tl.fromTo(target, .5, {display: 'none', opacity: 0}, {display: 'block', opacity: 1});
		$(target).show()
	})
}); /* end of document ready */