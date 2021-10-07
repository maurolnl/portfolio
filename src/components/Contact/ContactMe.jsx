import global_styles from "../../styles/Home.module.css";
import styles from "./Contact.module.css";
import { useState } from "react";
import Form from '../Form/Form'
import ResultMessage from "../ResultMessage/ResultMessage";
import {sendEmail} from '../../services/SendEmail'
import useSendEmail from "../../hooks/useSendEmail";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const NOT_SENDED = 1
  const SENDED_SUCCESSFULLY = 2
  const ERROR_SENDING = 3

  const { t } = useTranslation('contact');
  const [sended, setSended] = useState(NOT_SENDED);
  //  const [loading, setLoading] = useState(true);
  const [target, setTarget] = useState(null)

  const {loading, response} = useSendEmail(target)

  const handleEmailSend = (_target) => {
    setTarget(_target)
    if(response) {
      response === "OK" ? setSended(SENDED_SUCCESSFULLY) : setSended(ERROR_SENDING)
    }
    /*sendEmail(target).then(result => {
      if(result.text === "OK") {
        setSended(SENDED_SUCCESSFULLY);
      } else {
        setSended(ERROR_SENDING);
      }
    });
    setLoading(false);*/

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