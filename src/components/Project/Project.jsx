import styles from "./Project.module.css";
import global_styles from "../../styles/Home.module.css";
import Image from "next/image";
import todoListPic from "../../../public/projects/todoList.jpg";
import CoronaVirus from "../../../public/projects/coronaVirus.png";
import StorageImg from "../../../public/projects/photoupload.png";
import UNSLApisImg from "../../../public/projects/APISUNSL.png";
import { useTranslation } from 'react-i18next'
import LinkStyled from "../LinkStyled/LinkStyled";
import VisitCodeMsg from "../VisitCodeMsg/VisitCodeMsg";

const Project = () => {
  const linkRepoCovid = "https://github.com/maurolnl/corona-tracker"
  const linkRepoTODO = "https://github.com/maurolnl/react-tasks"
  const linkRepoPhotoUpload = "https://github.com/maurolnl/photo-gallery"
  const linkRepoAPIs = "https://github.com/maurolnl?tab=repositories"

  const linkWebCovid = "https://covid.maurolquiroga.site/"
  const linkWebTODO = "https://tasks.maurolquiroga.site/"

  const { t } = useTranslation('projects')
  return (
    <section
      className={`${styles.container_projects} ${global_styles.container}`}
    >
      <>
        <h1 className={global_styles.title}>{t('project-title-front')}</h1>
        <div className={global_styles.grid_row}>
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
            <VisitCodeMsg isFullMsg={true} linkRepo={linkRepoCovid} linkWeb={linkWebCovid}/>  
            {"."}
          </p>
        </div>
        <div className={global_styles.grid_row}>
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
            <VisitCodeMsg isFullMsg={true} linkRepo={linkRepoTODO} linkWeb={linkWebTODO}/>  
            {"."}
          </p>
        </div>
        <h1 className={global_styles.title}>{t('project-title-back')}</h1>
        <div className={global_styles.grid_column}>
          <Image
            src={StorageImg}
            alt="Photo upload"
            className={`${styles.projectImage}`}
          ></Image>
          <div className={`${global_styles.grid_row} `}>
            <h1 className={`${styles.articleTitle} ${styles.articleTitleRow}`}>Store Files Locally</h1>
            <p className={`${global_styles.paragraph_sm} ${styles.back_project_paragraph}`}>
              {t('project-1back-paragraph-1')}
              <LinkStyled text="NodeJS" link="https://nodejs.org/"/>
              {t('project-1back-paragraph-2')}
              <LinkStyled text="Multer" link="https://www.npmjs.com/package/multer"/>{", "}
              <LinkStyled text="JWT" link="https://jwt.io/"/>{", "}
              <LinkStyled text="Bcrypt" link="https://www.npmjs.com/package/bcrypt"/>{", "}
              <LinkStyled text="Mongoose" link="https://mongoosejs.com/"/>
              {t('project-1back-paragraph-3')}
              <LinkStyled text="TypeScript" link="https://www.typescriptlang.org/"/>
              <VisitCodeMsg isFullMsg={false} linkRepo={linkRepoPhotoUpload}/>  
            </p>
          </div>
        </div>
        <div className={global_styles.grid_column}>
          <Image
            src={UNSLApisImg}
            alt="ApisUnsl"
            className={`${styles.projectImage}`}
          ></Image>
          <div className={`${global_styles.grid_row}`}>
            <h1 className={`${styles.articleTitle} ${styles.articleTitleRow}`}>Transfer Currency APIs</h1>
            <p className={`${global_styles.paragraph_sm} ${styles.back_project_paragraph}`}>
              {t('project-2back-paragraph-1')}
              <LinkStyled text="MeLi" link="https://www.mercadolibre.com.ar/"/>
              {t('project-2back-paragraph-2')}
              <LinkStyled text="Java" link="https://www.oracle.com/ar/java/"/>{", "}
              <LinkStyled text="Springboot" link="https://spring.io/projects/spring-boot"/>
              {t('project-2back-paragraph-3')}
              <LinkStyled text="Guava Cache" link="https://guava.dev/releases/21.0/api/docs/com/google/common/cache/Cache.html"/>{"."}
              <VisitCodeMsg isFullMsg={false} linkRepo={linkRepoAPIs}/>  
            </p>
          </div>
        </div>
      </>
    </section>
  );
};

export default Project;
