import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTournament } from '../context/TournamentContext'
import { groups, getFlagUrl } from '../data/worldcup2026'

const teamMap = {}
groups.forEach(g => g.teams.forEach(t => { teamMap[t.name] = t }))

function BracketMatchCard({ match, isFinal, isThird }) {
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
    }
  }

  const stadium = getStadiumById(match.stadiumId)
  const hScore = current?.home, aScore = current?.away
  const hasResult = hScore !== undefined && aScore !== undefined
  const hWin = hasResult && hScore > aScore
  const aWin = hasResult && aScore > hScore
  const draw = hasResult && hScore === aScore

  const hInfo = teamMap[match.homeTeam] || {}
  const aInfo = teamMap[match.awayTeam] || {}

  return (
    <div className={`bracket-match ${isFinal ? 'bracket-final' : ''} ${isThird ? 'bracket-third' : ''}
      ${hasResult ? 'bracket-done' : ''} ${hWin ? 'home-won' : aWin ? 'away-won' : ''}`}>
      <div className="bm-header">
        <span className="bm-round">{match.round}</span>
        <span className="bm-date">{match.date} · {match.time}</span>
      </div>
      <div className="bm-teams">
        <div className={`bm-team flag-bg ${hWin ? 'bm-winner' : ''}`}>
          {hInfo.code && <img className="team-flag-bg" src={getFlagUrl(hInfo.code)} alt="" />}
          {hInfo.code && <img className="team-flag" src={getFlagUrl(hInfo.code)} alt={match.homeTeam || ''} />}
          <span className="team-name">{match.homeTeam || '—'}</span>
          <span className="team-code">{hInfo.code || ''}</span>
          <input type="number" min="0" max="99" className="bm-score"
            value={home} onChange={e => setHome(e.target.value)}
            onBlur={handleBlur} disabled={!match.homeTeam}
            aria-label={`${match.homeTeam || 'Team'} goals`} />
        </div>
        <div className={`bm-team flag-bg ${aWin ? 'bm-winner' : ''}`}>
          {aInfo.code && <img className="team-flag-bg" src={getFlagUrl(aInfo.code)} alt="" />}
          {aInfo.code && <img className="team-flag" src={getFlagUrl(aInfo.code)} alt={match.awayTeam || ''} />}
          <span className="team-name">{match.awayTeam || '—'}</span>
          <span className="team-code">{aInfo.code || ''}</span>
          <input type="number" min="0" max="99" className="bm-score"
            value={away} onChange={e => setAway(e.target.value)}
            onBlur={handleBlur} disabled={!match.awayTeam}
            aria-label={`${match.awayTeam || 'Team'} goals`} />
        </div>
      </div>
      <div className="bm-venue">
        <Link to="/map" state={{ highlight: match.stadiumId }}>
          {stadium?.name || match.stadiumId}
        </Link>
      </div>
      {hasResult && !draw && (
        <div className="bm-advance">
          {hWin ? (match.homeTeam || 'Home') : (match.awayTeam || 'Away')} avanza
        </div>
      )}
    </div>
  )
}

function BracketView() {
  const { getKnockout } = useTournament()
  const matches = getKnockout()

  const r32 = matches.filter(m => m.round === 'R32').sort((a, b) => a.id - b.id)
  const r16 = matches.filter(m => m.round === 'R16').sort((a, b) => a.id - b.id)
  const qf = matches.filter(m => m.round === 'QF').sort((a, b) => a.id - b.id)
  const sf = matches.filter(m => m.round === 'SF').sort((a, b) => a.id - b.id)
  const finalMatch = matches.find(m => m.round === 'Final')
  const thirdMatch = matches.find(m => m.round === '3rd')

  const mid = n => Math.ceil(n / 2)
  const leftR32 = r32.slice(0, mid(r32.length))
  const rightR32 = r32.slice(mid(r32.length))
  const leftR16 = r16.slice(0, mid(r16.length))
  const rightR16 = r16.slice(mid(r16.length))
  const leftQF = qf.slice(0, mid(qf.length))
  const rightQF = qf.slice(mid(qf.length))
  const leftSF = sf.slice(0, mid(sf.length))
  const rightSF = sf.slice(mid(sf.length))

  return (
    <div className="bracket-wrap">
      <h1 className="page-title">Fase Eliminatoria</h1>
      <div className="bracket-tree">
        <div className="bracket-half">
          {leftR32.length > 0 && (
            <div className="round-col">
              <span className="round-label">16avos</span>
              {leftR32.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
          {leftR16.length > 0 && (
            <div className="round-col">
              <span className="round-label">Octavos</span>
              {leftR16.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
          {leftQF.length > 0 && (
            <div className="round-col">
              <span className="round-label">Cuartos</span>
              {leftQF.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
          {leftSF.length > 0 && (
            <div className="round-col">
              <span className="round-label">Semis</span>
              {leftSF.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
        </div>

        <div className="bracket-center">
          {thirdMatch && <BracketMatchCard match={thirdMatch} isThird />}
          {finalMatch && <BracketMatchCard match={finalMatch} isFinal />}
        </div>

        <div className="bracket-half bracket-half-right">
          {rightSF.length > 0 && (
            <div className="round-col">
              <span className="round-label">Semis</span>
              {rightSF.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
          {rightQF.length > 0 && (
            <div className="round-col">
              <span className="round-label">Cuartos</span>
              {rightQF.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
          {rightR16.length > 0 && (
            <div className="round-col">
              <span className="round-label">Octavos</span>
              {rightR16.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
          {rightR32.length > 0 && (
            <div className="round-col">
              <span className="round-label">16avos</span>
              {rightR32.map(m => <BracketMatchCard key={m.id} match={m} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BracketView
