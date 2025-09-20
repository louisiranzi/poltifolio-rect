import Photo from "../assets/img/portfolio/1.jpg"
import Photo2 from "../assets/img/portfolio/2.jpg"
import Photo3 from "../assets/img/portfolio/3.jpg"
import Photo4 from "../assets/img/portfolio/4.jpg"
import Photo5 from "../assets/img/portfolio/5.jpg"
import { motion } from "framer-motion";
export default function Portifolio() {
  return (
    <section id="about" className="py-30 px-6 bg-gray-100 text-center flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700">
      <a href="projects" className="text-white fixed left-2 animate-pulse bg-gray-900 text-lg"><abbr title="click to Back to projects">🔙 Back</abbr></a>
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">Portifolio Project</h2>
      <div className="grid grid-cols-3 grid-flow-row gap-7 ">
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Photo}
        alt="Home Page" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-center text-white font-bold"><span className="flex">This is homepage of LuuPortifolio.</span> click to the link to see more</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Photo2}
        alt="About" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">You can see more imformation about IRANZI Louis</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Photo3}
        alt="Projects" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">You cann see the projects by clicking to the "View demo"</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Photo4}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold"> Here you can see different languages , I knew that</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Photo5}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">Sends your messages by filling that form and click to " Send message "</h1>
      </div>
      </div>
    </section>
  );
}
