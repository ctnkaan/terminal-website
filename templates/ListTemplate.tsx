import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll';


interface propsType {
    name: string
    attendance: number
    animation: string
}

function ListTemplate(props: propsType) {
  return (
    <AnimationOnScroll animateIn={props.animation} duration={1.5} animateOnce={true}>
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        style={{color: "#fff", backgroundColor: "#323647"}}
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.name}</div>
            </div>
            <Badge bg="dark" pill>
            Attendance: {props.attendance}
            </Badge>
        </ListGroup.Item>
    </AnimationOnScroll>
  )
}

export default ListTemplate