import { useTournament } from '../context/TournamentContext'
import GroupTable from '../components/GroupTable'
import MatchCard from '../components/MatchCard'
import { useRef, useState, useEffect } from 'react'

function Fixture() {
  const { groups } = useTournament()
  const [activeGroup, setActiveGroup] = useState(groups[0]?.id || null)
  const groupRefs = useRef({})

  const currentGroup = groups.find(g => g.id === activeGroup)

  useEffect(() => {
    if (groupRefs.current[activeGroup]) {
      groupRefs.current[activeGroup].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeGroup])

  return (
    <div className="fixture-page">
      <h1 className="page-title">Mundial 2026</h1>
      <p className="page-subtitle">Canadá · Estados Unidos · México</p>

      <div className="group-tabs">
        {groups.map(g => (
          <button key={g.id}
            className={`group-tab ${activeGroup === g.id ? 'active' : ''}`}
            onClick={() => setActiveGroup(g.id)}>
            {g.id}
          </button>
        ))}
      </div>

      {currentGroup && (
        <div key={currentGroup.id} ref={el => groupRefs.current[currentGroup.id] = el} className="group-section">
          <GroupTable group={currentGroup} />
          <div className="group-matches">
            <h3>Partidos</h3>
            {currentGroup.matches.map(m => (
              <MatchCard key={m.id} match={m} group={currentGroup} />
            ))}
          </div>
        </div>
      )}

      <div className="all-groups-desktop">
        {groups.map(g => (
          <div key={g.id} ref={el => groupRefs.current[g.id] = el} className="group-section">
            <GroupTable group={g} />
            <div className="group-matches">
              <h3>Partidos</h3>
              {g.matches.map(m => (
                <MatchCard key={m.id} match={m} group={g} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fixture
