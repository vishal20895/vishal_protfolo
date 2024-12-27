import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 transition-colors duration-300 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img
            src="Vishal1.jpg"
            alt="Illustration"
            className="w-full h-full rounded-lg shadow-lg shadow-amber-100 dark:shadow-gray-800"
          /> */}
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a passionate Software Developer with over 3 years of experience in both software development and testing. I specialize in creating visually appealing, user-friendly web applications with clean, efficient, and scalable code. My expertise spans the full Software Development Lifecycle (SDLC), from requirement analysis and documentation creation to coding, testing (including the development and implementation of test cases), and ongoing maintenance.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I have a proven track record in optimizing code to enhance system efficiency and effectiveness. With a solid background in HTML, CSS, JavaScript, React, SvelteKit, Node.js, and various testing methodologies, I am committed to continuous learning and always staying updated with the latest technologies. I am also passionate about exploring emerging design concepts, reading tech blogs, and working on side projects to enhance my skills and stay ahead in the industry.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Beyond coding, I enjoy exploring emerging design concepts, reading tech blogs, and developing side projects to experiment with new ideas and hone my skills.
          </p>
          <div className="flex space-x-6 mt-8 justify-center">
            <FaHtml5 className="text-4xl text-orange-500 hover:text-orange-600 transition duration-300" />
            <FaCss3Alt className="text-4xl text-blue-500 hover:text-blue-600 transition duration-300" />
            <FaJs className="text-4xl text-yellow-500 hover:text-yellow-600 transition duration-300" />
            <FaReact className="text-4xl text-blue-400 hover:text-blue-500 transition duration-300" />
            <FaNodeJs className="text-4xl text-green-500 hover:text-green-600 transition duration-300" />
            <SiSvelte className="text-4xl text-orange-600 hover:text-orange-700 transition duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
  