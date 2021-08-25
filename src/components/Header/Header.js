import Link from "next/link";
import styles from "./Header.module.css";
import global_styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next'
import  Logo  from '../Logo/Logo'
import {IoLanguageOutline} from 'react-icons/io5'

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
            <Link href="/" passHref>
              <a>
                <Logo strokeColor={logoColor} strokeWidth={"5"} isAnimated={true}/> 
              </a>
            </Link>
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
                <a target="_blank" rel="nooper noreferrer">
                  <svg
                    viewBox="0 0 132 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33 102H100H32M44 127H87M39 127H92M1.5 1.5H114.727L130.5 21.4793V166.5H1.5V1.5ZM4.5 163.5V4.5H112.5V23.5H127.5V163.5H4.5ZM115.5 7.32074L125.905 20.5H115.5V7.32074ZM63.7695 74.0068C63.4971 76.3379 62.6343 78.1392 61.1812 79.4106C59.7381 80.672 57.8158 81.3027 55.4141 81.3027C52.8105 81.3027 50.7217 80.3693 49.1475 78.5024C47.5833 76.6356 46.8013 74.138 46.8013 71.0098V68.8906C46.8013 66.8421 47.1646 65.0409 47.8911 63.4868C48.6278 61.9328 49.6672 60.742 51.0093 59.9146C52.3514 59.077 53.9054 58.6582 55.6714 58.6582C58.0125 58.6582 59.8895 59.3141 61.3022 60.626C62.715 61.9277 63.5374 63.734 63.7695 66.0449H60.8481C60.5959 64.2891 60.0459 63.0176 59.1982 62.2305C58.3607 61.4434 57.1851 61.0498 55.6714 61.0498C53.8146 61.0498 52.3564 61.736 51.2969 63.1084C50.2474 64.4808 49.7227 66.4334 49.7227 68.9663V71.1006C49.7227 73.4922 50.2222 75.3944 51.2212 76.8071C52.2202 78.2199 53.6178 78.9263 55.4141 78.9263C57.0286 78.9263 58.2648 78.563 59.1226 77.8364C59.9904 77.0998 60.5656 75.8232 60.8481 74.0068H63.7695ZM75.0464 77.1401L81.3433 58.9609H84.522L76.3481 81H73.7749L65.6162 58.9609H68.7798L75.0464 77.1401Z"
                      stroke="black"
                      strokeWidth="3"
                    />
                  </svg>
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
