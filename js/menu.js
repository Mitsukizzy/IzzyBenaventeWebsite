$(document).ready(function() {
    
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

    
    // Show and hide the top bar nav
    var $win = $(window);       
    $win.scroll(function () {           
        if($(window).scrollTop() <= $('#slideshow').height() + 300 && $('.custom-wrapper').is(":visible"))  {
            if(!elevator.elevating() && !elevator_no.elevating())
            {
                // Extra check because elevator can cause incorrect scroll position due to dynamic resizing of content such as BG images
                $('.custom-wrapper').fadeOut("slow");     
                closeMenu();
            }
        }
        else if($(window).scrollTop() > $('#slideshow').height() + 300 && $('.custom-wrapper').is(":hidden"))  {
            $('.custom-wrapper').fadeIn("slow");
        }
    });
    
    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    
}); 