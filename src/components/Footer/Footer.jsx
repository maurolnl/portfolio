import styles from './Footer.module.css'
import global_styles from '../../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${global_styles.container} ${styles.container_footer}`}>
        <a
          href="https://github.com/maurolnl"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.a}`}
        >
        Github
        </a>
        <a
          href="https://www.linkedin.com/in/maurolnl/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.a}
        >
        LinkedIn
        </a>
        <a
          href="https://twitter.com/maurolquiroga"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.a} `}
        >
        Twitter
        </a>
      </div>

    </footer>
  )
}

export default Footer