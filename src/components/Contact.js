import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-400">Vishal Mane</h2>
            <p className="text-sm mt-2 font-medium text-gray-400">Web Developer & Software Engineer</p>
          </div>
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
            <p className="text-lg font-semibold text-teal-300">Contact Information</p>
            <p className="text-sm mt-2">Mobile: <a href="tel:+9404610590" className="text-blue-400 hover:text-blue-600">+91 94046 10590</a></p>
            <p className="text-sm mt-2">Email: <a href="mailto:vishal20895@gmail.com" className="text-blue-400 hover:text-blue-600">vishal20895@gmail.com</a></p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-lg font-semibold text-teal-300">Follow Me</p>
            <div className="flex space-x-6 mt-2 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/vishal-mane-12345" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
                LinkedIn
              </a>
              <a href="https://twitter.com/vishalmane" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
                Twitter
              </a>
              <a href="https://github.com/vishalmane" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vishal Mane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
