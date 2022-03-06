import type { NextPage } from "next";

import About from "../components/About";
import AnimationText from "../components/AnimationText";
import NavbarComponent from "../components/NavbarComponent";
import Particle from "../components/Particle";

const Home: NextPage = () => {
  return (
    <div>
      <NavbarComponent />

      <Particle/>
      <AnimationText />

      <About />

      
    </div>
  );
};

export default Home;
