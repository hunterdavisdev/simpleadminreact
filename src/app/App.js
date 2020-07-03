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
import { constants, colors, styles } from './styles';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Grid style={styles.gridStyle}>
          <Grid.Row style={{ ...styles.rowStyle, height: constants.topRowHeight }}>
            <Grid.Column width={constants.leftColCount} style={{ ...styles.columnHeaderStyle, background: colors.nav }}>
              <div className='brand-header' style={{ width: '100%' }}>
                <Header as='h1'>SA</Header>
              </div>
            </Grid.Column>
            <Grid.Column width={constants.rightColCount} style={{ ...styles.columnHeaderStyle, background: colors.bg }}>
              <ActiveUrlDisplay />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ ...styles.rowStyle, height: constants.botRowHeight }}>
            <Grid.Column width={constants.leftColCount} style={{ background: colors.nav }}>
              <Navbar style={{ paddingTop: constants.contentBuffer }} />
            </Grid.Column>
            <Grid.Column width={constants.rightColCount} style={{ background: colors.bg }}>
              <div style={{ paddingTop: constants.contentBuffer }}>
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
