import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import * as THREE from "three";

// Custom Hexagonal Animation
const Hexagon = () => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.x += 0.005;
    groupRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 3) * 3,
            Math.sin((i * Math.PI) / 3) * 3,
            0,
          ]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.1, 0.1, 3, 6]} />
          <meshStandardMaterial
            color={`hsl(${i * 60}, 70%, 50%)`}
            emissive={`hsl(${i * 60}, 70%, 50%)`}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[710px] sm:h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-hidden"
    >
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 5, 2]} />
        <Hexagon />
      </Canvas>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute text-center"
      >
        {/* Floating Neon Name */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="flex justify-center items-center relative"
        >
          <motion.div
            className="absolute rounded-xl w-[220px] h-[100px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl"
            style={{
              transform: "skew(-15deg)",
              filter: "blur(4px) brightness(1.3)",
              zIndex: -1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <h1 className="text-5xl md:text-7xl font-extrabold text-center">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-600">
              Vinayak Jadhav
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1,
          }}
          className="text-xl md:text-2xl mt-6"
        >
          <Typewriter
            words={[
              "Crafting Amazing Experiences",
              "A Front-End Developer Extraordinaire",
              "Master of React & JavaScript",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        {/* Interactive Button */}
        <motion.a
          href="/Vinayak_Jadhav_9146941944.pdf"
          download
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px #ffffff",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className="mt-10 inline-block px-6 py-3 bg-gradient-to-r from-purple-800 to-blue-600 text-white rounded-lg shadow-lg transform hover:translate-y-1 transition-all duration-300"
        >
          Download My Resume
        </motion.a>
      </motion.div>

      {/* Light Trails */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-20"
        animate={{
          x: [-200, 200],
          y: [-200, 200],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-yellow-500 to-red-500 blur-3xl opacity-20"
        animate={{
          x: [200, -200],
          y: [200, -200],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;
