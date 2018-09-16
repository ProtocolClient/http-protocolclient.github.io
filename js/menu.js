/// Requires jQuery

function GetFullURL(url){
    var a = document.createElement('a');
    a.href = url;
    url = a.href; 
    a.href = null; 
    
    if(url.slice(url.length - 1) != "/")
        url = url + "/";
    
    return url;
}

$( document ).ready(function() {
    $("nav a").each(function() {
        $(this).removeClass("active-menu");
        if (GetFullURL($(this).attr("href")) == window.location.href)
            $(this).addClass("active-menu");
    });
});

function ToggleBurgerMenu() {
    $("nav").toggleClass("responsive");
}
