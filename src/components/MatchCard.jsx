import { useState, useEffect } from 'react'
import { useTournament } from '../context/TournamentContext'
import { Link } from 'react-router-dom'

const teamMap = {}
import { groups, getFlagUrl } from '../data/worldcup2026'
groups.forEach(g => g.teams.forEach(t => { teamMap[t.name] = t }))

function MatchCard({ match, group }) {
  const { scores, setScore, getStadiumById } = useTournament()
  const current = scores[match.id]

  const [home, setHome] = useState(current?.home ?? '')
  const [away, setAway] = useState(current?.away ?? '')

  useEffect(() => {
    setHome(current?.home ?? '')
    setAway(current?.away ?? '')
  }, [current?.home, current?.away])

  const handleBlur = () => {
    const h = home === '' ? undefined : parseInt(home, 10)
    const a = away === '' ? undefined : parseInt(away, 10)
    if (h !== undefined && a !== undefined && !isNaN(h) && !isNaN(a)) {
      setScore(match.id, h, a)
    } else if (h === undefined && a === undefined && current) {
      setScore(match.id, undefined, undefined)
    }
  }

  const stadium = getStadiumById(match.stadiumId)
  const hInfo = teamMap[match.home] || {}
  const aInfo = teamMap[match.away] || {}

  return (
    <div className="match-card">
      <div className="match-meta">
        <span className="match-date">{match.date}</span>
        <span className="match-time">{match.time}</span>
        <Link to="/map" className="match-venue" state={{ highlight: match.stadiumId }}>
          {stadium?.name || match.stadiumId}, {stadium?.city || ''}
        </Link>
      </div>
      <div className="match-teams">
        <div className="match-team home-team flag-bg">
          {hInfo.code && <img className="team-flag-bg" src={getFlagUrl(hInfo.code)} alt="" />}
          {hInfo.code && <img className="team-flag" src={getFlagUrl(hInfo.code)} alt={match.home} />}
          <span className="team-name">{match.home}</span>
          <span className="team-code">{hInfo.code || ''}</span>
        </div>
        <div className="match-score-inputs">
          <input
            type="number" min="0" max="99" className="score-input"
            value={home} onChange={e => setHome(e.target.value)}
            onBlur={handleBlur} aria-label={`${match.home} goals`}
          />
          <span className="score-sep">-</span>
          <input
            type="number" min="0" max="99" className="score-input"
            value={away} onChange={e => setAway(e.target.value)}
            onBlur={handleBlur} aria-label={`${match.away} goals`}
          />
        </div>
        <div className="match-team away-team flag-bg">
          {aInfo.code && <img className="team-flag-bg" src={getFlagUrl(aInfo.code)} alt="" />}
          {aInfo.code && <img className="team-flag" src={getFlagUrl(aInfo.code)} alt={match.away} />}
          <span className="team-name">{match.away}</span>
          <span className="team-code">{aInfo.code || ''}</span>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
