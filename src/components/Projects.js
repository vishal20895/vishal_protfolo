import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Excise Department Project
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Developed responsive and dynamic user interfaces using SvelteKit,
            JavaScript, and Tailwind CSS. Designed front-end components for
            smooth performance and collaborated with back-end teams to integrate
            APIs using Fastify and Express servers. Enhanced server-side
            architecture and optimized performance with Node.js.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              SvelteKit, JavaScript, TailwindCSS, Fastify, Express, Node.js
            </span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Maharashtra State Board Website Verification and Photocopy
            Application
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Developed a responsive application to handle the 10th and 12th
            student marks verification and photocopy process. Students can apply
            online for verification and photocopy of their marks, streamlining
            the verification process and ensuring accurate and timely results.
            Built using React and Tailwind CSS, with application states managed
            through Redux Toolkit, the platform offers a smooth user experience
            with cross-browser compatibility and optimized performance.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              React, TailwindCSS, Redux Toolkit, JavaScript
            </span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Waqf Board Website (Lead Developer)
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Led the development of the Waqf Board website using ReactJS,
            Tailwind CSS, and Strapi. Managed a team of developers to ensure
            timely delivery of project goals. Focused on creating a scalable and
            responsive architecture with high performance. Integrated Strapi as
            a CMS to manage dynamic content and enable seamless client-side
            updates. Also worked with PostgreSQL for database management, Figma
            for UI/UX design, Fastify for backend services, and Redux Toolkit
            for state management.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              ReactJS, TailwindCSS, Strapi, PostgreSQL, Figma, Fastify, Redux
              Toolkit, JavaScript
            </span>
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Preschool Website Project
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Developing a responsive and dynamic preschool website using ReactJS,
            Tailwind CSS, and Strapi. Ensured seamless design and responsiveness
            for both mobile and desktop users. Coordinated closely with content
            managers and designers to align the project with client needs.
            Managed version control through Git, overseeing multiple branches,
            and ensuring smooth deployment practices.
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              ReactJS, TailwindCSS, Strapi, Git, JavaScript
            </span>
          </div>
        </div>

        {/* <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Think Creation (Passion Project)
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This Platform developement is in Progress, This Project is for
            Social Media Marketing
          </p>
          <div className="mt-6">
            <span className="block text-gray-700 font-bold uppercase dark:text-gray-400">
              Technology Stack:
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              ReactJs, TailwindCSS, Node.js, Express, MongoDB
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
