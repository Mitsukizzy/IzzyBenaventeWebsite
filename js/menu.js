$(document).ready(function() {
    $('.menu-icon').click(function(event) {
		event.preventDefault();
		if($('.navigation-wrapper').hasClass('show-menu')) {
			$('.navigation-wrapper').removeClass('show-menu');
			$('.navigation').hide();
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.navigation').fadeIn();
            $('.menu-icon').hide();
            $('.close-icon').fadeIn();
	   }
	});
    $.fn.CloseMenu = function() {
		if($('.navigation-wrapper').hasClass('show-menu')) {
            $('.close-icon').hide();
            $('.navigation').fadeOut(function(){
                $('.navigation-wrapper').removeClass('show-menu');
                $('.menu-icon').fadeIn();
            });
			
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.navigation').fadeIn();
	   }
	};
    $('.close-icon').click( function() { $(this).CloseMenu(); });
    $('.navigation li').click( function() { $(this).CloseMenu(); });
    $('.navigation li').hover(function(){
        $(this).find('span').addClass('gold-line');
        $(this).find('span').removeClass('grey-line');
    },function(){
        $(this).find('span').addClass('grey-line');
        $(this).find('span').removeClass('gold-line');
    });   
    
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
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
  
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
    
}); 