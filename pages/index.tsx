import type { NextPage } from "next";

import About from "../components/About";
import AnimationText from "../components/AnimationText";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import Particle from "../components/Particle";
import Skills from "../components/Skills";
import VolunteerExperience from "../components/VolunteerExperience";
import "animate.css/animate.min.css";

const Home: NextPage = () => {
  return (
    <div>
      {/* The Navbar*/}
      <NavbarComponent />

      {/* The particle and animation */}
      <Particle />
      <AnimationText />

      {/* The About section */}
      <About />

      {/* The Skills section */}
      <Skills />

      {/* The Experience section */}
      <Experience />

      {/* The Volunteer Experience section */}
      <VolunteerExperience />


      {/* The Footer */}
      <Footer />
      
    </div>
  );
};

export default Home;
