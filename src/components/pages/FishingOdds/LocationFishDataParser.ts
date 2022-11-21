import RawLocationData from "./RawLocationData";
import FishData from './FishData';

let LocationData: LocationInterface [] = [];

interface LocationInterface {
    name: string,
    springForage: string,
    summerForage: string,
    fallForage: string,
    winterForage: string,
    springFish: string,
    summerFish: string,
    fallFish: string,
    winterFish: string,
    artifacts: string,
};

// const start = Date.now();


let ModifiedLocationData = RawLocationData.split(','); 

for(let i = 0; i < ModifiedLocationData.length; i++){
    ModifiedLocationData[i] = ModifiedLocationData[i].replaceAll(/[\n]/g, '');
    ModifiedLocationData[i] = ModifiedLocationData[i].replaceAll('"', '');
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(': ', '/');
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\s+/, '');
    ModifiedLocationData[i] = `{"name": "${ModifiedLocationData[i]}"}`;
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "springForage": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "summerForage": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "fallForage": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "winterForage": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "springFish": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "summerFish": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "fallFish": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "winterFish": "'); 
    ModifiedLocationData[i] = ModifiedLocationData[i].replace(/\//, '", "artifacts": "'); 
    LocationData.push(JSON.parse(ModifiedLocationData[i]));
};

console.log(LocationData);

// console.log(FishData);

// console.log(LocationData);

interface CompleteFishListInterface {
    // [key: string]: SubFishListLocationInterface,
    [index: string]: SubFishListLocationInterface,
};

interface SubFishListLocationInterface {
    [index: string]: FishInterface[],
};

interface Fish {
    [index: string]: FishInterface[],
};

export interface FishInterface {
    [index: string]: number|string, 
    // [name: string]: string, 
    // difficulty: number, 
    // movementType: string, 
    // minSize: number, 
    // maxSize: number, 
    // time: string, 
    // season: string, 
    // weather: string, 
    // locations: string, 
    // minDepth: number, 
    // spawnMult: number, 
    // depthMult: number, 
    // fishingLevel: number
};

