import Layout from "../components/Layout"
import ContactMe from '../components/Contact/ContactMe'

const Contact = ({children}) => {
  return (
    <Layout>
      <ContactMe /> 
      {children}
    </Layout>

  )
} 

export default Contact