import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardTemplate from '../templates/CardTemplate'
import CardTempStyles from '../styles/CardTemplate.module.scss'


function Projects() {
  return (
    <Container id="projects" className={CardTempStyles.ContainerStyles}>
      <h1>Projects</h1>

      <Row>
        <Col>
          <CardTemplate
            title="Portfolio Website"
            image_url="https://miro.medium.com/max/724/1*LvA59wJi3O9jTMQQsw_cRA.png"
            text="This is my portfolio website. It is built with React and Next.js."
            button_link="https://github.com/ctnkaan/portfolio"
            animation='animate__flip'
          />
        </Col>

        <Col>
          <CardTemplate
            title="Postman Student Helper"
            image_url="https://raw.githubusercontent.com/ctnkaan/Postman-Student-Helper/main/assets/icon.png"
            text="A cyber security Discord bot built for protecting Postman Discord server. It has blocked more than 500 attacks."
            button_link="https://github.com/ctnkaan/Postman-Student-Helper"
            animation='animate__flip'
          />
        </Col>

        <Col>
          <CardTemplate
            title="Make Discord Bot"
            image_url="https://images.emojiterra.com/google/android-11/512px/1f916.png"
            text="A CLI that can make you a discord bot. It has options for JavaScript and TypeScript."
            button_link="https://github.com/ctnkaan/make-discord-bot"
            animation='animate__flip'
          />
        </Col>
      </Row>


      <Row>

        <Col>
          <CardTemplate
            title='Noodle'
            image_url="https://raw.githubusercontent.com/ctnkaan/Noodle/main/images/noodle.png"
            text="A multipurpouse Discord bot that can play music, play games, and more. I learned a lot developing this bot specially in DevOps."
            button_link="https://github.com/ctnkaan/Noodle"
            animation='animate__flip'
          />
        </Col>

        <Col>
          <CardTemplate
            title='Weather App'
            image_url="https://cdn-icons-png.flaticon.com/512/1555/1555512.png"
            text="A weather app made with Node.js and OpenWeatherMap API."
            button_link="https://github.com/ctnkaan/WeatherApp"
            animation='animate__flip'
          />
        </Col>

        <Col>
          <CardTemplate
            title='Todo List'
            image_url="https://thumbs.dreamstime.com/b/business-to-do-list-flat-icon-modern-style-task-list-business-to-do-list-flat-icon-modern-style-any-purposes-perfect-web-138650221.jpg"
            text="A todo list made with React and MongoDB. It has specific endpoints for users."
            button_link="https://github.com/ctnkaan/ToDo"
            animation='animate__flip'
          />
        </Col>

      </Row>

    </Container>
  )
}

export default Projects