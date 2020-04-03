console.log('Content script injected...');

var port = chrome.runtime.connect({ name: 'sccrm' });
port.onMessage.addListener(function(message, sender) {
  alert(message.msg);
});
