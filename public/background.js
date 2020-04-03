// chrome.browserAction.onClicked.addListener(() => {
//   chrome.windows.create({
//     url: chrome.runtime.getURL('index.html'),
//     type: 'popup',
//     width: 800,
//     height: 600
//   });
// });

chrome.runtime.onConnect.addListener(function (port) {
  console.log(`${port} connected`);
  port.onMessage.addListener(function (message, sender) {
    console.log(message.msg);
  });
});
