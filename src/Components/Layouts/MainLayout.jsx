import React from 'react'

import HomeBanner from '../Home/HomeBanner'
import About from '../About/About'

import Project from '../Event/Event'

import ExperienceWork from '../Experience/ExperienceWork'

import Footer from '../Footer/Footer'

import Contact from '../Contract/Contact'
import Gallery from '../gallery/Gallery'

const MainLayout = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
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