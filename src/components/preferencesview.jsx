import React from "react";

const Preferencesview = props => {
  return (
    <>
      <div className="app-preferences">
        <h2>Préférences</h2>
        <form>
          <div className="field">
            <label htmlFor="apikey">API key: </label>
            <input
              id="apikey"
              size={15}
              type="text"
              placeholder="API KEY"
              value=""
            />
          </div>
          <div className="field">
            <label htmlFor="language">Language: </label>
            <select id="language">
              <option>Fr</option>
              <option>Nl</option>
              <option>En</option>
            </select>
          </div>
          <div className="controls">
            <button>Enregistrer</button>
            <button>Fermer</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Preferencesview;
