import {
  MapContainer,
  Popup,
  TileLayer,
  Marker,
  MapConsumer
} from 'react-leaflet'

import L from 'leaflet'

import * as S from './styles'

import { mapView } from './config'

export type Vessel = {
  complete: string
  country: string
  from: string
  id: string
  latitude: number
  longitude: number
  name: string
  size: number
  speed: string
  to: string
  type: string
}

export type MapProps = {
  vessels?: Vessel[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ vessels = [] }: MapProps) => {
  const isOneVessel = vessels.length === 1
  const [firstVessel] = vessels

  return (
    <S.MapWrapper>
      <MapContainer
        center={mapView.center}
        zoom={mapView.zoom}
        minZoom={3}
        maxBounds={mapView.maxBounds}
        style={{ height: '100%', width: '100%' }}
        doubleClickZoom
        tap={false}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(2)
            }

            if (isOneVessel) {
              map.panTo(
                new L.LatLng(firstVessel.latitude, firstVessel.longitude)
              )
            }

            map.addEventListener('dragend', () => {
              mapView.setView(map.getCenter())
            })
            map.addEventListener('zoomend', () => {
              mapView.setView(map.getCenter(), map.getZoom())
            })

            return null
          }}
        </MapConsumer>
        <CustomTileLayer />

        {vessels?.map(
          ({
            id,
            latitude,
            longitude,
            name,
            country,
            complete,
            from,
            to,
            speed
          }) => {
            return (
              <Marker
                icon={L.icon({
                  iconUrl: 'img/marker.png',
                  iconSize: new L.Point(55, 55),
                  iconAnchor: new L.Point(26, 0)
                })}
                key={`vessel-${id}`}
                position={[latitude, longitude]}
                title={name}
              >
                <Popup>
                  Name: {name} <br />
                  Country: {country} <br />
                  From: {from} <br />
                  To: {to} <br />
                  Speed: {speed} <br />
                  Complete: {complete} <br />
                  Position: <br />
                  Latitude: {latitude} <br />
                  Longitude: {longitude}
                </Popup>
              </Marker>
            )
          }
        )}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
