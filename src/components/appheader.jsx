import React from "react";
import { ReactComponent as Logo } from "./../logo.svg";

const Appheader = props => {
  const { sources, onSelect } = props;

  return (
    <header className="app-header">
      <h1>
        <Logo />
      </h1>
      <span role="img" aria-label="preferences">
        ⚙️
      </span>
      <div className="full">
        <select
          defaultValue=""
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
