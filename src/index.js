import React from "react";
import ReactDOM from "react-dom/client";
import { Normalize } from "styled-normalize";

import App from "./App";

import GlobalStyle from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Normalize/>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
);