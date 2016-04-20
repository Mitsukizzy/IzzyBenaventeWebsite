$(window).on("load", function() { // Waits for entire page to be ready, including images
//$(document).ready(function() { // Does jquery after DOM is loaded
    // LANDING PAGE FADE IN
/*    $('.landing-item').delay(250).each(function(i){
        $(this).delay(750 * i).css({'opacity':0}).animate({'opacity':1}, 1000);
    });    */    

    $('body').addClass('loaded'); // When page finished loading, makes load overlay invisible  
    
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
    
    /* SLIDESHOW: Swap through images */
    var images = [
        "gallery/mobilehack.jpg", 
        "gallery/ggames.jpg",  
        "gallery/pompidou.jpg",
        "gallery/treehacks.jpg",
        "gallery/desert.jpg",
        "gallery/acm.jpg",
        "gallery/dragonboat.jpg"
    ];
    i = 0;
    // Start first image
    $('#slideshow').css('background', 'url(' + images[i] + ')');
    $('#slideshow').css('background-size', 'cover');
    setTimeout(slideShow, 5000);
    
    function slideShow() {
        $('#slideshow').className += "fadeOut";
        setTimeout(function() {
            $('#slideshow').css('background', 'url(' + images[i] + ')');
            $('#slideshow').css('background-size', 'cover');
        }, 2000);
        i++;
        if (i == images.length) { i = 0; }
        setTimeout(slideShow, 8000);
    }
    /* END SLIDESHOW */
    
    
    /* MENU */
    var menu = document.getElementById('menu'),
    WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    }

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
    });
    
    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);    
    /* END MENU */
    
    // Show and hide the top bar nav
    var $win = $(window);       
    $win.scroll(function () {           
        if($(window).scrollTop() <= $('#slideshow').height() + 300 && $('.custom-wrapper').is(":visible"))  {
            if(!elevator.elevating() && !elevator_no.elevating())
            {
                // Extra check because elevator can cause incorrect scroll position due to dynamic resizing of content such as BG images
                $('.custom-wrapper').fadeOut("slow");     
                //closeMenu();
            }
        }
        else if($(window).scrollTop() > $('#slideshow').height() + 300 && $('.custom-wrapper').is(":hidden"))  {
            $('.custom-wrapper').fadeIn("slow");
        }
    });
    
    
    // ELEVATOR!
    function closeTopNav() {
        $('.custom-wrapper').fadeOut("slow");    
    }
    
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