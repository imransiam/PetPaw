import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const HomeLayout = () => {
  const location = useLocation();

  return (
    <div className='min-h-screen flex flex-col selection:bg-orange-200 selection:text-orange-900'>
      {/* Sticky Navbar with Backdrop Blur */}
      <header className='sticky top-0 z-50 backdrop-blur-md'>
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main className='flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother feel
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className='mt-auto'>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;