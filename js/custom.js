$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	/*$('.top-section__header').css({
		'transform':'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.top-section__image').css({
		'transform':'translate(0px, '+ wScroll/4 +'%)'
	});*/

	$('.right-wave').css({
		'transform':'translate(0px, -'+ wScroll/20 +'%)'
	});
	/*
	$('.blog').css({
		'transform':'translate(0px, -'+ wScroll/16 +'%)'
	});*/
});
   