function LeagueTabs({selectedLeague, setLeague}){

    return(
        <div>
        <button onClick={() => setLeague("nba")} >NBA</button>
        <button onClick={() => setLeague("nfl")} >NFL</button>
        <button onClick={() => setLeague("mlb")} >MLB</button>
        <button onClick={() => setLeague("nhl")} >NHL</button>
        </div>
        
    )
}


export default LeagueTabs