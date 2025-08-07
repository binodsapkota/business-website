const Hero = () => (
  <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-28 px-6 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
      Empower Your Business <br /> with Innovative Solutions
    </h1>
    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-indigo-200 dark:text-indigo-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
    </p>
    <div className="mt-10 flex justify-center space-x-6">
      <a
        href="#contact"
        className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded shadow-lg transition"
      >
        Contact Us
      </a>
      <a
        href="#services"
        className="border-2 border-white hover:border-pink-500 dark:border-indigo-300 dark:hover:border-pink-500 text-white font-semibold px-8 py-3 rounded transition"
      >
        Our Services
      </a>
    </div>
  </section>
);

export default Hero;
