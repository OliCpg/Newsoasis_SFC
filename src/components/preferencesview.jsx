import React from "react";
import { Link } from "react-router-dom";
const Preferencesview = props => {
  const { apiKey, language } = props.currentprefs;

  const handlePrefsSave = ev => {
    ev.preventDefault();
    const { apikey_fld, language_fld } = ev.target.elements;
    props.onSave({ apiKey: apikey_fld.value, language: language_fld.value });
  };
  return (
    <>
      <div className="app-preferences">
        <h2>Préférences</h2>
        <form onSubmit={handlePrefsSave}>
          <div className="field">
            <label htmlFor="apikey_fld">API key: </label>
            <input
              id="apikey_fld"
              name="apikey_fld"
              size={15}
              type="text"
              placeholder="API KEY"
              defaultValue={apiKey}
            />
          </div>
          <div className="field">
            <label htmlFor="language_fld">Language: </label>
            <select
              id="language_fld"
              defaultValue={language}
              name="language_fld"
            >
              <option value="fr">Fr</option>
              <option value="nl">Nl</option>
              <option value="en">En</option>
            </select>
          </div>
          <div className="controls">
            <button type="submit">Enregistrer</button>
            <Link to="/">
              <button type="button">Fermer</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Preferencesview;
