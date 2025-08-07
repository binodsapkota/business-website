import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-white transition-colors duration-300"
    >
      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-indigo-700 text-4xl font-extrabold mb-2">
          Contact Us
        </h2>
        <p className="text-indigo-600 text-lg font-semibold">
          Have questions or want to work with us? Reach out anytime.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Left: Contact Info & Map */}
        <div className="flex-1 space-y-8">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-800 dark:text-gray-900">
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-indigo-700">
                Phone
              </h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-indigo-700">
                Email
              </h3>
              <p>contact@business.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-indigo-700">
                Location
              </h3>
              <p>123 Business Rd, Suite 100, Cityville, Country</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019614958273!2d-122.41941508468165!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c9e5f7dbd%3A0x4f6d0fdb25b5e7a0!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1687133442439!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-50 dark:bg-gray-100 p-8 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-900 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-900 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-900 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
