import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Popup() {
  const [selectedCategory, setSelectedCategory] = useState("historical");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = {
    historical: {
      name: "Historical Events",
      color: "#fce38a",
      stories: [
        {
          title: "The Moon Landing",
          image:
            "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&h=300&fit=crop",
          story:
            "On July 20, 1969, Neil Armstrong became the first human to set foot on the moon, marking one of humanity's greatest achievements.",
        },
        {
          title: "Fall of Berlin Wall",
          image:
            "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=400&h=300&fit=crop",
          story:
            "In 1989, the Berlin Wall fell, symbolizing the end of the Cold War and reuniting families separated for decades.",
        },
        {
          title: "First Flight",
          image:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
          story:
            "The Wright Brothers achieved the first powered flight in 1903, forever changing the course of human transportation.",
        },
      ],
    },
    nature: {
      name: "Natural Wonders",
      color: "#a8e6cf",
      stories: [
        {
          title: "Northern Lights",
          image:
            "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=400&h=300&fit=crop",
          story:
            "The Aurora Borealis dances across Arctic skies, a magical display of light caused by solar particles colliding with Earth's atmosphere.",
        },
        {
          title: "Great Barrier Reef",
          image:
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=300&fit=crop",
          story:
            "Stretching over 2,300 kilometers, this underwater paradise hosts thousands of marine species in a vibrant coral ecosystem.",
        },
        {
          title: "Amazon Rainforest",
          image:
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
          story:
            "The lungs of our planet, producing 20% of the world’s oxygen and hosting incredible biodiversity in its lush canopy.",
        },
      ],
    },
    innovation: {
      name: "Great Innovations",
      color: "#ffd3b6",
      stories: [
        {
          title: "The Internet",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
          story:
            "From a military project to connecting billions worldwide, the internet revolutionized how we communicate and share information.",
        },
        {
          title: "Printing Press",
          image:
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=300&fit=crop",
          story:
            "Gutenberg’s invention in 1440 democratized knowledge, making books accessible and sparking the Renaissance.",
        },
        {
          title: "Penicillin Discovery",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
          story:
            "Alexander Fleming’s accidental discovery in 1928 saved millions of lives and launched the age of antibiotics.",
        },
      ],
    },
    culture: {
      name: "Cultural Moments",
      color: "#ffaaa5",
      stories: [
        {
          title: "Woodstock Festival",
          image:
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
          story:
            "In 1969, half a million people gathered for three days of peace and music, defining a generation’s spirit of unity.",
        },
        {
          title: "First Olympic Games",
          image:
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
          story:
            "Ancient Greece created the Olympics in 776 BCE, a tradition of athletic excellence that continues to unite the world.",
        },
        {
          title: "Taj Mahal",
          image:
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
          story:
            "Built by Emperor Shah Jahan as a monument to love, this marble masterpiece took 22 years and 20,000 workers to complete.",
        },
      ],
    },
  };

  const currentCategory = categories[selectedCategory];
  const currentStory = currentCategory.stories[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentCategory.stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + currentCategory.stories.length) %
        currentCategory.stories.length
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Comic Neue', 'Poppins', cursive",
      }}
    >
      <div style={{ maxWidth: "500px", width: "100%" }}>
        {/* Category Buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                border:
                  selectedCategory === key
                    ? "3px solid #333"
                    : "3px solid transparent",
                background: cat.color,
                color: "#333",
                fontWeight: "700",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: selectedCategory === key ? "3px 3px 0 #333" : "none",
                transform:
                  selectedCategory === key ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Story Card */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              margin: "0 auto",
              textAlign: "center",
              borderRadius: "20px",
              border: "3px solid #333",
              background: "#fffbe6",
              boxShadow: "5px 5px 0 #333",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                background: currentCategory.color,
                padding: "15px",
                borderBottom: "3px solid #333",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  margin: "0",
                  color: "#333",
                  fontWeight: "700",
                }}
              >
                {currentStory.title}
              </h3>
            </div>

            <img
              src={currentStory.image}
              alt={currentStory.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderBottom: "3px solid #333",
              }}
            />

            <p
              style={{
                padding: "20px",
                fontSize: "16px",
                color: "#333",
                lineHeight: "1.6",
                margin: "0",
                minHeight: "120px",
              }}
            >
              {currentStory.story}
            </p>

            {/* Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                padding: "15px",
                borderTop: "2px dashed #333",
              }}
            >
              {currentCategory.stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid #333",
                    background: idx === currentIndex ? "#333" : "transparent",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Speech Bubble Tail */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "30px",
                width: "0",
                height: "0",
                borderTop: "20px solid #fffbe6",
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                transform: "rotate(15deg)",
              }}
            ></div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "3px solid #333",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "3px 3px 0 #333",
            }}
          >
            <ChevronLeft size={24} color="#333" />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "3px solid #333",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "3px 3px 0 #333",
            }}
          >
            <ChevronRight size={24} color="#333" />
          </button>
        </div>

        {/* Counter */}
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {currentIndex + 1} / {currentCategory.stories.length}
        </div>
      </div>
    </div>
  );
}
