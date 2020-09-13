// navigation menu on small screens
$("#toggleNavSmall").click(function() {
    $("#navSmall").toggleClass("w3-hide");
});
$("#toggleNavSmallTutorial").click(function() {
    $("#navSmallTutorial").toggleClass("w3-hide");
    $("#openNavSmallTutorial").toggleClass("w3-hide");
    $("#closeNavSmallTutorial").toggleClass("w3-hide");
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
