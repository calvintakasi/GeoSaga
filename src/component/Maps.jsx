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

      const styledMapType = new window.google.maps.StyledMapType(
        [
          {
            elementType: "geometry",
            stylers: [{ color: "#f2efe9" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "water",
            stylers: [{ color: "#aee0f4" }],
          },
          {
            featureType: "landscape.natural",
            stylers: [{ color: "#e2f0cb" }],
          },
          {
            featureType: "road",
            stylers: [{ color: "#f8d49d" }],
          },
          {
            featureType: "poi.park",
            stylers: [{ color: "#b8e986" }],
          },
        ],
        { name: "Cartoon" }
      );

      map.mapTypes.set("cartoon", styledMapType);
      map.setMapTypeId("cartoon");

      // cartoon markers
      storyPoints.forEach((point) => {
        const marker = new window.google.maps.Marker({
          position: point.position,
          map,
          title: point.title,
          icon: {
            url: "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png",
            scaledSize: new window.google.maps.Size(45, 45),
          },
        });

        // cartoon-styled popup
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
          <div style="
            width: 340px;
            font-family: 'Comic Neue', 'Poppins', cursive;
            text-align: center;
            border-radius: 20px;
            border: 3px solid #333;
            background: #fffbe6;
            box-shadow: 5px 5px 0 #333;
            overflow: hidden;
            position: relative;
          ">
            <div style="background:#fce38a; padding: 10px;">
              <h3 style="font-size:22px; margin:0; color:#333; font-weight:700;">
                ${point.title}
              </h3>
            </div>
            <img src="${point.image}" style="width:100%;height:180px;object-fit:cover;border-bottom:3px solid #333;"/>
            <p style="padding:12px 16px;font-size:15px;color:#333;line-height:1.5;margin:0;">
              ${point.story}
            </p>
            <div style="position:absolute;bottom:-20px;left:30px;width:0;height:0;
                border-top:20px solid #fffbe6;
                border-left:20px solid transparent;
                border-right:20px solid transparent;
                transform:rotate(15deg);"></div>
          </div>`,
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
      {/* Header */}
      <div className="text-center mb-8">
        <h2
          className="text-5xl font-bold mb-3"
          style={{
            color: "#333",
            textShadow: "3px 3px 0 #fff, 5px 5px 0 #333",
          }}
        >
          🌍 Storytelling Map
        </h2>
        <p
          className="text-lg font-semibold"
          style={{ color: "#444", maxWidth: "600px", margin: "0 auto" }}
        >
          Discover India's famous landmarks in a fun, cartoon world filled with
          stories and adventures!
        </p>
      </div>

      {/* Google Map */}
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
