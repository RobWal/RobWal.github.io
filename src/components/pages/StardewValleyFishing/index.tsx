import './StardewValleyFishing.css';
import FishData from './FishData';
import FishDataFormatted from './FishDataFormatted';


const StardewValleyFishing = () => {
    let beginStrip: String = FishData.replaceAll('#!String', '');
    beginStrip = beginStrip.replaceAll(': "', '/');
    beginStrip = beginStrip.replaceAll('"', '');
    beginStrip = beginStrip.replaceAll(/ \n/g, '\n');
    console.log(beginStrip)
    let totalEntries = 1;
    for(let i = 0; i < beginStrip.length; i++){
        if(/\n+/.exec(beginStrip[i])){
            totalEntries++;
            // console.log('match')
        };
        // console.log(beginStrip[i]);
    }
    console.log(`Total entries: ${totalEntries}`)
    let continueStrip: Array<string> = beginStrip.split(/[\n,\/]/);
    // continueStrip[i+6].substring(0, continueStrip[i+6].indexOf(' '))}, maxTime: ${continueStrip[i+6].substring(continueStrip[i+6].indexOf(' ')+1)}
    let jumboText: string = '';
    let crabPot: string = '';
    console.log(continueStrip);
    console.log(`ContinueStrip.length === ${continueStrip.length}`);
    for(let i = 0; i < continueStrip.length; i ++){
        //.replace(/\-/g, ' and ')
            // if(i+14 < continueStrip.length){
                // if(continueStrip[i].length === 3 && parseInt(continueStrip[i]) > 100){
                if(continueStrip[i] === 'sinker' || continueStrip[i] === 'mixed' || continueStrip[i] === 'smooth' || continueStrip[i] === 'floater' || continueStrip[i] === 'dart'){
                    // if(continueStrip[i].length === 3 && parseInt(continueStrip[i]) > 100){
                        jumboText += `{id: ${continueStrip[i-3]}, name: "${continueStrip[i-2]}", difficulty: ${continueStrip[i-1]}, movementType: "${continueStrip[i]}", minSize: ${continueStrip[i+1]}, maxSize: ${continueStrip[i+2]}, time: "${continueStrip[i+3].replace(/\s/, '-').replace(/\s/, '&').replace(/\s/, '-')}", season: "${continueStrip[i+4]}", weather: "${continueStrip[i+5]}", locations: "${continueStrip[i+6]}", minDepth: ${continueStrip[i+7]}, spawnMult: ${continueStrip[i+8]}, depthMult: ${continueStrip[i+9]}, fishingLevel: ${continueStrip[i+10]}},
                        `
                    } 
                    else if(continueStrip[i] === 'trap'){
                        // console.log(`We're at ${i}, ${continueStrip[i]+continueStrip[i+1]+continueStrip[i+2]}`)
                        crabPot += `{id: ${continueStrip[i-2]}, name: ${continueStrip[i-1]}, isTrap: ${continueStrip[i]}, chance: ${continueStrip[i+1]}, unused: ${continueStrip[i+2]}, location: ${continueStrip[i+3]}, minSize: ${continueStrip[i+4]}, maxSize: ${continueStrip[i+5]}}
                        `
                    }
                };
            // }
    //     let id: String = continueStrip[i].slice(0, 3);
    //     let parsed: number = +id;
    //     fishList.push({
    //         id: parsed,
    //         name: 'aasdasd',
    //     })
    // }
    // IT'S COUNTING 62 ENTRIES, THERE ARE 73 TOTAL, MEANING 11 MUST BE 'CRAB POT'
    let counter = 0;
    for(let i = 0; i < jumboText.length; i++){
        if(jumboText[i] === "{"){
            counter++;
            // console.log(counter)
        }
    }
    console.log(`Fish Counter: ${counter}`);
    console.log(jumboText);
    counter = 0;
    for(let i = 0; i < crabPot.length; i++){
        if(crabPot[i] === "{"){
            counter++;
            // console.log(counter)
        }
    }
    console.log(`Crab Pot Counter: ${counter}`);
    console.log(crabPot)
    // console.log(jumboText);
    // for(let key of jumboText){
    //     console.log(key)
    // }
    let fishList = '';
    return (
        <div id = 'mainDiv'>
            <FishDataFormatted />
        </div>
    )
}

export default StardewValleyFishing;

    // for(let i = 0; i < continueStrip.length; i++){}
    // let fishList: Fish[] = [];
    // let fishObject: Array<string> = [];
    // for(let i = 0; i < beginStrip.length; i++){
    //     let j = 0;
    //     fishObject.push(beginStrip[i]);
    // };
    // console.log(FishData);
    // console.log(LocationData);