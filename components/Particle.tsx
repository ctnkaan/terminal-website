import React from 'react'
import Particles from "react-tsparticles";
import Settings from "../assets/particles.json";


function Particle() {

    return (
        <div id="home" style={{minHeight: "1000px", backgroundColor: "#232530"}}>
          <Particles
              // @ts-ignore
              options={Settings}
              style={{minHeight: "1000px"}}
            />
        </div>
      );
  };

export default Particle