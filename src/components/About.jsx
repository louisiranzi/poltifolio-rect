export default function About() {
  return (
    <section id="about" className="py-30 px-6 bg-gray-100 text-center h-160 flex flex-col bg-gradient-to-r from-blue-500 to-indigo-700">
      <h2 className="text-3xl font-bold mb-6 text-yellow-500">About Me</h2>
      <p className="max-w-2xl mx-auto text-white">
        Hi! I'm IRANZI Louis, a passionate Software Developer. 
        I have studied Software Development and I like building modern web applications 
        using : PHP Programming, Vue.js, React.js, Node.js, and TailwindCSS.
      </p>

      <div className="mt-6 flex justify-center gap-6 ">
        <a href="mailto:iranzilouis2924@gmail.com" className="animate-bounce text-white w-10 font-bold text-2xl border-4 rounded-full"><h1><abbr title="click to send me any message via email">✉️</abbr></h1></a>
        <a href="tel:+250795929094" className="animate-bounce text-white w-10 font-bold text-2xl border-4 rounded-full"><h1><abbr title="click to contact me via mobile number 📞">📞</abbr></h1></a>
        <a href="https://facebook.com/Luu Is" className="animate-bounce text-white w-10 h-10 border-4 rounded-full font-bold text-3xl"><h1><abbr title="click to contact me via facebook">f</abbr></h1></a>
        <a href="https://instagram.com/Luu_Is_2050k" className="animate-bounce text-white w-10 h-10 font-bold text-2xl border-4 rounded-full"><h1><abbr title="click to contact me via instagram">📷</abbr></h1></a>
      </div>
    </section>
  );
}
