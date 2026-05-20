import './App.css'
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


const liveGames = games.filter((game) => game.status.type.state === "in")
const upcomingGames = games.filter((game) => game.status.type.state === "pre")
const finalGames = games.filter((game) => game.status.type.state === "post")

return (
  <div>
    <h1 className='header'>Sports Tracker</h1>

    <h2 className='live'>Live</h2>
    {liveGames.length > 0 ? liveGames.map((game) => <GameCard key= {game.id} homeTeam={game.competitions[0].competitors[0].team.displayName}
      awayTeam={game.competitions[0].competitors[1].team.displayName}
      homeScore={game.competitions[0].competitors[0].score} 
      awayScore={game.competitions[0].competitors[1].score}
      status={game.status.type.detail} 
      />) :<p>No live games right now.</p>
}   

    <h2 className='upcoming'>Upcoming</h2>
    {upcomingGames.length > 0 ? upcomingGames.map ((game) => <GameCard key= {game.id} homeTeam={game.competitions[0].competitors[0].team.displayName}
      awayTeam={game.competitions[0].competitors[1].team.displayName}
      homeScore={game.competitions[0].competitors[0].score} 
      awayScore={game.competitions[0].competitors[1].score}
      status={game.status.type.detail}
      />) :<p>No upcoming games right now.</p>
      }

    <h2 className='final'>Final</h2>
    {finalGames.length > 0 ? finalGames.map ((game) => <GameCard key= {game.id} homeTeam={game.competitions[0].competitors[0].team.displayName}
      awayTeam={game.competitions[0].competitors[1].team.displayName}
      homeScore={game.competitions[0].competitors[0].score} 
      awayScore={game.competitions[0].competitors[1].score}
      status={game.status.type.detail}
      />):<p>No games have ended.</p>
    } 

      <button className='refreshButton' onClick={() => fetchGames()}>Refresh Scores</button>
    </div>
)
}


export default App