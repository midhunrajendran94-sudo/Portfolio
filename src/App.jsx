import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Training from "./components/Training";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <main id="main" inert={menuOpen ? true : undefined}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Training />
        <Languages />
        <Contact />
      </main>
      <Footer locked={menuOpen} />
    </>
  );
}
