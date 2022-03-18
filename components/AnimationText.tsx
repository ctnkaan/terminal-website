import React from 'react'
import { Button } from 'react-bootstrap'
import AnimationTextStyles from "../styles/AnimationText.module.scss"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function AnimationText() {
  return (
    <div>

        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <h1 className={AnimationTextStyles.header}>Hi👋<br/><br/> I'm Çetin Kaan Taşkıngenç <br/><br/> A Fullstack Developer</h1>

        <Button 
          variant="secondary" 
          href="https://drive.google.com/file/d/1S4p7xEuADNSkADRo_iGudCFw5rrW5wTG/view?usp=sharing"
          className={AnimationTextStyles.button}
        >
          My Resume
        </Button>

        <Button
          variant="secondary"
          href="#about"
          className={AnimationTextStyles.buttonDown}
        >
          <BsFillArrowDownCircleFill className={AnimationTextStyles.icon}/>
        </Button>

    </div>
  )
}

export default AnimationText