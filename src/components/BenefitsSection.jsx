import React from 'react';
import { Fade } from 'react-awesome-reveal';

const BenefitsSection = () => {
  return (
    <section id='benefits' className='py-20 px-8 md:px-16 lg:px-24 bg-gray-900'>
      <Fade triggerOnce delay={300} fraction={0.5}>
        <h2 className='text-4xl font-bold text-center mb-16'>
          Why Choose <span className='text-green-400'>VOLT</span>?
        </h2>
      </Fade>

      <div className='grid md:grid-cols-3 gap-8'>
        <Fade
          triggerOnce
          cascade
          damping={0.3}
          fraction={0.7}
          delay={300}
          direction='left'
        >
          <div className='bg-black p-8 rounded-xl border border-gray-800 hover:border-green-400 transition-all'>
            <div className='w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-6'>
              <div className='text-black text-2xl font-bold'>1</div>
            </div>
            <h3 className='text-2xl font-bold mb-4'>Natural Ingredients</h3>
            <p className='text-gray-400'>
              Made with plant-based caffeine and essential vitamins for clean,
              sustained energy.
            </p>
          </div>

          <div className='bg-black p-8 rounded-xl border border-gray-800 hover:border-green-400 transition-all'>
            <div className='w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-6'>
              <div className='text-black text-2xl font-bold'>2</div>
            </div>
            <h3 className='text-2xl font-bold mb-4'>Zero Crash</h3>
            <p className='text-gray-400'>
              Our unique formula eliminates the energy crash common with other
              energy drinks.
            </p>
          </div>

          <div className='bg-black p-8 rounded-xl border border-gray-800 hover:border-green-400 transition-all'>
            <div className='w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-6'>
              <div className='text-black text-2xl font-bold'>3</div>
            </div>
            <h3 className='text-2xl font-bold mb-4'>Enhanced Focus</h3>
            <p className='text-gray-400'>
              Contains nootropics that improve mental clarity and cognitive
              performance.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default BenefitsSection;
