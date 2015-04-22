$(document).ready(function() {
    $('.about-izzy').fadeIn(1000);
    $('.about-more').delay(1000).slideDown(500);   
    
    $(function () {
        var $win = $(window);
        var $atTop = true;
        var $atBottom = false;
        

        $win.scroll(function () {
            // If scrolled to top, show text
            if ($win.scrollTop() != 0 && $atTop)
            {
                $('.about-izzy').fadeOut();
                $('.about-more').slideUp();
                $atTop = false;
            }
            else if($win.scrollTop() == 0 && !$atTop){
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
    
});