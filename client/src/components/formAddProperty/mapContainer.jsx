import { useMap, MapContainer, TileLayer } from "react-leaflet"
import { useEffect, useState } from "react"
import "../../App.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import icon from "../../utilities/iconMapForm"
import { useDispatch } from "react-redux"
import { actionSetCoordinates } from "../../redux/actions"

export default function MapForm() {
  return (
    <>
      <MapContainer
        zoom={4}
        minZoom={4}
        maxZoom={20}
        center={[-25.0444, -63.394]}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LeafletControlGeocoder />
      </MapContainer>
    </>
  )
}

function LeafletControlGeocoder() {
  const map = useMap()
  const dispatch = useDispatch()
  const [coordenadas, setCoordenadas] = useState({})
  useEffect(() => {
    dispatch(actionSetCoordinates([coordenadas.lat, coordenadas.lng]))
  }, [coordenadas])

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim()
    if (typeof URLSearchParams !== "undefined" && location.search) {
      // parse /?geocoder=nominatim from URL
      let params = new URLSearchParams(location.search)
      let geocoderString = params.get("geocoder")
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]()
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString)
      }
    }

    L.Control.geocoder({
      query: "",
      placeholder: "Search here...",
      defaultMarkGeocode: false,
      geocoder,
    })
      .on("markgeocode", function (e) {
        let latlng = e.geocode.center
        setCoordenadas(latlng)
        console.log(coordenadas)
        console.log(latlng)
        L.marker(latlng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup()
        map.fitBounds(e.geocode.bbox)
      })
      .addTo(map)
  }, [])

  return null
}
