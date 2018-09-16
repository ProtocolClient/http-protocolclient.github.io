/// Requires jQuery

function GetFullURL(url){
    var a = document.createElement('a');
    a.href = url;
    url = a.href; 
    a.href = null; 
    
    return url;
}

$( document ).ready(function() {
    $("nav a").each(function() {
        $(this).removeClass("active-menu");
        if (GetFullURL($(this).attr("href")) == window.location.href)
            $(this).addClass("active-menu");
        
        console.log(window.location.href);
        console.log(GetFullURL($(this).attr("href")));
    });
});
