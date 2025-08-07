import { FiTarget, FiEye, FiBookOpen } from "react-icons/fi";

const About = () => (
  <section
    id="about"
    className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-900 shadow-md transition-colors duration-300"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
      {/* Text content */}
      <div className="flex-1 max-w-3xl">
        {/* Main Title */}
        <h1 className="text-indigo-700 dark:text-indigo-400 text-5xl font-extrabold mb-4 text-center">
          About Us
        </h1>

        {/* Brief Intro */}
        <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          We’re dedicated to delivering innovative and effective solutions that help businesses grow and thrive in the digital age.  
          Learn more about our mission, vision, and journey below.
        </p>

        {/* Mission, Vision, Background */}
        <div className="space-y-10">
          {/* Mission */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-6 text-center md:text-left">
            <FiTarget
              className="text-indigo-600 dark:text-indigo-400 w-10 h-10 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                To empower businesses by providing innovative digital
                solutions that drive growth and efficiency.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-6 text-center md:text-left">
            <FiEye
              className="text-indigo-600 dark:text-indigo-400 w-10 h-10 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                To be the leading provider of cutting-edge technology
                solutions that transform businesses worldwide.
              </p>
            </div>
          </div>

          {/* Background */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-6 text-center md:text-left">
            <FiBookOpen
              className="text-indigo-600 dark:text-indigo-400 w-10 h-10 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Our Background
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                Founded in 2010, we have consistently delivered top-notch
                digital services across various industries, earning the trust
                of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Graphic */}
      <div className="hidden md:block flex-1 max-w-md mt-12 md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="w-full h-auto text-indigo-500 dark:text-indigo-400"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="250" cy="250" r="200" opacity="0.1" />
          <path d="M250 150a100 100 0 1 1-70.7 29.3A100 100 0 0 1 250 150z" />
          <path d="M250 350a100 100 0 1 1 70.7-29.3A100 100 0 0 1 250 350z" />
        </svg>
      </div>
    </div>
  </section>
);

export default About;
