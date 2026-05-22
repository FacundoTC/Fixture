import { useState, useRef, useEffect } from 'react'
import playlist from '../data/music'

const storageKey = 'wc2026_music'

function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(() => {
    try { return parseFloat(localStorage.getItem(storageKey)) || 0.3 } catch { return 0.3 }
  })
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(storageKey, String(volume))
  }, [volume])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = muted ? 0 : volume
  }, [volume, muted])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const skip = (dir) => {
    const next = (currentIdx + dir + playlist.length) % playlist.length
    setCurrentIdx(next)
    if (playing && audioRef.current) {
      audioRef.current.src = playlist[next].url
      audioRef.current.play().catch(() => {})
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onEnd = () => skip(1)
    audio.addEventListener('ended', onEnd)
    return () => audio.removeEventListener('ended', onEnd)
  }, [currentIdx, playing])

  const song = playlist[currentIdx]

  return (
    <>
      <button className="music-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Music player">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>

      {isOpen && (
        <div className="music-player">
          <audio ref={audioRef} src={song.url} preload="none" />
          <div className="music-info">
            <span className="music-flag">{song.flag}</span>
            <div>
              <div className="music-title">{song.title}</div>
              <div className="music-artist">{song.artist} · {song.year}</div>
            </div>
          </div>
          <div className="music-controls">
            <button onClick={() => skip(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/><path d="M22 9l-5 6 5 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <button className="play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/></svg>
              ) : (
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
              )}
            </button>
            <button onClick={() => skip(1)} aria-label="Next">
              <svg viewBox="0 0 24 24"><path d="M13 5l5 4h4v6h-4l-5 4V5z" fill="currentColor"/><path d="M2 9l5 6-5 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="music-volume">
            <button onClick={() => setMuted(!muted)} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? (
                <svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/><line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              ) : (
                <svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              )}
            </button>
            <input type="range" min="0" max="1" step="0.05" value={muted ? 0 : volume}
              onChange={e => { setVolume(parseFloat(e.target.value)); setMuted(false) }}
              aria-label="Volume" />
          </div>
        </div>
      )}
    </>
  )
}

export default MusicPlayer
