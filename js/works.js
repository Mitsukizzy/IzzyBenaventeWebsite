$(document).ready(function() {
    $("div.works-item").click(
        function(event)
        {
            //window.location = $(this).attr("url");
            $url = $(this).attr("url");
            window.open($url,'_blank');
            event.preventDefault();
        }
    );
});