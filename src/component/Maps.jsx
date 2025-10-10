import React, { useEffect, useRef } from "react";

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

      const storyPoints = [
        {
          title: "Taj Mahal",
          position: { lat: 27.1751, lng: 78.0421 },
          story:
            "Built in 1632 by Mughal Emperor Shah Jahan, the Taj Mahal is a symbol of eternal love.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        },
        {
          title: "Gateway of India",
          position: { lat: 18.921984, lng: 72.834654 },
          story:
            "The Gateway of India was built in 1924 and stands as a historic monument facing the Arabian Sea.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gateway_of_India_2019.jpg",
        },
        {
          title: "India Gate",
          position: { lat: 28.6129, lng: 77.2295 },
          story:
            "India Gate is a war memorial located in New Delhi, built in memory of soldiers who lost their lives in World War I.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/10/India_Gate_in_New_Delhi_03-2016_img3.jpg",
        },
        {
          title: "Charminar",
          position: { lat: 17.3616, lng: 78.4747 },
          story:
            "Charminar is a 16th-century mosque in Hyderabad, known for its four grand arches and minarets.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/Charminar_Hyderabad_2020.jpg",
        },
      ];

      // Popups
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
            <div style="width: 250px; font-family: Arial; text-align: center;">
              <h3 style="margin-bottom: 5px;">${point.title}</h3>
              <img src="${point.image}" style="width: 100%; border-radius: 8px; margin-bottom: 6px;" />
              <p style="font-size: 14px; color: #333;">${point.story}</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    };

    loadGoogleMaps();

    // Cleanup
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

      {/* Google Map */}
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
