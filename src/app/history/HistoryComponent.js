/*global chrome*/
import React from "react";
import { List, Image } from "semantic-ui-react";
import evalElapsedTimeDescription from "./utils";

const HistoryComponent = () => {
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    chrome.storage.local.get({ sa_history: [] }, result => {
      setHistory(result.sa_history);
    });
  }, []);

  return (
    <List celled size="small" relaxed>
      {history || history.length < 1 ? (
        history.map(entry => (
          <List.Item>
            <Image
              src={entry.icon}
              onClick={() => window.open(entry.url, "_blank")}
              style={{
                cursor: "pointer",
                width: "16px",
                height: "16px"
              }}
            />
            <List.Content>
              <List.Header> {entry.name} </List.Header>
              <List.Description>
                {evalElapsedTimeDescription(Date.now() - entry.date)}
              </List.Description>
            </List.Content>
          </List.Item>
        ))
      ) : (
        <List.Item>
          <p> No History </p>
        </List.Item>
      )}
    </List>
  );
};

export default HistoryComponent;
