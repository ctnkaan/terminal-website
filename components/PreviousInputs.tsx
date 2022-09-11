/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import TerminalText from './TerminalText'
import styles from "../styles/css/previousInputs.module.css";

interface Props {
    inputs: string[]
}

const checkCommand = (input: string) => {
    if (input === "help") {
        return ( 
        <div style={{marginLeft: "1.5rem"}}>
            <ul>
                <li className={styles.text}>help - lists all commands</li>
                <li className={styles.text}>clear - clears the terminal</li>
                <li className={styles.text}>welcome - welcome message</li>
                <li className={styles.text}>about - brief info about me</li>
                <li className={styles.text}>socials - find me on social media</li>
                <li className={styles.text}>exp / experience - lists my work experience</li>
            </ul>
        </div>
        );
    } else if (input === "about") {
        const ascii = `
█▀▀ ▀█▀ █▄░█ █▄▀ ▄▀█ ▄▀█ █▄░█
█▄▄ ░█░ █░▀█ █░█ █▀█ █▀█ █░▀█`;

        return (
        <div style={{marginLeft: "1.5rem"}}>
            <ul>
                <pre style={{color:"#fff", textAlign:"left"}}>{ascii}</pre>
                <p className={styles.text}>Hi! I'm Çetin Kaan Taşkıngenç, a final year Management Information Systems student in Yasar University that loves computer science.</p>
                <p className={styles.text}>I'm a community person and I take a part in many differnt technical communities like Microsoft Learn Student Ambassadors, Postman Student leaders and Google Developer Student Clubs.</p>
                <p className={styles.text}>I try to contribute as much as I can to the community. As of now I've hosted more than 30 workshops and technical talks to over many students worldwide.</p>
                <p className={styles.text}>I'm mostly interested in web development and cyber security.</p>
            </ul>
        </div>
        );

    } else if (input === "welcome") {
        return (
        <div style={{marginLeft: "1.5rem"}}>
            <ul>
                <p className={styles.text}>Welcome to my portfolio website!</p>
                <p className={styles.text}>I developed this site to emulate a terminal like experience.</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className={styles.text}>Type "help" to see all commands and learn more about me!</p>
            </ul>
        </div>
        );
    } else if (input === "socials") {
        return (
        <div style={{marginLeft: "1.5rem"}}>
            <ul>
                <p className={styles.text}>You can find me on:</p>
                <p className={styles.text}>Github: <a href="https://github.com/ctnkaan" target="_blank" rel="noreferrer"> ctnkaan </a> </p>
                <p className={styles.text}>LinkedIn: <a href="https://www.linkedin.com/in/ctnkaan/" target="_blank" rel="noreferrer">Çetin Kaan Taşkıngenç</a></p>
                <p className={styles.text}>Twitter: <a href="https://twitter.com/cetinkaantweets" target="_blank" rel="noreferrer">@cetinkaantweets</a></p>
                <p className={styles.text}>YouTube: <a href="https://www.youtube.com/c/CetinKaanTech/" target="_blank" rel="noreferrer">Cetin Kaan</a></p>
            </ul>
        </div>
        );
    } else if (input === 'experience' || input === 'exp') {
        return (
            <div style={{marginLeft: "1.5rem"}}>
                <h3 className={styles.text}><strong>MindWorks</strong></h3>
                <p className={styles.text}>Jr. Software Development Specialist</p>
                <p className={styles.text}>May 2022 – Present</p>
                <ul>
                    <p className={styles.text}> ● Developed Microsoft Teams solutions using React.js and TypeScript to improve developer productivity.</p>
                    <p className={styles.text}> ● Organized a 7 week long bootcamp for students who want to get started with software development.</p>
                </ul>

                <h3 className={styles.text}><strong>Yaşar University</strong></h3>
                <p className={styles.text}>Undergraduate Asst. Lecturer</p>
                <p className={styles.text}>Oct 2021 – Jun 2022</p>
                <ul>
                    <p className={styles.text}>● Assisted C Programming 1, C Programming 2, Java Programming and Cyber Security courses.</p>
                    <p className={styles.text}>● Hosted a capture the flag event for the cyber security course.</p>
                </ul>

                <h3 className={styles.text}><strong>Univerlist</strong></h3>
                <p className={styles.text}>Software Engineering Intern</p>
                <p className={styles.text}>Mar 2021 – Sep 2021</p>
                <ul>
                    <p className={styles.text}>● Implemented front-end components to 2 large scale web applications using React.js, GraphQL and Docker.</p>
                    <p className={styles.text}>● Wrote 2 internal documentations for 2 large projects.</p>
                </ul>
            </div>
        )

    } else {
        // eslint-disable-next-line react/no-unescaped-entities
        return <p className={styles.error}>invalid command, try writing "help"</p>;
    }
}

const PreviousInputs = (props: Props) => {
  return (
    <>
        {props.inputs.map((input: string, index: number) => {
            return (
                <>
                    <div className={styles.textDiv} key={index}>
                        <TerminalText />
                        <p className={styles.text}>{input}</p>
                    </div>
                    {checkCommand(input)}
                </>
            )
        })
        }

    </>
  )
}

export default PreviousInputs