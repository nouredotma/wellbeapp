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

  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  if (!token) {
    return (
      <div 
        style={{ width: "100%", height: height }} 
        className={`${className} bg-slate-100 flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400 text-sm`}
      >
        Mode Template : Carte désactivée (Token manquant)
      </div>
    );
  }

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

