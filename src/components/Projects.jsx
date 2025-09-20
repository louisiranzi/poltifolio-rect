import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "React + TailwindCSS project", link: "/portifolio"},
    { title: "Chat App", desc: "PHP + Javascript + CSS", link: "/chat" },
    { title: "Fruit web", desc: "React + Firebase backend", link: "/Fruit" },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-800 h-160  flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700">
      <h2 className="text-3xl text-yellow-500 font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 animate-pulse p-6 rounded-lg shadow hover:shadow-2xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <a href={p.link} className="text-blue-600 hover:underline" target="_blank">View Demo</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// export default function Projects() {
//   const projects = [
//     { title: "Project One", desc: "React + Node.js app", link: "#" },
//     { title: "Project Two", desc: "E-commerce platform", link: "#" },
//     { title: "Project Three", desc: "Portfolio website", link: "#" },
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {projects.map((p, i) => (
//           <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//             <p className="text-gray-600 mb-4">{p.desc}</p>
//             <a href={p.link} className="text-blue-600 hover:underline">View Demo</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
