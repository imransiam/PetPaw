import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-black/30 flex items-end justify-center bg- px-4 py-4 shadow-lg  '>
      <div className='bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg w-full max-w-md text-white'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Subscribe to our Newsletter</h2>
      <p className='text-sm text-white/70 mb-6 text-center'>Stay updated with our latest game news, offer and updates.</p>
      <form className='flex flex-col sm:flex-row items-center gap-4'>
        <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400'>
        </input>
        <button type='submit' className='px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition text-white w-full sm:w-auto'>Subscribe</button>
      </form>
      </div>
      
    </div>
  );
};

export default Newsletter;