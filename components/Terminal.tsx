import React, {useRef, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/terminal.module.css";
import PreviousInputs from './PreviousInputs';
import TerminalText from './TerminalText';


const Terminal = () => {
    const promptRef = useRef(null);
    const [inputs, setInputs] = React.useState([] as string[]);

    //make a function that stores the event value in a stack
    const handleInput = (e :any) => {
        if (e.key === "Enter") {
            setInputs([...inputs, e.target.value]);
            e.target.value = "";
        }
    };

    const scrollToBottom = () => {
        //@ts-ignore-next-line
        promptRef.current.scrollIntoView({ behavior: "smooth" })
      }

    useEffect(() => {
        scrollToBottom()
      }, [inputs]);
    

    return (
        //@ts-ignore-next-line
        <div className={styles.bg} onClick={(e) => { promptRef.current.focus()}}>
            <Container>
                <PreviousInputs inputs={inputs}/>
            </Container>

            <Container className={styles.container}>
                <TerminalText />
                <input 
                    ref={promptRef}
                    className={styles.prompt} 
                    type="text" 
                    autoFocus={true} 
                    onKeyPress={(e) => {handleInput(e)}}
                />
            </Container>
        </div>
    )
}

export default Terminal