import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import TypingEffect from "react-typing-effect";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white dark:text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Hi, I'm <span className="block text-yellow-300">Vishal Mane</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            <TypingEffect
              text={[
                "A Software Developer",
                "A Creative Thinker",
                "A Problem Solver",
              ]}
              speed={120}
              eraseDelay={2500}
              className="text-yellow-300"
            />
          </h2>
          <p className="max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl mb-8 opacity-90">
            Passionate about building meaningful digital experiences, solving
            problems, and creating innovative solutions. Welcome to my world of
            code and creativity!
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <button
            
            onClick={()=>{
              window.open("https://www.instagram.com/vishalmane20")} 
            } 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-yellow-500 p-4 rounded-full hover:scale-110 transition transform duration-300 shadow-lg"
            >
              <FaInstagram size={28} />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/public-profile/settings",
                  "_blank"
                )
              }
              className="text-white bg-blue-500 p-4 rounded-full hover:scale-110 transition transform duration-300 shadow-lg"
            >
              <FaLinkedinIn size={28} />
            </button>
            {/* <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-purple-600 p-4 rounded-full hover:scale-110 transition transform duration-300 shadow-lg"
            >
              <FaFacebookF size={28} />
            </a> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute -top-10 inset-x-0 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-full -z-10 shadow-xl"></div>
            <img
              src="/Vishal1.jpg" // Replace with the actual path to your image
              alt="Vishal Mane"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              style={{
                objectPosition: "center top", // Center the face within the circle
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
