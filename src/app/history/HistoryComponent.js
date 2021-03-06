/*global chrome*/
import React from 'react';
import { List, Image, Header } from 'semantic-ui-react';
import { FiCloudOff } from 'react-icons/fi';
import historySeed from '../seed/history';
import evalElapsedTimeDescription from './utils';

const NoHistory = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Header as='h2'> No history yet..</Header>
    <FiCloudOff />
    <p textAlign='center'>
      After accessing an account in the search module, it will be logged here for easy access to recent accounts you've
      worked with.
    </p>
  </div>
);

const HistoryComponent = () => {
  const [history, setHistory] = React.useState([]);
  const dev = process.env.NODE_ENV !== 'production';

  /** If we're testing our extension locally in the browser,
   * we don't have access to the chrome API, so we need to
   * populate our state with some seed data so we can still
   * see what it *would* look like.
   */
  const getHistory = () =>
    dev
      ? setHistory(historySeed)
      : chrome.storage.local.get({ sa_history: [] }, (result) => setHistory(result.sa_history));

  React.useEffect(getHistory, []);

  if (!history || history.length === 0) {
    // return <p> No history yet.. </p>;
    return <NoHistory />;
  }

  return (
    <React.Fragment>
      {dev ? (
        <React.Fragment>
          <Header as='h3' content='Running in development mode' />
          <p> History data is not live and some functionality may be disabled.</p>
        </React.Fragment>
      ) : null}
      <List size='tiny' style={{ height: '250px', overflowY: 'auto' }}>
        {history.map((entry) => (
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
              <List.Description>{evalElapsedTimeDescription(Date.now() - entry.date)}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </React.Fragment>
  );
};

export default HistoryComponent;
