function loadjscssfile(filename, filetype, basePath = "css/color/") {
    let node = document.getElementById(basePath + filename)
    if (!Boolean(node)) {
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.id = filename
        fileref.setAttribute("href", basePath + filename)
        document.getElementsByTagName("head")[0].appendChild(fileref)
    } else {
        node.remove()
        loadjscssfile(filename, filetype)
    }
}

$(function () {
    // if(global.cultureKey != 'en') {
    //     downloadJSAtOnload(designUrl+'js/jquery/plugins/validation/localization/messages_'+global.cultureKey+'.js');
    // }
    "use strict";
    appMakeBeCool.gateway.init();
    var isHighContrast = getCookie("isContrast");
    var isLargeText = getCookie("isLarge");

    if (isLargeText == "true") {
        $('body').toggleClass('is-largeText');
    }
    if (isHighContrast == "true") {
        console.log(isHighContrast + " what the hell");
        $('body').toggleClass('high-contrast');
    }
    // shows and hides utility classes
    $('.HeaderUtility__contrast').on('click touch', function (e) {
        e.preventDefault()
        $('body').toggleClass('high-contrast');
        setCookie('isContrast', $('body').hasClass('high-contrast'));
    });

    $('.HeaderUtility__textSize').on('click touch', function () {
        $('body').toggleClass('is-largeText');
        setCookie('isLarge', $('body').hasClass('is-largeText'));
    });

    // loadjscssfile("", "css")

    // loadjscssfile("css/color/", "css")
    // $('.theme-change-btn').click(function (e) {
    //     e.preventDefault()
    //     let cssFile = THEMES[this.id]
    //     loadjscssfile(cssFile, "css")
    // })
});
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path=/;";
}
