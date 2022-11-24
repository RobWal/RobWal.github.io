import './FishOddsLegendRow.css';

const FishOddsLegendRow = ({handleSort}: any) => {
    return (
        <div className="fish-odds-legend-row" onClick={handleSort}>
            <p>id</p><p>name</p><p>time</p><p>weather</p><p>difficulty</p><p>movementType</p><p>minDepth</p><p>spawnMult</p><p>actualChance</p><p>catchRubbishChance</p>
        </div>
    )
}

export default FishOddsLegendRow;