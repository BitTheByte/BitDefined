var defaultKeys = [
    "keys","parent", "opener", "top", "length", "frames", "closed","location",
    "self", "window", "document", "name","customElements", "history", "locationbar",
     "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status",
    "frameElement", "navigator", "origin", "external", "screen", "innerWidth",
    "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "visualViewport",
     "screenX", "screenY", "outerWidth", "outerHeight", "devicePixelRatio", "clientInformation",
    "screenLeft", "screenTop", "defaultStatus", "defaultstatus", "styleMedia", "onsearch", 
    "isSecureContext", "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough",
    "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick",
    "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart",
    "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata",
    "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata",
    "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove",
    "onmouseout","onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress",
    "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onstalled", "onsubmit",
    "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration",
    "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture",
    "onpointerdown", "onpointermove","onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave",
    "onselectstart", "onselectionchange", "onanimationend","onanimationiteration", "onanimationstart", "ontransitionend", "onafterprint",
    "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline",
    "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload","performance", "stop",
    "open", "alert", "confirm", "prompt", "print", "queueMicrotask", "requestAnimationFrame", "cancelAnimationFrame", "captureEvents", 
    "releaseEvents", "requestIdleCallback", "cancelIdleCallback", "getComputedStyle", "matchMedia", "moveTo", "moveBy", "resizeTo",
    "resizeBy", "scroll", "scrollTo", "scrollBy", "getSelection", "find", "webkitRequestAnimationFrame", "webkitCancelAnimationFrame",
    "fetch", "btoa", "atob", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "createImageBitmap", "close", "focus", "blur",
    "postMessage", "onappinstalled", "onbeforeinstallprompt", "crypto", "indexedDB", "webkitStorageInfo", "sessionStorage", "localStorage",
    "chrome", "applicationCache", "onpointerrawupdate", "trustedTypes", "speechSynthesis", "webkitRequestFileSystem",
    "webkitResolveLocalFileSystemURL", "openDatabase", "caches", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute",
    "assert", "assertNotReached", "assertInstanceof", "configData", "rgbComponentToHex", "colorArrayToHex", "LocalNTP", "$",
    "getChromeUILanguage", "ddl", "promo", "og", "gbar_", "gbar", "__PVT", "gapi", "___jsl", "closure_uid_275078286", "closure_lm_519199",
    "gadgets", "osapi", "shindig", "googleapis", "iframer", "ToolbarApi", "iframes", "IframeBase", "Iframe", "IframeProxy",
    "IframeWindow", "__gapi_jstiming__", "getKeys", "TEMPORARY", "PERSISTENT", "addEventListener", "removeEventListener", "dispatchEvent"
]

function handler (windowKeys){
   windowKeys.forEach(element => {

    name = element.split("#")[0]
    type = element.split("#")[1]
    //args = element.split("#")[2]

    if(!defaultKeys.includes(name) && name != ""){

        table = document.getElementById("resultTable")
        table.insertRow(-1).innerHTML = "<tr><td>" + name + "</td><td>" + type + "</td><tr>"
        //table.insertRow(-1).innerHTML = "<tr><td>" + name + "</td><td>" + type + "</td><td>" + args + "</td></tr>"
    }
   });
}


window.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'DOMInfo'},
          handler);
    });
});
