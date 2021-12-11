import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import * as S from './styles'

type Vessel = {
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

const vesselMock = {
  complete: '73.75%',
  country: 'Eritrea',
  from: 'Madagascar',
  id: '8269764b-1bb5-4948-be08-0fc56f439e08',
  latitude: 31.32217553803138,
  longitude: 32.239130538031375,
  name: 'Chang-Fisher',
  size: 214,
  speed: '25 MPH',
  to: 'Libyan Arab Jamahiriya',
  type: 'tanker'
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

const Map = ({ vessels = [vesselMock] }: MapProps) => {
  return (
    <S.MapWrapper>
      <MapContainer
        center={[31.322175227733798, 32.239130227733796]}
        zoom={5}
        minZoom={3}
        maxBounds={[
          [-180, 80],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <CustomTileLayer />

        {vessels?.map(({ id, latitude, longitude, name }) => {
          return (
            <Marker
              key={`vessel-${id}`}
              position={[latitude, longitude]}
              title={name}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
