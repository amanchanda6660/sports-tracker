import styles from './GameCard.module.css'

function GameCard({homeTeam, awayTeam, homeScore, awayScore, status}){
return(
    <div className = {styles.card}> 
    <p className={styles.scoreLine}>{awayTeam} {awayScore} @ {homeScore} {homeTeam}</p>
    <p className={styles.statusText}>{status}</p>
    </div>
)




}

export default GameCard