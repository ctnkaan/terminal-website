import React from 'react'
import { Button } from 'react-bootstrap'
import AnimationTextStyles from "../styles/AnimationText.module.scss"
import Image from "next/image"
import ProfileImage from ".//../assets/cetinkaantaskingenc.jpg"

function AnimationText() {
  return (
    <div>

      <div className={AnimationTextStyles.container}>
        <Image 
          src={ProfileImage}
          alt="cetinkaantaskingenc"
          width={200}
          height={200}
          className={AnimationTextStyles.profileImage}
        />
      </div>


        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <h1 className={AnimationTextStyles.header}>Hi👋<br/><br/> I'm Çetin Kaan Taşkıngenç <br/><br/> A Fullstack Developer</h1>

        <Button 
          variant="secondary" 
          href="https://drive.google.com/file/d/1S4p7xEuADNSkADRo_iGudCFw5rrW5wTG/view?usp=sharing"
          className={AnimationTextStyles.button}
        >
          My Resume
        </Button>
    </div>
  )
}

export default AnimationText