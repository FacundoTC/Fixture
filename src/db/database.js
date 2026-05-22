import initSqlJs from 'sql.js'
import wasmUrl from 'sql.js/dist/sql-wasm-browser.wasm?url'

const STORAGE_KEY = 'wc2026_sqlite_db'

let db = null
let SQL = null
let initPromise = null

function uint8ToBase64(u8) {
  let s = ''
  for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i])
  return btoa(s)
}

function base64ToUint8(b64) {
  const s = atob(b64)
  const u8 = new Uint8Array(s.length)
  for (let i = 0; i < s.length; i++) u8[i] = s.charCodeAt(i)
  return u8
}

export async function initDatabase() {
  if (initPromise) return initPromise
  initPromise = (async () => {
    try {
      SQL = await initSqlJs({ locateFile: () => wasmUrl })
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          db = new SQL.Database(base64ToUint8(saved))
        } catch {
          db = new SQL.Database()
        }
      } else {
        db = new SQL.Database()
      }
      db.run(`CREATE TABLE IF NOT EXISTS results (
        match_id INTEGER PRIMARY KEY,
        home_score INTEGER,
        away_score INTEGER,
        updated_at TEXT DEFAULT (datetime('now'))
      )`)
      persist()
    } catch (err) {
      console.error('SQLite init failed:', err)
    }
  })()
  return initPromise
}

function persist() {
  if (!db) return
  try {
    const data = db.export()
    localStorage.setItem(STORAGE_KEY, uint8ToBase64(data))
  } catch (err) {
    console.error('SQLite persist failed:', err)
  }
}

export function setScore(matchId, homeScore, awayScore) {
  if (!db) return
  try {
    db.run(
      `INSERT OR REPLACE INTO results (match_id, home_score, away_score, updated_at)
       VALUES (?, ?, ?, datetime('now'))`,
      [matchId, homeScore, awayScore]
    )
    persist()
  } catch (err) {
    console.error('SQLite setScore failed:', err)
  }
}

export function getAllScores() {
  if (!db) return {}
  try {
    const data = db.exec('SELECT match_id, home_score, away_score FROM results')
    const scores = {}
    if (data.length > 0) {
      data[0].values.forEach(row => {
        scores[row[0]] = { home: row[1], away: row[2] }
      })
    }
    return scores
  } catch {
    return {}
  }
}

export function resetAllScores() {
  if (!db) return
  try {
    db.run('DELETE FROM results')
    persist()
  } catch (err) {
    console.error('SQLite reset failed:', err)
  }
}
