$(document).ready(function() {
    $('.splash-logo').hide();
    $('.footer').hide();
    
    $('.splash-logo').fadeIn(1500,function(){
        
        $('.landing-item').each(function(i){
            $(this).delay(1000 * i).fadeIn();
        });
        
    });
    
    $('.footer').delay(4500).slideDown();
    
    $('.landing-item span').hover(function(event) {
        $(this).addClass("grey-line");
    },function(){
        $(this).removeClass("grey-line");     
    });
});