import global_styles from "../../styles/Home.module.css";
import styles from "./Main.module.css";
import { useTranslation } from 'react-i18next'
import LinkStyled from '../LinkStyled/LinkStyled'

const Main = () => {
  const { t } = useTranslation('landingPage')
  return (
    <main className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}>{t('aboutme-title')}</h1>
      <p className={global_styles.paragraph}>
        {t('aboutme-paragraph-1')} 
        <LinkStyled text="Raona" link="https://www.raona.com/"/>
        {t('aboutme-paragraph-1-2')} 
      </p>
      <p className={global_styles.paragraph}>
        {t('aboutme-paragraph-2')} 
      </p>
    </main>
  );
};

export default Main;
