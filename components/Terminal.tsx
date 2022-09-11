import React, {useState, useRef, useEffect} from 'react'
import styles from "../styles/terminal.module.css";
import PreviousInputs from './PreviousInputs';
import TerminalText from './TerminalText';


const Terminal = () => {
    const promptRef = useRef(null);
    const [inputs, setInputs] = useState([] as string[]);


    const commands = new Map();
    commands.set("help", "help - list all commands");
    commands.set("clear", "clear - clear the terminal");
    commands.set("welcome", "welcome message");
    commands.set("about", "about me");


    //make a function that stores the event value in a stack
    const handleInput = (e :any) => {

        const clear = () => {
            setInputs([]);
        }

        const help = () => {
            
        }


        if (e.key === "Enter") {

            const input = e.target.value;
            setInputs([...inputs, input]);

            if (commands.get(input)) {
                if (input === "clear") {
                    clear();
                }
                else if (input === "help") {
                    help();
                }
            }


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

    useEffect(() => {
        setInputs([...inputs, "welcome"]);
        //@ts-ignore-next-line
        promptRef.current.focus()
      }, []);
    

    return (
        //@ts-ignore-next-line
        <div className={styles.bg} onClick={(e) => { promptRef.current.focus()}}>


            <div>
                <PreviousInputs inputs={inputs}/>
            </div>

            <div className={styles.container}>
                <TerminalText />
                <input 
                    ref={promptRef}
                    className={styles.prompt} 
                    type="text" 
                    autoFocus
                    onKeyPress={(e) => {handleInput(e)}}
                />
            </div>
        </div>
    )
}

export default Terminal