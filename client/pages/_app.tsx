import '../styles/globals.css'
// import type { AppProps } from 'next/app' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import "../styles/Contact.css"
import "../styles/Login.css"
import "../styles/Signup.css"

function MyApp({ Component, pageProps }:any) {
  return (
    <Layout>
     
    <Component {...pageProps} />
    </Layout>
  )

}
  
export default MyApp