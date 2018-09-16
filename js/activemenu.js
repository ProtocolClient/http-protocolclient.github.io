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
    console.log("**" + window.location.href);
    
    $("nav a").each(function() {
        $(this).removeClass("active-menu");
        if (GetFullURL($(this).attr("href")) == window.location.href)
            $(this).addClass("active-menu");

        console.log(GetFullURL($(this).attr("href")));
    });
});
