import global_styles from "../../styles/Home.module.css";
import styles from "./Contact.module.css";
import { useState } from "react";
import Form from '../Form/Form'
import ResultMessage from "../ResultMessage/ResultMessage";
import {sendEmail} from '../../services/SendEmail'

const ContactMe = () => {
  const notSended = 1
  const sendedSuccessfully = 2
  const errorSending = 3

  const [sended, setSended] = useState(notSended);

  const handleEmailSend = (target) => {
    sendEmail(target).then(result => {
      if(result.text === "OK") {
        setSended(sendedSuccessfully);
      } else {
        setSended(errorSending);
      }
    });
  };

  return (
    <section className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}>Contact Me</h1>
      {
        sended === notSended ? 
          <Form
            sendEmail={handleEmailSend}
          />
        : <ResultMessage sended={sended}/> 
      }
    </section>
  );
};

export default ContactMe;