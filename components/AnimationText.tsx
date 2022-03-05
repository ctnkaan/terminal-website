import React from 'react'
import { Button } from 'react-bootstrap'
import AnimationTextStyles from "../styles/AnimationText.module.scss"

function AnimationText() {
  return (
    <div>
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <h1 className={AnimationTextStyles.header}>Hi👋<br/><br/> I'm Çetin Kaan Taşkıngenç <br/> A Fullstack Developer</h1>

        <Button href="#about" className={AnimationTextStyles.button}> Click Here!</Button>
    </div>
  )
}

export default AnimationText