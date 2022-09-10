import React from 'react'
import TerminalText from './TerminalText'
import styles from "../styles/previousInputs.module.css";

interface Props {
    inputs: string[]
}


const PreviousInputs = (props: Props) => {
  return (
    <>
        {props.inputs.map((input: string, index: number) => {
            return (
                <div className={styles.textDiv} key={index}>
                    <TerminalText /> 
                    <p className={styles.text}>{input}</p>
                </div>
            )
        })}
    </>
  )
}

export default PreviousInputs