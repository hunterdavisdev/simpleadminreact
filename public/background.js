// chrome.browserAction.onClicked.addListener(() => {
//   chrome.windows.create({
//     url: chrome.runtime.getURL('index.html'),
//     type: 'popup',
//     width: 800,
//     height: 600
//   });
// });

let currentTab = {};

chrome.tabs.onActivated.addListener(({ tabId, windowId }) => {
  //console.log(`New active tab: (ID) => ${tabId}, (WINDOW_ID) => ${windowId}`);
  chrome.tabs.get(tabId, tab => {
    if (chrome.runtime.lastError) {
      var errorMsg = chrome.runtime.lastError.message;
      console.error(errorMsg);
      currentTab = null;
    } else {
      currentTab = {
        id: tabId,
        url: tab.url
      };
    }
    console.log(
      `Current tab: ID -> ${currentTab.id}\nURL -> ${currentTab.url}`
    );
  });
});

chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === "install") {
    console.log("Extension installed");
  } else if (details.reason === "update") {
    console.log(chrome.storage.local);
    console.log("Extension updated");
  }
});
