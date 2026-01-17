import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'

const center: LatLngExpression = [4.711, -74.072]

export const Map = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={center}>
        <Popup>
          Hola 👋 <br /> Este es un marcador en Bogotá
        </Popup>
      </Marker>
    </MapContainer>
  )
}
