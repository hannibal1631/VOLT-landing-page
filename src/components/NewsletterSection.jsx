import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className='py-20 px-8 md:px-16 lg:px-24 bg-green-400 text-black'>
      <div className='max-w-3xl mx-auto text-center'>
        <Fade cascade triggerOnce damping={0.3} delay={300} direction='left'>
          <h2 className='text-4xl font-bold mb-6'>Join the VOLT Community</h2>
          <p className='text-lg mb-8'>
            Get exclusive offers, new flavor announcements, and energy tips
            directly to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col md:flex-row gap-4'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='flex-grow px-6 py-3 rounded-full border-2 border-black text-black focus:outline-none'
              required
            />
            <button
              type='submit'
              className='bg-black text-white cursor-pointer px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all'
            >
              Subscribe
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default NewsletterSection;
