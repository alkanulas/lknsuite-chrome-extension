chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      lknSuite.openlink(tabs[0].url,tabs[0].title,tabs[0].id);
    });
});


lknSuite = {
    init: function () {


    },
    openlink: function (tabUrl,tabTitle,tab_id) {
      var _tabTitle = encodeURIComponent(tabTitle);
      var _tabUrl = encodeURIComponent(tabUrl);
      
      
      var newURL = 'https://www.lknsuite.com/publisher/add/?text=' + _tabTitle + ' ' + _tabUrl;
      
      var msg=[];
      msg[0]="toggle";
      msg[1]=newURL;
      
      chrome.tabs.sendMessage(tab_id,msg);
      
      
      msg=newURL=_tabTitle=_tabUrl=null;
    },
    
    
    contextSharePage: function (info,tab) {
      lknSuite.openlink(tab.url,tab.title,tab.id);
    },
    
    
    
    selectionOnClick:function(info, tab) {
      lknSuite.openlink(tab.url,info.selectionText,tab.id);
    }

   
};

    //General Share Page context menu
chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('sharePage'),
  "contexts" : [ "page" ],
  "onclick" : lknSuite.contextSharePage
});
    
    
//Selected text context menu
chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('shareSelected'),
  "contexts" : [ "selection" ],
  "onclick" : lknSuite.selectionOnClick
});
    
    
    
