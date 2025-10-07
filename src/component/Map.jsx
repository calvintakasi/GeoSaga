import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const mapContainerStyle = { width: "100%", height: "500px" };
  const center = { lat: 25.5941, lng: 85.1376 }; // Patna

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
