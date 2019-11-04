import React from "react";
import { ReactComponent as Logo } from "./../logo.svg";

const Appheader = props => {
  return (
    <header className="app-header">
      <h1>
        <Logo />
      </h1>
      <span role="img" aria-label="preferences">
        ⚙️
      </span>
      <div className="full">
        <select defaultValue="">
          <option value="" disabled />
          <option>Source A</option>
          <option>Source B</option>
          <option>Source C</option>
        </select>
      </div>
    </header>
  );
};

export default Appheader;
