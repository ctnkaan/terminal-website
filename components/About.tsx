import React from 'react'
import developerGif from "../assets/Developer.gif"
import Image from 'next/image'
import AboutStyles from "../styles/About.module.scss"

function About() {
  return (
    <div>
      {/* About me*/},
      <div className={AboutStyles.about}>
          <h1>About Me</h1>

          <div className={AboutStyles.row}>
            <Image src={developerGif} alt="Developer Gif" />
            <p>
              I am a full stack developer with a passion for learning and
              problem solving. I have a background in business and finance, and
              have worked in the financial services industry for over 10 years.
              I am currently working at a startup in the financial services
              industry, where I am building a web application to help small
              businesses manage their finances.
            </p>
          </div>

        </div>
    </div>
  )
}

export default About