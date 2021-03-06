import React from "react";
import { List, Radio } from "semantic-ui-react";
import ClearStorageButton from "../common/ClearStorageButton";

const SettingsComponent = () => {
  return (
    <React.Fragment>
      <List relaxed>
        <List.Item>
          <Radio label="Dark mode" toggle></Radio>
        </List.Item>
        <List.Item>
          <ClearStorageButton />
        </List.Item>
      </List>
    </React.Fragment>
  );
};

export default SettingsComponent;
