import React from 'react'
import { ListGroup, Container } from 'react-bootstrap'
import WorkshopStyles from "../styles/Workshops.module.scss"
import ListTemplate from '../templates/ListTemplate'

function Workshops() {
  return (

    <Container id="workshops" className={WorkshopStyles.WorkshopStyles}>
        <h1>Workshops</h1>
        <ListGroup as="ol" numbered>
            <ListTemplate 
                name="Introduction to Cloud Computing With Azure"
                attendance={52}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="Git GitHub 101"
                attendance={28}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="REST vs GraphQL Talk"
                attendance={320}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="GIT Into Open Source"
                attendance={63}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="API 101"
                attendance={21}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="Git GitHub 101 Eskisehir Technical Univ."
                attendance={36}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="Introduction to GraphQL"
                attendance={18}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="GIT Into Open Source v2.0"
                attendance={54}
                animation="animate__shakeY"
            />

            <ListTemplate 
                name="Microsoft Azure 101"
                attendance={32}
                animation="animate__shakeY"
            />
            

        </ListGroup>
    </Container>
    
  )
}

export default Workshops