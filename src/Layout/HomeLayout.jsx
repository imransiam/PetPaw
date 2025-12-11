import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const HomeLayout = () => {
  const location = useLocation();

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='mb-10'>
        <Navbar />
      </header>

      <main className='flex-1'>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
