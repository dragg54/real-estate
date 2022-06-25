import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import { fetchApi } from "./API/fetchApi";
import Properties from "./components/properties/Properties";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(fetchApi());
  }, []);
  console.log(data);
  return (
    <>
      <Hero />
      <Properties />
    </>
  );
}

export default App;
