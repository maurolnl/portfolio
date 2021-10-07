import global_styles from "../../styles/Home.module.css";
import styles from "./Contact.module.css";
import { useState } from "react";
import Form from '../Form/Form'
import ResultMessage from "../ResultMessage/ResultMessage";
import {sendEmail} from '../../services/SendEmail'
import useSendEmail from "../../hooks/useSendEmail";
import { useTranslation } from "react-i18next";

const ContactMe = () => {

  const NOT_SENDED = 1;

  const { t } = useTranslation('contact');
  const [target, setTarget] = useState(null)

  const {loading, sended} = useSendEmail(target)

  const handleEmailSend = (_target) => {
    setTarget(_target)
  };

  return (
    <section className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}> {t('contact-title')} </h1>
      {
        sended === NOT_SENDED ? 
          <Form
            sendEmail={handleEmailSend}
            loading={loading}
          />
        : <ResultMessage sended={sended}/> 
      }
    </section>
  );
};

export default ContactMe;