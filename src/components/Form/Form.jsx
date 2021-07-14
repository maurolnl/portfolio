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