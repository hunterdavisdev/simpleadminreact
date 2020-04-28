/*global chrome*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import { AiOutlineApi } from 'react-icons/ai';
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
const dashboardBgColor = '#f1f3f9';
const logoColor = '#6772e5';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Grid style={{ height: '100vh', margin: 0 }}>
          <Grid.Row style={{ height: '18%', padding: 0, background: dashboardBgColor }}>
            <Grid.Column width={4} style={{ ...columnHeaderStyle, borderTopRightRadius: '20px', background: 'white' }}>
              <Header as='h3' style={{ ...columnHeaderStyle, color: logoColor }}>
                <AiOutlineApi style={{ width: '1.4em', height: '1.4em', marginRight: '0.3em' }} />
                EasyAdmin
              </Header>
            </Grid.Column>
            <Grid.Column width={12} style={{ ...columnHeaderStyle, background: dashboardBgColor }}>
              <ActiveUrlDisplay />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ height: '82%', padding: 0, background: dashboardBgColor }}>
            <Grid.Column width={4} style={{ borderBottomRightRadius: '20px', background: 'white' }}>
              <Navbar style={{ paddingTop: '1.5em' }} />
            </Grid.Column>
            <Grid.Column width={12} style={{ background: dashboardBgColor }}>
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
