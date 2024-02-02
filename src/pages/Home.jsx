import React from 'react';
import Hero from '../components/Home/Hero';
import AboutMe from '../components/Home/AboutMe';
import MainLayout from '../components/MainLayout';
import Projects from '../components/Home/Projects';
import SKills from '../components/Home/Skills';

const Home = () => {
  return (
    <React.Fragment>
      <MainLayout>
        <Hero/>
        <div className='container mx-auto px-8'>
          <AboutMe/>
          <SKills/>
          <Projects/>
        </div>
      </MainLayout>
    </React.Fragment>
  )
}

export default Home