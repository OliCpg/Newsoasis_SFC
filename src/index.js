import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";

// Custom components
import Appheader from "./components/appheader";
import Articlesview from "./components/articlesview";
import Preferencesview from "./components/preferencesview";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Appheader />
      <Articlesview />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
