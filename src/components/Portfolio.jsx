import { useState } from "react";
import { FiCode, FiSmartphone, FiShield } from "react-icons/fi";

const portfolioData = [
  {
    area: "Web Development",
    icon: <FiCode size={40} className="text-indigo-600" />,
    projects: [
      {
        title: "E-Commerce Website",
        description: "A full-featured e-commerce platform with shopping cart and payments.",
      },
      {
        title: "Corporate Website",
        description: "Professional website for a multinational corporation.",
      },
      {
        title: "Portfolio Website",
        description: "Creative portfolio showcasing photography and design work.",
      },
    ],
  },
  {
    area: "Mobile Apps",
    icon: <FiSmartphone size={40} className="text-indigo-600" />,
    projects: [
      {
        title: "Fitness Tracker",
        description: "Mobile app for tracking workouts and health data.",
      },
      {
        title: "Food Delivery",
        description: "On-demand food delivery application for iOS and Android.",
      },
      {
        title: "Social Network",
        description: "Mobile social media app with chat and sharing features.",
      },
    ],
  },
  {
    area: "Cybersecurity",
    icon: <FiShield size={40} className="text-indigo-600" />,
    projects: [
      {
        title: "Network Monitoring Tool",
        description: "Real-time network traffic monitoring and alerts.",
      },
      {
        title: "Security Audit",
        description: "Comprehensive cybersecurity audit for enterprise clients.",
      },
      {
        title: "Firewall Implementation",
        description: "Custom firewall and intrusion prevention system deployment.",
      },
    ],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(portfolioData[0].area);

  const currentGroup = portfolioData.find(p => p.area === activeTab);

  return (
    <section
      id="portfolio"
      className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Title and Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-indigo-700 dark:text-indigo-400 text-4xl font-extrabold mb-2">
          Our Portfolio
        </h2>
        <p className="text-indigo-600 dark:text-indigo-300 text-lg font-semibold">
          Recent Projects by Area of Service
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12 space-x-4">
        {portfolioData.map(({ area }) => (
          <button
            key={area}
            onClick={() => setActiveTab(area)}
            className={`px-6 py-3 font-semibold rounded-md transition-colors duration-300
              ${
                activeTab === area
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-gray-700 dark:text-indigo-300 dark:hover:bg-gray-600"
              }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentGroup.projects.map(({ title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            {/* Image placeholder */}
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded mb-6 flex items-center justify-center text-gray-600 dark:text-gray-400 font-medium select-none">
              Image Placeholder
            </div>

            {/* Icon for the area */}
            <div className="mb-6">{currentGroup.icon}</div>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
