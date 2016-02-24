$(document).ready(function() {
    // LANDING PAGE FADE IN
    $('.landing-item').delay(250).each(function(i){
        $(this).delay(750 * i).css({'opacity':0}).animate({'opacity':1}, 1000);
    });        
        
    $('.landing-item span').hover(function(event) {
        $(this).addClass("grey-line");
    },function(){
        $(this).removeClass("grey-line");     
    });

    
    $(function () {
        var $win = $(window);        

        $win.scroll(function () {            
            if($(window).scrollTop() <= $('#about').height()  && $('.custom-wrapper').is(":visible"))  {
                $('.custom-wrapper').fadeOut("slow");
            }
            else if($(window).scrollTop() > $('#about').height() && $('.custom-wrapper').is(":hidden"))  {
                $('.custom-wrapper').fadeIn("slow");
            }
        });
     }); 
    
    
    $('.works-item').click(function(){
        $workitem = $(this).attr("item");
        $('.item-' + $workitem).fadeIn();
        $('body').addClass('noscroll');     // prevent body from scrolling
        $('.menu-icon').hide();             // hide hamburger
        
        $('.close-icon-work').click(function() {
            $('.item-' + $workitem).fadeOut(); 
            $('body').removeClass('noscroll');  
            $('.menu-icon').show();
        });
    });
    
    $('.work-nav').click(function(){
        $nextitem = $(this).attr("next");
        $curitem = $(this).attr("cur");
        $('.item-' + $nextitem).fadeIn();
        $('.item-' + $curitem).fadeOut();
        $('body').addClass('noscroll');     // prevent body from scrolling
        $('.menu-icon').hide();             // hide hamburger
        
        $('.close-icon-work').click(function() {
            $('.item-' + $nextitem).fadeOut(); 
            $('body').removeClass('noscroll');  
            $('.menu-icon').show();
        });
    });
                
    // Responsive icon resizing
    if($(window).width() <= 610) {
        $("fa-4x").each(function() {
            $(this).removeClass("fa-4x");
            $(this).addClass("fa-2x");
        });
    }
    
    $(window).resize(function() {
        if($(window).width() <= 610) {
            $("fa-4x").each(function() {
                $(this).removeClass("fa-4x");
                $(this).addClass("fa-2x");
            });
        }
    });
});