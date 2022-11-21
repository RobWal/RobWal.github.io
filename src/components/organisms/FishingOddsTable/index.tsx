import './FishingOddsTable.css'
import LocationFishDataParser, { FishInterface } from '../../pages/FishingOdds/LocationFishDataParser';
import FishOddsRow from '../../molecules/FishOddsRow';
import FishOddsLegendRow from '../../molecules/FishOddsLegendRow';
import { Children, useState } from 'react';


const FishingOddsTable = (props: any) => {
    console.log(props);
    let weather = 'sunny';
    let season = 'summer';
    let location = 'Beach';
    const [ascOrDesc, setAscOrDesc] = useState('default');
    const [sortByColumn, setSortByColumn] = useState('');
    let newMap: FishInterface[]= [];

    LocationFishDataParser[`${season}`][`${location}`].filter(fish => fish.weather === weather || fish.weather === 'both').map((fish) => {
        newMap.push(fish);
    });
    let originalOrder = JSON.parse(JSON.stringify(newMap));
    
    // console.log(`newMap = `);
    // console.log(newMap);
    // console.log(`originalOrder = `);
    // console.log(originalOrder);

    console.log(sortByColumn);
    console.log(ascOrDesc);

    const handleSort = (e: any) => {
        e.preventDefault();
        // console.log(e.target.innerText);
        // console.log(order);
        // console.log(newMap);
        // console.log(e.target.innerText)
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
        }
        
        setSortByColumn(`${e.target.innerText}`);

        // console.log(`sortByColumn: ${sortByColumn}`);
        // console.log(`ascOrDesc: ${ascOrDesc}`)

        
        // if(order === 'default'){
        //     (newMap.sort((a: any, b: any) => a[sorter] - b[sorter]));
        //     setOrder('ascending');
        // } else if (order === 'ascending') {
        //     (newMap.sort((a: any, b: any) => a[sorter] - b[sorter]).reverse()); 
        //     setOrder('descending');
        // } else {
        //     LocationFishDataParser[`${season}`][`${location}`].filter(fish => fish.weather === weather || fish.weather === 'both').map((fish, index) => {
        //         newMap.push(fish);
        //         setOrder('default');
        //     });
        // };
    };

    const compare = ( a: any, b: any ) => {
        if ( a[sortByColumn] < b[sortByColumn] ){
            return -1;
        }
        if ( a[sortByColumn] > b[sortByColumn] ){
            return 1;
        }
        return 0;
    }
    
    // // THIS CAN BE USED TO SORT THE TABLE DATA
    
    // console.log(newMap.sort((a: any, b: any) => a.difficulty - b.difficulty));
    // // THIS CAN BE USED TO REVERSE THE ORDER (DESC/ASC)
    // console.log(newMap.sort((a: any, b: any) => a.difficulty - b.difficulty).reverse());
    if(ascOrDesc === 'default'){
        newMap = originalOrder;
    } else if(ascOrDesc === 'ascending'){
        // (newMap.sort((a: any, b: any) => a[sortByColumn] - b[sortByColumn]));
        if(sortByColumn === 'name' || sortByColumn === 'weather' || sortByColumn === 'movementType' || sortByColumn === 'id'){
            newMap.sort(compare).reverse();
        } else newMap.sort(compare);
    } else {
        if(sortByColumn === 'name' || sortByColumn === 'weather' || sortByColumn === 'movementType' || sortByColumn === 'id'){
            newMap.sort(compare);
        } else newMap.sort(compare).reverse();
        // (newMap.sort((a: any, b: any) => a[sortByColumn] - b[sortByColumn]).reverse());
    }

    
      
    // console.log(newMap.sort( compare ));
    // console.log(newMap.sort( compare ).reverse());

    // let testArray = ["zazdasdas dasd", "basdasd as", "asd", "ca sasdasdd", "dasd"];
    // console.log(testArray);
    // console.log(testArray.sort());
    // console.log(testArray.sort().reverse());


    return (
        <div className="fishing-odds-table">
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