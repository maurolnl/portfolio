import styles from "./Hero.module.css";
import global_styles from "../../styles/Home.module.css";
import { useRef } from "react";
import Logo from '../Logo/Logo'

const Hero = () => {
  const leng = useRef(null);
  const logoColor = "#5F9EA0"

  return (
    <section className={styles.landing_section}>
      <div className={styles.logo}>
        <Logo strokeColor={logoColor} strokeWidth={"5"} isAnimated={false}/>
      </div>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title_hello}>
          Hello, World! <br />
          I&apos;m,
          <strong className={styles.hero_title}> Mauro Leonel Quiroga</strong>.
        </h1>
        <p className={styles.hero_description}>
          A passionate Web Developer, <br /> working mostly on{" "}
          <strong className={global_styles.wordAccent}>Front End</strong>.
        </p>
       
 
      </div>
    </section>
  );
};

export default Hero;
