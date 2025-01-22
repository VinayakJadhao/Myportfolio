import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-800 via-black to-gray-900 py-16 px-6 text-white overflow-hidden"
    >
      {/* Background Circles for 3D Effect */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-b from-gray-700 to-transparent blur-2xl rounded-full opacity-20" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* 3D Floating Profile Picture */}
        <motion.div
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            rotateX: 15,
          }}
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="md:ml-12 mt-8 md:mt-0 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 animate-gradient-move">
            About Me
          </h2>
          <motion.p
            className="mt-4 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            I’m <span className="text-cyan-400 font-bold">Vinayak Jadhav</span>, 
            a passionate Full Stack Developer with expertise in the MERN stack. I thrive on building scalable applications, crafting stunning and responsive designs, and delivering impactful solutions for real-world problems.
          </motion.p>
          {/* <motion.button
            className="mt-6 px-8 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-transform transform hover:scale-110 shadow-lg shadow-cyan-500/50"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Know More
          </motion.button> */}
        </motion.div>
      </div>

      {/* Floating 3D Shapes */}
      <motion.div
        className="absolute bottom-10 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 opacity-60 blur-xl"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-5 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-60 blur-2xl"
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default About;
