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
    // loadjscssfile("", "css")

    // loadjscssfile("css/color/", "css")
    // $('.theme-change-btn').click(function (e) {
    //     e.preventDefault()
    //     let cssFile = THEMES[this.id]
    //     loadjscssfile(cssFile, "css")
    // })
});