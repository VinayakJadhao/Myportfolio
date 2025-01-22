import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava size={50} style={{ color: "#f89820" }} /> },
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React JS", icon: <FaReact size={50} style={{ color: "#61DBFB" }} /> },
      { name: "HTML", icon: <FaHtml5 size={50} style={{ color: "#E34F26" }} /> },
      { name: "CSS", icon: <FaCss3Alt size={50} style={{ color: "#1572B6" }} /> },
      { name: "JavaScript", icon: <FaJsSquare size={50} style={{ color: "#F7DF1E" }} /> },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={50} style={{ color: "#83CD29" }} /> },
      { name: "Express.js", icon: <SiExpress size={50} style={{ color: "#ffffff" }} /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL", icon: <FaDatabase size={50} style={{ color: "#00758F" }} /> },
      { name: "MySQL", icon: <SiMysql size={50} style={{ color: "#00758F" }} /> },
      { name: "NoSQL", icon: <FaNodeJs size={50} style={{ color: "#E64C3C" }} /> },
      { name: "MongoDB", icon: <SiMongodb size={50} style={{ color: "#47A248" }} /> },
    ],
  },
];

const Skills = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-black py-16 px-4 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Sphere visible args={[1, 100, 200]} scale={3} position={[0, 0, -5]}>
            <MeshDistortMaterial
              color="#6C63FF"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-aos="zoom-in"
            >
              <h3
                className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
                data-aos="fade-right"
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    data-aos="flip-left"
                  >
                    <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition">
                      {skill.icon}
                    </div>
                    <p className="mt-2 text-lg font-medium text-white">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
