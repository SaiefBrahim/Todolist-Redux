import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import taskReducer from "./reducers/task";
import { Provider } from "react-redux";

const appStore = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
