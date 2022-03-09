import React from 'react'
import { Container} from 'react-bootstrap'
import ExperienceStyles from "../styles/Experience.module.scss"
import Univerlist from "../assets/univerlist.png"
import Titanwolf from "../assets/titanwolf.png"
import Yasar from "../assets/yasar.png"
import ExperienceTemplate from '../templates/ExperienceTemplate'

function Experience() {
  return (
    <Container id="experience" className={ExperienceStyles.experience}>
        <h1>Professional Work Experience</h1>

        <ExperienceTemplate 
          image={Titanwolf} 
          name={"Titan Wolf Security"} 
          position={"DevSecOps Intern"} 
          date={"Feburary 2022 - Present"} 
          res1={"Configuring servers."}
          res2={"Building Secure Development Pipelines."}
          res3={"Learning about DevOps and Cyber Security."}
        />

        <ExperienceTemplate 
          image={Yasar} 
          name={"Yaşar University"} 
          position={"Undergraduate Lecturer"} 
          date={"October 2022 - Present"} 
          res1={"Configuring servers."}
          res2={"Building Secure Development Pipelines."}
          res3={"Learning about DevOps and Cyber Security."}
        />

        <ExperienceTemplate 
          image={Univerlist} 
          name={"Univerlist"} 
          position={"Fullstack Web Developer Intern"} 
          date={"March 2021 - September 2021"} 
          res1={"Developed components on a large scale web application usgin React.js, Node.js and GraphQL."}
          res2={"Used and learned DevOps tools such as Docker and Git."}
          res3={"Wrote and maintained the documentations for the projects."}
        />
        
    </Container>


  )
}

export default Experience