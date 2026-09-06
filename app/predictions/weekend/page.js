'use client';

import { useMemo, useState } from 'react';
import '../predictions.css';

const weekend = [
  { date: 'Sat 12 Sep', time: '17:15', home: 'KVC Westerlo', away: 'Standard Liege', prediction: 'Home Team or Over 2.5', source: 'Westerlo pattern' },
  { date: 'Sun 13 Sep', time: '17:30', home: 'SV Zulte Waregem', away: 'Royal Charleroi SC', prediction: 'Home Team or Over 2.5', source: 'Zulte Waregem pattern' },
  { date: 'Sat 12 Sep', time: '19:45', home: 'Union Saint-Gilloise', away: 'Lommel SK', prediction: 'Home Team or Over 2.5', source: 'Union pattern' },
  { date: 'Sun 13 Sep', time: '12:30', home: 'Club Brugge', away: 'Royal Antwerp FC', prediction: 'Over 1.5', source: 'Antwerp / Club Brugge pattern' },
  { date: 'Sat 12 Sep', time: '15:30', home: 'FC Twente Enschede', away: 'ADO Den Haag', prediction: 'Over 1.5', source: 'Twente pattern' },
  { date: 'Sun 13 Sep', time: '13:30', home: 'SC Heerenveen', away: 'SC Telstar', prediction: 'Over 2.5', source: 'Telstar pattern' },
  { date: 'Sat 12 Sep', time: '19:00', home: 'Fortuna Sittard', away: 'Ajax', prediction: 'Over 2.5', source: 'Ajax pattern' },
  { date: 'Sun 13 Sep', time: '19:00', home: 'PSV Eindhoven', away: 'Sparta Rotterdam', prediction: 'Over 2.5', source: 'PSV pattern' },
  { date: 'Fri 11 Sep', time: '20:45', home: 'Rennes', away: 'Marseille', prediction: 'Over 2.5', source: 'Rennes / Marseille pattern' },
  { date: 'Sat 12 Sep', time: '17:15', home: 'Strasbourg', away: 'Monaco', prediction: 'Home Team or Over 2.5', source: 'Monaco pattern' },
  { date: 'Sun 13 Sep', time: '14:00', home: 'Celta Vigo', away: 'Malaga CF', prediction: 'Over 1.5', source: 'Celta pattern' },
  { date: 'Sun 13 Sep', time: '18:30', home: 'Getafe', away: 'Deportivo La Coruna', prediction: 'Over 1.5', source: 'Deportivo pattern' },
  { date: 'Sat 12 Sep', time: '21:00', home: 'Real Madrid', away: 'Rayo Vallecano', prediction: 'Over 2.5', source: 'Real Madrid pattern' },
  { date: 'Sat 12 Sep', time: '18:00', home: 'Lazio', away: 'AC Milan', prediction: 'Over 0.5', source: 'Lazio pattern' },
  { date: 'Sat 12 Sep', time: '20:45', home: 'Atalanta', away: 'Cagliari', prediction: 'Away or Over 2.5', source: 'Cagliari pattern' },
  { date: 'Sat 12 Sep', time: '15:30', home: 'SC Freiburg', away: 'Borussia Monchengladbach', prediction: 'Over 0.5', source: 'Freiburg pattern' },
  { date: 'Sat 12 Sep', time: '15:30', home: 'FC Augsburg', away: 'Bayer Leverkusen', prediction: 'Over 1.5', source: 'Augsburg pattern' },
  { date: 'Sat 12 Sep', time: '18:30', home: '1. FC Cologne', away: 'Werder Bremen', prediction: 'Over 0.5', source: 'Werder Bremen / Freiburg pattern' },
  { date: 'Fri 11 Sep', time: '20:30', home: 'Union Berlin', away: 'Schalke 04', prediction: 'Over 1.5', source: 'Schalke pattern' },
  { date: 'Sat 12 Sep', time: '15:00', home: 'Crystal Palace', away: 'Ipswich Town', prediction: 'Home', source: 'Ipswich / 1X2 pattern' },
  { date: 'Sat 12 Sep', time: '20:00', home: 'Sunderland AFC', away: 'Arsenal', prediction: 'Over 0.5', source: 'Sunderland pattern' },
  { date: 'Sat 12 Sep', time: '15:00', home: 'Chelsea', away: 'Hull City', prediction: 'Home Team or Over 2.5', source: 'Chelsea pattern' },
  { date: 'Sun 13 Sep', time: '16:30', home: 'Manchester United', away: 'Manchester City', prediction: 'Home', source: 'Man Utd pattern' },
  { date: 'Sun 13 Sep', time: '16:30', home: 'Leeds United', away: 'Newcastle United', prediction: 'Over 1.5', source: 'Leeds pattern' },
];

const searchText = (m) => `${m.home} ${m.away}`.toLowerCase();

export default function WeekendPredictionsPage() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => weekend.filter((m) => !search || searchText(m).includes(search.toLowerCase())), [search]);

  return (
    <main className="predictor-shell">
      <header className="predictor-header">
        <a className="brand" href="/predictions">Football <span>Predictor</span></a>
        <nav><a className="active" href="/predictions/weekend">Next Weekend</a><a href="/predictions">History</a></nav>
        <div className="header-pill">NEXT WEEKEND <b>⚽</b></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">NEXT WEEKEND • 11–13 SEPTEMBER 2026</div>
          <h1>Next fixtures.<br /><span>Pattern-based picks.</span></h1>
          <p>Only clubs from the original prediction dataset are used. The picks below carry forward the market patterns from the data you supplied; they are estimates, not guaranteed results.</p>
          <div className="hero-actions"><a href="#weekend" className="primary-btn">View weekend picks ↓</a><span className="disclaimer">Analysis & entertainment only.</span></div>
        </div>
        <div className="hero-card">
          <div className="card-top"><span>WEEKEND BOARD</span><strong>{weekend.length} MATCHES</strong></div>
          <div className="ring"><span>{weekend.length}</span><small>featured games</small></div>
          <div className="hero-stat"><b>Data-led</b><span>using your previous picks</span></div>
        </div>
      </section>

      <section id="weekend" className="matches-section">
        <div className="section-heading"><div><div className="eyebrow">FEATURE MATCHES</div><h2>Next weekend predictions</h2></div><span className="data-note">Weekend fixtures only</span></div>
        <div className="filters"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search club..." aria-label="Search club" /></div>
        <div className="table-wrap"><table><thead><tr><th>Date</th><th>Match</th><th>Prediction</th><th>Pattern used</th></tr></thead>
          <tbody>{filtered.map((m, i) => <tr key={`${m.home}-${m.away}`}><td className="muted">{m.date}<br />{m.time}</td><td><div className="teams"><b>{m.home}</b><span>vs</span><b>{m.away}</b></div></td><td><span className="pick">{m.prediction}</span></td><td className="market">{m.source}</td></tr>)}</tbody>
        </table>{filtered.length === 0 && <div className="empty">No club found.</div>}</div>
      </section>

      <section className="method"><div><div className="eyebrow">HOW THE PICKS WORK</div><h2>Use the pattern. Not a promise.</h2></div><p>Each prediction is carried forward from the relevant market/pick in your original 27-match dataset. This is a simple pattern-based model, not a claim that a future result is certain. Future versions can score team form, home/away performance, injuries and recent results before generating a pick.</p></section>

      <footer><b>Football Predictor</b><span>Independent weekend football analysis</span><span>•</span><span>No result is guaranteed.</span></footer>
    </main>
  );
}
