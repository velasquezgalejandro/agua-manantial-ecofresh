import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'

const center: LatLngExpression = [3.4433, -76.5272]
const jamundi: LatLngExpression = [3.2613, -76.5423]
const cali: LatLngExpression = [3.4433, -76.5272]
const yumbo: LatLngExpression = [3.5826, -76.4925]
const palmira: LatLngExpression = [3.5345, -76.2986]

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

      <Marker position={jamundi} />
      <Marker position={cali} />
      <Marker position={yumbo} />
      <Marker position={palmira} />
    </MapContainer>
  )
}
