console.log('Content script injected!');

let port = chrome.runtime.connect({ name: 'sccrm' });

port.postMessage({ msg: 'Hello React!' });

port.onMessage.addListener(msg => {
  console.log(msg);
});
