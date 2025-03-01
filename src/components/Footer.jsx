import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className='bg-black py-12 px-8 md:px-16 lg:px-24 border-t border-gray-800'>
      <div className='grid md:grid-cols-4 gap-8 mb-12'>
        <Fade
          triggerOnce
          cascade
          damping={0.3}
          delay={200}
          direction='left'
          fraction={0.5}
        >
          <div>
            <h3 className='text-3xl font-bold text-green-400 mb-4'>VOLT</h3>
            <p className='text-gray-400'>
              Energize your life with our premium, natural energy drinks.
            </p>
          </div>

          <div>
            <h4 className='font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-green-400 transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#products'
                  className='hover:text-green-400 transition-colors'
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='hover:text-green-400 transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-400 transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold mb-4'>Legal</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-green-400 transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-400 transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-400 transition-colors'>
                  Return Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-400 transition-colors'>
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold mb-4'>Connect</h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Instagram size={24} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Twitter size={24} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <div className='text-center pt-8 border-t border-gray-800 text-gray-500'>
        <Fade triggerOnce delay={200} direction='down' fraction={0.7}>
          <p>
            &copy; {new Date().getFullYear()} VOLT Energy Drinks. All rights
            reserved.
          </p>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
