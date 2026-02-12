import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import type { LatLngExpression, Map as LeafletMap } from 'leaflet'
import L, { map } from 'leaflet'
import { MapPin } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'
import { locations } from '~constants/constantsBase'
import { useEffect, useRef } from 'react'

const center: LatLngExpression = [3.4433, -76.5272]

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

const markerSelectStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  backgroundColor: '#ff0000',
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
    </div>,
  ),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

const lucideSelectMarkerIcon = L.divIcon({
  className: '',
  html: renderToStaticMarkup(
    <div style={markerSelectStyle}>
      <MapPin size={18} color="white" />
    </div>,
  ),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

export const Map = ({ selectId }: { selectId: number | null }) => {
  const mapRef = useRef<LeafletMap | null>(null)
  useEffect(() => {
    if (mapRef.current && selectId !== null) {
      mapRef.current.flyTo(
        locations.find((loc) => loc.id === selectId)
          ?.coordenadas as LatLngExpression,
        12,
        { duration: 1 },
      )
    }
  }, [selectId])

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: 1, width: '100%', minHeight: 500 }}
      whenReady={(map) => {
        mapRef.current = map.target
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => {
        const { id, coordenadas } = location
        return (
          <Marker
            key={id}
            position={coordenadas as LatLngExpression}
            icon={id === selectId ? lucideSelectMarkerIcon : lucideMarkerIcon}
          />
        )
      })}
    </MapContainer>
  )
}
