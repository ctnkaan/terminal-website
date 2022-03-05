import React from 'react'
import Particles from "react-tsparticles";
import Settings from "./particles.json"



function Particle() {

    return (
      <div>
          <Particles
            // @ts-ignore
            options={Settings}
          />
        </div>
      );
  };

export default Particle