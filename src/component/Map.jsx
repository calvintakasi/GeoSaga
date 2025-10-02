import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  useEffect(() => {
    // Initialize map (Patna)
    const map = L.map("map").setView([25.5941, 85.1376], 5);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Example data for multiple locations
    const locations = [
      {
        coords: [25.5941, 85.1376],
        title: "Patna",
        desc: "The capital city of Bihar, full of history and culture.",
        img: "https://mahavirmandirpatna.org/images/coreimg/Mahavir%20Mandir%20Patna.jpg",
        story:
          "Patna has been a center of learning and culture since ancient times.",
      },
      {
        coords: [28.6139, 77.209],
        title: "Delhi",
        desc: "The capital of India, vibrant and historic.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Fort_in_Delhi_03-2016_img3.jpg/1200px-Red_Fort_in_Delhi_03-2016_img3.jpg",
        story: "Delhi is a melting pot of culture, politics, and cuisine.",
      },
      {
        coords: [28.2096, 83.9856],
        title: "Pokhara",
        desc: "A beautiful city in Nepal known for lakes and mountain views.",
        img: "https://www.acethehimalaya.com/wp-content/uploads/2024/02/things-to-do-in-pokhara.jpg.webp",
        story:
          "Pokhara is famous for Phewa Lake, adventure sports, and the stunning Annapurna mountain range.",
      },
    ];

    locations.forEach((loc) => {
      const popupContent = `
        <div class="max-w-md p-2">
          <img class="w-full h-32 object-cover rounded-md mb-2" src="${loc.img}" alt="${loc.title}" />
          <h2 class="text-lg font-bold text-gray-800">${loc.title}</h2>
          <p class="text-gray-600 mb-2">${loc.desc}</p>
          <hr class="my-2"/>
          <h3 class="font-semibold text-gray-700">Story:</h3>
          <p class="text-gray-600 text-sm">${loc.story}</p>
        </div>
      `;

      L.marker(loc.coords).addTo(map).bindPopup(popupContent);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="h-screen w-full"></div>;
}

export default Map;
