import React, { useState } from "react";
import { motion } from "framer-motion";

const formations = {
  default: [[1], [4], [4], [2]], // GK, DEF, MID, ATT
  attack: [[1], [3], [4], [3]],
  defend: [[1], [5], [4], [1]],
};

const formationNumbers = {
  default: "4-4-2",
  attack: "3-4-3",
  defend: "5-4-1",
};

const backgroundImageStyle = {
  backgroundImage: `url('/pick.png')`, // Replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 0.5s ease-in-out',
};

const FormationField = ({ formation }) => {
  const layout = formations[formation];

  return (
    <div
      className="w-full max-w-xl h-[400px] rounded-xl p-4 flex flex-col justify-between border-4 border-white shadow-inner"
      style={{ ...backgroundImageStyle, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Optional: Dark overlay
    >
      {layout.map((line, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-3">
          {Array.from({ length: line[0] }).map((_, i) => (
            <motion.div
              key={i}
              layout
              transition={{ duration: 0.5, type: "spring" }}
              className="w-10 h-10 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center font-semibold text-gray-800 shadow-md"
            >
              {rowIndex * 4 + i + 1}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const [formation, setFormation] = useState("default");
  const [selectedFormationNumber, setSelectedFormationNumber] = useState(null);

  const handleFormation = (type) => {
    setFormation(type);
    setSelectedFormationNumber(formationNumbers[type]);
  };

  return (
    <>
    <section className="bg-gray-100 py-10 ">
      <h1 className="pt-10 text-4xl font-extrabold text-center text-blue-900 mb-10 uppercase tracking-wide">
        About Bo Rangers FC
      </h1>

      <div id="about" className="flex flex-col md:flex-row px-6 md:px-16 gap-10 max-w-screen-xl mx-auto">
        {/* Left Section - Club History */}
        <div className="md:w-7/12 space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">🏆 Club History</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Bo Rangers Football Club, founded in the heart of Sierra Leone, has grown into a powerhouse of skill, resilience, and community pride. With decades of legacy, the team symbolizes unity and ambition in every match played.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our journey from humble beginnings to national prominence is filled with unforgettable moments, legendary players, and unmatched support from the people of Bo and beyond.
          </p>
        </div>

        {/* Right Section - Club Formation Animation */}
        <div className="md:w-5/12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">⚙️ Club Formation</h2>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            {["default", "attack", "defend"].map((type) => (
              <div className="flex flex-col items-center" key={type}>
                <button
                  onClick={() => handleFormation(type)}
                  className={`${
                    type === "default"
                      ? "bg-blue-700 hover:bg-blue-900"
                      : type === "attack"
                      ? "bg-green-700 hover:bg-green-900"
                      : "bg-red-700 hover:bg-red-900"
                  } text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
                {selectedFormationNumber === formationNumbers[type] && (
                  <span className="text-sm text-gray-600 mt-1">
                    {formationNumbers[type]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Formation Field */}
          <FormationField formation={formation} />
        </div>
      </div>
    </section>
    </>
  );
};


export default About;
