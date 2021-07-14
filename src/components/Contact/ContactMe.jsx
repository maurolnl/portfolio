import global_styles from "../../styles/Home.module.css";
import styles from "./Contact.module.css";
import { useState } from "react";
import Form from '../Form/Form'
import ResultMessage from "../ResultMessage/ResultMessage";
import {sendEmail} from '../../services/SendEmail'

const ContactMe = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [sended, setSended] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNameChange = (event) => {
    const name = event.target.value;
    setNewName(name);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setNewEmail(email);
  };

  const handleMessageChange = (event) => {
    const message = event.target.value;
    setNewMessage(message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;

    setLoading(true);
    sendEmail(target).then(result => {
      if(result.text === "OK") {
        setSended(2);
        setLoading(false);
      } else {
        setSended(3);
        setLoading(false);
      }
    });

    setNewName("");
    setNewEmail("");
    setNewMessage("");
  };

  return (
    <section className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}>Contact Me</h1>
      {
        sended === 1 ? 
          <Form
            handleSubmit={handleSubmit}
            handleEmailChange={handleEmailChange}
            handleNameChange={handleNameChange}
            handleMessageChange={handleMessageChange}
            newName={newName}
            newEmail={newEmail}
            newMessage={newMessage}
            loading={loading}
          />
        : <ResultMessage sended={sended}/> 
      }
    </section>
  );
};

export default ContactMe;