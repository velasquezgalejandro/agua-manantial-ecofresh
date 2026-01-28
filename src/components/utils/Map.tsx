import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import L from 'leaflet'
import { MapPin } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'

const center: LatLngExpression = [3.4433, -76.5272]
const jamundi: LatLngExpression = [3.2613, -76.5423]
const cali: LatLngExpression = [3.4433, -76.5272]
const yumbo: LatLngExpression = [3.5826, -76.4925]
const palmira: LatLngExpression = [3.5345, -76.2986]

const markerStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  backgroundColor: '#2563eb',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid white',
  boxShadow: '0 4px 10px rgba(0,0,0,0.35)',
}

const lucideMarkerIcon = L.divIcon({
  className: '',
  html: renderToStaticMarkup(
    <div style={markerStyle}>
      <MapPin size={18} color="white" />
    </div>
  ),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})


export const Map = () => {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={jamundi} icon={lucideMarkerIcon} />
      <Marker position={cali} icon={lucideMarkerIcon} />
      <Marker position={yumbo} icon={lucideMarkerIcon} />
      <Marker position={palmira} icon={lucideMarkerIcon} />
    </MapContainer>
  )
}
