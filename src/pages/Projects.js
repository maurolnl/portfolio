import Layout from "../components/Layout"
import Project from '../components/Project/Project'
import Head from 'next/head'

const Projects = ({children}) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="ln.ico" />
      </Head>
      <Layout>
      <Project /> 
      {children}
      </Layout>
    </>
  )
} 

export default Projects