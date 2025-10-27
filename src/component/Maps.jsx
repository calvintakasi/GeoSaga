import React, { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import storyPoints from "../data/storyPoints";
import Popup from "./Popup";

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

      const styledMapType = new window.google.maps.StyledMapType(
        [
          { elementType: "geometry", stylers: [{ color: "#f2efe9" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#333333" }] },
          { featureType: "water", stylers: [{ color: "#aee0f4" }] },
          { featureType: "landscape.natural", stylers: [{ color: "#e2f0cb" }] },
          { featureType: "road", stylers: [{ color: "#f8d49d" }] },
          { featureType: "poi.park", stylers: [{ color: "#b8e986" }] },
        ],
        { name: "Cartoon" }
      );

      map.mapTypes.set("cartoon", styledMapType);
      map.setMapTypeId("cartoon");

      storyPoints.forEach((point) => {
        const marker = new window.google.maps.Marker({
          position: point.position,
          map,
          title: point.title,
          icon: {
            url: "https://maps.google.com/mapfiles/kml/paddle/red-circle.png",
            scaledSize: new window.google.maps.Size(45, 45),
          },
        });

        // Render React component to HTML string
        const contentString = ReactDOMServer.renderToString(
          <Popup title={point.title} image={point.image} story={point.story} />
        );

        const infoWindow = new window.google.maps.InfoWindow({
          content: contentString,
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
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
      style={{
        background: "linear-gradient(to bottom, #aee0f4 0%, #f2efe9 100%)",
        fontFamily: "'Comic Neue', 'Poppins', cursive",
      }}
    >
      <section id="map-section" className="relative py-20 text-center">
        <h2 className="text-4xl font-bold text-[#ff7f50] mb-6">
          🌍 Explore the Map
        </h2>
        <p className="text-lg text-[#444] mb-10 max-w-3xl mx-auto">
          Click on any landmark to reveal its story and image.
          <br />
          Discover historical facts, hidden tales, and more as you explore.
        </p>
      </section>

      <div
        ref={mapRef}
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "750px",
          borderRadius: "25px",
          border: "5px solid #333",
          boxShadow: "10px 10px 0 #333",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

export default Maps;
