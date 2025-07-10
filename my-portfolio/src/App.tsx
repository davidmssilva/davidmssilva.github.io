import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/styles.css";
import ParticlesBackground from "./effects/ParticlesBackground";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import MatrixEffect from "./effects/MatrixEffect";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Education />
    </>
  );
};

export default App;
