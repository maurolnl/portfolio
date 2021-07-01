import styles from './Divider.module.css'

const Divider = () => {
  return (
    <div className={styles.divider_container}>
      <hr className={styles.divider}/>
    </div>
  )
}

export default Divider