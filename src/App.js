import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import AreasWeServe from './components/AreasWeServe';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <AreasWeServe />
        <Testimonials />
        <Contact />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
