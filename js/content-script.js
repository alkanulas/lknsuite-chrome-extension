chrome.runtime.onMessage.addListener(function(msg, sender){
  
  
    if(msg[0] == "toggle"){
        toggle(msg[1]);
    }
});

var left=(window.innerWidth*1-570*1)/2;
var popup=chrome.extension.getURL('popup.html');
var iframe = document.createElement('iframe'); 
iframe.style.background = "#f1f2f7";
iframe.style.height = '100%';
iframe.style.width = "0px";
iframe.style.top = "0px";
iframe.scrolling="no";
iframe.style.position = "absolute";
iframe.style.left = left + 'px';
iframe.style.zIndex = "2147483640";
iframe.frameBorder = "none"; 
iframe.id = "lknsuite_frame"; 
iframe.src=popup;


var html='<div id="lknsuite-login-wrap" style="display:none;"><a id="lknsuite-login-close">x</a></div>';


jQuery("body").append(html);

var item=jQuery("#lknsuite-login-wrap");

item.append(iframe);

$("#lknsuite-login-close").unbind("click").click(function(){
  iframe.style.width="0px";
  item.fadeOut();
  iframe.src=popup;
});

html=left=null;
function toggle(url){
    
    
    if(iframe.style.width == "0px"){

        item.fadeIn();
        iframe.style.width = "515px";
        iframe.src=url;
      
    }
    else{
        iframe.src=popup;
        iframe.style.width="0px";
        item.hide();
    }
}

