import { FiCode, FiSmartphone, FiShield } from "react-icons/fi";

const servicesData = [
  {
    icon: <FiCode className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />,
    title: "Web Development",
    description:
      "Building responsive, performant, and modern websites tailored to your business needs.",
  },
  {
    icon: <FiSmartphone className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />,
    title: "Mobile Apps",
    description:
      "Creating intuitive and engaging mobile applications for iOS and Android platforms.",
  },
  {
    icon: <FiShield className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />,
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with advanced security solutions and monitoring.",
  },
];

const Services = () => (
  <section
    id="services"
    className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    {/* Title and Subtitle */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-indigo-700 dark:text-indigo-400 text-4xl font-extrabold mb-2">
        Our Services
      </h2>
      <p className="text-indigo-600 dark:text-indigo-300 text-xl font-semibold mb-4">
        What We Offer
      </p>
      <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
        We provide a wide range of digital solutions designed to help your business succeed in a competitive market.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {servicesData.map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center px-6 py-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {icon}
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
