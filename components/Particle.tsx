import React from 'react'
import Particles from "react-tsparticles";
import Settings from "./particles.json"



function Particle() {

    return (
      <div style={{width: "100%"}}>
          <Particles
            // @ts-ignore
            options={Settings}
          />
        </div>
      );
  };

export default Particle