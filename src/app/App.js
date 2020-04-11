/*global chrome*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import Navbar from './common/Navbar';
import ActiveUrlDisplay from './common/ActiveUrlDisplay';
import Search from './search/SearchComponent';
import Tools from './tools/ToolsComponent';
import History from './history/HistoryComponent';
import Account from './account/AccountComponent';
import Settings from './settings/SettingsComponent';
import Contacts from './contacts/ContactsComponent';
import './App.css';

const columnHeaderStyle = { display: 'flex', alignItems: 'center' };

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Grid style={{ height: '100vh', margin: 0 }}>
          <Grid.Row style={{ height: '18%', padding: 0, background: '#583bef' }}>
            <Grid.Column width={5} style={columnHeaderStyle}>
              <Header inverted as='h3'>
                Simple Admin
              </Header>
            </Grid.Column>
            <Grid.Column width={11} style={{ ...columnHeaderStyle, background: '#4932c1' }}>
              <ActiveUrlDisplay />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ height: '82%', padding: 0 }}>
            <Grid.Column width={5}>
              <Navbar style={{ paddingTop: '1.5em' }} />
            </Grid.Column>
            <Grid.Column width={11} style={{ background: 'whitesmoke' }}>
              <div style={{ paddingTop: '1.5em' }}>
                <Switch>
                  <Route path='/tools' component={Tools} />
                  <Route path='/account' component={Account} />
                  <Route path='/history' component={History} />
                  <Route path='/contacts' component={Contacts} />
                  <Route path='/settings' component={Settings} />
                  <Route path='*' component={() => <Search />} />
                </Switch>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    </div>
  );
};

export default App;
