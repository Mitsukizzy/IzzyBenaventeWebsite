$(document).ready(function() {
     $('.landing-item span').hover(function(event) {
		$(this).addClass("grey-line");
	 },function(){
        $(this).removeClass("grey-line");     
     });
});