$(document).ready(function() {
    $('.name-first').css({'opacity':0}).animate({'opacity':1}, 3000);
    $('.name-last').css({'opacity':0}).animate({'opacity':1}, 3000);

    $('.info-list').delay(2000).css({'opacity':0}).animate({'opacity':1}, 2000, function(){ 
        $('.landing-item').delay(250).each(function(i){
            $(this).delay(750 * i).css({'opacity':0}).animate({'opacity':1}, 1000);
        });
        
    });
    
    $('.menu-icon').delay(5500).css({'opacity':0}).animate({'opacity':1}, 3000);
    
    $('.landing-item span').hover(function(event) {
        $(this).addClass("grey-line");
    },function(){
        $(this).removeClass("grey-line");     
    });
    
    // When leaving the page, fade it out
    $('.landing-item').click(function(){
        $('#landing').fadeOut(500); 
    });
});