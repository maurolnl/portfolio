import global_styles from "../../styles/Home.module.css";
import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [sended, setSended] = useState(1);

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
    console.log(newName, newEmail, newMessage);

    emailjs.sendForm('service_66ijpyr', 'template_orr1inm', event.target, 'user_oGzZ4nffAjKCy2oVpl4j1')
    .then((result) => {
        console.log(result.text);
        if(result.text == "OK") {
          console.log("Email successfully sended");
          setSended(2);
        }
    }, (error) => {
        console.log(error.text);
        setSended(3);
    });

    setNewName("");
    setNewEmail("");
    setNewMessage("");
  };

  return (
    <section className={`${styles.container_sm} ${global_styles.container}`}>
      <h1 className={global_styles.title}>Contact Me</h1>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <p>
          <label className={global_styles.contact_label}>
            Name:
            <input
              onChange={handleNameChange}
              type="text"
              required="required"
              value={newName}
              name="Name"
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
            ></textarea>
          </label>
        </p>
        <p>
          {sended > 1 ? (
            sended === 2 ? (
              <label className={global_styles.alert_label}>
                Your message was{" "}
                <label
                  className={global_styles.alert_label_success}
                >
                  successfully
                </label>{" "}
                sent!
                <br />
                I&apos;ll get back to you as soon as possible.
              </label>
            ) : (
              <label className={global_styles.alert_label}>
               An <label className={global_styles.alert_label_error}>Error</label> has occurred.
               <br/>
               Try again in a while or contact me via <a className={global_styles.inside_link}>Twitter</a>
              </label>
            )
          ) : (
            ""
          )}
        </p>
        <p className={styles.send_button}>
          <button className={global_styles.button_confirm}>Send</button>
        </p>
      </form>
    </section>
  );
};

export default ContactMe;