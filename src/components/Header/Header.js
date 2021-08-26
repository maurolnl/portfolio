import Link from "next/link";
import styles from "./Header.module.css";
import global_styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next'
import  Logo  from '../Logo/Logo'
import {IoLanguageOutline, IoDocumentTextOutline} from 'react-icons/io5'

const Header = () => {
  const router = useRouter();
  const {t} = useTranslation('common')
  const logoColor = "#5F9EA0"
  const enResume = "/cv/Mauro_Leonel_Quiroga_CV_English.pdf"
  const esResume = "/cv/Mauro_Leonel_Quiroga_CV_Spanish.pdf"

  return (
    <header className={styles.header}>
      <div className={global_styles.container}>
        <nav className={styles.nav_bar}>
          <div className={styles.logo_container}>
            {
              router.pathname !== "/" ? 
                <Link href="/" passHref>
                  <a>
                    <Logo strokeColor={logoColor} strokeWidth={"5"} isAnimated={true}/> 
                  </a>
                </Link>
                : ""
            }
          </div>
          <div className={styles.nav_bar_item_container}>
            <div
              className={
                router.pathname == "/Projects"
                  ? `${styles.nav_bar_item_active}`
                  : `${styles.nav_bar_item}`
              }
            >
              <Link href="/Projects" className={styles.link}>
                <a>{t('navbar-project')}</a>
              </Link>
            </div>
            <div
              className={
                router.pathname == "/Contact"
                  ? `${styles.nav_bar_item_active}`
                  : `${styles.nav_bar_item}`
              }
            >
              <Link href="/Contact">
                <a>{t('navbar-contact')}</a>
              </Link>
            </div>
            <div className={`${styles.nav_bar_item} ${styles.resume}`}>
              <Link 
                href={router.locale === 'en' ? enResume : esResume}
              >
                <a target="_blank" rel="nooper noreferrer">
                  {t('navbar-resume')}
                </a>
              </Link>
            </div>
            <div
              className={`${styles.nav_bar_item} ${styles.resume_container}`}
            >
              <Link href={router.locale === 'en' ? enResume : esResume}>
                <a className={`${styles.resume_link}`} target="_blank" rel="nooper noreferrer">
                  <IoDocumentTextOutline/>
                </a>
              </Link>
            </div>
            <div className={`${styles.lang} ${styles.nav_bar_item}`}>
            <Link 
              href={`${router.pathname}`}
              locale= {router.locale === 'en' ? 'es' : 'en'}
            >
              <a className={styles.lang_icon}><IoLanguageOutline/> {t('navbar-lan')} </a>
            </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
