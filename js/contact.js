$(document).ready(function() {
    $('#contact').fadeIn(1500);
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