import React from 'react';
import { JackInTheBox, Fade } from 'react-awesome-reveal';

const ProductsSection = () => {
  return (
    <section id='products' className='py-20 px-8 md:px-16 lg:px-24'>
      <Fade triggerOnce delay={300} fraction={0.5} direction='down'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          Our <span className='text-green-400'>Flavors</span>
        </h2>
      </Fade>

      <div className='grid md:grid-cols-3 gap-8 place-items-center'>
        <JackInTheBox
          triggerOnce
          cascade
          damping={0.3}
          delay={300}
          fraction={0.5}
        >
          <div className='bg-green-900 w-fit rounded-xl overflow-hidden group'>
            <div className='h-64 bg-green-900 flex items-center justify-center group-hover:bg-green-800 transition-all'>
              <img
                src='/images/products/originalSurge.png'
                alt='Original Flavor'
                className='h-full w-full bg-contain'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>Original Surge</h3>
              <p className='text-gray-400 mb-4'>
                The classic VOLT experience with a citrus kick.
              </p>
              <button className='w-full bg-green-400 text-black py-3 rounded-lg font-bold cursor-pointer hover:bg-green-300 transition-all'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='bg-purple-900  w-fit rounded-xl overflow-hidden group'>
            <div className='h-64 bg-purple-900 flex items-center justify-center group-hover:bg-purple-800 transition-all'>
              <img
                src='/images/products/berryBlast.png'
                alt='Berry Blast'
                className='h-full w-full bg-contain'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>Berry Blast</h3>
              <p className='text-gray-400 mb-4'>
                A bold mix of raspberries for an exotic energy boost.
              </p>
              <button className='w-full bg-purple-600 text-black py-3 rounded-lg font-bold cursor-pointer hover:bg-purple-400 transition-all'>
                Shop Now
              </button>
            </div>
          </div>

          <div className='bg-blue-950  w-fit rounded-xl overflow-hidden group'>
            <div className='h-64 bg-blue-900 flex items-center justify-center group-hover:bg-blue-800 transition-all'>
              <img
                src='/images/products/blueLight.png'
                alt='Blue Lightning'
                className='h-full w-full bg-contain'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>Blue Lightning</h3>
              <p className='text-gray-400 mb-4'>
                Cool and refreshing with a blueberry twist.
              </p>
              <button className='w-full bg-blue-600 text-black py-3 rounded-lg font-bold cursor-pointer hover:bg-blue-400 transition-all'>
                Shop Now
              </button>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </section>
  );
};

export default ProductsSection;
