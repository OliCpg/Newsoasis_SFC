import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from "axios";

// Custom components
import Appheader from "./components/appheader";
import Articlesview from "./components/articlesview";
import Preferencesview from "./components/preferencesview";

import "./styles.scss";

function App() {
  /** STATES */
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [currentsource, setCurrentsource] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [preferences, setPreferences] = useState({
    apiKey: "",
    language: "fr"
  });

  /** EFFECTS */
  useEffect(() => {
    console.clear();
    if (preferences.apiKey === "" || !preferences.language) return;
    currentsource && loadArticles();
  }, [currentsource]);

  useEffect(() => {
    preferences.apiKey !== "" && loadSources();
  }, [preferences]);

  useEffect(() => {
    sources.length > 0 && setCurrentsource(sources[0].id);
  }, [sources]);

  /** LOGIC */
  const loadArticles = async () => {
    setIsloading(true);
    console.log(`loading articles from ${currentsource}`);
    //ab67b0e809cb483f9e800b3476a2175a
    const response = await Axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${currentsource}&apiKey=${
        preferences.apiKey
      }`
    );
    setArticles(response.data.articles);
    setIsloading(false);
  };

  const loadSources = async () => {
    const response = await Axios.get(
      `https://newsapi.org/v2/sources?language=${preferences.language}&apiKey=${
        preferences.apiKey
      }`
    );
    setSources(response.data.sources);
  };
  const loadData = () => {};

  return (
    <div className="App">
      <Router>
        <Appheader
          currentsource={currentsource}
          sources={sources}
          onSelect={setCurrentsource}
        />

        <Switch>
          <Route exact path="/">
            {preferences.apiKey === "" || !preferences.language ? (
              <div className="warning">
                Missing API key or language ! Check your{" "}
                <Link to="/preferences">Preferences</Link> !{" "}
              </div>
            ) : (
              <Articlesview articles={articles} loading={isloading} />
            )}
          </Route>
          <Route exact pacth="/settings">
            <Preferencesview
              currentprefs={preferences}
              onSave={setPreferences}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
