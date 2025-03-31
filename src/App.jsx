import React from 'react';
import './App.css';
import Navbar from './components/Common/Navbar/Navbar';
import Hero from './components/Home/Hero/Hero';
import About from './components/Home/About/About';
import WhyUs from './components/Home/Why/Why';
import FAQ from './components/Home/Faq/Faq';
import Footer from './components/Common/Footer/Footer';



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App;