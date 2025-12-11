import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className='min-h-screen flex flex-col'>
      <header>
        <Navbar />
      </header>

      <main className='flex-1 py-20 px-10 flex justify-center items-center'>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
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

export default AuthLayout;
