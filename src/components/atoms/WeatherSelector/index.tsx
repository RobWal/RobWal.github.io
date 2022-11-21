import './WeatherSelector.css'

const WeatherSelector = ({changeWeather}: any) => {
    return (
        <div className="weather-selector">
            <button onClick={changeWeather}>Weather</button>
        </div>
    )
}

export default WeatherSelector;