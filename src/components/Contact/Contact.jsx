import global_styles from '../../styles/Home.module.css'
import styles from './Contact.module.css'

const ContactMe = () => {
 return (
   <div className={`${styles.container_sm} ${global_styles.container}`}>
    <h1 className={global_styles.title}>
      Contact Me 
    </h1>
    <form className={styles.contact_form}>
      <input>
      </input>
      <input>
      </input>
      <textarea></textarea>
    </form> 
   </div>
 )
}

export default ContactMe