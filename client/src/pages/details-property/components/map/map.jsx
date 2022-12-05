import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "../../../../App.css"

export default function MapDetail({ coordinates }) {
  return (
    <>
      {coordinates && (
        <MapContainer style={{borderRadius:"16px"}} zoom={16} minZoom={8} maxZoom={20} center={coordinates}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {coordinates && <Marker position={coordinates} />}
        </MapContainer>
      )}
    </>
  )
}
