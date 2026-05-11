"use client"

import "mapbox-gl/dist/mapbox-gl.css"
import { useState } from "react"
import Map from "react-map-gl"

const SimpleMap = ({ height = "400px", className = "" }) => {
  const [viewport, setViewport] = useState({
    latitude: 31.6295,
    longitude: -7.9811,
    zoom: 12,
  })

  return (
    <div style={{ width: "100%", height: height }} className={className}>
      <Map
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onMove={(evt) => setViewport(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
      ></Map>
    </div>
  )
}

export default SimpleMap

