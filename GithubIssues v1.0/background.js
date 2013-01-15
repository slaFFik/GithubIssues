// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
//     if(changeInfo.status == 'complete' && /github.com/.test(tab.url)){
//         do_the_magic_with_title(tab.title);
//     }

//     // do_the_magic();
// });


var t, ttext, ino;

t = document.getElementsByTagName( 'title' );
ttext = t[0].innerHTML;
ino = ttext.match(/Issue #([0-9]+)/);
t[0].innerHTML = "#" + ino[1] + " " + ttext;