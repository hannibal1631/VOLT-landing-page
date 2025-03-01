import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
