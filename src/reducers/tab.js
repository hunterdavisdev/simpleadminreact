/*global chrome*/
import { GET_ACTIVE_TAB } from "../actions/tab";

const initialState = {
  currentTab: {}
};

export default ((state = initialState), action) = () => {
  switch (action.type) {
    case GET_ACTIVE_TAB:
      chrome.runtime.sendMessage({ type: GET_ACTIVE_TAB }, response => {});
  }
};

const getActiveTab = fn => {
  chrome.runtime.sendMessage({ type: GET_ACTIVE_TAB }, response => {
    fn(response);
  });
};
