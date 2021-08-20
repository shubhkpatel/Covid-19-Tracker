import { useState, useEffect } from "react";
import {MenuItem, FormControl,Select} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  // STATE = How to write a variable in REACT
  // https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    // The code inside here will run once when the component loads and not again after
    // async ==> send a requestAnimationFrame, wait for it and do something with info

    const getCountriesData = async () => {
      await fetch ('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }));

          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropname">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* Loop through all the countries and show a drop down list of the options */}
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

          </Select>
        </FormControl>
      </div>
      
      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
      
    </div>
  );
}

export default App;
