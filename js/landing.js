$(document).ready(function() {
    $('.name-first').hide();
    $('.name-last').hide();
    $('.info-list').hide();
    $('.footer').hide();
    
    $('.name-first').fadeIn(1000);
    $('.name-last').fadeIn(1000);
    $('.info-list').delay(1500).fadeIn(1000);
    
    $('.info-list').fadeIn(500, function(){        
        $('.landing-item').each(function(i){
            $(this).delay(1000 * i).fadeIn();
        });
        
    });
    
    $('.footer').delay(5500).slideDown();
    
    $('.landing-item span').hover(function(event) {
        $(this).addClass("grey-line");
    },function(){
        $(this).removeClass("grey-line");     
    });
});