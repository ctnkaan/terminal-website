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
          <li> <a href=""> <SiLinkedin/> </a> </li>
          <li> <a href=""> <SiGithub/> </a> </li>
          <li> <a href=""> <SiTwitter/> </a> </li>
          <li> <a href=""> <SiInstagram/> </a> </li>
        </ul>
      </div>

      <div className={FooterStyles.footerBottom}>
        <p>Copyright &copy; {getYear()} <a href="#main">Çetin Kaan Taşkıngenç</a></p>
      </div>

    </footer>
  )
}

export default Footer