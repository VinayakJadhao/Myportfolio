import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import gsap from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 }
    );
    gsap.fromTo(
      ".social-icon",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)", stagger: 0.2, delay: 0.5 }
    );
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="footer-content flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
          {/* Footer Name */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-cyan-400">Vinayak Jadhav</h2>
            <p className="text-lg text-gray-400 mt-2">Software Developer</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/VinayakJadhao"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="http://www.linkedin.com/in/vinayak-jadhav-bb242622b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com/_vinayakjadhav_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="mailto:vinayakjadhao4433@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaEnvelope size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="tel:+919146941944"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaPhoneAlt size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 footer-content">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vinayak Jadhav. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
