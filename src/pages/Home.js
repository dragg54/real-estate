import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import { baseUrl } from "../URL/baseUrl";
import Properties from "../components/properties/Properties";
import axios from "axios";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Loading from "../components/loading/Loading";
import useFetchApi from "../URL/baseUrl";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AllProperties from "./allProperties/AllProperties";

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
