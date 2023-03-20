/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TerminalText from "./TerminalText";
import styles from "../styles/css/previousInputs.module.css";

interface Props {
	inputs: string[];
	pressedEnter: boolean;
}

const checkCommand = (
	input: string,
	index: number,
	length: number,
	pressedEnter: boolean
) => {
	input = input.toLowerCase();
	if (input === "help") {
		return (
			<div>
				<ul>
					<li className={styles.text}>resume - view my resume/cv</li>
					<li className={styles.text}>help - lists all commands</li>
					<li className={styles.text}>clear - clears the terminal</li>
					<li className={styles.text}>about - brief info about me</li>
					<li className={styles.text}>twitter - find me on Twitter</li>
					<li className={styles.text}>instagram - find me on Instagram</li>
					<li className={styles.text}>github - find me on GitHub</li>
					<li className={styles.text}>linkedin - find me on LinkedIn</li>
				</ul>
			</div>
		);
	} else if (input === "about") {
		const ascii = `
█▀▀ ▀█▀ █▄░█ █▄▀ ▄▀█ ▄▀█ █▄░█
█▄▄ ░█░ █░▀█ █░█ █▀█ █▀█ █░▀█`;

		return (
			<div>
				<ul>
					<pre style={{ color: "#fff", textAlign: "left" }}>{ascii}</pre>
					<p className={styles.text}>
						I'm a Software Engineer with 1.5 years of experience, along with 3
						years of experience in both building communities, speaking at large
						events and teaching technical topics.
					</p>
					<p className={styles.text}>
						As I've said I'm a community person and I take a part in many
						differnt technical communities like Microsoft Learn Student
						Ambassadors, Postman Student leaders and Google Developer Student
						Clubs.
					</p>
					<p className={styles.text}>
						As of now I've hosted more than 30 workshops and technical talks to
						over many students worldwide. I'm a Gold Microsoft Learn Student
						Ambassador and the first Postman Student Leader.
					</p>
					<p className={styles.text}>
						My main interests are web development and web application security.
					</p>
				</ul>
			</div>
		);
	} else if (input === "welcome") {
		return (
			<div>
				<ul>
					<p className={styles.text}>Welcome to my portfolio website!</p>
					<p className={styles.text}>
						I developed this site to emulate a terminal like experience.
					</p>
					<p className={styles.text}>
						Type "help" to see all commands and learn more about me!
					</p>
				</ul>
			</div>
		);
	} else if (input === "resume") {
		if (index === length - 1 && pressedEnter) {
			window.open(
				"https://drive.google.com/file/d/1ns3H3VFZop_z6z9WiohJxsFD6uN6YSEn/view?usp=sharing",
				"Resume"
			);
		}
		return (
			<div>
				<ul>
					<p className={styles.text}>Opening Resume...</p>
				</ul>
			</div>
		);
	} else if (input === "github") {
		if (index === length - 1 && pressedEnter) {
			window.open("https://github.com/ctnkaan", "GitHub");
		}
		return (
			<div>
				<ul>
					<p className={styles.text}>Opening GitHub...</p>
				</ul>
			</div>
		);
	} else if (input === "instagram" || input === "ınstagram") {
		if (index === length - 1 && pressedEnter) {
			window.open("https://instagram.com/cetinkaantaskingenc/", "Instagram");
		}
		return (
			<div>
				<ul>
					<p className={styles.text}>Opening Instagram...</p>
				</ul>
			</div>
		);
	} else if (input === "linkedin") {
		if (index === length - 1 && pressedEnter) {
			window.open(
				"https://www.linkedin.com/in/cetinkaantaskingenc/",
				"LinkedIn"
			);
		}
		return (
			<div>
				<ul>
					<p className={styles.text}>Opening LinkedIn...</p>
				</ul>
			</div>
		);
	} else if (input === "twitter") {
		if (index === length - 1 && pressedEnter) {
			window.open("https://twitter.com/cetinkaantweets", "Twitter");
		}
		return (
			<div>
				<ul>
					<p className={styles.text}>Opening Twitter...</p>
				</ul>
			</div>
		);
	} else {
		return <p className={styles.error}>invalid command, try writing "help"</p>;
	}
};

const PreviousInputs = (props: Props) => {
	return (
		<>
			{props.inputs.map((input: string, index: number) => {
				return (
					<div key={index}>
						<div className={styles.textDiv} key={index}>
							<TerminalText />
							<p className={styles.text}>{input}</p>
						</div>
						{checkCommand(
							input,
							index,
							props.inputs.length,
							props.pressedEnter
						)}
					</div>
				);
			})}
		</>
	);
};

export default PreviousInputs;
