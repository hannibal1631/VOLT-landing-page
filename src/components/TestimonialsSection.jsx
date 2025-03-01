import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';

const TestimonialsSection = () => {
  return (
    <section
      id='testimonials'
      className='py-20 px-8 md:px-16 lg:px-24 bg-gray-900'
    >
      <Fade triggerOnce delay={300} fraction={0.5} direction='down'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          What Our <span className='text-green-400'>Customers</span> Say
        </h2>
      </Fade>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Zoom cascade triggerOnce delay={300} fraction={0.7}>
          <div className='bg-black p-8 rounded-xl border border-gray-800 hover:scale-110 transition-all'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gray-700 rounded-full mr-4'>
                <img
                  src='/images/avatars/alex.png'
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <div>
                <h4 className='font-bold'>Alex Johnson</h4>
                <p className='text-gray-500'>Athlete</p>
              </div>
            </div>
            <p className='text-gray-300'>
              "VOLT has become my go-to energy drink for training. Clean energy
              without the jitters or crash."
            </p>
          </div>

          <div className='bg-black p-8 rounded-xl border border-gray-800 hover:scale-110 transition-all'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gray-700 rounded-full mr-4'>
                <img
                  src='/images/avatars/samantha.png'
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <div>
                <h4 className='font-bold'>Samantha Wu</h4>
                <p className='text-gray-500'>Software Developer</p>
              </div>
            </div>
            <p className='text-gray-300'>
              "Perfect for those long coding sessions. The focus enhancement is
              real and I appreciate the natural ingredients."
            </p>
          </div>

          <div className='bg-black p-8 rounded-xl border border-gray-800 hover:scale-110 transition-all'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gray-700 rounded-full mr-4'>
                <img
                  src='/images/avatars/marcus.png'
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <div>
                <h4 className='font-bold'>Marcus Lee</h4>
                <p className='text-gray-500'>Student</p>
              </div>
            </div>
            <p className='text-gray-300'>
              "VOLT helps me stay alert during late-night study sessions without
              affecting my sleep schedule."
            </p>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default TestimonialsSection;
