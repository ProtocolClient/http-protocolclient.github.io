/// Requires jQuery

$( document ).ready(function() {
    $("nav a").each(function() {
        $(this).removeClass("active-menu");
        if ($(this).attr("href") == window.location.href)
            $(this).addClass("active-menu");
    });
});
