import './FishingOdds.css'
// import FormattedFishData from './FishData';
import { useState } from 'react';
import FishingOddsTable from '../../organisms/FishingOddsTable';
import LocationFishDataParser, { springTownFish } from './LocationFishDataParser';
import WeatherSelector from '../../atoms/WeatherSelector';
import LocationSelector from '../../atoms/LocationSelector';
import P1 from '../../atoms/P1';
// import LocationData from './RawLocationData';
// import FishData from './FishData';



// interface LocationArray {
//     name: string,
//     springForage: string,
//     summerForage: string,
//     fallForage: string,
//     winterForage: string,
//     springFish: string,
//     summerFish: string,
//     fallFish: string,
//     winterFish: string,
//     artifacts: string,
// };

// interface Fish {
//     id: number, name: string, difficulty: number, movementType: string, minSize: number, maxSize: number, time: string, season: string, weather: string, locations: string, minDepth: number, spawnMult: number, depthMult: number, fishingLevel: number
// }

const FishingOdds = () => {
    console.log(springTownFish);
    // const [fishingLocation] = useState('Mountain');
    // const [fishingLocation, setFishingLocation] = useState('Mountain');
    // console.log(LocationData);
    // console.log(FishData);
    // console.log(LocationData.filter(location => location.name.includes('Mountain'))[0].summerFish);
    // console.log(LocationFishDataParser.springMountain);
    let weather = 'Beach';
    let location = 'Town';
    let props = {location, weather};

    const changeWeather = () => {
        console.log('weather is working');
    };
    const changeLocation = () => {
        console.log('location is working');
    };

    return (
        <div className="fishing-odds">
            {/* <LocationSelector />
            <WeatherSelector />
            <TimeSelector /> */}
            <WeatherSelector changeWeather={changeWeather}/>
            <LocationSelector changeLocation={changeLocation}/>
            <button>Time</button>
            <button>Fishing Skill</button>
            <button>Water Depth</button>
            <button>Bait</button>
            <button>Tackle</button>
            <p>Click a column name to sort</p>
            <FishingOddsTable props={props}/>
            {/* <FishingOddsTable fishingLocation={fishingLocation}/> */}
        </div>
    )
}

export default FishingOdds;

// return (
//     <div className="fishing-odds-table">
//         <div className="fishing-odds">
//             {FormattedFishData.filter(fish => fish.locations.includes(fishingLocation)).map((fish: Fish, index) => {
//                 return (
//                     <div key={index}>
//                         <p>{fish.id} {fish.name} {fish.difficulty}</p>
//                     </div>
//                 );
//             })}
//         </div>
//     </div>
// )