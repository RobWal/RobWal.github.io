import './LocationSelector.css'

const LocationSelector = ({changeLocation}: any) => {
    return (
        <div className="location-selector">
            <button onClick={changeLocation}>Location</button>
        </div>
    )
};

export default (LocationSelector);