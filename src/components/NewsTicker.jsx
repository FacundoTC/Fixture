import { useState, useEffect } from 'react'
import curiosities from '../data/curiosities'

function NewsTicker() {
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx(prev => (prev + 1) % curiosities.length)
        setFade(true)
      }, 400)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="news-ticker">
      <span className="ticker-label">📖</span>
      <div className="ticker-text-wrap">
        <p className={`ticker-text ${fade ? 'fade-in' : 'fade-out'}`}>
          {curiosities[idx]}
        </p>
      </div>
    </div>
  )
}

export default NewsTicker
