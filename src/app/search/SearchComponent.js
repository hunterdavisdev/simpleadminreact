/*global chrome*/
import React from 'react';
import { Dropdown, Container, Input, List, Button, Image, Label } from 'semantic-ui-react';
import { FiEdit2 } from 'react-icons/fi';

const options = [
  { key: 'name', text: 'Name', value: 'name' },
  { key: 'id', text: 'ID', value: 'id' },
  { key: 'email', text: 'Email', value: 'email' },
  { key: 'domain', text: 'Domain', value: 'domain' },
];
const SearchComponent = () => {
  const [payload, setPayload] = React.useState({
    key: 'name',
    value: '',
  });
  const [results, setResults] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState(null);

  const handleChange = (e) => {
    setPayload({
      ...payload,
      value: e.target.value,
    });
    chrome.tabs.sendMessage(
      activeTab,
      {
        type: 'MESSAGE_QUERY',
        payload: {
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
        window.open(url, '_blank');
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
        value={payload.value}
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
      <List selection size='mini' style={{ height: '275px', overflowY: 'auto', padding: '1em' }}>
        {results.map((result) => (
          <List.Item>
            <List.Content floated='right'>
              <Label onClick={() => window.open(`https://admin.simplechurchcrm.com/manage/edit/${result.id}`)}>
                <FiEdit2 />
              </Label>
            </List.Content>
            <Image
              src={result.icon}
              onClick={() => handleImageClick(result)}
              style={{
                cursor: 'pointer',
                width: '16px',
                height: '16px',
              }}
            />
            <List.Content>{result.name.length > 45 ? `${result.name.slice(0, 45)}...` : result.name}</List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default SearchComponent;
