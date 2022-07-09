import Hero from "../components/hero/Hero";
import Properties from "../components/properties/Properties";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Loading from "../components/loading/Loading";
import useFetchApi from "../API/fetchApi";

function Home() {
  const [data] = useFetchApi()
  if (data) {
    return (
      <>
        <Hero />
        <Properties propertiesData={data} />
        <Services />
        <Testimonials />
        <Footer />
      </>
    );
  } else {
    return <Loading />
  }
}

export default Home;
