
import Layout from "../components/Layout";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Appointments from "./Appointments";


const Index = () => {
  return (
    <>
      <Layout>
        <AboutUs/>
        <Services/>
        <Appointments/>
      </Layout>
    </>
  )
}

export default Index;
