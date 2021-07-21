import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Navigator } from "./components/Navigator";

import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Navigator />
  </React.StrictMode>,
  document.getElementById("root")
);
