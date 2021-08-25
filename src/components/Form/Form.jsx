import global_styles from "../../styles/Home.module.css";
import styles from "../Contact/Contact.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = ({sendEmail}) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('contact');

  const btnMessage = t('contact-btn')
  const btnMessageLoading = t('contact-btn-loading');

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
    sendEmail(target);
    setLoading(false);

    setNewName("");
    setNewEmail("");
    setNewMessage("");
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit} autoComplete="off">
      <p>
        <label className={global_styles.contact_label}>
          {t('contact-name')}:
          <input
            onChange={handleNameChange}
            type="text"
            required="required"
            value={newName}
            name="Name"
            placeholder={t('contact-name-ph')}
          ></input>
        </label>
      </p>
      <p>
        <label className={global_styles.contact_label}>
          {t('contact-email')}:
          <input
            onChange={handleEmailChange}
            type="text"
            required="required"
            value={newEmail}
            name="Email"
            placeholder={t('contact-email-ph')}
          ></input>
        </label>
      </p>
      <p>
        <label className={global_styles.contact_label}>
          {t('contact-msg')}:
          <textarea
            onChange={handleMessageChange}
            required="required"
            value={newMessage}
            name="message"
            placeholder={t('contact-msg-ph')}
          ></textarea>
        </label>
      </p>
      <p className={styles.send_button}>
        <button className={global_styles.button_confirm}>
          {
            loading === false ? btnMessage : btnMessageLoading
          }
        </button>
      </p>
    </form>
  )
}

export default Form