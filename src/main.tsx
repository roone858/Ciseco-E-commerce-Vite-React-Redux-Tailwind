import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
