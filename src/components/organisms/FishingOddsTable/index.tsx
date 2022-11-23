import './FishingOddsTable.css'
import LocationFishDataParser, { FishInterface } from '../../pages/FishingOdds/LocationFishDataParser';
import FishOddsRow from '../../molecules/FishOddsRow';
import FishOddsLegendRow from '../../molecules/FishOddsLegendRow';
import { Children, useState } from 'react';
import DropDown from '../../atoms/DropDown';
import WeatherMenu from '../../atoms/WeatherMenu';
import WeatherSelector from '../../atoms/WeatherSelector';
import DropDownButton from '../../molecules/FishingOdds/DropDownButton';
import DropDownButtonChoice from '../../atoms/FishingOdds/DropDownButtonChoice';


const FishingOddsTable = (props: any) => {
    // console.log(props);
    // let weather = 'sunny';
    let season = 'summer';
    // let location = 'Beach';
    const [weather, setWeather] = useState('sunny')
    const [location, setLocation] = useState('Beach')
    const [ascOrDesc, setAscOrDesc] = useState('default');
    const [sortByColumn, setSortByColumn] = useState('');
    let newMap: FishInterface[]= [];

    LocationFishDataParser[`${season}`][`${location}`].filter(fish => fish.weather === weather || fish.weather === 'both').map((fish) => {
        newMap.push(fish);
    });
    let originalOrder = JSON.parse(JSON.stringify(newMap));
    console.log(props);
    console.log(weather);
    const whatever = () => {
        console.log('asdasd')
    };

    const triggerSetLocation = (location: string) => {
        setLocation(location);
    };

    const handleSort = (e: any) => {
        e.preventDefault();
        if(sortByColumn !== e.target.innerText) {
            setAscOrDesc('descending')
        } else {
            if(ascOrDesc === 'default'){
                setAscOrDesc('descending');
            } else if(ascOrDesc === 'descending'){
                setAscOrDesc('ascending');
            } else if(ascOrDesc === 'ascending'){
                setAscOrDesc('default');
            };
        };
        setSortByColumn(`${e.target.innerText}`);
    };

    const compare = ( a: any, b: any ) => {
        if ( a[sortByColumn] < b[sortByColumn] ){
            return -1;
        };
        if ( a[sortByColumn] > b[sortByColumn] ){
            return 1;
        };
        return 0;
    };
    

    if(ascOrDesc === 'default'){
        newMap = originalOrder;
    } else if(ascOrDesc === 'ascending'){
        if(sortByColumn === 'name' || sortByColumn === 'weather' || sortByColumn === 'movementType' || sortByColumn === 'id'){
            newMap.sort(compare).reverse();
        } else newMap.sort(compare);
    } else {
        if(sortByColumn === 'name' || sortByColumn === 'weather' || sortByColumn === 'movementType' || sortByColumn === 'id'){
            newMap.sort(compare);
        } else newMap.sort(compare).reverse();
    };

    // menu={[<button className="location1" onClick={handleMenuOne}>Menu 1</button>,<button className="location2" onClick={handleMenuTwo}>Menu 2</button>]}/>
    return (
        <div className="fishing-odds-table">
            <DropDownButton>
                <DropDownButtonChoice text={'asdsasdasd'} children={<p>'sdfsfdsdf</p>}/>
                <DropDownButtonChoice text={'asdsasdasd'} children={<p>asdasdasdsasadas</p>}/>
                <DropDownButtonChoice text={'asdsasdasd'} children={<p>asdasdasdsasadas</p>}/>
                {/* <DropDownButtonChoice text={'asd'} />
                <DropDownButtonChoice text={'wasasd'} />
                <DropDownButtonChoice text={'zzxxzasd'} /> */}
                {/* <p>hello world</p> */}
            </DropDownButton>
            {/* <WeatherSelector whatever={whatever}/> */}
            <FishOddsLegendRow handleSort={handleSort}/>
            {newMap.map((fish, index) => {
                return (
                    <div key={index}>
                        <FishOddsRow {...fish}/>
                    </div>
                );
            })}    
        </div>
    );
};

export default FishingOddsTable;