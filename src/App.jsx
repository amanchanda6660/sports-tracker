import {useState, useEffect} from 'react'
import GameCard from './components/GameCard'

function App() {
  const [games, setGames] = useState ([])

  function fetchGames() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
    .then(res => res.json())
    .then(data => setGames(data.events))
  }

  useEffect(() => {
    fetchGames()
  }, [])


console.log(games)

return (
  <div>
    <h1>NBA Tracker</h1>
    {games.map((game)=> 
    
    (<GameCard key= {game.id} homeTeam={game.competitions[0].competitors[0].team.displayName}
      awayTeam={game.competitions[0].competitors[1].team.displayName}
      homeScore={game.competitions[0].competitors[0].score} 
      awayScore={game.competitions[0].competitors[1].score}
      status={game.status.type.detail}
      />)
    
    )}
    </div>
)
}


export default App