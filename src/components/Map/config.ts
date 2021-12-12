import { LatLngExpression, LatLngBoundsExpression } from 'leaflet'

export type MapView = {
  center: LatLngExpression
  zoom: number
  maxBounds: LatLngBoundsExpression
  setView(center: LatLngExpression, zoom?: number): void
}

export const mapView: MapView = {
  center: [0, 0],
  zoom: 3,
  maxBounds: [
    [-180, 180],
    [180, -180]
  ],
  setView(center: LatLngExpression, zoom?: number) {
    this.center = center
    if (zoom) {
      this.zoom = zoom
    }
  }
}
