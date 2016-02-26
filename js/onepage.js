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

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a[href*=#]').bind('click', function(event) {
            event.preventDefault();            
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 60
            }, 1500, 'easeInOutExpo');
            closeMenu();
        });
    });
    
    // Swap through images on landing background
    /*var i = 0;
    function ChangeLandingBG() {
        if( i == 0 )
        {
            $('#BG1').css('background', 'url(http://izzybenavente.me/images/strip.jpg) 50% 0 no-repeat fixed');
            $('#BG1').css('background-size', 'cover');
        }
        else if( i == 1 )
        {
            $('#BG1').css('background', 'url(http://izzybenavente.me/images/home.jpg) 50% 0 no-repeat fixed');
            $('#BG1').css('background-size', 'cover');
        }
        i++;
        if(i>1) 
        {
            i = 0;
        }
       setTimeout(ChangeLandingBG, 5000);
    }
    setTimeout(ChangeLandingBG, 5000);*/
    
    // ELEVATOR!
    window.onload = function() {
      var elevator = new Elevator({
        element: document.querySelector('.elevator'),
        mainAudio: 'js/elevator.mp3',
        endAudio: 'js/ding.mp3'
      });
    }   

    // Show and hide the top bar nav
    var $win = $(window);       
    $win.scroll(function () {           
        if($(window).scrollTop() <= $('#about').height() && $('.custom-wrapper').is(":visible"))  {
            if(!elevator.elevating)
            {
                // Extra check because elevator can cause incorrect scroll position due to dynamic resizing of content such as BG images
                $('.custom-wrapper').fadeOut("slow");       
            } 
        }
        else if($(window).scrollTop() > $('#about').height() && $('.custom-wrapper').is(":hidden"))  {
            $('.custom-wrapper').fadeIn("slow");
        }
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