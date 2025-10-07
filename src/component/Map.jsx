import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const mapContainerStyle = {
    width: "100%",
    height: "850px",
    borderRadius: "12px",
  };
  const center = { lat: 25.5941, lng: 85.1376 }; // Patna

  return (
    <div className="text-center my-6">
      {/* 🗺️ Heading */}
      <h2 className="text-3xl font-bold mb-2 text-gray-800">
        Storytelling Map
      </h2>

      {/* ✨ Tagline */}
      <p className="text-gray-600 mb-6 text-lg">
        Explore the world through stories pinned across every location.
      </p>

      {/* 📍 Google Map */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
