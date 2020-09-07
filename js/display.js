// toggle the menu on small screens when clicking on the menu button
$("#btnToggleNavMenu").click(function(){
    $("#navSmall").toggleClass("w3-hide");
});

// back to top button
$(function() {
    $('#to_top').click(function() { 
        $('html,body').animate({ scrollTop:0 }, 150);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ) {
            $('#to_top').fadeIn(222);
        } else {
            $('#to_top').stop().fadeOut(222);
        }
    }).scroll();
});
