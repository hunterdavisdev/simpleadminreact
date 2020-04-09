/*global chrome*/
import React from "react";
import Navbar from "./common/Navbar";
import Search from "./search/SearchComponent";
import Tools from "./tools/ToolsComponent";
import History from "./history/HistoryComponent";
import Account from "./account/AccountComponent";
import Settings from "./settings/SettingsComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { Grid, Header } from "semantic-ui-react";
import "./App.css";

const App = () => {
  const [activeUrl, setActiveUrl] = React.useState(null);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      setActiveUrl("DEVELOPMENT_MODE");
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let activeTab = tabs[0];
        let tabUrl = activeTab.url;
        setActiveUrl(tabUrl.split("/")[2]);
      });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Grid style={{ height: "100vh", margin: 0 }}>
          <Grid.Row
            style={{ height: "12%", padding: 0, background: "#583bef" }}
          >
            <Grid.Column width={5} style={{ margin: "auto" }}>
              <Header inverted as="h3">
                Simple Admin
              </Header>
            </Grid.Column>
            <Grid.Column width={11} style={{ margin: "auto" }}>
              <Header inverted as="h4">
                {activeUrl ? (
                  <>
                    <FiAlertTriangle
                      style={{ verticalAlign: "middle", marginRight: "10px" }}
                    />
                    {activeUrl}
                  </>
                ) : (
                  <>
                    <FiAlertTriangle
                      style={{ verticalAlign: "middle", marginRight: "10px" }}
                    />
                    No active tab
                  </>
                )}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ height: "88%", padding: 0 }}>
            <Grid.Column width={5}>
              <Navbar style={{ paddingTop: "1.5em" }} />
            </Grid.Column>
            <Grid.Column width={11} style={{ background: "whitesmoke" }}>
              <div style={{ paddingTop: "1.5em" }}>
                <Switch>
                  <Route path="/tools" component={Tools} />
                  <Route path="/account" component={Account} />
                  <Route path="/history" component={History} />
                  <Route path="/settings" component={Settings} />
                  <Route path="*" component={() => <Search />} />
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
