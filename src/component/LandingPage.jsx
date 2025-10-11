import React from "react";
import { motion } from "framer-motion";
import Maps from "./Maps";

const LandingPage = () => {
  return (
    <div className="font-['Baloo_2'] text-gray-800 overflow-x-hidden bg-gradient-to-b from-[#fff6e9] via-[#fdf0d5] to-[#dff8ff]">
      {/* 🌟 Hero Section */}
      <section className="h-[100vh] flex flex-col justify-center items-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-[#ff7f50] drop-shadow-[2px_2px_0_#222]"
        >
          StoryWorld 🌎
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-[#333] max-w-2xl"
        >
          Discover real-world places through cartoon stories and magical
          moments.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-[#ff7f50] hover:bg-[#ff5722] text-white rounded-full text-lg shadow-md transition"
          onClick={() =>
            document
              .getElementById("map-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Start Exploring 🚀
        </motion.button>

        {/* Floating clouds background */}
        <img
          src="https://png.pngtree.com/png-clipart/20230909/original/pngtree-white-cartoon-cloud-png-image_11100104.png"
          alt="cloud"
          className="absolute top-10 left-10 w-32 opacity-30 animate-bounce"
        />
        <img
          src="https://png.pngtree.com/png-clipart/20230909/original/pngtree-white-cartoon-cloud-png-image_11100104.png"
          alt="cloud"
          className="absolute top-20 right-16 w-40 opacity-40 animate-bounce"
        />
      </section>

      {/* 💡 About Section */}
      <section className="py-20 px-6 text-center bg-[#fff0d5]">
        <h2 className="text-4xl font-bold text-[#ff7f50] mb-6 drop-shadow-[1px_1px_0_#fff]">
          What is StoryWorld?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-[#444]">
          StoryWorld is an interactive storytelling map that blends geography
          with imagination. Explore landmarks, click on cartoonized markers, and
          reveal the stories behind each place — from history to hidden legends!
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { emoji: "🗺️", text: "Interactive Map" },
            { emoji: "📖", text: "Short Fun Stories" },
            { emoji: "🎨", text: "Cartoon-Style Design" },
            { emoji: "✨", text: "Smooth Animations" },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 w-64 border-2 border-[#ffdab9]"
            >
              <div className="text-4xl mb-3">{f.emoji}</div>
              <h3 className="text-lg font-semibold">{f.text}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧭 How It Works Section */}
      <section className="py-24 px-6 bg-[#fff8e1] text-center">
        <h2 className="text-4xl font-bold text-[#ff7f50] mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
          {[
            {
              step: "1️⃣",
              text: "Scroll down to the map and start exploring locations.",
            },
            {
              step: "2️⃣",
              text: "Click on a landmark to open its cartoon popup story.",
            },
            {
              step: "3️⃣",
              text: "Read, learn, and share fun stories with your friends!",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-[#ffdab9] shadow-md rounded-3xl p-6 w-80"
            >
              <div className="text-5xl mb-4">{s.step}</div>
              <p className="text-lg text-[#555]">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section
        id="map-section"
        className="relative py-20 bg-[#d6f5ff] text-center"
      >
        <h2 className="text-4xl font-bold text-[#ff7f50] mb-6">
          🌍 Explore the Map
        </h2>
        <p className="text-lg text-[#444] mb-10 max-w-3xl mx-auto">
          Click on any landmark to reveal its story and image — all in a
          beautiful cartoonized popup.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
