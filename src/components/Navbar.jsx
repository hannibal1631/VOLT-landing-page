import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className='flex justify-between items-center py-6 px-8 md:px-16 lg:px-24'>
      <Fade triggerOnce cascade damping={0.3} delay={200} direction='left'>
        <div className='text-3xl font-bold text-green-400'>VOLT</div>
        <div className='hidden md:flex space-x-8'>
          <a
            href='#benefits'
            className='hover:text-green-400 transition-colors'
            onClick={(e) => scrollToSection(e, 'benefits')}
          >
            Benefits
          </a>

          <a
            href='#products'
            className='hover:text-green-400 transition-colors'
            onClick={(e) => scrollToSection(e, 'products')}
          >
            Products
          </a>

          <a
            href='#testimonials'
            className='hover:text-green-400 transition-colors'
            onClick={(e) => scrollToSection(e, 'testimonials')}
          >
            Testimonials
          </a>
        </div>
        <button className='bg-green-400 text-black px-6 py-2 rounded-full font-bold cursor-pointer hover:bg-green-300 transition-all'>
          Shop Now
        </button>
      </Fade>
    </nav>
  );
};

export default Navbar;
