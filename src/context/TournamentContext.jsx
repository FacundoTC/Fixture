import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { groups, stadiums } from '../data/worldcup2026'
import { initDatabase, setScore as dbSetScore, getAllScores, resetAllScores as dbReset } from '../db/database'

const knockoutTemplate = [
  { id: 73, round: 'R32', order: 0, hasParent: false, date: '2026-06-28', time: '15:00 ET', stadiumId: 'sofi',
    homeSource: { type: 'group', group: 'A', pos: 2 }, awaySource: { type: 'group', group: 'B', pos: 2 } },
  { id: 74, round: 'R32', order: 0, hasParent: false, date: '2026-06-29', time: '16:30 ET', stadiumId: 'gillette',
    homeSource: { type: 'group', group: 'E', pos: 1 }, awaySource: { type: 'best3', groups: ['A','B','C','D','F'], pos: 1 } },
  { id: 75, round: 'R32', order: 0, hasParent: false, date: '2026-06-29', time: '21:00 ET', stadiumId: 'bbva',
    homeSource: { type: 'group', group: 'F', pos: 1 }, awaySource: { type: 'group', group: 'C', pos: 2 } },
  { id: 76, round: 'R32', order: 0, hasParent: false, date: '2026-06-29', time: '13:00 ET', stadiumId: 'nrg',
    homeSource: { type: 'group', group: 'C', pos: 1 }, awaySource: { type: 'group', group: 'F', pos: 2 } },
  { id: 77, round: 'R32', order: 0, hasParent: false, date: '2026-06-30', time: '17:00 ET', stadiumId: 'metlife',
    homeSource: { type: 'group', group: 'I', pos: 1 }, awaySource: { type: 'best3', groups: ['C','D','F','G','H'], pos: 2 } },
  { id: 78, round: 'R32', order: 0, hasParent: false, date: '2026-06-30', time: '13:00 ET', stadiumId: 'att',
    homeSource: { type: 'group', group: 'E', pos: 2 }, awaySource: { type: 'group', group: 'I', pos: 2 } },
  { id: 79, round: 'R32', order: 0, hasParent: false, date: '2026-06-30', time: '21:00 ET', stadiumId: 'azteca',
    homeSource: { type: 'group', group: 'A', pos: 1 }, awaySource: { type: 'best3', groups: ['C','E','F','H','I'], pos: 3 } },
  { id: 80, round: 'R32', order: 0, hasParent: false, date: '2026-07-01', time: '12:00 ET', stadiumId: 'mercedesbenz',
    homeSource: { type: 'group', group: 'L', pos: 1 }, awaySource: { type: 'best3', groups: ['E','H','I','J','K'], pos: 4 } },
  { id: 81, round: 'R32', order: 0, hasParent: false, date: '2026-07-01', time: '20:00 ET', stadiumId: 'levis',
    homeSource: { type: 'group', group: 'D', pos: 1 }, awaySource: { type: 'best3', groups: ['B','E','F','I','J'], pos: 5 } },
  { id: 82, round: 'R32', order: 0, hasParent: false, date: '2026-07-01', time: '16:00 ET', stadiumId: 'lumen',
    homeSource: { type: 'group', group: 'G', pos: 1 }, awaySource: { type: 'best3', groups: ['A','E','H','I','J'], pos: 6 } },
  { id: 83, round: 'R32', order: 0, hasParent: false, date: '2026-07-02', time: '19:00 ET', stadiumId: 'bmofield',
    homeSource: { type: 'group', group: 'K', pos: 2 }, awaySource: { type: 'group', group: 'L', pos: 2 } },
  { id: 84, round: 'R32', order: 0, hasParent: false, date: '2026-07-02', time: '15:00 ET', stadiumId: 'sofi',
    homeSource: { type: 'group', group: 'H', pos: 1 }, awaySource: { type: 'group', group: 'J', pos: 2 } },
  { id: 85, round: 'R32', order: 0, hasParent: false, date: '2026-07-02', time: '23:00 ET', stadiumId: 'bcplace',
    homeSource: { type: 'group', group: 'B', pos: 1 }, awaySource: { type: 'best3', groups: ['E','F','G','I','J'], pos: 7 } },
  { id: 86, round: 'R32', order: 0, hasParent: false, date: '2026-07-03', time: '18:00 ET', stadiumId: 'hardrock',
    homeSource: { type: 'group', group: 'J', pos: 1 }, awaySource: { type: 'group', group: 'H', pos: 2 } },
  { id: 87, round: 'R32', order: 0, hasParent: false, date: '2026-07-03', time: '21:30 ET', stadiumId: 'arrowhead',
    homeSource: { type: 'group', group: 'K', pos: 1 }, awaySource: { type: 'best3', groups: ['D','E','I','J','L'], pos: 8 } },
  { id: 88, round: 'R32', order: 0, hasParent: false, date: '2026-07-03', time: '14:00 ET', stadiumId: 'att',
    homeSource: { type: 'group', group: 'D', pos: 2 }, awaySource: { type: 'group', group: 'G', pos: 2 } },
  { id: 89, round: 'R16', order: 1, hasParent: true, date: '2026-07-04', time: '17:00 ET', stadiumId: 'lincoln',
    homeParent: 73, awayParent: 75 },
  { id: 90, round: 'R16', order: 1, hasParent: true, date: '2026-07-04', time: '13:00 ET', stadiumId: 'nrg',
    homeParent: 74, awayParent: 77 },
  { id: 91, round: 'R16', order: 1, hasParent: true, date: '2026-07-05', time: '16:00 ET', stadiumId: 'metlife',
    homeParent: 76, awayParent: 78 },
  { id: 92, round: 'R16', order: 1, hasParent: true, date: '2026-07-05', time: '20:00 ET', stadiumId: 'azteca',
    homeParent: 79, awayParent: 80 },
  { id: 93, round: 'R16', order: 1, hasParent: true, date: '2026-07-06', time: '15:00 ET', stadiumId: 'att',
    homeParent: 81, awayParent: 82 },
  { id: 94, round: 'R16', order: 1, hasParent: true, date: '2026-07-06', time: '20:00 ET', stadiumId: 'lumen',
    homeParent: 83, awayParent: 84 },
  { id: 95, round: 'R16', order: 1, hasParent: true, date: '2026-07-07', time: '12:00 ET', stadiumId: 'mercedesbenz',
    homeParent: 85, awayParent: 87 },
  { id: 96, round: 'R16', order: 1, hasParent: true, date: '2026-07-07', time: '16:00 ET', stadiumId: 'bcplace',
    homeParent: 86, awayParent: 88 },
  { id: 97, round: 'QF', order: 2, hasParent: true, date: '2026-07-09', time: '16:00 ET', stadiumId: 'gillette',
    homeParent: 89, awayParent: 90 },
  { id: 98, round: 'QF', order: 2, hasParent: true, date: '2026-07-10', time: '15:00 ET', stadiumId: 'sofi',
    homeParent: 93, awayParent: 94 },
  { id: 99, round: 'QF', order: 2, hasParent: true, date: '2026-07-11', time: '17:00 ET', stadiumId: 'hardrock',
    homeParent: 91, awayParent: 92 },
  { id: 100, round: 'QF', order: 2, hasParent: true, date: '2026-07-11', time: '21:00 ET', stadiumId: 'arrowhead',
    homeParent: 95, awayParent: 96 },
  { id: 101, round: 'SF', order: 3, hasParent: true, date: '2026-07-14', time: '15:00 ET', stadiumId: 'att',
    homeParent: 97, awayParent: 98 },
  { id: 102, round: 'SF', order: 3, hasParent: true, date: '2026-07-15', time: '15:00 ET', stadiumId: 'mercedesbenz',
    homeParent: 99, awayParent: 100 },
  { id: 103, round: '3rd', order: 4, hasParent: true, date: '2026-07-18', time: '17:00 ET', stadiumId: 'hardrock',
    homeParent: 101, awayParent: 102, isThirdPlace: true },
  { id: 104, round: 'Final', order: 5, hasParent: true, date: '2026-07-19', time: '15:00 ET', stadiumId: 'metlife',
    homeParent: 101, awayParent: 102 },
]

