/*global chrome*/
import React, { useState, useEffect } from 'react';
import { Header, Label } from 'semantic-ui-react';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';
import { colors } from '../styles';

const ActiveUrlDisplay = () => {
  /** Initial state for this component that represents the url of the
   * active tab in the user's browser
   */
  const [url, setUrl] = useState(null);

  /**
   * Uses chrome's api fetch the active tab's url, then store it in
   * activeUrl state.
   */
  const setActiveUrl = () =>
    process.env.NODE_ENV !== 'production'
      ? setUrl('DEVELOPMENT_BUILD')
      : chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          let activeTab = tabs[0];
          let tabUrl = activeTab.url;
          setUrl(tabUrl.split('/')[2]);
        });

  /** Utilizing the useEffect hook to set the active url when the
   * component renders.
   */
  useEffect(setActiveUrl, []);

  const urlStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginLeft: '0.5em',
  };

  if (!url)
    return (
      <Header as='h4' style={urlStyle}>
        No active tab
        <FiAlertCircle style={iconStyle} />
      </Header>
    );

  return (
    <Label
      size='large'
      style={{
        width: '100%',
        color: colors.iconInactive,
        background: colors.bg,
        boxShadow: '4px 4px 8px #d1d0d5, -4px -4px 8px #ffffff',
      }}
    >
      {url}
    </Label>
  );
};

export default ActiveUrlDisplay;
