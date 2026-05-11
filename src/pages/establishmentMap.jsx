import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

const API_URL = "https://wellbe-api.onrender.com/api/v1/establishment";

const SimpleMap = () => {
    const [viewport, setViewport] = useState({
        latitude: 31.6295,
        longitude: -7.9811,
        zoom: 12,
    });

    const [establishments, setEstablishments] = useState([]);
    const [selectedEstablishment, setSelectedEstablishment] = useState(null);

    // Fetch Establishments from API
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Data:", data);
                setEstablishments(data);
            })
            .catch((error) => console.error("Error fetching establishments:", error));
    }, []);

    // Function to open Google Maps Directions
    const openGoogleMapsDirections = () => {
        if (!selectedEstablishment) return;
        const { location_latitude, location_longitude } = selectedEstablishment.Location;
        const url = `https://www.google.com/maps/dir/?api=1&destination=${parseFloat(location_latitude)},${parseFloat(location_longitude)}`;
        window.open(url, "_blank"); // Open Google Maps in a new tab
    };

    return (
        <div style={{ width: "100%", height: "500px", position: "relative" }}>
            <Map
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                onMove={(evt) => setViewport(evt.viewState)}
                onClick={() => {
                    if (selectedEstablishment) {
                        console.log("Map clicked, opening Google Maps");
                        openGoogleMapsDirections(); // Open Google Maps when clicking on the map
                    }
                }}
            >
                {establishments.map((establishment) => {
                    const lat = parseFloat(establishment.Location.location_latitude);
                    const lng = parseFloat(establishment.Location.location_longitude);

                    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
                        console.error(`Skipping invalid location for ${establishment.establishment_label}:`, lat, lng);
                        return null;
                    }

                    return (
                        <Marker key={establishment.establishment_uuid} latitude={lat} longitude={lng}>
                            <div
                                style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent click from reaching the map
                                    console.log("Marker clicked:", establishment.establishment_label);
                                    setSelectedEstablishment(establishment);
                                }}
                            >
                                📍
                            </div>
                        </Marker>
                    );
                })}
            </Map>
        </div>
    );
};

export default SimpleMap;
