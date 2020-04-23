import React from "react";
import App from "./app/App";
// import store from "./store";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
