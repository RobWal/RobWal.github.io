import React from 'react';
import WeatherMenu from '../WeatherMenu';
import './WeatherSelector.css'

const WeatherSelector = ({whatever}: any) => {
    const handleWeatherChoice = () => {
        
    };
    const secondExperiment = () => {
        console.log();
        // handleWeatherChoicee();
    };
    return (
        <WeatherMenu trigger={<button>Weather</button>}
        menu={[
            <button className="weather-menu-button" onClick={whatever}>Rainy</button>,
            <button className="weather-menu-button" onClick={whatever}>Sunny</button>,
        ]}/>
    );
};

export default WeatherSelector;