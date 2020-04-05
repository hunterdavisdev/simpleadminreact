/*global chrome*/
import React from 'react';
import Navbar from './common/Navbar';
import Search from './search/SearchComponent';
import Tools from './tools/ToolsComponent';
import History from './history/HistoryComponent';
import Account from './account/AccountComponent';
import Settings from './settings/SettingsComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import './App.css';

function App() {
  React.useEffect(
    () =>
      chrome.notifications.create(
        'notification',
        {
          type: 'basic',
          iconUrl: 'icon128.png',
          title: "Don't forget!",
          message: 'Test alert message',
        },
        function (notificationId) {}
      ),
    []
  );

  return (
    <div className='App'>
      <Router>
        <Grid style={{ height: '100vh', margin: 0 }}>
          <Grid.Row style={{ height: '12%', padding: 0 }}>
            <Grid.Column width={5} style={{ margin: 'auto' }}>
              <Header as='h3'>Simple Admin</Header>
            </Grid.Column>
            <Grid.Column width={11} style={{ background: 'whitesmoke', margin: 'auto' }}>
              <Header as='h4'>Active account:</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ height: '88%', padding: 0 }}>
            <Grid.Column width={5}>
              <Navbar />
            </Grid.Column>
            <Grid.Column width={11}>
              <Switch>
                <Route path='/tools' component={Tools} />
                <Route path='/account' component={Account} />
                <Route path='/history' component={History} />
                <Route path='/settings' component={Settings} />
                <Route path='*' component={() => <Search />} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Column width={11} style={{ background: 'whitesmoke' }}>
            <Grid style={{ height: '100%', margin: 0 }}>
              <Grid.Row style={{ height: '16%', padding: 0 }} columns={1}>
                <Grid.Column>
                  <Header as='h4'>Active account:</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ height: '84%', padding: 0 }} columns={1}>
                <Grid.Column style={{ padding: 0 }}>
                  <Switch>
                    <Route path='/tools' component={Tools} />
                    <Route path='/account' component={Account} />
                    <Route path='/history' component={History} />
                    <Route path='/settings' component={Settings} />
                    <Route path='*' component={() => <Search />} />
                  </Switch>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column> */}
        </Grid>
      </Router>
    </div>
  );
}

export default App;
