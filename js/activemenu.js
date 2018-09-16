/// Requires jQuery

$( document ).ready(function() {
    alert("loaded");
    $("nav a").each(function() {
        $(this).removeClass("active-menu");
        if ($(this).attr("href") == window.location.href)
            $(this).addClass("active-menu");
        
        alert($(this).attr("href"));        
        alert(window.location.href);

    });
});
