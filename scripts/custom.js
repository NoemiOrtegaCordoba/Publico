$(window).one('load', function() { 
	$('.preloader').fadeOut(); 
	$('#preloader').delay(550).fadeOut('slow'); 
	$('body').delay(450).css({'overflow':'visible'});
});
