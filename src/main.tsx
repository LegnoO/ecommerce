/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/GlobalStyles/base.scss";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
