import styles from "./Project.module.css";
import global_styles from "../../styles/Home.module.css";
import Image from "next/image";
import todoListPic from "../../../public/projects/todoList.jpg";
import CoronaVirus from "../../../public/projects/coronaVirus.png";
import { useTranslation } from 'react-i18next'
import LinkStyled from "../LinkStyled/LinkStyled";

const Project = () => {
  const { t } = useTranslation('projects')
  return (
    <section
      className={`${styles.container_projects} ${global_styles.container}`}
    >
      <h1 className={global_styles.title}>{t('project-title-front')}</h1>
      {
        <>
          <div className={global_styles.gridRows}>
            <Image
              src={CoronaVirus}
              alt="Todo"
              className={styles.projectImage}
            ></Image>
            <h1 className={styles.articleTitle}>{t('project-1front-title')}</h1>
            <p className={global_styles.paragraph_sm}>
              {t('project-1front-paragraph-1')}
              <LinkStyled text="wouter" link="https://github.com/molefrog/wouter#readme"/>
              {t('project-1front-paragraph-2')} 
              <LinkStyled text="react router" link="https://reactrouter.com/"/>
              {t('project-1front-paragraph-3')}
              <span className={styles.descriptionAccent}>{t('project-1accent-1')}</span>
              {t('project-1front-paragraph-4')}
              <LinkStyled text="covid19api" link="https://covid19api.com/"/>
              {t('project-1front-paragraph-5')}
              <LinkStyled text="our world in data" link="https://ourworldindata.org/"/>
              {t('project-1front-paragraph-6')} 
              <span className={styles.descriptionAccent}>{t('project-1accent-2')}</span> 
              {t('project-1front-paragraph-7')}
              <span className={styles.descriptionAccent}>{t('project-1accent-3')}</span>
              {t('project-1front-end')}
              <LinkStyled text={t('project-site')} link="https://covid.maurolquiroga.site/"/>
              {t('project-1front-end-1')} 
              <LinkStyled text={t('project-here')} link="https://github.com/maurolnl/corona-tracker"/>
              {"."}
            </p>
          </div>
          <div className={global_styles.gridRows}>
            <Image
              src={todoListPic}
              alt="Todo"
              className={styles.projectImage}
            ></Image>
            <h1 className={styles.articleTitle}>Yet another TODO list</h1>
            <p className={global_styles.paragraph_sm}>
              {t('project-2front-paragraph-1')} 
              <span className={styles.descriptionAccent}>
                {t('project-2accent-1')} 
              </span>
              {t('project-2front-paragraph-2')} 
              <LinkStyled text="TypeScript" link="https://www.typescriptlang.org/"/>
              {t('project-2front-paragraph-3')} 
              <LinkStyled text="Bootstrap" link="https://getbootstrap.com/"/>
              {t('project-2front-paragraph-4')} 
              <span className={styles.descriptionAccent}>
                {t('project-2accent-2')} 
              </span>
              {t('project-1front-end')}
              <LinkStyled text={t('project-site')} link="https://covid.maurolquiroga.site/"/>
              {t('project-1front-end-1')} 
              <LinkStyled text={t('project-here')} link="https://github.com/maurolnl/corona-tracker"/>
              {"."}
            </p>
          </div>
        </>
      }
    </section>
  );
};

export default Project;
