import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Experiances from "./Experiances";

import Projects from "./Projects";
import Some from "./Some";

const Home = () => {
  return (
    <div>
    
      <Banner />
      
      <Experiances />
      
      <About/>
      <Contact/>
      <Some/>
      
    </div>
  );
};

export default Home;
