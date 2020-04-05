/*global chrome*/
import React from "react";
import { Button } from "semantic-ui-react";

/**
 * This component's purpose is to provide a quick way to
 * clear chrome's local storage while developing the extension
 */
const ClearStorageButton = () => {
  const handleClick = () => {
    chrome.storage.local.clear(() => {
      let err = chrome.runtime.lastError;
      if (err) console.error(err);
      else console.log("Local storage cleared");
    });
  };

  //if (process.env.CLEAR_LOCAL_STORAGE !== "true") return null;

  return (
    <Button size="mini" negative onClick={handleClick}>
      Clear Storage
    </Button>
  );
};

export default ClearStorageButton;
