import React from "react";
import { ReactComponent as Logo } from "./../logo.svg";
import { Route, Link } from "react-router-dom";
const Appheader = props => {
  const { sources, currentsource, onSelect } = props;

  return (
    <header className="app-header">
      <h1>
        <Logo />
      </h1>
      <Route exact path="/">
        <Link to="/preferences">
          <span role="img" aria-label="preferences">
            ⚙️
          </span>
        </Link>
      </Route>
      <div className="full">
        <select
          value={currentsource}
          onChange={ev => {
            onSelect(ev.target.value);
          }}
        >
          <option value="" disabled />
          {sources.length > 0 &&
            sources.map(source => (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            ))}
        </select>
      </div>
    </header>
  );
};

export default Appheader;
