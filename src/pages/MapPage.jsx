import { useLocation } from 'react-router-dom'
import StadiumMap from '../components/StadiumMap'

function MapPage() {
  const location = useLocation()
  const highlight = location.state?.highlight || null

  return (
    <div className="map-page">
      <h1 className="page-title">Estadios del Mundial 2026</h1>
      <p className="page-subtitle">16 sedes en 3 países anfitriones</p>
      <StadiumMap highlightId={highlight} />
    </div>
  )
}

export default MapPage
