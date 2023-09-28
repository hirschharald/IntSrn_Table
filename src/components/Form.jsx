import React, { useState } from "react";

export const Form = (props) => {
  const { fields } = { ...props };
  const [form, setForm] = useState(fields);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = ["USA", "Canada", "Mexico"]; // Hier Ihre Länderliste einfügen
  const cities = {
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    Mexico: ["Mexico City", "Cancun", "Guadalajara"]
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.id]: value
    });
    console.log("######", value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("##### FORM ######", form);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setForm({
      ...form,
      Land: e.target.value
    });
    setSelectedCity(""); // Zurücksetzen der ausgewählten Stadt
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setForm({
      ...form,
      City: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Land</label>
        <select
          value={selectedCountry}
          className="form-select"
          onChange={handleCountryChange}
        >
          <option value="">Bitte auswählen</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Stadt</label>
          <select
            value={selectedCity}
            className="form-select"
            onChange={handleCityChange}
          >
            <option value="">Bitte auswählen</option>
            {selectedCountry ? (
              cities[selectedCountry].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))
            ) : (
              <option key={""} value={""}>
                {""}
              </option>
            )}
          </select>
        </div>
      }
      {Object.keys(fields).map((keyname) => {
        return (
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor={keyname}>
              {keyname}
            </label>
            <input
              type="text"
              id={keyname}
              value={form[keyname] || ""}
              onChange={handleChange}
              className="form-control col-sm-8"
            />
          </div>
        );
      })}
      <div
        className="form-group"
        style={{
          padding: "2px",
          margin: "10px"
        }}
      >
        <button className="form-control btn btn-primary" type="submit">
          Speichern
        </button>
      </div>
    </form>
  );
};
