import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import Modal from "react-modal";
import { motion } from "framer-motion";

// Modal styles
Modal.setAppElement("#root");

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append("access_key", "900ac514-7ddd-45e2-893d-71aef5937b26");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setResult("Form submitted successfully!");
        setFormSubmitted(true);
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-b from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-pink-400 mb-6">Send a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Information Card */}
          <motion.div
            className="bg-gradient-to-b from-gray-800 to-gray-700 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-purple-400 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt size={30} className="text-pink-400 hover:text-pink-500" />
                <a
                  href="tel:+918830973046"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  +91 9146941944
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope size={30} className="text-pink-400 hover:text-pink-500" />
                <a
                  href="mailto:vinayakjadhao4433@gmail.com"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  vinayakjadhao4433@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub size={30} className="text-pink-400 hover:text-pink-500" />
                <a
                  href="https://github.com/VinayakJadhao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin size={30} className="text-pink-400 hover:text-pink-500" />
                <a
                  href="http://www.linkedin.com/in/vinayak-jadhav-bb242622b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaInstagram size={30} className="text-pink-400 hover:text-pink-500" />
                <a
                  href="https://www.instagram.com/_vinayakjadhav_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Success */}
      <Modal
        isOpen={formSubmitted}
        onRequestClose={() => setFormSubmitted(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="p-8 text-center bg-gradient-to-b from-pink-700 to-purple-700 text-white rounded-lg">
          <motion.h3
            className="text-2xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Form Submitted Successfully!
          </motion.h3>
          <p className="text-gray-200 mb-4">Thank you for reaching out. I will get back to you shortly.</p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
