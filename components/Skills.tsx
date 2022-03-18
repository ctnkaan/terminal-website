import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SkillsStyles from "../styles/Skills.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  SiTypescript, SiJavascript, SiGraphql, SiReact, SiApollographql, SiNodedotjs, SiHtml5,
  SiCss3, SiSass, SiDocker, SiMicrosoftazure, SiLinux, SiPython, SiJava, SiC, SiNextdotjs,
  SiExpress, SiGo, SiMongodb, SiMysql, SiPostman, SiGit, SiGithub, SiBootstrap,
  SiArduino, SiJest, SiJquery,
} from "react-icons/si";

function Skills() {
  return (
    <AnimationOnScroll animateIn={"animate__rubberBand"} duration={1.5} animateOnce={true}>
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
            <SiMongodb className={SkillsStyles.icon} />
            <SiMysql className={SkillsStyles.icon} />
            <SiPostman className={SkillsStyles.icon} />
            <SiGit className={SkillsStyles.icon} />
            <SiGithub className={SkillsStyles.icon} />
            <SiBootstrap className={SkillsStyles.icon} />
            <SiArduino className={SkillsStyles.icon} />
            <SiJquery className={SkillsStyles.icon} />
            <SiJest className={SkillsStyles.icon} />
          </Col>
        </Row>
      </Container>
    </div>
    </AnimationOnScroll>
  )
}

export default Skills