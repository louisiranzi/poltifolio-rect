import Chat1 from "../assets/img/chat/chat1.png"
import Chat2 from "../assets/img/chat/chat2.png"
import Chat3 from "../assets/img/chat/chat3.png"
import Chat4 from "../assets/img/chat/chat4.png"
import Chat5 from "../assets/img/chat/chat5.png"
import { motion } from "framer-motion";
export default function Chat() {
  return (
    <section id="about" className="py-30 px-6 bg-gray-100 text-center flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700">
      <a href="projects" className="text-white bg-gray-900 animate-bounce fixed left-2 text-lg"><abbr title="click to Back to projects">🔙 Back</abbr></a>
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">Chat App</h2>
      <div className="grid grid-cols-3 grid-flow-row gap-7">
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Chat1}
        alt="Home Page" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-center text-white font-bold">This is Login form you need to fill them</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Chat2}
        alt="About" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">This is home page click to the screen link to see more</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Chat3}
        alt="Projects" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">This is friends page you need to send request to the friend to allow you to start chat</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Chat4}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold"> This is messages page you see your friend select one of them and start chat</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Chat5}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">This is videos page you see more different videos uploaded by your friend and you you can upload your video</h1>
      </div>
      </div>
    </section>
  );
}
