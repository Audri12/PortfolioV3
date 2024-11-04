import React from 'react'

import HomeBanner from '../Home/HomeBanner'
import About from '../About/About'



import ExperienceWork from '../Experience/ExperienceWork'

import Footer from '../Footer/Footer'

import Contact from '../Contract/Contact'
import Gallery from '../gallery/Gallery'
import Event from '../Event/Event'
import Project from '../Event/Project'

const MainLayout = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <About></About> 
        <ExperienceWork></ExperienceWork>
          <Gallery></Gallery>
        <Project></Project>
        <Event></Event>
        <Contact></Contact>
        <Footer></Footer>
   
        
    </div>
  )
}

export default MainLayout