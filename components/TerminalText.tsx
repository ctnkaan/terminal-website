import React from "react";
import styles from "../styles/css/terminalText.module.css";

const TerminalText = () => {
	return (
		<p className={styles.terminalText}>
			<span className={styles.user}>ctnkaan</span>@
			<span className={styles.workspace}>portfolio</span>:~$
		</p>
	);
};

export default TerminalText;
