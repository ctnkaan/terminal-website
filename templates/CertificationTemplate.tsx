import React from 'react'
import {Card} from "react-bootstrap";
import CardTempStyles from "../styles/CardTemplate.module.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface propsType {
    title: string,
    image_url: string,
    animation: string,
    url: string
}


function CertificationTemplate(props : propsType) {
  return (
    <AnimationOnScroll animateIn={props.animation} animateOnce={true}>
    <div>
        <Card className={CardTempStyles.CardStyles}>
        <Card.Img height={250} variant="top" src={props.image_url} />
          <Card.Body>
              <Card.Title style={{color:"#fff"}}> <a href={props.url}>{props.title}</a> </Card.Title>
          </Card.Body>
        </Card>
    </div>
    </AnimationOnScroll>
  )
}

export default CertificationTemplate