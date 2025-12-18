import React from 'react';
import { Link } from 'react-router';
import { FaPaw, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="CardStyle border-t border-orange-200 dark:border-stone-800 transition-colors duration-300">
      <div className="footer container mx-auto p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Brand Section */}
        <aside className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-orange-600">
            <FaPaw className="text-4xl" />
            <p className='text-4xl font-black tracking-tighter text-stone-800 dark:text-white'>
              PawMart
            </p>
          </div>
          <p className="opacity-80 max-w-xs">
            Connecting pets with loving homes and providing the best supplies for your furry friends since 2025.
          </p>
        </aside>

        {/* Quick Links Section */}
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title text-orange-600 opacity-100 font-bold uppercase tracking-widest">Quick Links</h6>
          <div className="flex flex-col gap-2 opacity-80">
            <Link to="/" className="link link-hover">Home</Link>
            <Link to="/services" className="link link-hover">All Services</Link>
            <Link to="/about" className="link link-hover">About Us</Link>
          </div>
        </nav>

        {/* Social & Legal Section */}
        <nav className="flex flex-col gap-4">
          <h6 className="footer-title text-orange-600 opacity-100 font-bold uppercase tracking-widest">Connect With Us</h6>
          <div className="grid grid-flow-col gap-5">
            <a href="#" className="text-2xl hover:text-orange-600 hover:-translate-y-1 transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-orange-600 hover:-translate-y-1 transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-orange-600 hover:-translate-y-1 transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-orange-600 hover:-translate-y-1 transition-all">
              <FaYoutube />
            </a>
          </div>
          <div className="pt-4 border-t border-stone-200 dark:border-stone-700">
             <p className="text-sm opacity-60">© 2025 PawMart Ltd. All rights reserved.</p>
          </div>
        </nav>
        
      </div>
    </footer>
  );
};

export default Footer;