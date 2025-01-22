import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Spinovix Software Pvt Ltd",
    start: "Aug 2024",
    end: "Present",
    description: [
      "Developed scalable MERN stack applications.",
      "Optimized REST APIs, reducing response time by 25%.",
      "Designed and deployed a responsive website using React.js.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Omegasoft Technologies Pvt. Ltd. - Pune",
    start: "Jan 2024",
    end: "July 2024",
    description: [
      "Increased web application efficiency by 20% by developing and maintaining them using React JS, Express JS, and Node JS.",
      "Enhanced data exchange speed by 25% by creating RESTful APIs for front-end and back-end.",
      "Collaborated with the UI UX team to translate Figma designs into responsive web pages.",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Set to false to allow animations to repeat
    });

    // Refresh AOS to detect changes in the DOM
    AOS.refresh();
  }, []);

  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-gray-900 to-black py-16 text-white overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Sphere visible args={[1, 100, 200]} scale={3} position={[0, 0, -5]}>
            <MeshDistortMaterial
              color="#FF5733"
              attach="material"
              distort={0.6}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl border-l-4 border-cyan-500 hover:scale-105 transform transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3
                className="text-2xl font-semibold"
                data-aos="fade-right"
                data-aos-delay={index * 200 + 100}
              >
                {exp.role} at{" "}
                <span className="text-yellow-400">{exp.company}</span>
              </h3>
              <p
                className="text-sm text-gray-400"
                data-aos="fade-left"
                data-aos-delay={index * 200 + 150}
              >
                {exp.start} - {exp.end}
              </p>
              <ul
                className="mt-4 list-disc pl-6"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 200}
              >
                {exp.description.map((item, i) => (
                  <li key={i} className="mt-2 text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
