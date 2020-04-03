import React from "react";
import { Dropdown, Input } from "semantic-ui-react";

const options = [
  { key: "Name", text: "Name", value: "Name" },
  { key: "ID", text: "ID", value: "ID" },
  { key: "Email", text: "Email", value: "Email" },
  { key: "Domain", text: "Domain", value: "Domain" }
];
const Search = () => {
  return (
    <Input
      fluid
      size="small"
      loading
      label={
        <Dropdown size="small" inverted defaultValue="Name" options={options} />
      }
      labelPosition="left"
      placeholder="Start typing"
    />
  );
};

export default Search;
