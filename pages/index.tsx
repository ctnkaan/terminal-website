import type { NextPage } from "next";
import AnimationText from "../components/AnimationText";
import Navbar from "../components/Navbar";
import Particle from "../components/Particle";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />

      <Particle/>
      <AnimationText />

      
    </div>
  );
};

export default Home;
