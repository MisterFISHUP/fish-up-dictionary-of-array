// Used to toggle the menu on small screens when clicking on the menu button
function menuToggle() {
    var x = document.getElementById("navSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
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
