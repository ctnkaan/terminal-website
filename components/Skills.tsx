import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SkillsStyles from "../styles/Skills.module.scss"
import Image from "next/image"

import {
  SiTypescript, SiJavascript, SiGraphql, SiReact, SiApollographql, SiNodedotjs, SiHtml5,
  SiCss3, SiSass, SiDocker, SiMicrosoftazure, SiLinux, SiPython, SiJava, SiC, SiNextdotjs,
  SiExpress, SiGo
} from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className={SkillsStyles.skills}>
      <Container >
        <h1>Skills</h1>
        <Row>
          <Col className={SkillsStyles.text} lg> Backend Web Development ⭐⭐⭐⭐⭐<br /> Frontend Web Development ⭐⭐⭐⭐ <br /> DevOps ⭐⭐⭐ <br /> Cyber Security ⭐<br /></Col>
          <Col className={SkillsStyles.icons} lg>
            <SiTypescript className={SkillsStyles.icon} />
            <SiJavascript className={SkillsStyles.icon} />
            <SiGraphql className={SkillsStyles.icon} />
            <SiReact className={SkillsStyles.icon} />
            <SiNextdotjs className={SkillsStyles.icon} />
            <SiExpress className={SkillsStyles.icon} />
            <SiApollographql className={SkillsStyles.icon} />
            <SiNodedotjs className={SkillsStyles.icon} />
            <SiHtml5 className={SkillsStyles.icon} />
            <SiCss3 className={SkillsStyles.icon} />
            <SiSass className={SkillsStyles.icon} />
            <SiDocker className={SkillsStyles.icon} />
            <SiMicrosoftazure className={SkillsStyles.icon} />
            <SiLinux className={SkillsStyles.icon} />
            <SiPython className={SkillsStyles.icon} />
            <SiJava className={SkillsStyles.icon} />
            <SiC className={SkillsStyles.icon} />
            <SiGo className={SkillsStyles.icon} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills