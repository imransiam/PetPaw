import React from 'react';
import { FaPaperPlane, FaPaw } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    // Simple success feedback
    Swal.fire({
      icon: 'success',
      title: 'Wait for the Paws!',
      text: `Thanks for subscribing with ${email}. We'll send you the best pet deals!`,
      confirmButtonColor: '#ea580c',
    });
    e.target.reset();
  };

  return (
    <div className='py-12 px-4'>
      <div className='CardStyle mx-auto max-w-4xl overflow-hidden shadow-2xl border-none flex flex-col md:flex-row'>
        
        {/* Left Side: Visual/Branding */}
        <div className='bg-orange-600 p-8 text-white flex flex-col justify-center items-center md:w-1/3'>
          <FaPaw className='text-6xl mb-4 animate-bounce' />
          <h3 className='text-xl font-bold text-center'>Join the Pack</h3>
        </div>

        {/* Right Side: Form */}
        <div className='p-8 md:flex-1 bg-stone-50 dark:bg-stone-900'>
          <h2 className='text-3xl font-black text-orange-600 tracking-tighter mb-2'>
            Subscribe to our Newsletter
          </h2>
          <p className='text-stone-600 dark:text-stone-400 mb-6'>
            Stay updated with our latest pet arrivals, premium food offers, and expert care tips.
          </p>

          <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3'>
            <div className='relative flex-1'>
              <input 
                type='email' 
                name='email'
                placeholder='Enter your email address' 
                required
                className='input input-bordered w-full rounded-xl focus:outline-orange-500 bg-white dark:bg-stone-800 text-stone-900 dark:text-white border-stone-300 dark:border-stone-700'
              />
            </div>
            <button 
              type='submit' 
              className='btn bg-orange-600 hover:bg-orange-700 border-none text-white rounded-xl px-8 flex items-center gap-2 shadow-lg hover:scale-105 transition-all'
            >
              <FaPaperPlane className='text-sm' /> Subscribe
            </button>
          </form>
          
          <p className='text-xs mt-4 opacity-50 italic'>
            * We promise not to bark too often! No spam, just pawsome updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;