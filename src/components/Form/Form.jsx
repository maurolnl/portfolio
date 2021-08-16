import global_styles from "../../styles/Home.module.css";
import styles from "../Contact/Contact.module.css";
import { useState } from "react";

const Form = ({sendEmail}) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
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
          Name:
          <input
            onChange={handleNameChange}
            type="text"
            required="required"
            value={newName}
            name="Name"
            placeholder="Your Name..."
          ></input>
        </label>
      </p>
      <p>
        <label className={global_styles.contact_label}>
          Email:
          <input
            onChange={handleEmailChange}
            type="text"
            required="required"
            value={newEmail}
            name="Email"
            placeholder="Your Email..."
          ></input>
        </label>
      </p>
      <p>
        <label className={global_styles.contact_label}>
          Message:
          <textarea
            onChange={handleMessageChange}
            required="required"
            value={newMessage}
            name="message"
            placeholder="Write your message here..."
          ></textarea>
        </label>
      </p>
      <p className={styles.send_button}>
        <button className={global_styles.button_confirm}>
          {
            loading === false ? "Send" : "Sending…"
          }
        </button>
      </p>
    </form>
  )
}

export default Form