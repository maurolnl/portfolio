import global_styles from "../../styles/Home.module.css";
import styles from "./Contact.module.css";
import { useState } from "react";
import Form from '../Form/Form'
import ResultMessage from "../ResultMessage/ResultMessage";
import {sendEmail} from '../../services/SendEmail'

const ContactMe = () => {
  const NOT_SENDED = 1
  const SENDED_SUCCESSFULLY = 2
  const ERROR_SENDING = 3

  const [sended, setSended] = useState(NOT_SENDED);

  const handleEmailSend = (target) => {
    sendEmail(target).then(result => {
      if(result.text === "OK") {
        setSended(SENDED_SUCCESSFULLY);
      } else {
        setSended(ERROR_SENDING);
      }
    });
  };

  return (
    <section className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}>Contact Me</h1>
      {
        sended === NOT_SENDED ? 
          <Form
            sendEmail={handleEmailSend}
          />
        : <ResultMessage sended={sended}/> 
      }
    </section>
  );
};

export default ContactMe;