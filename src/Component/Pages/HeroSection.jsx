import React from "react";
import Navbar from "../Navigation/Navbar";

const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <section id="home"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/Bo-Rangers.jpeg')" }} // replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 animate-fadeIn">
          Welcome to Bo Rangers Fc
        </h1>
        <p className="text-lg md:text-2xl font-light mb-6 animate-fadeIn delay-200">
         Motto : Always in the Range
        </p>
        <a
          href="#team"
          className="bg-blue-700 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 animate-fadeIn delay-400"
        >
          Meet the Team
        </a>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
