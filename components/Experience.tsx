import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ExperienceStyles from "../styles/Experience.module.scss"
import Image from 'next/image'
import Univerlist from "../assets/univerlist.png"
import Titanwolf from "../assets/titanwolf.png"
import Yasar from "../assets/yasar.png"

function Experience() {
  return (
    <Container id="experience" className={ExperienceStyles.experience}>
        <h1>Professional Work Experience</h1>

        {/* Titanwolf */}
        <Row>

        <Col className={ExperienceStyles.image} lg>
            <Image width={350} height={300} src={Titanwolf} alt="experience image"/>
          </Col>

          <Col className={ExperienceStyles.text} lg>
            <h2>Titan Wolf Security</h2>
            <p>
              <b>DevSecOps Intern</b>
              <br/>
              <i>
                <b>Feburary 2022 - Present</b>
              </i>
            </p>
            <p>
              <b>Responsibilities:</b>
              <br/>
              <ul>
                <li>
                  Configuring FTP servers.
                </li>
                <li>
                  Building Secure Development Pipelines.
                </li>
                <li>
                  Learning about DevOps and Cyber Security.
                </li>
              </ul>
            </p>
          </Col>
        </Row>

        {/* Yasar*/}
        <Row>

        <Col className={ExperienceStyles.image} lg>
            <Image width={350} height={300} src={Yasar} alt="experience image"/>
          </Col>

          <Col className={ExperienceStyles.text} lg>
            <h2>Yaşar University</h2>
            <p>
              <b>Undergraduate Lecturer</b>
              <br/>
              <i>
                <b>October 2022 - Present</b>
              </i>
            </p>
            <p>
              <b>Responsibilities:</b>
              <br/>
              <ul>
                <li>
                  Attending Lectures of the first and second year students.
                </li>
                <li>
                  Helping the students during the lab hours.
                </li>
                <li>
                  Helping the professors in their tasks.
                </li>
              </ul>
            </p>
          </Col>

        </Row>


        {/* Univerlist */}
        <Row>

          <Col className={ExperienceStyles.image} lg>
            <Image width={350} height={300} src={Univerlist} alt="experience image"/>
          </Col>

          <Col className={ExperienceStyles.text} lg>
            <h2>Univerlist</h2>
            <p>
              <b>Fullstack Web Developer Intern</b>
              <br/>
              <i>
                <b>March 2021 - September 2021 · 7 months</b>
              </i>
            </p>
            <p>
              <b>Responsibilities:</b>
              <br/>
              <ul>
                <li>
                Developed components on a large scale web application usgin React.js, Node.js and GraphQL.
                </li>
                <li>
                Used and learned DevOps tools such as Docker and Git.
                </li>
                <li>
                Wrote and maintained the documentations for the projects.
                </li>
              </ul>
            </p>
          </Col>

        </Row>

    </Container>
  )
}

export default Experience