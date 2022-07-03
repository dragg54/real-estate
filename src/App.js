import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import { baseUrl } from "./URL/baseUrl";
import Properties from "./components/properties/Properties";
import axios from "axios"
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
      axios.request(baseUrl).then(function (response) {
       setData(response.data)
      }).catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Hero />
      <Properties propertiesData={data} />
      <Services />
      <Testimonials />
    </>
  );
}

export default App;
