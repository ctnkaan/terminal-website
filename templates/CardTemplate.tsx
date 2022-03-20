import React from 'react'
import {Card, Button} from "react-bootstrap";
import CardTempStyles from "../styles/CardTemplate.module.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface propsType {
    title: string,
    image_url: string,
    text: string,
    button_link: string,
    animation: string
}


function CardTemplate(props : propsType) {
  return (
    <AnimationOnScroll animateIn={props.animation} animateOnce={true}>
    <div>
        <Card className={CardTempStyles.CardStyles}>
        <Card.Img height={250} width={100} variant="top" src={props.image_url} style={{borderRadius:"20px"}} />
          <Card.Body>
              <Card.Title style={{color:"#fff", fontWeight:"bolder", fontSize:"2rem", marginBottom:"10%"}} >{props.title}</Card.Title>
              <Card.Text>
              {props.text}
              </Card.Text>
              <Button style={{borderRadius:"20px"}} href={props.button_link} variant="outline-warning"> <h4>GitHub</h4> </Button>
          </Card.Body>
        </Card>
    </div>
    </AnimationOnScroll>
  )
}

export default CardTemplate