import Fruit1 from "../assets/img/fruit/1.png"
import Fruit2 from "../assets/img/fruit/2.png"
import Fruit3 from "../assets/img/fruit/3.png"
import Fruit4 from "../assets/img/fruit/4.png"
import Fruit5 from "../assets/img/fruit/5.png"
import Fruit6 from "../assets/img/fruit/6.png"
import Fruit7 from "../assets/img/fruit/7.png"
import Fruit8 from "../assets/img/fruit/8.png"
import Fruit9 from "../assets/img/fruit/9.png"
import { motion } from "framer-motion";
export default function Fruit() {
  return (
    <section id="about" className="py-30 px-6 bg-gray-100 text-center flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700">
      <a href="projects" className="text-white bg-gray-900 animate-bounce fixed left-2 text-lg"><abbr title="click to Back to projects">🔙 Back</abbr></a>
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">Fruit Web</h2>
      <div className="grid grid-cols-3 grid-flow-row gap-7">
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit1}
        alt="Home Page" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-center text-white font-bold">This is the first interface you look when it's first time you browse our web</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit2}
        alt="About" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">This is Login form you need to fill them</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit3}
        alt="Projects" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">When you dont have an account create account then sign in</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit4}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">When you forgot your account you can put it your email and click to reset link</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit6}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">when you have filled your email click to the link that you see</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit7}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">When you are clicked to that link fill your new password and repeat your password and click update password</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit8}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">This is home page you see more different fruits click to frout to see more about selected fruit</h1>
      </div>
      <div className="border-white border-4 justify-center text-center bg-gray-800">
        <motion.img 
        src={Fruit9}
        alt="IRANZI Louis" 
        className="w-full h-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="py-6 text-2xl text-white font-bold">When you see like this example becouse of selected fruit like Apple</h1>
      </div>
      </div>
    </section>
  );
}