const allGroupMatches = groups.flatMap(g => g.matches.map(m => ({ ...m, groupId: g.id })))

function calcStandings(groupId, scores) {
  const group = groups.find(g => g.id === groupId)
  const map = {}
  group.teams.forEach(t => { map[t.name] = { team: t.name, flag: t.flag, code: t.code, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 } })
  group.matches.forEach(m => {
    const s = scores[m.id]
    if (s === undefined || s.home === undefined || s.away === undefined) return
    const { home, away } = s
    const h = map[m.home], a = map[m.away]
    if (!h || !a) return
    h.P++; a.P++
    h.GF += home; h.GA += away; h.GD = h.GF - h.GA
    a.GF += away; a.GA += home; a.GD = a.GF - a.GA
    if (home > away) { h.W++; h.Pts += 3; a.L++ }
    else if (home < away) { a.W++; a.Pts += 3; h.L++ }
    else { h.D++; h.Pts++; a.D++; a.Pts++ }
  })
  return Object.values(map).sort((a, b) => {
    if (b.Pts !== a.Pts) return b.Pts - a.Pts
    if (b.GD !== a.GD) return b.GD - a.GD
    return b.GF - a.GF
  })
}

function getTeamName(groupId, pos, standingsCache) {
  const s = standingsCache[groupId] || calcStandings(groupId, {})
  return s[pos - 1]?.team || null
}

