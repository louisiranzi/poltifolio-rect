

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-md z-50">
      <h1 className="text-2xl font-bold"><a href="/">Luu<span className="text-yellow-500">Portfolio</span></a></h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-yellow-400"><abbr title="click to go to the home">Home</abbr></a></li>
        <li><a href="about" className="hover:text-yellow-400"><abbr title="click to go to the About">About</abbr></a></li>
        <li><a href="projects" className="hover:text-yellow-400"><abbr title="click to go to the Projects">Projects</abbr></a></li>
        <li><a href="skills" className="hover:text-yellow-400"><abbr title="click to go to the Skills">Skills</abbr></a></li>
        <li><a href="contact" className="hover:text-yellow-400"><abbr title="click to send your Message">Contact</abbr></a></li>
      </ul>
    </nav>
  );
}