let completeFishList: CompleteFishListInterface = {
    spring: {
        UndergroundMine: [],
        Desert: [],
        BusStop: [],
        Forest: [],
        Town: [],
        Mountain: [],
        Backwoods: [],
        Railroad: [],
        Beach: [],
        Woods: [],
        Sewer: [],
        BugLand: [],
        WitchSwamp: [],
        fishingGame: [],
        Temp: [],
        IslandNorth: [],
        IslandSouth: [],
        IslandWest: [],
        IslandSouthEast: [],
        IslandSouthEastCave: [],
        IslandSecret: [],
        IslandNorthCave1: [],
    },
    summer: {
        UndergroundMine: [],
        Desert: [],
        BusStop: [],
        Forest: [],
        Town: [],
        Mountain: [],
        Backwoods: [],
        Railroad: [],
        Beach: [],
        Woods: [],
        Sewer: [],
        BugLand: [],
        WitchSwamp: [],
        fishingGame: [],
        Temp: [],
        IslandNorth: [],
        IslandSouth: [],
        IslandWest: [],
        IslandSouthEast: [],
        IslandSouthEastCave: [],
        IslandSecret: [],
        IslandNorthCave1: [],
    },
    winter: {
        UndergroundMine: [],
        Desert: [],
        BusStop: [],
        Forest: [],
        Town: [],
        Mountain: [],
        Backwoods: [],
        Railroad: [],
        Beach: [],
        Woods: [],
        Sewer: [],
        BugLand: [],
        WitchSwamp: [],
        fishingGame: [],
        Temp: [],
        IslandNorth: [],
        IslandSouth: [],
        IslandWest: [],
        IslandSouthEast: [],
        IslandSouthEastCave: [],
        IslandSecret: [],
        IslandNorthCave1: [],
    },
    fall: {
        UndergroundMine: [],
        Desert: [],
        BusStop: [],
        Forest: [],
        Town: [],
        Mountain: [],
        Backwoods: [],
        Railroad: [],
        Beach: [],
        Woods: [],
        Sewer: [],
        BugLand: [],
        WitchSwamp: [],
        fishingGame: [],
        Temp: [],
        IslandNorth: [],
        IslandSouth: [],
        IslandWest: [],
        IslandSouthEast: [],
        IslandSouthEastCave: [],
        IslandSecret: [],
        IslandNorthCave1: [],
    },
    // "summer": Farm: [], 
    // "summer": UndergroundMine: [], 
    // "summer": Desert: [], 
    // "summer": BusStop: [], 
    // "summer": Forest: [], 
    // "summer": Town: [], 
    // "summer": Mountain: [], 
    // "summer": Backwoods: [], 
    // "summer": Railroad: [], 
    // "summer": Beach: [], 
    // "summer": Woods: [], 
    // "summer": Sewer: [], 
    // "summer": BugLand: [], 
    // "summer": WitchSwamp: [], 
    // "summer": fishingGame: [], 
    // "summer": Temp: [], 
    // "summer": IslandNorth: [], 
    // "summer": IslandSouth: [], 
    // "summer": IslandWest: [], 
    // "summer": IslandSouthEast: [], 
    // "summer": IslandSouthEastCave: [], 
    // "summer": IslandSecret: [], 
    // "summer": IslandNorthCave1: [], 
    // "winter": Farm: [], 
    // "winter": UndergroundMine: [], 
    // "winter": Desert: [], 
    // "winter": BusStop: [], 
    // "winter": Forest: [], 
    // "winter": Town: [], 
    // "winter": Mountain: [], 
    // "winter": Backwoods: [], 
    // "winter": Railroad: [], 
    // "winter": Beach: [], 
    // "winter": Woods: [], 
    // "winter": Sewer: [], 
    // "winter": BugLand: [], 
    // "winter": WitchSwamp: [], 
    // "winter": fishingGame: [], 
    // "winter": Temp: [], 
    // "winter": IslandNorth: [], 
    // "winter": IslandSouth: [], 
    // "winter": IslandWest: [], 
    // "winter": IslandSouthEast: [], 
    // "winter": IslandSouthEastCave: [], 
    // "winter": IslandSecret: [], 
    // "winter": IslandNorthCave1: [], 
    // "fall": Farm: [], 
    // "fall": UndergroundMine: [], 
    // "fall": Desert: [], 
    // "fall": BusStop: [], 
    // "fall": Forest: [], 
    // "fall": Town: [], 
    // "fall": Mountain: [], 
    // "fall": Backwoods: [], 
    // "fall": Railroad: [], 
    // "fall": Beach: [], 
    // "fall": Woods: [], 
    // "fall": Sewer: [], 
    // "fall": BugLand: [], 
    // "fall": WitchSwamp: [], 
    // "fall": fishingGame: [], 
    // "fall": Temp: [], 
    // "fall": IslandNorth: [], 
    // "fall": IslandSouth: [], 
    // "fall": IslandWest: [], 
    // "fall": IslandSouthEast: [], 
    // "fall": IslandSouthEastCave: [], 
    // "fall": IslandSecret: [], 
    // "fall": IslandNorthCave1: [], 
};

// console.log(FishData);

