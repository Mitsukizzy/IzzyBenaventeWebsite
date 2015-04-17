$(document).ready(function() {
    $('#contact').hide();
    $('#contact').fadeIn(1500);
    $('.contact-item').hover(function(event) {
        $(this).find(".fa").css("color", "white");
        $(this).find("p").css("color", "#ffcc00");
    },function(){
        $(this).find(".fa").css("color", "#555");
        $(this).find("p").css("color", "white");
    });
});