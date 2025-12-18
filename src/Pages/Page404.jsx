import React from 'react';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { FaPaw, FaSearch } from 'react-icons/fa';

const Page404 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <Helmet>
        <title>PawMart - Page Not Found</title>
      </Helmet>

      {/* Icon Section */}
      <div className="relative mb-8">
        <FaPaw className="text-9xl text-stone-200 dark:text-stone-800 animate-pulse" />
        <FaSearch className="text-5xl text-orange-600 absolute bottom-0 right-0 animate-bounce" />
      </div>

      {/* Text Section */}
      <div className="space-y-4">
        <h1 className="text-8xl font-black text-orange-600 tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold">Oops! This page has run away.</h2>
        <p className="max-w-md mx-auto opacity-70 italic text-lg">
          We couldn't find the page you were looking for. It might have gone for a walk or moved to a new home!
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-10">
        <button
          onClick={() => navigate('/')}
          className="btn btn-lg bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full px-10 shadow-xl hover:scale-110 transition-all duration-300"
        >
          Back to Safety (Home)
        </button>
      </div>

      {/* Decorative Paws */}
      <div className="mt-12 flex gap-4 opacity-20">
        <FaPaw className="text-2xl rotate-12" />
        <FaPaw className="text-2xl -rotate-12 mt-4" />
        <FaPaw className="text-2xl rotate-45" />
      </div>
    </div>
  );
};

export default Page404;