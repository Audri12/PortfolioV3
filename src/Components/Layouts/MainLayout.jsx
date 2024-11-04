import React from 'react'

import HomeBanner from '../Home/HomeBanner'
import About from '../About/About'

import Project from '../Event/Event'

import ExperienceWork from '../Experience/ExperienceWork'

import Footer from '../Footer/Footer'

import Contact from '../Contract/Contact'
import Gallery from '../gallery/Gallery'
import About2 from '../About/About2'

const MainLayout = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <About2></About2>
        <About></About> 
        <ExperienceWork></ExperienceWork>
          <Gallery></Gallery>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
   
        
    </div>
  )
}

export default MainLayout