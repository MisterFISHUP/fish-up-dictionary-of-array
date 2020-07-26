// scroll to introduction
$(document).ready(function() {
    $(function() { $('#to_introduction').click(function() { 
        $('html,body').animate({scrollTop:$('#introduction').offset().top}, 500);});  
    }); 
});
