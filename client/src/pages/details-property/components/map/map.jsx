import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { useSelector } from "react-redux"
import "../../../../App.css"

export default function MapDetail() {
  const coordinates = useSelector(state => state.detailsOfProperty.coordinates)

  return (
    <>
      {coordinates && (
        <MapContainer zoom={12} maxZoom={20} center={coordinates}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={coordinates} />
        </MapContainer>
      )}
    </>
  )
}
