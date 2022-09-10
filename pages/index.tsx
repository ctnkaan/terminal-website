import type { NextPage } from "next";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.bg}>
      <h1 style={{color: "red"}}>Hello World</h1>
      
    </div>
  );
};

export default Home;
