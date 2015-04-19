$(document).ready(function() {
    $('.name-first').hide();
    $('.name-last').hide();
    $('.info-list').hide();
    $('.menu-icon').hide();
    
    $('.name-first').fadeIn(1000);
    $('.name-last').fadeIn(1000);
    $('.info-list').delay(1000).fadeIn(2000, function(){        
        $('.landing-item').delay(750).each(function(i){
            $(this).delay(750 * i).fadeIn();
        });
        
    });
    
    $('.menu-icon').delay(5500).fadeIn();
    
    $('.landing-item span').hover(function(event) {
        $(this).addClass("grey-line");
    },function(){
        $(this).removeClass("grey-line");     
    });
    
    $('.landing-item').click(function(){
        $('#landing').fadeOut(500); 
    });
});