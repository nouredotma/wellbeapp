"use client"

import "mapbox-gl/dist/mapbox-gl.css"
import { useEffect, useState, useRef } from "react"
// import Map, { Marker, Popup } from 'react-map-gl';
import { useLocation } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { EstablishmentCart } from "../components/establishment/EstablishmentCart"
import { getEstablishments } from "../services/establishmentService"
import SimpleMap from "./SimpleMap"

const PostFilterPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const serviceFilter = queryParams.get("establishmentId") || ""
  const locationFilter = queryParams.get("location") || ""

  const [establishments, setEstablishments] = useState([])
  const [selectedEstablishment, setSelectedEstablishment] = useState(null)
  const [loading, setLoading] = useState(true)
  const listRef = useRef(null)
  // const [viewPort, setViewPort] = useState({
  //     latitude: 28.6448,
  //     longitude: 77.216,
  //     zoom: 6,
  // });

  const fetchEstablishments = async () => {
    try {
      setLoading(true)
      const data = await getEstablishments(serviceFilter, locationFilter, "")
      setEstablishments(Array.isArray(data) ? data : [])
      setLoading(false)
    } catch (error) {
      console.error("Error fetching salons:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEstablishments()
  }, [serviceFilter, locationFilter])

  return (
    <Layout>
      {/* Hero Section - Exactly like Coiffeur/Barbier pages but without search box */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              {serviceFilter ? `Résultats pour "${serviceFilter}"` : "Tous les établissements"}
            </h1>
            <p className="text-slate-300 mb-8 text-lg">
              {locationFilter ? `À ${locationFilter}` : "Découvrez les meilleurs établissements près de chez vous"}
            </p>

            {(locationFilter || serviceFilter) && (
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full text-white text-sm">
                {locationFilter && (
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium mr-1">Localisation:</span> {locationFilter}
                  </span>
                )}
                {locationFilter && serviceFilter && <span className="mx-2 h-4 w-px bg-white/30"></span>}
                {serviceFilter && (
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="font-medium mr-1">Service:</span> {serviceFilter}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content - Full width with sticky map */}
      <div className="flex flex-col lg:flex-row">
        {/* Establishments List */}
        <div className="lg:w-1/2 bg-white" ref={listRef}>
          <div className="sticky top-0 z-10 p-4 border-b border-gray-200 bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Établissements disponibles
              {establishments.length > 0 && (
                <span className="ml-2 text-sm text-gray-500">({establishments.length})</span>
              )}
            </h2>
          </div>

          <div className="p-4">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
            ) : establishments.length > 0 ? (
              <ul className="space-y-4">
                {Array.isArray(establishments) && establishments.map((establishment, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <EstablishmentCart
                      establishment={establishment}
                      selectedEstablishment={selectedEstablishment}
                      setSelectedEstablishment={setSelectedEstablishment}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 text-center p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-500 text-lg">Aucun établissement trouvé.</p>
                <p className="text-gray-400 text-sm mt-1">Essayez de modifier vos critères de recherche.</p>
              </div>
            )}
          </div>
        </div>

        {/* Map - Fixed height on mobile, full height on desktop */}
        <div className="lg:w-1/2 h-[50vh] lg:h-[calc(100vh-64px)] lg:sticky lg:top-16">
          <SimpleMap height="100%" className="h-full" />
          {/*
                <Map
                    {...viewPort}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    style={{ width: "100%", height: "100%" }}
                    mapStyle="mapbox://styles/mapbox/streets-v12"
                > */}

          {/* {establishments.map((establishment, index) => (
                        establishment.Location && ( */}
          {/* <Marker 
                                longitude='1.25'
                                latitude='1.256' 
                                anchor="bottom"
                            >
                                <div className="cursor-pointer text-xs rounded px-2 py-1 shadow-md">
                                    {/* {establishment.establishment_label} 
                                    Test
                                </div>
                            </Marker> */}
          {/* ) */}
          {/* ))} */}
          {/* {selectedSalon && (
                        <Popup
                            latitude={selectedSalon.lat}
                            longitude={selectedSalon.lng}
                            onClose={() => setSelectedSalon(null)}
                            closeOnClick={false}
                        >
                            <div className="p-2">
                                <h3 className="font-bold">{selectedSalon.name}</h3>
                                <p>{selectedSalon.address}</p>
                                <p className="text-yellow-500">⭐ {selectedSalon.rating}</p>
                                <button className="mt-2 bg-black text-white px-4 py-2 rounded">Réserver</button>
                            </div>
                        </Popup>
                    )}  */}
          {/* </Map>*/}
        </div>
      </div>
    </Layout>
  )
}

export default PostFilterPage