for(let i = 0; i < LocationData.length; i++){
    const springFishSplit = LocationData[i].springFish.split(' ');
    for(let j = 0; j < springFishSplit.length; j+=2){
        if(LocationData[i].springFish === '-1') break;
        FishData.filter((fish) => String(fish.id) === springFishSplit[j]).map((fish) => {
            completeFishList['spring'][LocationData[i].name].push(
            {
                "id": `${springFishSplit[j]}`,
                "name": `${fish.name}`,
                "difficulty": `${fish.difficulty}`,
                "movementType": `${fish.movementType}`,
                "minSize": `${fish.minSize}`,
                "maxSize": `${fish.maxSize}`, 
                "time": `${fish.time}`, 
                "season": `${fish.season}`, 
                "weather": `${fish.weather}`, 
                "locations": `${fish.locations}`, 
                "minDepth": `${fish.minDepth}`, 
                "spawnMult": `${fish.spawnMult}`, 
                "depthMult": `${fish.depthMult}`,  
                "fishingLevel": `${fish.fishingLevel}`,
                "newLocation": `${LocationData[i].name}`   
            });
        });  
    }; 

    const summerFishSplit = LocationData[i].summerFish.split(' ');
    for(let j = 0; j < summerFishSplit.length; j+=2){
        if(LocationData[i].summerFish === '-1') break;
        FishData.filter((fish) => String(fish.id) === summerFishSplit[j]).map((fish) => {
            completeFishList['summer'][LocationData[i].name].push(
            {
                "id": `${summerFishSplit[j]}`,
                "name": `${fish.name}`,
                "difficulty": `${fish.difficulty}`,
                "movementType": `${fish.movementType}`,
                "minSize": `${fish.minSize}`,
                "maxSize": `${fish.maxSize}`, 
                "time": `${fish.time}`, 
                "season": `${fish.season}`, 
                "weather": `${fish.weather}`, 
                "locations": `${fish.locations}`, 
                "minDepth": `${fish.minDepth}`, 
                "spawnMult": `${fish.spawnMult}`, 
                "depthMult": `${fish.depthMult}`,  
                "fishingLevel": `${fish.fishingLevel}`,   
            });
        });  
    }; 

    const winterFishSplit = LocationData[i].winterFish.split(' ');
    for(let j = 0; j < winterFishSplit.length; j+=2){
        if(LocationData[i].winterFish === '-1') break;
        FishData.filter((fish) => String(fish.id) === winterFishSplit[j]).map((fish) => {
            completeFishList['winter'][LocationData[i].name].push(
                {
                    "id": `${winterFishSplit[j]}`,
                    "name": `${fish.name}`,
                    "difficulty": `${fish.difficulty}`,
                    "movementType": `${fish.movementType}`,
                    "minSize": `${fish.minSize}`,
                    "maxSize": `${fish.maxSize}`, 
                    "time": `${fish.time}`, 
                    "season": `${fish.season}`, 
                    "weather": `${fish.weather}`, 
                    "locations": `${fish.locations}`, 
                    "minDepth": `${fish.minDepth}`, 
                    "spawnMult": `${fish.spawnMult}`, 
                    "depthMult": `${fish.depthMult}`,  
                    "fishingLevel": `${fish.fishingLevel}`,   
                });
        });  
    }; 
    const fallFishSplit = LocationData[i].fallFish.split(' ');
    for(let j = 0; j < fallFishSplit.length; j+=2){
        if(LocationData[i].fallFish === '-1') break;
        FishData.filter((fish) => String(fish.id) === fallFishSplit[j]).map((fish) => {
            completeFishList['fall'][LocationData[i].name].push(
            {
                "id": `${fallFishSplit[j]}`,
                "name": `${fish.name}`,
                "difficulty": `${fish.difficulty}`,
                "movementType": `${fish.movementType}`,
                "minSize": `${fish.minSize}`,
                "maxSize": `${fish.maxSize}`, 
                "time": `${fish.time}`, 
                "season": `${fish.season}`, 
                "weather": `${fish.weather}`, 
                "locations": `${fish.locations}`, 
                "minDepth": `${fish.minDepth}`, 
                "spawnMult": `${fish.spawnMult}`, 
                "depthMult": `${fish.depthMult}`,  
                "fishingLevel": `${fish.fishingLevel}`,   
            });
        });  
    }; 
};

// let newFishData = JSON.parse(JSON.stringify(FishData));

// let newFishData: FishInterface[] = [];

// console.log(newFishData);

for(let i = 0; i < FishData.length; i++){
    // console.log(FishData[i].id);
    // console.log(LocationData.filter((location) => location.springFish.split(' ').includes(String(FishData[i].id))));
    // LocationData.filter((location) => location.springFish.split(' ').includes(String(FishData[i].id))).forEach((result)=> {
    //     let tempLocationData: string | number = '';

        
        // typeof(newFishData[i].newLocation) === undefined ? newFishData[i].newLocation = '' : tempLocationData = newFishData[i].newLocation;
        
        // tempLocationData = newFishData[i].newLocation === undefined ? '' : newFishData[i].newLocation;
        // newFishData[i] = {...FishData[i], "newLocation": tempLocationData + `, ${result.name}`};
        // newFishData.push({...FishData[i], "usedLocation": result.name})
    // });
};

// console.log(newFishData);

// for(let i = 0; i < LocationData.length; i++){
//     const springFishSplit = LocationData[i].springFish.split(' ');
//     for(let j = 0; j < springFishSplit.length; j+=2){
//         if(LocationData[i].springFish === '-1') break;
//         FishData.filter((fish) => String(fish.id) === springFishSplit[j]).map((fish) => {
//             newFishData.push({...fish});
//         }
//     )}
// };

// console.log(newFishData);

let LocationFishDataParser: CompleteFishListInterface = completeFishList;

export let springTownFish = LocationFishDataParser;

// const end = Date.now();
// console.log(`Execution time: ${end - start} ms`);

export default LocationFishDataParser;



