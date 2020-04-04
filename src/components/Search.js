/*global chrome*/
import React from "react";
import { Dropdown, Container, Input } from "semantic-ui-react";

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
    <Container>
      <p> {query} </p>
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
      <div>
        <ul>
          {results.map(church => (
            <li>{church.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Search;
