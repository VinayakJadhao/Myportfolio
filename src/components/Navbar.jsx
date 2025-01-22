import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import * as THREE from "three";

const Navbar = () => {
  const menuItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navVisible, setNavVisible] = useState(true);
  const navRef = useRef(null);
  let lastScrollY = 0;

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.toLowerCase(),
        offset: document.getElementById(item.toLowerCase())?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.offset) {
          return section.id;
        }
        return acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations for navbar appearance
  useEffect(() => {
    const nav = navRef.current;
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [navVisible]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 cursor-pointer transition-transform transform hover:scale-110">
            Vinayak Jadhav
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-500 transition-transform transform"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex space-x-8 text-lg font-medium">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="relative group cursor-pointer transition-transform transform hover:scale-105"
                >
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-500"
                        : "text-white"
                    } hover:text-cyan-500 transition-colors`}
                  >
                    {item}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 right-0 h-screen w-64 bg-black bg-opacity-70 backdrop-blur-xl shadow-lg transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-6 p-6 text-center">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-6 rounded-lg text-lg font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-500 bg-cyan-500 bg-opacity-10"
                      : "text-gray-300"
                  } hover:text-cyan-500 hover:bg-cyan-500 hover:bg-opacity-10`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
