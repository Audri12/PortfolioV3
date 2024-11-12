import React from "react";
import HomeBanner from "../Home/HomeBanner";
import About from "../About/About";
import ExperienceWork from "../Experience/ExperienceWork";
import Footer from "../Footer/Footer";
import Contact from "../Contract/Contact";
import Gallery from "../gallery/Gallery";

import Project from "../Event/Project";

import ScrollToTopButton from "../ScrollButton/ScrollButton";
import About3 from "../About/About3";
import About4 from "../About/About4";
import About5 from "../About/About5";

const MainLayout = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
   
      <About></About>
      {/* <About3></About3> */}
      <About4></About4>
      <About5></About5>
      <ExperienceWork></ExperienceWork>
      <Gallery></Gallery>
      <Project></Project>
      
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default MainLayout;
