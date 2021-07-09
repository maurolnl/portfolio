import global_styles from '../../styles/Home.module.css'
import styles from './Main.module.css'

const Main = () => {
  return (
    <main className={`${styles.container_sm} ${global_styles.container}`}>
        <h1 className={global_styles.title}>
          About Me
        </h1>
        <p className={global_styles.paragraph}>
          Un apasionado por el desarrollo de software
          buscando aprender y mejorar constantemente. Con
          experiencia desarrollando aplicaciones web tanto en
          el Frontend como en el Backend, en busca de un
          equipo con el cual crecer en conjunto y seguir
          avanzando mi carrera profesional.
        </p>
        <p className={global_styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </main>
  )
}

export default Main