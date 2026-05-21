import styles from './GameCard.module.css'

function GameCard({homeTeam, awayTeam, homeScore, awayScore, status, homeImage, awayImage}){
return(
    <div className = {styles.card}>
        <div className = {styles.teamSection}>
             <img className={styles.logos} src={awayImage} alt="Away Team" />
             <p>{awayTeam}</p>
             <p>{awayScore}</p>
        </div>
        
        <div className={styles.statusGroup}>
            <p className={styles.statusText}>@</p>
            <p className={styles.statusText}>{status}</p>
        </div>
        
        <div className = {styles.teamSection}>
            <p>{homeScore}</p> 
            <p>{homeTeam}</p>
            <img className={styles.logos} src={homeImage} alt="Home Team" />
        </div>
    </div>
)




}

export default GameCard