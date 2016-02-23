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
        var $atTop = false;
        var $atBottom = false;
        

        $win.scroll(function () {
            var $elem = $('.about-izzy');

            var docViewTop = $win.scrollTop();
            var docViewBottom = docViewTop + $win.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            
            var bg = jQuery("#BG1");
            jQuery(window).resize("resizeBackground");
            
            function resizeBackground() {
                bg.height(jQuery(window).height() + 60);
            }
            resizeBackground();
            
            // If scrolled to bottom, show bottom bar, +2 so it'll just touch the bottom
            if($(window).scrollTop() + $(window).height() + 1 >= $(document).height() && !$atBottom)  {
                $('.footer').slideDown();
                $atBottom = true;
            }
            else if($(window).scrollTop() + $(window).height() != $(document).height() && $atBottom)  {
                $('.footer').slideUp();
                $atBottom = false;
            }
            
            if($(window).scrollTop() <= $('#about').height()  && !$atTop)  {
                $('.custom-wrapper').fadeOut("slow");
                $atTop = true;
            }
            else if($(window).scrollTop() > $('#about').height() && $atTop)  {
                $('.custom-wrapper').fadeIn("slow");
                $atTop = false;
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
    
    // CONTACT PAGE
    $('.contact-item').hover(function(event) {
        $(this).find(".fa").css("color", "white");
        $(this).find("p").css("color", "#ffcc00");
    },function(){
        $(this).find(".fa").css("color", "#555");
        $(this).find("p").css("color", "white");
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