function getBestThirdPlace(scores, excludeGroups = []) {
  const all = []
  groups.forEach(g => {
    const s = calcStandings(g.id, scores)
    if (s[2]) all.push({ ...s[2], group: g.id })
  })
  const sorted = all.sort((a, b) => {
    if (b.Pts !== a.Pts) return b.Pts - a.Pts
    if (b.GD !== a.GD) return b.GD - a.GD
    return b.GF - a.GF
  })
  return sorted.filter(t => !excludeGroups.includes(t.group))
}

function getKnockoutTeams(scores) {
  const sc = {}
  groups.forEach(g => { sc[g.id] = calcStandings(g.id, scores) })
  const best3 = getBestThirdPlace(scores)
  const resolved = {}
  let best3Idx = 0
  knockoutTemplate.forEach(m => {
    let home = null, away = null
    if (m.homeSource) {
      if (m.homeSource.type === 'group') home = getTeamName(m.homeSource.group, m.homeSource.pos, sc)
      else if (m.homeSource.type === 'best3') home = best3[best3Idx]?.team || null
    }
    if (m.awaySource) {
      if (m.awaySource.type === 'group') away = getTeamName(m.awaySource.group, m.awaySource.pos, sc)
      else if (m.awaySource.type === 'best3') away = best3[best3Idx]?.team || null
    }
    if (m.homeSource?.type === 'best3') best3Idx++
    if (m.awaySource?.type === 'best3') best3Idx++
    const s = scores[m.id]
    const homeScore = s?.home ?? null
    const awayScore = s?.away ?? null
    let winner = null
    if (homeScore !== null && awayScore !== null) {
      if (homeScore > awayScore) winner = 'home'
      else if (awayScore > homeScore) winner = 'away'
    }
    resolved[m.id] = { ...m, homeTeam: m.hasParent ? null : home, awayTeam: m.hasParent ? null : away, homeTeamLabel: m.hasParent ? null : (home || '—'), awayTeamLabel: m.hasParent ? null : (away || '—'), homeScore, awayScore, winner }
  })
  const order = [0, 1, 2, 3, 4, 5]
  order.forEach(o => {
    knockoutTemplate.filter(m => m.hasParent).forEach(m => {
      const hp = resolved[m.homeParent], ap = resolved[m.awayParent]
      const homeTeam = hp?.winner === 'home' ? hp.homeTeamLabel : hp?.winner === 'away' ? hp.awayTeamLabel : null
      const awayTeam = ap?.winner === 'home' ? ap.homeTeamLabel : ap?.winner === 'away' ? ap.awayTeamLabel : null
      const s = scores[m.id]
      const homeScore = s?.home ?? null, awayScore = s?.away ?? null
      let winner = null
      if (homeScore !== null && awayScore !== null) {
        if (homeScore > awayScore) winner = 'home'
        else if (awayScore > homeScore) winner = 'away'
      }
      resolved[m.id] = { ...resolved[m.id], homeTeam, awayTeam, homeTeamLabel: homeTeam || '—', awayTeamLabel: awayTeam || '—', homeScore, awayScore, winner }
    })
  })
  return Object.values(resolved)
}

const TournamentContext = createContext(null)

export function TournamentProvider({ children }) {
  const [scores, setScores] = useState({})
  const [loading, setLoading] = useState(true)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    initRef.current = true
    initDatabase().then(() => {
      setScores(getAllScores())
      setLoading(false)
    })
  }, [])

  const setScore = useCallback((matchId, home, away) => {
    dbSetScore(matchId, home, away)
    setScores(prev => ({ ...prev, [matchId]: { home, away } }))
  }, [])

  const resetAll = useCallback(() => {
    dbReset()
    setScores({})
  }, [])

  const getStandings = useCallback((groupId) => calcStandings(groupId, scores), [scores])
  const getKnockout = useCallback(() => getKnockoutTeams(scores), [scores])
  const getStadiumById = useCallback((id) => stadiums.find(s => s.id === id) || null, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Cargando base de datos...</p>
      </div>
    )
  }

  return (
    <TournamentContext.Provider value={{
      scores, setScore, resetAll,
      getStandings, getKnockout, getStadiumById,
      groups, knockoutTemplate, allGroupMatches
    }}>
      {children}
    </TournamentContext.Provider>
  )
}

export function useTournament() {
  const ctx = useContext(TournamentContext)
  if (!ctx) throw new Error('useTournament must be used within TournamentProvider')
  return ctx
}
