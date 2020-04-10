/*global chrome*/
import React from 'react';
import { Dropdown, Container, Input, List, Button, Image } from 'semantic-ui-react';

const options = [
  { key: 'Name', text: 'Name', value: 'Name' },
  { key: 'ID', text: 'ID', value: 'ID' },
  { key: 'Email', text: 'Email', value: 'Email' },
  { key: 'Domain', text: 'Domain', value: 'Domain' },
];
const SearchComponent = () => {
  // const [query, setQuery] = React.useState('');
  // const [key, setKey] = React.useState('Name');
  const [payload, setPayload] = React.useState({
    key: 'name',
    value: '',
  });
  const [results, setResults] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState(null);

  const handleChange = (e) => {
    setPayload({
      ...payload,
      query: e.target.value,
    });
    chrome.tabs.sendMessage(
      activeTab,
      {
        payload: {
          type: 'MESSAGE_QUERY',
          ...payload,
        },
      },
      (response) => {
        if (!checkLastRuntimeError()) {
          setResults(response.payload.results);
        }
      }
    );
  };

  const handleDropdownChange = (e) => {
    console.log(e);
    setPayload({
      key: e.target.key,
      ...payload,
    });
  };

  const handleImageClick = ({ name, url, icon }) => {
    chrome.storage.local.get({ sa_history: [] }, (result) => {
      let currentHistory = result.sa_history;
      currentHistory.push({
        name,
        url,
        icon,
        date: Date.now(),
      });
      chrome.storage.local.set({ sa_history: currentHistory }, () => {
        console.log('Updated history: ' + currentHistory);
      });
    });
  };

  const checkLastRuntimeError = () => {
    const errorExists = chrome.runtime.lastError;
    if (errorExists) {
      var errorMsg = chrome.runtime.lastError.message;
      console.error(errorMsg);
    }
    return errorExists;
  };

  React.useEffect(() => {
    chrome.tabs.query(
      {
        url: ['*://admin.simplechurchcrm.com/', '*://admin.simplechurchcrm.com/main/*'],
      },
      (tabs) => {
        if (!checkLastRuntimeError()) {
          if (tabs && tabs.length > 0) {
            setActiveTab(tabs[0].id);
            console.log(activeTab);
          }
        }
      }
    );
  }, []);

  return (
    <Container style={{ margin: '0' }}>
      <Input
        fluid
        size='small'
        loading
        labelPosition='left'
        placeholder='Start typing'
        onChange={handleChange}
        value={payload.query}
        label={
          <Dropdown
            size='small'
            inverted
            defaultValue='Name'
            options={options}
            value={payload.key}
            onChange={handleDropdownChange}
          />
        }
      />
      <List celled size='tiny' style={{ height: '250px', overflowY: 'auto' }}>
        {results.map((result) => (
          <List.Item>
            <Image
              src={result.icon}
              onClick={() => handleImageClick(result)}
              style={{
                cursor: 'pointer',
                width: '16px',
                height: '16px',
              }}
            />
            <List.Content verticalAlign='middle'>
              {result.name.length > 45 ? `${result.name.slice(0, 45)}...` : result.name}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default SearchComponent;
