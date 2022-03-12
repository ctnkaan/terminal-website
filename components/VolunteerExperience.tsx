import React from 'react'
import { Container } from 'react-bootstrap'
import ExperienceStyles from "../styles/Experience.module.scss"
import ExperienceTemplate from '../templates/ExperienceTemplate'

import MLSA from "../assets/mlsa.png"
import IMAGINE from "../assets/imagine.jpg"
import Postman from "../assets/postman.jpg"
import CS from "../assets/ieeecs.png"
import VoC from "../assets/voc.jpg"


function VolunteerExperience() {
  return (
    <div style={{"backgroundColor": "#F0F8FF"}}>
      <Container id="volunteer" className={ExperienceStyles.experience}>
        <h1>Volunteer Experience</h1>

        <ExperienceTemplate 
          image = {MLSA} 
          name = {"Microsoft"}
          position = {"Beta Ambassador"}
          date = {"April 2021 - Present"}
          res1 = {"Hosted a live event about Microsoft Technologies for over 200+ students."}
          res2 = {"Helped fellow Turkish students members with monthly calls."}
          res3 = {"First Ambassador selected from Yasar University."}
          hr = {true}
        />

        <ExperienceTemplate 
          image = {IMAGINE} 
          name = {"Microsoft Turkey"}
          position = {"IMAGINE Ambassador"}
          date = {"December 2021 - Present"}
          res1 = {"Selected from all the students around Turkey."}
          res2 = {"Getting mentored and trained by Microsoft Turkey Employees."}
          res3 = {"Getting sponsored by Microsoft."}
          hr = {true}
        />

        <ExperienceTemplate 
          image = {Postman} 
          name = {"Postman"}
          position = {"Student Leader"}
          date = {"June 2022 - Present"}
          res1 = {"Mentoring Students about the power of API's."}
          res2 = {"Spoke at the Postman Student Summit to over 300+ people."}
          res3 = {"First and only student leader from Turkey."}
          hr = {true}
        />

      <ExperienceTemplate 
          image = {CS} 
          name = {"IEEE YU Computer Society"}
          position = {"Chairman"}
          date = {"September 2020 - Present"}
          res1 = {"Responsible for planning technical projects, workshops, and social events for the professional development of members at the Computer Society."}
          res2 = {"Managed teams of developers in many different areas such as Web, GameDev, AI/DL"}
          res3 = {"Mentored and trained over 100+ students."}
          hr = {true}
        />

      <ExperienceTemplate 
          image = {VoC} 
          name = {"Voice of Code"}
          position = {"Community Management Lead"}
          date = {"September 2021 - Present"}
          res1 = {"Managed the community of over 100+ members."}
          res2 = {"Hosted biweekly meetups with other leads."}
          res3 = {"Assigned tasks to other leads."}
          hr = {false}
        />

      </Container>

    </div>
  )
}

export default VolunteerExperience