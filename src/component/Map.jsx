import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  useEffect(() => {
    const map = L.map("map").setView([25.5941, 85.1376], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Add marker
    L.marker([25.5941, 85.1376])
      .addTo(map)
      .bindPopup("Hello from Patna!")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "850px", width: "100%" }}></div>;
}

export default Map;
