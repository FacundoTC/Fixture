import { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { stadiums, hostCountries } from '../data/worldcup2026'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const stadiumIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker2x-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const countryIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function MapBounds() {
  const map = useMap()
  useMemo(() => {
    const bounds = L.latLngBounds(
      [14.5, -130],  // SW
      [52, -60]      // NE
    )
    map.fitBounds(bounds, { padding: [30, 30] })
  }, [map])
  return null
}

function StadiumMap({ highlightId }) {
  return (
    <div className="map-container">
      <MapContainer center={[39, -100]} zoom={4} className="map-leaflet" scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBounds />

        {hostCountries.map(c => (
          <Marker key={c.code} position={[c.lat, c.lng]} icon={countryIcon}>
            <Popup>
              <strong>{c.flag} {c.name}</strong><br />País anfitrión
            </Popup>
          </Marker>
        ))}

        {stadiums.map(s => (
          <Marker key={s.id} position={[s.lat, s.lng]} icon={stadiumIcon}>
            <Popup>
              <strong>{s.name}</strong><br />
              {s.city}, {s.country}<br />
              Capacidad: {s.capacity.toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default StadiumMap
