import React from 'react'
import developerGif from "../assets/Developer.gif"
import Image from 'next/image'
import AboutStyles from "../styles/About.module.scss"
import {Container, Row, Col} from "react-bootstrap"

function About() {
  return (
      <Container id="about" className={AboutStyles.about}>
        <h1>About Me</h1>
        <Row>
          <Col lg> <Image src={developerGif} alt="Developer Gif" /></Col>
          <Col lg className={AboutStyles.text}>I am an aspiring software developer/student with 7 months of professional experience. I love developing web applications both in front-end and back-end. I mainly mentor other fellow engineering students who want to start building up a career. I am a leader at many student communities such as Microsoft Learn Student Ambassadors, Postman Student Leaders, IEEE Student Branches Computer Society and Voice of Code.</Col>
        </Row>
      </Container>
  )
}

export default About