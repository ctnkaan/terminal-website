import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CertificationTemplate from '../templates/CertificationTemplate'
import CardTempStyles from '../styles/CardTemplate.module.scss'

function Certifications() {
  return (
    <div style={{backgroundColor:"#323647"}}> 
    <Container id="certifications" className={CardTempStyles.ContainerStyles}>

        <h1>Professional Certifications</h1>

        <Row>
            <Col>
                <CertificationTemplate 
                title="Microsoft Certified Azure AI Fundamentals"
                image_url="https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png"
                animation="animate__swing"
                url="https://www.credly.com/badges/5d0c1b4a-3efd-4875-ad8c-d8a5bef3d9d5"
                />
            </Col>


            <Col>
                <CertificationTemplate 
                    title="CISCO Introduction to Cybersecurity"
                    image_url="https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png"
                    animation="animate__swing"
                    url="https://www.credly.com/badges/f79749d7-0e0c-4d6c-b44c-909b929bf19d"
                />
            </Col>


            <Col>
                <CertificationTemplate 
                    title="CISCO Cybersecurity Essentials"
                    image_url="https://images.credly.com/size/340x340/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png"
                    animation="animate__swing"
                    url="https://www.credly.com/badges/2b625407-7479-45ff-83b1-696ca9d4d12c"
                />
            </Col>


            <Col>
                <CertificationTemplate 
                    title="CISCO Introduction to Packet Tracer"
                    image_url="https://images.credly.com/size/340x340/images/09b6d58c-763a-4b40-aea1-787d8f46bbcd/Intro2PT.png"
                    animation="animate__swing"
                    url="https://www.credly.com/badges/f4f1df85-b9d4-40bd-b3c2-c365d6f592fd"
                />
            </Col>
        </Row>

        
            <h1>TryHackMe Badges</h1>
            <Row>
                <Col>
                    <CertificationTemplate 
                    title="cat linux.txt"
                    image_url="https://tryhackme.com/img/badges/linux.svg"
                    animation="animate__swing"
                    />
                </Col>


                <Col>
                    <CertificationTemplate 
                    title="Networking Nerd"
                    image_url="https://tryhackme.com/img/badges/networkfundamentals.svg"
                    animation="animate__swing"
                    />
                </Col>


                <Col>
                    <CertificationTemplate 
                        title="World Wide Web"
                        image_url="https://tryhackme.com/img/badges/howthewebworks.svg"
                        animation="animate__swing"
                    />
                </Col>


                <Col>
                    <CertificationTemplate 
                        title="7 Days Streak"
                        image_url="https://tryhackme.com/img/badges/streak7.svg"
                        animation="animate__swing"
                    />
                </Col>

                <Col>
                    <CertificationTemplate 
                        title="Webbed"
                        image_url="https://tryhackme.com/img/badges/webbed.svg"
                        animation="animate__swing"
                    />
                </Col>
            </Row>

    </Container>
    </div>
  )
}

export default Certifications