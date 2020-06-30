/*global chrome*/
import { GET_ACTIVE_TAB } from '../actions/types';

const initialState = {
  currentTab: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVE_TAB:
      chrome.runtime.sendMessage({ type: GET_ACTIVE_TAB }, (response) => {});
      return state;
    default:
      return state;
  }
}

const getActiveTab = (fn) => {
  chrome.runtime.sendMessage({ type: GET_ACTIVE_TAB }, (response) => {
    fn(response);
  });
};
