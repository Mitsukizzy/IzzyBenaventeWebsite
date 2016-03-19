$(document).ready(function() {
    // LANDING PAGE FADE IN
    $('.landing-item').delay(250).each(function(i){
        $(this).delay(750 * i).css({'opacity':0}).animate({'opacity':1}, 1000);
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
    
    // Swap through images
    var images = [
        "http://izzybenavente.me/gallery/pompidou.jpg",
        "http://izzybenavente.me/gallery/ggames.jpg",
        "http://izzybenavente.me/gallery/treehacks.jpg",
        "http://izzybenavente.me/gallery/acm.jpg",
        "http://izzybenavente.me/gallery/dragonboat.jpg",
        "http://izzybenavente.me/gallery/mobilehack.jpg"   
    ];
    var i = 0;    
    function slideShow() {
        $('#slideshow').className += "fadeOut";
        setTimeout(function() {
            $('#slideshow').css('background', 'url(' + images[i] + ')');
            $('#slideshow').css('background-size', 'cover');
            $('#slideshow').className = "";
        }, 1000);
        i++;
        if (i == images.length) { i = 0; }
        setTimeout(slideShow, 5000);
    }
    slideShow();
    
    function closeTopNav() {
        $('.custom-wrapper').fadeOut("slow");    
    }
    
    // ELEVATOR!
    var elevator = new Elevator({
      element: document.querySelector('.elevator-icon'),
      mainAudio: 'js/elevator_low.mp3',
      endAudio: 'js/ding_low.mp3',
      endCallback: closeTopNav
    });
    
    // SOUNDLESS ELEVATOR
    var elevator_no = new Elevator({
      element: document.querySelector('.elevator-icon-no'),
      duration: 5000,
      endCallback: closeTopNav
    });

    $('.works-item').click(function(){
        $workitem = $(this).attr("item");
        $('.item-' + $workitem).fadeIn();
        $('body').addClass('noscroll');     // prevent body from scrolling
        
        $('.close-icon-work').click(function() {
            $('.item-' + $workitem).fadeOut(); 
            $('body').removeClass('noscroll');  
        });
    });
    
    $('.work-nav').click(function(){
        $nextitem = $(this).attr("next");
        $curitem = $(this).attr("cur");
        $('.item-' + $nextitem).fadeIn();
        $('.item-' + $curitem).fadeOut();
        $('body').addClass('noscroll');     // prevent body from scrolling
        
        $('.close-icon-work').click(function() {
            $('.item-' + $nextitem).fadeOut(); 
            $('body').removeClass('noscroll');  
        });
    });
        
});