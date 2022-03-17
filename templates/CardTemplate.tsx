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
        <Card.Img height={250} variant="top" src={props.image_url} />
          <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
              {props.text}
              </Card.Text>
              <Button href={props.button_link} variant="primary">Check it out!</Button>
          </Card.Body>
        </Card>
    </div>
    </AnimationOnScroll>
  )
}

export default CardTemplate