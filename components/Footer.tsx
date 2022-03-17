import React from 'react'
import FooterStyles from "../styles/Footer.module.scss";
import {
  SiLinkedin, SiGithub, SiTwitter, SiInstagram, SiFacebook,
} from "react-icons/si";

function getYear() {
    return new Date().getFullYear();
}

function Footer() {
  return (
    <footer id="footer" className={FooterStyles.footer}>
      <div className={FooterStyles.footerContent}>
        <h3>Çetin Kaan Taşkıngenç</h3>
        <p>Do follow me on my socials down below.</p>
        <ul className={FooterStyles.socials} style={{"paddingLeft": 0}}>
          <li> <a href="https://www.linkedin.com/in/cetinkaantaskingenc"> <SiLinkedin/> </a> </li>
          <li> <a href="https://github.com/ctnkaan"> <SiGithub/> </a> </li>
          <li> <a href="https://twitter.com/CetinKaanTweets"> <SiTwitter/> </a> </li>
          <li> <a href="https://www.instagram.com/cetinkaantaskingenc/"> <SiInstagram/> </a> </li>
        </ul>
      </div>

      <div className={FooterStyles.footerBottom}>
        <p>Copyright &copy; {getYear()} <a href="#main">Çetin Kaan Taşkıngenç</a></p>
      </div>

    </footer>
  )
}

export default Footer