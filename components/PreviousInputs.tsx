import React from 'react'
import TerminalText from './TerminalText'
import styles from "../styles/previousInputs.module.css";

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
            </ul>
        </div>
        );
    } else {
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
        })}
    </>
  )
}

export default PreviousInputs