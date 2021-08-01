import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const divStyle = {border: '1px solid black', margin: '10px', padding: '10px'}
    return (
        <div style={divStyle}>
            <h2>This is {name}</h2>
            <img src= {flag} width="180px" alt='/'></img>
            <p>Population: <b>{population}</b></p>
            <p>Region: <b>{region}</b></p>
            <button onClick={props.handleAddCountry}>Add country</button>
        </div>
    );
};

export default Country;