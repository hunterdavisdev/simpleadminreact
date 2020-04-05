/*global chrome*/
import React from 'react';
import { List, Image } from 'semantic-ui-react';

const HistoryComponent = () => {
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    chrome.storage.local.get({ sa_history: [] }, (result) => {
      setHistory(result.sa_history);
    });
  }, []);

  const getSeconds = (elapsedTime) => Math.round(elapsedTime / 1000);
  const getMinutes = (seconds) => Math.round(seconds / 60);
  const getHours = (seconds) => Math.round(seconds / 60 / 60);
  const getDays = (hours) => Math.round(hours / 24);

  const evalElapsedTimeDescription = (elapsedTime) => {
    const secondsElapsed = getSeconds(elapsedTime);
    if (secondsElapsed < 60) return `${secondsElapsed} seconds ago`;
    else if (secondsElapsed >= 60) return `${getMinutes(secondsElapsed)} minutes ago`;
    else if (secondsElapsed >= 60 * 60) return `${getHours(secondsElapsed)} hours ago`;
    else if (secondsElapsed >= 60 * 60 * 24) return `${getDays(secondsElapsed)} days ago;`;
    else return `a long, long time ago`;
  };

  return (
    <List celled size='small' relaxed>
      {history || history.length < 1 ? (
        history.map((entry) => (
          <List.Item>
            <Image
              src={entry.icon}
              onClick={() => window.open(entry.url, '_blank')}
              style={{
                cursor: 'pointer',
                width: '16px',
                height: '16px',
              }}
            />
            <List.Content>
              <List.Header> {entry.name} </List.Header>
              <List.Description> {evalElapsedTimeDescription(Date.now() - entry.date)} </List.Description>
            </List.Content>
          </List.Item>
        ))
      ) : (
        <List.Item>
          <p> No History </p>
        </List.Item>
      )}
    </List>
  );
};

export default HistoryComponent;
