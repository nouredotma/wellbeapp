import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ center = [2.3522, 48.8566], zoom = 12 }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!mapboxgl.accessToken) {
            setError("Mapbox token is missing. Check your .env file.");
            return;
        }

        if (map.current) return; // Prevent multiple initializations

        try {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: center, // Dynamic center
                zoom: zoom, // Dynamic zoom
            });

            // Add navigation controls (zoom in/out)
            map.current.addControl(
                new mapboxgl.NavigationControl(),
                "top-right"
            );
        } catch (err) {
            console.error("Error loading Mapbox:", err);
            setError("Failed to load the map. Please try again later.");
        }

        return () => map.current?.remove(); // Cleanup on unmount
    }, [center, zoom]);

    return (
        <div>
            {error ? (
                <div className="text-red-500 text-center p-4">{error}</div>
            ) : (
                <div
                    ref={mapContainer}
                    className="w-full h-[500px] rounded-md shadow-lg"
                />
            )}
        </div>
    );
};

export default MapComponent;
