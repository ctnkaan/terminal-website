import React from 'react'
import { Container} from 'react-bootstrap'
import ExperienceStyles from "../styles/Experience.module.scss"
import Univerlist from "../assets/univerlist.png"
import Titanwolf from "../assets/titanwolf.png"
import Yasar from "../assets/yasar.png"
import ExperienceTemplate from '../templates/ExperienceTemplate'

function Experience() {
  return (
    <div style={{backgroundColor:"#323647"}}>
      <Container id="experience" className={ExperienceStyles.experience}>
        <h1>Professional Work Experience</h1>

        <ExperienceTemplate 
          image={Yasar} 
          name={"Yaşar University"} 
          position={"Undergraduate Lecturer"} 
          date={"October 2022 - Present"} 
          res1={"Lecturing students on C and Java."}
          res2={"Accompanied the professeor during Data Structures and Algorithms lessons."}
          res3={"Helped students with their assignments."}
          hr={true}
          animation={"animate__fadeInLeftBig"}
        />

        <ExperienceTemplate 
          image={Univerlist} 
          name={"Univerlist"} 
          position={"Fullstack Web Developer Intern"} 
          date={"March 2021 - September 2021"} 
          res1={"Developed components on a large scale web application usgin React.js, Node.js and GraphQL."}
          res2={"Used and learned DevOps tools such as Docker and Git."}
          res3={"Wrote and maintained the documentations for the projects."}
          hr={false}
          animation={"animate__fadeInLeftBig"}
        />
      </Container>
    </div>
  )
}

export default Experience