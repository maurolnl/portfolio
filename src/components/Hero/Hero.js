import styles from "./Hero.module.css";
import global_styles from "../../styles/Home.module.css";
import { useRef } from "react";
import Logo from '../Logo/Logo'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const leng = useRef(null);
  const logoColor = "#5F9EA0"

  const { t } = useTranslation('landingPage')

  return (
    <section className={styles.landing_section}>
      <div className={styles.logo}>
        <Logo strokeColor={logoColor} strokeWidth={"5"} isAnimated={false}/>
      </div>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title_hello}>
          {t('hero-greeting')} <br />
          {t('hero-im')}
          <strong className={styles.hero_title}>{t('hero-name')}</strong>.
        </h1>
        <p className={styles.hero_description}>
          {t('hero-description-1')}
          <br/>
          {t('hero-description-2')}
          <strong className={global_styles.wordAccent}>{t('hero-description-accent')}</strong>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
