'use client';

import { useMemo, useState } from 'react';
import './predictions.css';

const matches = [
  { id: 1, home: 'KVC Westerlo', away: 'SV Zulte Waregem', score: '2 - 2', pick: 'Yes', odds: '1.33', market: 'Home Team or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 17:30', gameId: '38984' },
  { id: 2, home: 'Union Gilloise', away: 'RSC Anderlecht', score: '3 - 0', pick: 'Yes', odds: '1.31', market: 'Home Team or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 15:00', gameId: '29340' },
  { id: 3, home: 'Royal Antwerp FC', away: 'St. Truidense VV', score: '1 - 4', pick: 'Over 1.5', odds: '1.25', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 12:30', gameId: '38983' },
  { id: 4, home: 'Gent', away: 'Club Brugge', score: '2 - 1', pick: 'Yes', odds: '1.26', market: 'Away or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 19:00', gameId: '29126' },
  { id: 5, home: 'SC Cambuur', away: 'FC Twente Enschede', score: '1 - 4', pick: 'Over 1.5', odds: '1.14', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 15:45', gameId: '42622' },
  { id: 6, home: 'SC Telstar', away: 'Ajax', score: '0 - 4', pick: 'Over 2.5', odds: '1.43', market: 'Over/Under', result: 'Over 2.5', status: 'Won', time: '30/08 13:30', gameId: '32498' },
  { id: 7, home: 'Willem II Tilburg', away: 'SC Heerenveen', score: '2 - 2', pick: 'Over 2.5', odds: '1.47', market: 'Over/Under', result: 'Over 2.5', status: 'Won', time: '30/08 11:15', gameId: '34512' },
  { id: 8, home: 'FC Utrecht', away: 'PSV Eindhoven', score: '1 - 6', pick: 'Over 2.5', odds: '1.38', market: 'Over/Under', result: 'Over 2.5', status: 'Won', time: '30/08 15:00', gameId: '27049' },
  { id: 9, home: 'St Mirren FC', away: 'Motherwell FC', score: '3 - 3', pick: 'Over 1.5', odds: '1.31', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 15:00', gameId: '21058' },
  { id: 10, home: 'Dundee FC', away: 'Hibernian FC', score: '1 - 2', pick: 'Over 1.5', odds: '1.27', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 12:00', gameId: '26908' },
  { id: 11, home: 'Aberdeen', away: 'Rangers', score: '0 - 1', pick: 'Yes', odds: '1.28', market: 'Away or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 19:45', gameId: '10319' },
  { id: 12, home: 'Monaco', away: 'Marseille', score: '2 - 0', pick: 'Yes', odds: '1.31', market: 'Home Team or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 16:15', gameId: '43247' },
  { id: 13, home: 'Rennes', away: 'Le Mans FC', score: '3 - 2', pick: 'Over 2.5', odds: '1.58', market: 'Over/Under', result: 'Over 2.5', status: 'Won', time: '30/08 14:00', gameId: '10634' },
  { id: 14, home: 'Paris FC', away: 'Nice', score: '3 - 0', pick: 'Over 1.5', odds: '1.33', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 16:30', gameId: '27255' },
  { id: 15, home: 'Augsburg', away: 'Schalke', score: '3 - 0', pick: 'Over 1.5', odds: '1.23', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 14:30', gameId: '35792' },
  { id: 16, home: 'Freiburg', away: 'Werder Bremen', score: '4 - 1', pick: 'Over 0.5', odds: '1.18', market: 'Freiburg Over/Under', result: 'Over 0.5', status: 'Won', time: '30/08 19:45', gameId: '29533' },
  { id: 17, home: 'Lazio', away: 'Genoa', score: '1 - 0', pick: 'Over 0.5', odds: '1.31', market: 'Lazio Over/Under', result: 'Over 0.5', status: 'Won', time: '30/08 19:45', gameId: '28117' },
  { id: 18, home: 'Cagliari', away: 'Inter', score: '0 - 1', pick: 'Yes', odds: '1.23', market: 'Away or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 17:30', gameId: '27844' },
  { id: 19, home: 'Napoli', away: 'Como 1907', score: '1 - 2', pick: 'Over 1.5', odds: '1.44', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 20:30', gameId: '18545' },
  { id: 20, home: 'Celta', away: 'Athletic Bilbao', score: '0 - 2', pick: 'Over 1.5', odds: '1.37', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 18:30', gameId: '49269' },
  { id: 21, home: 'RC Deportivo De La Coruna', away: 'Valencia', score: '3 - 1', pick: 'Over 1.5', odds: '1.47', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 16:00', gameId: '15879' },
  { id: 22, home: 'Real Madrid', away: 'Malaga CF', score: '4 - 0', pick: 'Over 2.5', odds: '1.30', market: 'Over/Under', result: 'Over 2.5', status: 'Won', time: '30/08 16:30', gameId: '26032' },
  { id: 23, home: 'Man Utd', away: 'Ipswich Town', score: '5 - 2', pick: 'Home', odds: '1.44', market: '1X2', result: 'Home', status: 'Won', time: '30/08 14:00', gameId: '25106' },
  { id: 24, home: 'Sunderland AFC', away: 'Fulham', score: '1 - 0', pick: 'Over 0.5', odds: '1.30', market: 'Sunderland AFC Over/Under', result: 'Over 0.5', status: 'Won', time: '30/08 14:00', gameId: '38207' },
  { id: 25, home: 'Leeds United', away: 'Brentford', score: '1 - 1', pick: 'Over 1.5', odds: '1.29', market: 'Over/Under', result: 'Over 1.5', status: 'Won', time: '30/08 14:00', gameId: '23419' },
  { id: 26, home: 'Chelsea', away: 'Brighton', score: '4 - 3', pick: 'Yes', odds: '1.29', market: 'Home Team or Over 2.5', result: 'Yes', status: 'Won', time: '30/08 13:30', gameId: '44446' },
  { id: 27, home: 'Feyenoord', away: 'ADO Den Haag', score: '2 - 2', pick: 'Over 2.5', odds: '1.30', market: 'Over/Under', result: 'Over 2.5', status: 'Won', time: '30/08', gameId: '—' },
];

const leagues = ['All', 'Belgium', 'Netherlands', 'Scotland', 'France', 'Germany', 'Italy', 'Spain', 'England'];

function getLeague(team) {
  const Belgium = ['Westerlo', 'Zulte', 'Union', 'Anderlecht', 'Antwerp', 'Truidense', 'Gent', 'Brugge'];
  const Netherlands = ['Cambuur', 'Twente', 'Telstar', 'Ajax', 'Willem', 'Heerenveen', 'Utrecht', 'PSV', 'Feyenoord', 'ADO'];
  const Scotland = ['St Mirren', 'Motherwell', 'Dundee', 'Hibernian', 'Aberdeen', 'Rangers'];
  const France = ['Monaco', 'Marseille', 'Rennes', 'Le Mans', 'Paris FC', 'Nice'];
  const Germany = ['Augsburg', 'Schalke', 'Freiburg', 'Werder'];
  const Italy = ['Lazio', 'Genoa', 'Cagliari', 'Inter', 'Napoli', 'Como'];
  const Spain = ['Celta', 'Athletic', 'Deportivo', 'Valencia', 'Real Madrid', 'Malaga'];
  const England = ['Man Utd', 'Ipswich', 'Sunderland', 'Fulham', 'Leeds', 'Brentford', 'Chelsea', 'Brighton'];
  const groups = { Belgium, Netherlands, Scotland, France, Germany, Italy, Spain, England };
  return Object.entries(groups).find(([, list]) => list.some((x) => team.includes(x)))?.[0] || 'Other';
}

export default function PredictionsPage() {
  const [search, setSearch] = useState('');
  const [league, setLeague] = useState('All');
  const [market, setMarket] = useState('All');
  const [onlyWon, setOnlyWon] = useState(false);

  const filtered = useMemo(() => matches.filter((m) => {
    const text = `${m.home} ${m.away}`.toLowerCase();
    return (!search || text.includes(search.toLowerCase())) &&
      (league === 'All' || getLeague(m.home) === league) &&
      (market === 'All' || m.market === market) &&
      (!onlyWon || m.status === 'Won');
  }), [search, league, market, onlyWon]);

  const totalOdds = matches.reduce((acc, m) => acc * Number(m.odds), 1);
  const avgOdds = matches.reduce((acc, m) => acc + Number(m.odds), 0) / matches.length;
  const overMarkets = matches.filter((m) => m.market === 'Over/Under' || m.market.includes('Over/Under')).length;

  return (
    <main className="predictor-shell">
      <header className="predictor-header">
        <a className="brand" href="/predictions" aria-label="Football Predictor home">Football <span>Predictor</span></a>
        <nav><a className="active" href="#matches">Predictions</a><a href="#matches">Weekend Matches</a><a href="#method">How it works</a></nav>
        <div className="header-pill">27 PICKS <b>✓</b></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">WEEKEND FOOTBALL PREDICTOR</div>
          <h1>Smarter picks.<br /><span>Clearer weekends.</span></h1>
          <p>A clean football prediction dashboard built from the match and pick data supplied for this weekend. Review markets, odds, results and selections in one place.</p>
          <div className="hero-actions"><a href="#matches" className="primary-btn">View predictions ↓</a><span className="disclaimer">For analysis & entertainment only.</span></div>
        </div>
        <div className="hero-card">
          <div className="card-top"><span>LAST WEEKEND</span><strong>27 / 27 WON</strong></div>
          <div className="ring"><span>100%</span><small>hit rate</small></div>
          <div className="hero-stat"><b>{avgOdds.toFixed(2)}</b><span>Average odds</span></div>
        </div>
      </section>

      <section className="stats">
        <div><span>Matches tracked</span><b>{matches.length}</b></div>
        <div><span>Winning picks</span><b>27</b></div>
        <div><span>Over/Under markets</span><b>{overMarkets}</b></div>
        <div><span>Combined odds*</span><b>{totalOdds.toFixed(0)}x</b></div>
      </section>

      <section id="matches" className="matches-section">
        <div className="section-heading"><div><div className="eyebrow">MATCH CENTER</div><h2>Weekend predictions</h2></div><span className="data-note">Based only on supplied data</span></div>
        <div className="filters">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search club..." aria-label="Search club" />
          <select value={league} onChange={(e) => setLeague(e.target.value)} aria-label="League"><option value="All">All leagues</option>{leagues.slice(1).map((l) => <option key={l}>{l}</option>)}</select>
          <select value={market} onChange={(e) => setMarket(e.target.value)} aria-label="Market"><option value="All">All markets</option>{[...new Set(matches.map((m) => m.market))].map((m) => <option key={m}>{m}</option>)}</select>
          <button className={onlyWon ? 'toggle on' : 'toggle'} onClick={() => setOnlyWon(!onlyWon)}>✓ Won only</button>
        </div>

        <div className="table-wrap"><table><thead><tr><th>#</th><th>Match</th><th>Kick-off</th><th>Prediction</th><th>Odds</th><th>Market</th><th>Score</th><th>Status</th></tr></thead>
          <tbody>{filtered.map((m) => <tr key={m.id}><td className="muted">{m.id}</td><td><div className="teams"><b>{m.home}</b><span>vs</span><b>{m.away}</b></div><small>Game ID {m.gameId}</small></td><td className="muted">{m.time}</td><td><span className="pick">{m.pick}</span></td><td><strong>@{m.odds}</strong></td><td className="market">{m.market}</td><td className="score">{m.score}</td><td><span className="won">{m.status} ✓</span></td></tr>)}</tbody>
        </table>{filtered.length === 0 && <div className="empty">No matches found. Try another club, league or market.</div>}</div>
      </section>

      <section id="method" className="method"><div><div className="eyebrow">THE APPROACH</div><h2>Prediction data, not promises.</h2></div><p>This version does not invent live fixtures or pretend to know future results. It organizes the 27 supplied selections into a reusable weekend prediction system. Future versions can add live fixtures, team form, injuries and an automated prediction model.</p></section>

      <footer><b>Football Predictor</b><span>Independent football prediction dashboard</span><span>•</span><span>Analysis & entertainment only. No result is guaranteed.</span></footer>
    </main>
  );
}
