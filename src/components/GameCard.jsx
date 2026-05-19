function GameCard({homeTeam, awayTeam, homeScore, awayScore, status}){
return(
    <div> 
    <p>{awayTeam} {awayScore} @ {homeScore} {homeTeam}</p>
    <p>{status}</p>
    </div>
)




}

export default GameCard