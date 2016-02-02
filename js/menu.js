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
    $('.close-icon').click(function(event) {
		event.preventDefault();
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
	});
    $('.navigation li').hover(function(){
        $(this).find('span').addClass('gold-line');
        $(this).find('span').removeClass('grey-line');
    },function(){
        $(this).find('span').addClass('grey-line');
        $(this).find('span').removeClass('gold-line');
    });    
}); 