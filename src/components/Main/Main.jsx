import global_styles from "../../styles/Home.module.css";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}>About Me</h1>
      <p className={global_styles.paragraph}>
        I&apos;m a passionate about software development, looking to learn and
        improve constantly. I have experience working at{" "}
        <a
          href="https://www.raona.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${global_styles.link} `}
        >
          Raona
        </a>
        {", "}
        developing web applications both on Frontend in React and on the Backend
        with C#. I&apos;m now searching for a team to grow with and continue
        advancing my professional career.
      </p>
      <p className={global_styles.paragraph}>
        On my personal side, I really like photography and I tend to go for a
        walks on my free time and try to take advantage of it and take some
        photos. Besides that I love music and I actually play the guitar, I
        honestly can&apos;t code without music playing in the background.
      </p>
    </main>
  );
};

export default Main;
