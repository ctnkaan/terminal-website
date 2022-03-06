import React from 'react'
import { Button } from 'react-bootstrap'
import AnimationTextStyles from "../styles/AnimationText.module.scss"

function AnimationText() {
  return (
    <div>
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <h1 className={AnimationTextStyles.header}>Hi👋<br/><br/> I'm Çetin Kaan Taşkıngenç <br/><br/> A Fullstack Developer</h1>

        <Button variant="secondary" href="https://drive.google.com/file/d/1TsEHAMgGjQha6QphFvA_IQLNys80lY3Z/view?usp=sharing" className={AnimationTextStyles.button}>My Resume</Button>
    </div>
  )
}

export default AnimationText