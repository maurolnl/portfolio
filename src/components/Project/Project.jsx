import styles from './Project.module.css'
import global_styles from '../../styles/Home.module.css'
import Image from 'next/image'
import todoListPic from '../../../public/thsNp.jpg'

const Project = () => {
  const projects = [
    {
      id:1,
      name: "Yet another todo list app",
      descritpion: "Blablblablablablablalabl lBlablblablablablablalabl hola v v hola v lballbalabbala",
      problem:"some problem"
    },
    {
      id:2,
      name: "Another corona tracker",
      descritpion: "Blablblablablablablalabl lballbalabbala",
      problem:""
    },
    {
      id:3,
      name: "Another project",
      descritpion: "Blablblablablablablalabl lballbalabbala",
      problem:"another problem"
    }
  ] 

  return(
    <section className={`${styles.container_projects} ${global_styles.container}`}>
      <h1>Some Learning Projects</h1>
      {
        projects.map(project => {
          return(
            <div key={project.id} className={global_styles.gridTwoColumn}>
              <Image src={todoListPic} alt ="Todo"></Image>
              <p>
                {project.descritpion}
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