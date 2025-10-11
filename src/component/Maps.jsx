import React, { useEffect, useRef } from "react";
import storyPoints from "../data/storyPoints";

function Maps() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 25.5941, lng: 85.1376 },
        zoom: 5,
        mapId: "DEMO_MAP_ID",
      });

      storyPoints.forEach((point) => {
        const marker = new window.google.maps.Marker({
          position: point.position,
          map,
          title: point.title,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="
              width: 340px;
              font-family: 'Poppins', Arial, sans-serif;
              text-align: center;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.15);
              background: #fff;
            ">
              <div style="position: relative; width: 100%; height: 220px; overflow: hidden;">
                <div class="carousel" style="display: flex; transition: transform 0.5s ease;">
                  <img src="${point.image}" style="width: 100%; object-fit: cover;" />
                </div>
              </div>
              <div style="padding: 12px 16px;">
                <h3 style="margin-bottom: 8px; font-size: 20px; font-weight: 600; color: #222;">
                  ${point.title}
                </h3>
                <p style="font-size: 15px; color: #555; line-height: 1.5;">
                  ${point.story}
                </p>
              </div>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    };

    loadGoogleMaps();

    return () => {
      if (window.google && window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div className="text-center my-6 px-4">
      <h2 className="text-3xl font-bold mb-2 text-gray-800">
        Storytelling Map
      </h2>
      <p className="text-gray-600 mb-6 text-lg">
        Explore the world through stories pinned across every location.
      </p>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "850px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}

export default Maps;
