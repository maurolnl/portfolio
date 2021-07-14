import styles from './Project.module.css'
import global_styles from '../../styles/Home.module.css'
import Image from 'next/image'
import todoListPic from '../../../public/thsNp.jpg'

const Project = () => {
  const projects = [
    {
      id:1,
      name: "Yet another todo list app",
      description: "Blablblablablablablalabl lBlablblablablablablalabl hola v v hola v lballbalabbala",
      problem:"some problem"
    },
    {
      id:2,
      name: "Another corona tracker",
      description: "Blablblablablablablalabl lballbalabbala",
      problem:""
    },
    {
      id:3,
      name: "Another project",
      description: "Blablblablablablablalabl lballbalabbala",
      problem:"another problem"
    }
  ] 

  return(
    <section className={`${styles.container_projects} ${global_styles.container}`}>
      <h1 className={global_styles.title}>Some Learning Projects</h1>
      {
        projects.map(project => {
          return(
            <div key={project.id} className={global_styles.gridRows}>
                <Image src={todoListPic} alt ="Todo" className={styles.projectImage}></Image>
              <h1 className={styles.articleTitle}>
                {project.name}
              </h1>
              <p>
                {project.description}
                <br/>
                {project.problem}
              </p>
            </div>
          )
        })
      }
    </section>
  )
}

export default Project