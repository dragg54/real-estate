import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import { baseUrl } from "./API/fetchApi";
import Properties from "./components/properties/Properties";
import axios from "axios"

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
    </>
  );
}

export default App;
