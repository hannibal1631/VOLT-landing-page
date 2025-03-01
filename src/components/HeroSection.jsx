import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

const HeroSection = () => {
  return (
    <section className='relative py-20 px-8 md:px-16 lg:px-24'>
      <div className='absolute top-10 right-0 w-3/4 h-full bg-green-400 rounded-l-full opacity-10 -z-10'></div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <Fade cascade triggerOnce damping={0.2} delay={300} direction='left'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Unleash Your <span className='text-green-400'>Energy</span>
            </h1>
            <p className='text-lg mb-8 text-gray-300 max-w-md'>
              VOLT is the premium energy drink designed for those who push
              boundaries. Natural ingredients, maximum performance.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='bg-green-400 text-black px-8 py-3 rounded-full font-bold flex items-center cursor-pointer hover:bg-green-300 transition-all'>
                Get Started <ChevronRight className='ml-2' size={20} />
              </button>
              <button className='border border-green-400 text-green-400 px-8 py-3 rounded-full font-bold cursor-pointer hover:bg-green-400 hover:text-black transition-all'>
                Learn More
              </button>
            </div>
          </Fade>
        </div>

        <div className='relative flex justify-center'>
          <div className='w-55 h-55 rounded-full bg-green-400 absolute blur-3xl opacity-30'></div>
          <Fade triggerOnce delay={300} direction='right'>
            <img
              src='/images/products/heroImg.png'
              alt='VOLT Energy Drink'
              className='relative z-10 h-96 md:h-120 drop-shadow-2xl'
            />
          </Fade>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <ArrowDown className='text-green-400' size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
