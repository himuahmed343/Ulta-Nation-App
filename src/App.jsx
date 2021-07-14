import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { data } from 'browserslist';
import './components/Country/Country'
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data=> {
     setCountries(data)
   })
   .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
     
      <h1>Country Loaded: {countries.length}</h1>
      <ol>
          {
            countries.map(country => <Country name = {country.name}></Country>)
          }
      </ol>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
