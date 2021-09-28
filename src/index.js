import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
