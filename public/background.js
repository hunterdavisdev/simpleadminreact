// chrome.browserAction.onClicked.addListener(() => {
//   chrome.windows.create({
//     url: chrome.runtime.getURL('index.html'),
//     type: 'popup',
//     width: 800,
//     height: 600
//   });
// });

const MESSAGE_QUERY = "MESSAGE_QUERY";
const MESSAGE_RESULTS = "MESSAGE_RESULTS";

// const content_port = chrome.runtime.connect({ name: "sccrm_content" });
// const popup_port = chrome.runtime.connect({ name: "sccrm_popup" });

// content_port.onMessage.addListener(function(message, sender) {
//   switch (message.type) {
//     case MESSAGE_RESULTS:
//       popup_port.postMessage({
//         type: message.type,
//         payload: { results: message.payload.results }
//       });
//     default:
//       break;
//   }
// });

// popup_port.onMessage.addListener(function(message, sender) {
//   switch (message.type) {
//     case MESSAGE_QUERY:
//       content.postMessage({
//         type: message.type,
//         payload: {
//           key: message.payload.key,
//           query: message.payload.query
//         }
//       });
//     default:
//       break;
//   }
// });

// chrome.runtime.onConnect.addListener(function(port) {
//   port.onMessage.addListener(function(message, sender) {
//     if (message.type === "MESSAGE_QUERY") {
//     }
//   });
// });
