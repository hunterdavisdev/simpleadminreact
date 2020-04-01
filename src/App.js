import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Tools from './components/Tools';
import Account from './components/Account';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router forceRefresh={false}>
        <Container text style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Header as='h3'>Active account: https://tcr.simplechurchcrm.com</Header>
          <Grid columns={2}>
            <Grid.Column floated='left' width={4}>
              <Navbar />
            </Grid.Column>
            <Grid.Column floated='right' width={12}>
              <Switch>
                <Route exact path='/' component={Search} />
                <Route path='/tools' component={Tools} />
                <Route path='/account' component={Account} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    </div>
  );
}

export default App;
