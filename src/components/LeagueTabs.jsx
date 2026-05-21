import styles from './LeagueTabs.module.css'


function LeagueTabs({selectedLeague, setLeague}){

    return(
        <div>
        <button className={styles.leagueButton} onClick={() => setLeague("nba")} >NBA</button>
        <button className={styles.leagueButton} onClick={() => setLeague("nfl")} >NFL</button>
        <button className={styles.leagueButton} onClick={() => setLeague("mlb")} >MLB</button>
        <button className={styles.leagueButton} onClick={() => setLeague("nhl")} >NHL</button>
        <button className={styles.leagueButton} onClick={() => setLeague("ucl")} >UCL</button>
        </div>
        
    )
}


export default LeagueTabs