import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from "next/image"
import ExperienceStyles from "../styles/Experience.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface propsType {
    image: StaticImageData
    name: string
    position: string
    date: string
    res1: string
    res2: string
    res3: string 
    hr: boolean
    animation: string
}

function ExperienceTemplate(props: propsType) {
  return (
        <AnimationOnScroll animateIn={props.animation} animateOnce={true}>
            <Row>
                <Col className={ExperienceStyles.image} lg>
                    <Image width={300} height={250} src={props.image} alt="experience image"/>
                </Col>

                <Col className={ExperienceStyles.text} lg>
                    <h2>{props.name}</h2>

                    <p>
                        <b>{props.position}</b>
                        <br/>
                        <i> 
                            <b>{props.date}</b>
                        </i>
                    </p>

                    <b>Responsibilities:</b>
                    <br/>
                    <ul>
                        <li> {props.res1} </li>
                        <li> {props.res2} </li>
                        <li> {props.res3} </li>
                    </ul>
                </Col>
            </Row>

            {props.hr ? <hr/> : null}
    
        </AnimationOnScroll>
  )
}

export default ExperienceTemplate