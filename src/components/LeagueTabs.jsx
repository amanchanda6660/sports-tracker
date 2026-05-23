import styles from './LeagueTabs.module.css'


function LeagueTabs({selectedLeague, setLeague}){

    return(
        <div>
        <button className={styles.leagueButton} onClick={() => setLeague("nba")} >
            <img src='https://a.espncdn.com/i/teamlogos/leagues/500/nba.png' alt = "NBA" className={styles.leagueLogo}> 
        </img>
        NBA
        </button>
        <button className={styles.leagueButton} onClick={() => setLeague("nfl")} >
            <img src='https://a.espncdn.com/i/teamlogos/leagues/500/nfl.png' alt = "NFL" className={styles.leagueLogo}>
            </img>
            NFL
            </button>
        <button className={styles.leagueButton} onClick={() => setLeague("mlb")} >
            <img src='https://a.espncdn.com/i/teamlogos/leagues/500/mlb.png' alt = "MLB" className={styles.leagueLogo}>
           </img>
            MLB
            </button>
        <button className={styles.leagueButton} onClick={() => setLeague("nhl")} >
            <img src='https://a.espncdn.com/i/teamlogos/leagues/500/nhl.png' alt = "NHL" className={styles.leagueLogo}>
           </img>
            NHL
            </button>
        <button className={styles.leagueButton} onClick={() => setLeague("ucl")} >
            <img src='https://a.espncdn.com/i/leaguelogos/soccer/500/2.png' alt = "UCL" className={styles.leagueLogo}>
           </img>
            UCL
            </button>
        </div>
        
    )
}


export default LeagueTabs