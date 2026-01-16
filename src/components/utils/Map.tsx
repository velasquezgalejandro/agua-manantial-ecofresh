import { MapContainer } from 'react-leaflet'
// import type { LatLngExpression } from 'leaflet'

// const center: LatLngExpression = [4.711, -74.072]

export const Map = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      //   className="h-[400px] w-full rounded-xl"
      sx={{ height: 400, width: '100%', borderRadius: '16px' }}
    >
      {/* <TileLayer
    //     attribution="&copy; OpenStreetMap contributors"
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />

    //   <Marker position={center}>
    //     <Popup>
    //       Bogotá <br /> Centro
    //     </Popup>
    //   </Marker> */}
    </MapContainer>
  )
}
