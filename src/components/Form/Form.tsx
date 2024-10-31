import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <form action="">
        <label htmlFor="initial">Investissement initial</label>
        <input type="number" name="initial" id="initial" />
        <div className="versements">
          <label htmlFor="versements">Versements réguliers</label>
          <input type="number" name="versements" id="versements" />
          <select name="frequence" id="frequence">
            <option value="Par mois">Par mois</option>
            <option value="Par trimestre">Par trimestre</option>
            <option value="Par an">Par an</option>
          </select>
        </div>
        <label htmlFor="compose">Composés</label>
        <select name="compose" id="compose">
          <option value="Par jour">Par jour</option>
          <option value="Par mois">Par mois</option>
          <option value="Par trimestre">Par trimestre</option>
          <option value="Par semestre">Par semestre</option>
          <option value="Par an">Par an</option>
        </select>
        <label htmlFor="tx">Taux d'intérêt</label>
        <input type="number" name="tx" id="tx" />
        <label htmlFor="time">Durée</label>
        <input type="number" name="time" id="time" />
        <label htmlFor="start">Date de début</label>
        <input type="date" name="start" id="start" />
      </form>
    </div>
  );
};

export default Form;
