import type { NextPage } from "next";
import Terminal from "../components/Terminal";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.marginDiv}></div>
      <Terminal />
    </div>
  );
};

export default Home;
