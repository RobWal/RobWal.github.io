import './FishOddsRow.css';

import { FishInterface } from "../../pages/FishingOdds/LocationFishDataParser";




const FishOddsRow = (fish: any) => {
    return (
        <div className="fish-odds-row">
            <p>{fish.id}</p><p>{fish.name}</p><p>{fish.time}</p><p>{fish.weather}</p><p>{fish.difficulty}</p><p>{fish.movementType}</p><p>{fish.minDepth}</p><p>{fish.spawnMult}</p>
        </div>
    )
};

export default FishOddsRow;

