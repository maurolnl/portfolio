import global_styles from "../../styles/Home.module.css";
import styles from "../Contact/Contact.module.css";

const Form = (props) => {
  const {
    handleSubmit,
    handleEmailChange,
    handleNameChange, 
    handleMessageChange,
    newName,
    newEmail,
    newMessage,
    loading
  } = props
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