import Layout from "../components/Layout"
import Project from '../components/Project/Project'

const Projects = ({children}) => {
  return (
    <Layout>
     <Project /> 
     {children}
    </Layout>

  )
} 

export default Projects