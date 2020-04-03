/* global chrome*/
import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Tools from "./components/Tools";
import Account from "./components/Account";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import "./App.css";

function App() {
  React.useEffect(() => {
    chrome.tabs.query({ url: "*://admin.simplechurchcrm.com/*" }, results => {
      if (results.length === 0) return;
      let port = chrome.tabs.connect(results[0].id, { name: "sccrm" });
      port.postMessage({ msg: "Hello from React!" });
      port.onMessage.addListener(msg => {
        console.log(msg);
      });
    });
  });

  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Grid style={{ height: "100%", margin: 0 }}>
          <Grid.Row columns={1}>
            <Grid.Column style={{ backgroundColor: "red" }}>
              <Header as="h2">Simple Admin</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column
              floated="left"
              width={4}
              style={{ backgroundColor: "green" }}
            >
              <Navbar />
            </Grid.Column>
            <Grid.Column
              floated="right"
              width={12}
              style={{ backgroundColor: "yellow" }}
            >
              <Switch>
                <Route path="/tools" component={Tools} />
                <Route path="/account" component={Account} />
                <Route path="*" component={Search} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
