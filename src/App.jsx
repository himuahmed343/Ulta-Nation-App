import './App.css';
import React, {useState, useEffect} from 'react';
import './components/Country/Country'
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data=> {
     setCountries(data)
   })
   .catch(error => console.log(error))
  }, [])
  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return (
    <div className="App">
     
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country added: {cart.length}</h3>
      <Cart cart = {cart}></Cart>
      <ol>
          {
            countries.map(country => <Country handleAddCountry = {() => handleAddCountry(country)} country = {country} key={country.alpha3Code}></Country>)
          }
      </ol>
 
    </div>
  );
}

export default App;
