// chrome.browserAction.onClicked.addListener(() => {
//   chrome.windows.create({
//     url: chrome.runtime.getURL('index.html'),
//     type: 'popup',
//     width: 800,
//     height: 600
//   });
// });

let currentUrl = '';

chrome.tabs.onActivated.addListener(({ tabId, windowId }) => {
  //console.log(`New active tab: (ID) => ${tabId}, (WINDOW_ID) => ${windowId}`);
  chrome.tabs.get(tabId, (tab) => {
    if (chrome.runtime.lastError) {
      var errorMsg = chrome.runtime.lastError.message;
      console.error(errorMsg);
      currentUrl = 'URL_NOT_FOUND';
    } else {
      currentUrl = tab.url;
    }
    console.log(currentUrl);
  });
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Installed');
  } else if (details.reason === 'update') {
    console.log(chrome.storage.local);
    console.log('Updated');
  }
});
