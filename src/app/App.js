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
            <Grid.Column
              width={constants.leftColCount}
              style={{ ...styles.columnHeaderStyle, borderTopRightRadius: '20px', background: colors.navBgColor }}
            >
              <Header as='h3' style={{ ...styles.columnHeaderStyle, color: colors.logoColor }}>
                <AiOutlineApi style={styles.logoStyle} />
                EasyAdmin
              </Header>
            </Grid.Column>
            <Grid.Column
              width={constants.rightColCount}
              style={{ ...styles.columnHeaderStyle, background: colors.dashboardBgColor }}
            >
              <ActiveUrlDisplay />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ ...styles.rowStyle, height: constants.botRowHeight }}>
            <Grid.Column
              width={constants.leftColCount}
              style={{ borderBottomRightRadius: '20px', background: colors.navBgColor }}
            >
              <Navbar style={{ paddingTop: constants.contentBuffer }} />
            </Grid.Column>
            <Grid.Column width={constants.rightColCount} style={{ background: colors.dashboardBgColor }}>
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
