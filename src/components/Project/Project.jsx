import styles from "./Project.module.css";
import global_styles from "../../styles/Home.module.css";
import Image from "next/image";
import todoListPic from "../../../public/projects/todoList.jpg";
import CoronaVirus from "../../../public/projects/coronaVirus.png";

const Project = () => {
  return (
    <section
      className={`${styles.container_projects} ${global_styles.container}`}
    >
      <h1 className={global_styles.title}>Some Learning Projects</h1>
      {
        <>
          <div className={global_styles.gridRows}>
            <Image
              src={CoronaVirus}
              alt="Todo"
              className={styles.projectImage}
            ></Image>
            <h1 className={styles.articleTitle}>Corona Virus Tracker</h1>
            <p>
              This project was built to learn about pagination in this case with
              a very light weight library named{" "}
              <a
                href="https://github.com/molefrog/wouter#readme"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >
                wouter
              </a>{" "}
              which is a very good alternative to react router. One of my main
              problems was the{" "}
              <p className={styles.descriptionAccent}>data input</p>, in a first
              approach I found an API called{" "}
              <a
                href="https://covid19api.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >
                covid19api
              </a>{" "}
              which had an acceptable documentation but it lacked information
              about the vaccinations so with this in mind I searched the data
              input of the google covid information tool and I found{" "}
              <a
                href="https://ourworldindata.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >
                our world in data
              </a>{" "}
              in this case I had all the information that I needed (and much
              much more) but the problem was that this data was in raw format so
              I had to fetch this data{" "}
              <p className={styles.descriptionAccent}>carefully</p> to not ruin
              the <p className={styles.descriptionAccent}>performance</p>.{" Go to "}
              <a
                href="https://github.com/molefrog/wouter#readme"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >site</a>{" or just view the code "}
              <a
                href="https://github.com/molefrog/wouter#readme"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >here</a>
            </p>
          </div>
          <div className={global_styles.gridRows}>
            <Image
              src={todoListPic}
              alt="Todo"
              className={styles.projectImage}
            ></Image>
            <h1 className={styles.articleTitle}>Yet another TODO list</h1>
            <p>
              Well, this project is the prove that you{" "}
              <p className={styles.descriptionAccent}>
                don&apos;t need to build huge and complex stuff to learn the
                basics of technologies
              </p>
              , with this todo list I was able to learn the basics of react in a
              very first iteration of it, then I took it back and decided to re
              do it in{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >
                typescript
              </a>{" "}
              and add{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >
                bootstrap
              </a>{" "}
              for better styling, again for learning purpose. I ended up
              struggling a bit at the beggining because all of the types stuff
              and my development performance decreased a lot, but when I was
              more into the project I realized how worth was to implement it in
              typescript, at the end my development performance increased a lot
              because of{" "}
              <p className={styles.descriptionAccent}>
                all the benefits and how convinent are the types
              </p>
              .{" Go to "}
              <a
                href="https://github.com/molefrog/wouter#readme"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >site</a>{" or just view the code "}
              <a
                href="https://github.com/molefrog/wouter#readme"
                target="_blank"
                rel="noopener noreferrer"
                className={`${global_styles.link} `}
              >here</a>
            </p>
          </div>
        </>
      }
    </section>
  );
};

export default Project;
