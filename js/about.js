$(document).ready(function() {
    $('.about-izzy').hide();
    $('.about-more').hide();
    $('.about-izzy').fadeIn(1000);
    $('.about-more').delay(1000).slideDown(500);
    
    $(function () {
        var $win = $(window);
        var $atTop = true;
        

        $win.scroll(function () {
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
        });
     }); 
});