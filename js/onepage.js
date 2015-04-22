$(document).ready(function() {
    // LANDING PAGE
    $('.landing-item').delay(250).each(function(i){
        $(this).delay(750 * i).css({'opacity':0}).animate({'opacity':1}, 1000);
    });        
    
    $('.menu-icon').delay(5500).css({'opacity':0}).animate({'opacity':1}, 3000);
    
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
            if ($win.scrollTop() != $('#about').offset().top && $atTop)
            {
                $('.about-izzy').fadeOut();
                $('.about-more').slideUp();
                $atTop = false;
            }
            else if($win.scrollTop() == $('#about').offset().top && !$atTop){
                $('.about-izzy').fadeIn();
                $('.about-more').slideDown();
                $atTop = true;   
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
    $("div.works-item").click(
        function(event)
        {
            //window.location = $(this).attr("url");
            $url = $(this).attr("url");
            window.open($url,'_blank');
            event.preventDefault();
        }
    );    
    
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