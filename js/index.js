// scroll to introduction
$(document).ready(function() {
    $(function() { $('#to_introduction').click(function() { 
        $('html,body').animate({scrollTop:$('#introduction').offset().top}, 500);});  
    }); 
});

// back to top button
$(function() {
	$('#to_top').click(function() { 
		$('html,body').animate({ scrollTop:0 }, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ) {
			$('#to_top').fadeIn(222);
		} else {
			$('#to_top').stop().fadeOut(222);
		}
	}).scroll();
});