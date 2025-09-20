import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage"
import Portifolio from "./components/Portifolio";
import Chat from "./components/Chat";
import Fruit from "./components/Fruit";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portifolio" element={<Portifolio />}/>
          <Route path="/Chat" element={<Chat />}/>
          <Route path="/Fruit" element={<Fruit />}/>
        </Routes>
      </Router>
       < Footer />
    </div>
  );
}

export default App;
