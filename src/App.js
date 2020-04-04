import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Tools from "./components/Tools";
import Account from "./components/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Grid style={{ height: "100vh", margin: 0 }}>
          <Grid.Column floated="left" width={5}>
            <Navbar />
          </Grid.Column>
          <Grid.Column floated="right" width={11}>
            <Grid style={{ height: "100%", margin: 0 }}>
              <Grid.Row style={{ height: "16%", padding: 0 }} columns={1}>
                <Grid.Column>
                  <Header as="h4">Active account:</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ height: "84%", padding: 0 }} columns={1}>
                <Grid.Column>
                  <Switch>
                    <Route path="/tools" component={Tools} />
                    <Route path="/account" component={Account} />
                    <Route path="*" component={() => <Search />} />
                  </Switch>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
