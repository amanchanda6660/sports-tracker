import styles from './GameCard.module.css'

function GameCard({homeTeam, awayTeam, homeScore, awayScore, 
    status, homeImage, awayImage, broadcast, venue, 
    typeOfGame, seriesRecord, homeTeamRecord, awayTeamRecord}){

return(
    <div className = {styles.card}>
        <div className = {styles.teamSection}>
             <img className={styles.logos} src={awayImage} alt="Away Team" />
             <div>
                <p className={styles.teamName}>{awayTeam}</p>
                {awayTeamRecord && <p className={styles.secondaryInformation}>{awayTeamRecord}</p>}
             </div>
             <p className={styles.score}>{awayScore}</p>
             
            
        </div>
       
        <div className={styles.statusGroup}>
            {typeOfGame && <p className={styles.statusText}>{typeOfGame}</p>}

            <p className={styles.statusText}>{status}</p>
             {seriesRecord && <p className={styles.secondaryInformation}>{seriesRecord}</p>}
            <p className={styles.secondaryInformation}>{broadcast}</p>
            <p className={styles.secondaryInformation}>{venue}</p>
        </div>
        
        <div className = {styles.teamSection}>
            <p className={styles.score} >{homeScore}</p> 
            <div>
                <p className={styles.teamName}>{homeTeam}</p>
                {homeTeamRecord && <p className={styles.secondaryInformation}>{homeTeamRecord}</p>}
            </div>
            <img className={styles.logos} src={homeImage} alt="Home Team"/>
        </div>
    </div>
)




}

export default GameCard