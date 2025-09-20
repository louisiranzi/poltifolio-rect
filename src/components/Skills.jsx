import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["HTML"];
  const skill = ["CSS"];
  const programming = ["Javascript", "PHP", "Python", "Solidity"];
  const framework = ["Express JS", "React JS", "Vue JS"];
  const other = ["TailWindCSS", "Bootstrap"];
  const database = ["Mysql", "Mongo DB"];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 text-center h-160  flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700">
      <h2 className="text-3xl font-bold text-yellow-500 mb-10">My Skills</h2>
      <div className="flex flex-wrap  gap-4">
        <h1 className="mb-2 text-white font-bold py-2">Mockup language :</h1>
        {skills.map((s, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-blue-400 text-white rounded-full mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2, delay: i * 0.2 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap  gap-4">
        <h1 className="mb-2 text-white font-bold py-2">Stylesheet :</h1>
        {skill.map((s, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-blue-500 text-white rounded-full mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: i * 0.4 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <h1 className="mb-2 text-white font-bold py-2">Programming Languages :</h1>
        {programming.map((s, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-blue-600 text-white rounded-full mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.5 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <h1 className="mb-2 text-white font-bold py-2">Frameworks :</h1>
        {framework.map((s, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-blue-700 text-white rounded-full mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.7 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <h1 className="mb-2 text-white font-bold py-2">Other Frameworks :</h1>
        {other.map((s, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-blue-800 text-white rounded-full mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.7 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <h1 className="mb-2 text-white font-bold py-2">Databases :</h1>
        {database.map((s, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 bg-blue-900 text-white rounded-full mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.9 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
