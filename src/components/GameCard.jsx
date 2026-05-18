function GameCard({homeTeam, awayTeam, homeScore, awayScore, status}){
return(
    <div> 
    <p>{homeTeam} {homeScore} @ {awayScore} {awayTeam}</p>
    <p>{status}</p>
    </div>
)




}

export default GameCard