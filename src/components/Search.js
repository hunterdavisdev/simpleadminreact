/*global chrome*/
import React from "react";
import {
  Dropdown,
  Container,
  Input,
  List,
  Button,
  Image
} from "semantic-ui-react";

const options = [
  { key: "Name", text: "Name", value: "Name" },
  { key: "ID", text: "ID", value: "ID" },
  { key: "Email", text: "Email", value: "Email" },
  { key: "Domain", text: "Domain", value: "Domain" }
];
const Search = () => {
  const [query, setQuery] = React.useState("");
  const [key, setKey] = React.useState("Name");
  const [results, setResults] = React.useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleDropdownChange = e => {
    setKey(e.target.key);
  };

  const handleImageClick = ({ name, url, icon }) => {
    chrome.storage.local.get({ sa_history: [] }, result => {
      let currentHistory = result.sa_history;
      currentHistory.push({
        name,
        url,
        icon,
        date: Date.now()
      });
      chrome.storage.local.set({ sa_history: currentHistory }, () => {
        console.log("Updated history: " + currentHistory);
      });
    });
  };

  React.useEffect(() => {
    if (query.length > 0) {
      chrome.tabs.query({ url: "*://admin.simplechurchcrm.com/*" }, function(
        tabs
      ) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            type: "MESSAGE_QUERY",
            payload: {
              key,
              query
            }
          },
          function(response) {
            console.log(response);
            setResults(response.payload.results);
          }
        );
      });
    }
  }, [query]);

  return (
    <Container style={{ margin: "0" }}>
      <Input
        fluid
        size="small"
        loading
        label={
          <Dropdown
            size="small"
            inverted
            defaultValue="Name"
            options={options}
            value={key}
            onChange={handleDropdownChange}
          />
        }
        labelPosition="left"
        placeholder="Start typing"
        onChange={handleChange}
        value={query}
      />
      <List celled size="tiny">
        {results.map(result => (
          <List.Item>
            <Image
              src={result.icon}
              onClick={() => handleImageClick(result)}
              style={{
                cursor: "pointer",
                width: "16px",
                height: "16px"
              }}
            />
            <List.Content verticalAlign="middle">
              {result.name.length > 45
                ? `${result.name.slice(0, 45)}...`
                : result.name}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default Search;
