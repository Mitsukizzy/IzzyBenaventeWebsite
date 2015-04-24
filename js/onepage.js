$(document).ready(function() {
    // LANDING PAGE
    $('.landing-item').delay(250).each(function(i){
        $(this).delay(750 * i).css({'opacity':0}).animate({'opacity':1}, 1000);
    });        
        
    $('.landing-item span').hover(function(event) {
        $(this).addClass("grey-line");
    },function(){
        $(this).removeClass("grey-line");     
    });
    
    // ABOUT PAGE    
    $(function () {
        var $win = $(window);
        var $atTop = false;
        var $atBottom = false;
        

        $win.scroll(function () {
            // If scrolled to top, show text
/*            if ($win.scrollTop() != $('#about').offset().top && $atTop)
            {
                $('.about-izzy').fadeOut();
                $('.about-more').slideUp();
                $atTop = false;
            }
            else if($win.scrollTop() == $('#about').offset().top && !$atTop){
                $('.about-izzy').fadeIn();
                $('.about-more').slideDown();
                $atTop = true;   
            }*/
            
            var $elem = $('.about-izzy');

            var docViewTop = $win.scrollTop();
            var docViewBottom = docViewTop + $win.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();

            if (!$atTop && (elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
                $('.about-izzy').fadeIn(1000);
                $('.about-more').slideDown(1000);
                $atTop = true;   
            }
            else if($atTop && (elemBottom > docViewBottom) || (elemTop < docViewTop)){
                $('.about-izzy').fadeOut(1000);
                $('.about-more').slideUp(1000);
                $atTop = false;
            }
            
            // If scrolled to bottom, show bottom bar
            if($(window).scrollTop() + $(window).height() >= $(document).height() && !$atBottom)  {
                $('.footer').slideDown();
                $atBottom = true;
            }
            else if($(window).scrollTop() + $(window).height() != $(document).height() && $atBottom)  {
                $('.footer').slideUp();
                $atBottom = false;
            }
        });
     }); 
    
    // WORKS PAGE
/*    $("div.works-item").click(
        function(event)
        {
            //window.location = $(this).attr("url");
            $url = $(this).attr("url");
            window.open($url,'_blank');
            event.preventDefault();
        }
    );  */ 
    
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