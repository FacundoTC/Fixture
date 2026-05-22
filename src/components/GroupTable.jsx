import { useTournament } from '../context/TournamentContext'

const teamMap = {}
import { groups, getFlagUrl } from '../data/worldcup2026'
groups.forEach(g => g.teams.forEach(t => { teamMap[t.name] = t }))

function GroupTable({ group }) {
  const { getStandings } = useTournament()
  const standings = getStandings(group.id)

  return (
    <div className="group-card">
      <div className="group-header">
        <span className="group-name">{group.name}</span>
      </div>
      <div className="group-table-wrap">
        <table className="group-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((t, i) => {
              const info = teamMap[t.team] || {}
              return (
              <tr key={t.team} className={
                i < 2 ? 'row-qualify' : i === 2 ? 'row-playoff' : 'row-out'
              }>
                <td>{i + 1}</td>
                <td className="team-cell">
                  {info.code && <img className="team-flag-bg" src={getFlagUrl(info.code)} alt="" />}
                  {info.code && <img className="team-flag" src={getFlagUrl(info.code)} alt={t.team} />}
                  <span className="team-name">{t.team}</span>
                  <span className="team-code">{info.code || ''}</span>
                </td>
                <td>{t.P}</td>
                <td>{t.W}</td>
                <td>{t.D}</td>
                <td>{t.L}</td>
                <td>{t.GF}</td>
                <td>{t.GA}</td>
                <td>{t.GD > 0 ? '+' : ''}{t.GD}</td>
                <td className="pts-cell"><strong>{t.Pts}</strong></td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GroupTable
