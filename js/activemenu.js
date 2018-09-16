/// Requires jQuery

function GetFullURL(url){
    var img = document.createElement('img');
    img.src = url;
    url = img.src; 
    img.src = null; 
    
    return url;
}

$( document ).ready(function() {
    alert("loaded");
    $("nav a").each(function() {
        $(this).removeClass("active-menu");
        if (GetFullURL($(this).attr("href")) == window.location.href)
            $(this).addClass("active-menu");
        
        alert(GetFullURL($(this).attr("href")));        
        alert(window.location.href);

    });
});
