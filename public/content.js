console.log('Content script injected...');
const MESSAGE_QUERY = 'MESSAGE_QUERY';
const MESSAGE_RESULTS = 'MESSAGE_RESULTS';

// var port = chrome.runtime.connect({ name: "sccrm_content" });
// port.onMessage.addListener(function(message, sender) {
//   switch (message.type) {
//     case MESSAGE_QUERY:
//       let results = evalQuery(message.payload);
//       port.postMessage({
//         type: MESSAGE_RESULTS,
//         payload: {
//           results: results
//         }
//       });
//     default:
//       break;
//   }
// });

const evalQuery = ({ key, query }) => {
  switch (key.toLowerCase()) {
    case 'id':
      return findChurchById(Number(query));
    case 'domain':
      return findChurchByDomain(query.toLowerCase());
    case 'name':
      return findChurchesByName(query.toLowerCase());
    case 'email:':
      return findChurchesByEmail(query.toLowerCase());
    default:
      return [];
  }
};

const resolveIconUrl = (url) => {
  const raw = url.split('.')[1].toLowerCase();
  switch (raw) {
    case 'simplechurchcrm':
      return '/brand_icons/simplechurch_32x32.png';
    case 'fellowshiponego':
      return '/brand_icons/f1_32x32.png';
    case 'shelbynextchms':
      return '/brand_icons/shelby_32x32.png';
    case 'bridgeelementchms':
      return '/brand_icons/bridge_32x32.png';
    case 'e-zekielchms':
      return '/brand_icons/ezekiel_32x32.png';
    case 'churchofficeonline':
      return '/brand_icons/churchofficeonline_32x32.png';
    case 'siteorganicrt':
      return '/brand_icons/siteorganic_32x32.png';
    case 'elexiochms':
      return '/brand_icons/elexio_32x32.png';
    case 'cloverpeople':
      return '/brand_icons/clover_32x32.png';
    case 'e360chms':
      return '/brand_icons/e360_96x96.png';
    default:
      return '/brand_icons/mb_32x32.png';
  }
};

const findChurchesByName = (name) =>
  churches.filter((church) => church.name.toLowerCase().includes(name.toLowerCase()));

const findChurchByDomain = (domain) =>
  churches.filter((church) => church.domain.toLowerCase().includes(domain.toLowerCase()));

const findChurchesByEmail = (email) =>
  churches.filter((church) => church.email.toLowerCase().includes(email.toLowerCase()));

const findChurchById = (id) => churches.filter((church) => church.id === id);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(
  //   sender.tab
  //     ? "from a content script:" + sender.tab.url
  //     : "from the extension"
  // );
  console.log(request);
  if (request.type === MESSAGE_QUERY)
    sendResponse({
      type: MESSAGE_RESULTS,
      payload: {
        results: evalQuery(request.payload).slice(0, 25),
      },
    });
});

let nodes = Array.prototype.slice.call(document.querySelectorAll('tr'));
nodes = nodes.slice(1, nodes.length);

const churches = nodes.map((node) => ({
  id: Number(node.children[0].textContent),
  name: node.children[1].textContent,
  domain: node.children[2].textContent,
  url: node.children[2].children[0].href,
  email: node.children[3].textContent,
  active: node.children[4].textContent === 'Yes',
  created: node.children[5].textContent,
  type: node.children[6].textContent.toLowerCase(),
  lastAction: node.children[7].textContent,
  signedUp: node.children[8].textContent,
  recordCount: Number(node.children[9].textContent),
  icon: resolveIconUrl(node.children[2].children[0].href),
}));
