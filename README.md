# Sports Tracker

**Live Demo:** [sports-tracker-alpha.vercel.app](https://sports-tracker-alpha.vercel.app/)

A live sports scores web app built with React. Fetches real-time data from the ESPN public API and displays live, upcoming, and final games across five major leagues.

## Features

- Live scores with game status and broadcast info
- Upcoming and final game results
- Team logos, venue, win-loss records, and series info (for playoffs)
- Switch between NBA, NFL, MLB, NHL, and UEFA Champions League
- Manual refresh button to pull the latest scores

## Tech Stack

- React 19
- Vite
- ESPN public scoreboard API (no API key required)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── App.jsx               # Main app — fetches games, filters by status
├── components/
│   ├── GameCard.jsx       # Individual game card (scores, logos, stats)
│   ├── GameCard.module.css
│   ├── LeagueTabs.jsx     # Sport selector tabs (NBA, NFL, MLB, NHL, UCL)
│   └── LeagueTabs.module.css
```

## Supported Leagues

| Tab | League |
|-----|--------|
| NBA | Basketball — NBA |
| NFL | Football — NFL |
| MLB | Baseball — MLB |
| NHL | Hockey — NHL |
| UCL | Soccer — UEFA Champions League |
