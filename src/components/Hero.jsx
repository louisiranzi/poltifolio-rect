import { motion } from "framer-motion";
import Luu from "../assets/img/Luu.jpg"

export default function Hero() {
  return (
    <section id="home" className="h-160 flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-center">
      
      {/* Animated Image */}
      <motion.img 
        src={Luu}
        alt="IRANZI Louis" 
        className="w-50 h-50 rounded-full mb-6 border-4 border-white shadow-2xg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated Name */}
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hello, I'm <span className="text-yellow-300">IRANZI Louis</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p 
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Software Developer
      </motion.p>

      {/* Animated Button */}
      <motion.a 
        href="/Projects" 
        className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <abbr title="click to view my work">View My Work</abbr>
      </motion.a>
    </section>
  );
}
