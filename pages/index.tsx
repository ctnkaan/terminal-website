import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Particle from "../components/Particle";

const Home: NextPage = () => {
  return (
    <div>
      <Particle/>

      <Navbar />
    </div>
  );
};

export default Home;
