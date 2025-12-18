import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Newsletter from '../Components/Newsletter';
import BannerSlider from '../Components/BannerSlider';
import ServiceCard from '../Components/ServiceCard';
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";
import CategoryCard from '../Components/CategoryCard';

const Home = () => {
  const services = useLoaderData();
  const previewServices = [...services].sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt)).slice(0, 6);

  return (
    <>
      <Helmet>
        <title>PawMart - Your Pet's Best Friend</title>
      </Helmet>

      {/* overflow-x-hidden here is the final shield against horizontal scrolls */}
      <div className='flex flex-col gap-16 overflow-x-hidden'>
        
        <BannerSlider />

        {/* Unified Theme-Matched Marquee */}
        <div className='w-full'>
          <Marquee 
            className='bg-orange-600 py-6 shadow-xl text-white overflow-hidden' 
            pauseOnHover={true} 
            speed={60} 
            gradient={false}
          >
            <div className='flex gap-20 text-3xl font-bold items-center uppercase tracking-wider'>
              <span>🐾 Welcome to PawMart! 🐾</span>
              <span>• Adopt! Don't Shop •</span>
              <span>🏠 Give a Pet a Forever Home 🏠</span>
              <span>• Quality Food for Happy Tails •</span>
            </div>
          </Marquee>
        </div>

        {/* Categories Section - FIXED GRID */}
        <section className='container mx-auto px-6'>
          <div className='mb-10 text-center'>
            <h2 className='text-5xl font-bold mb-4'>Our Categories</h2>
            <div className='h-1 w-20 bg-orange-500 mx-auto rounded-full'></div>
          </div>
          
          {/* Responsive Grid: 
             1 col on mobile
             2 cols on tablets (sm/md)
             4 cols on desktops (lg)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard title="Pets" description="Adopt lovely pets waiting for a new home." image="https://images.unsplash.com/photo-1583512603806-077998240c7a" category="pets" />
            <CategoryCard title="Food" description="Healthy & tasty food for your pet buddies." image="https://plus.unsplash.com/premium_photo-1726761692986-6bcde87fc2b8" category="food" />
            <CategoryCard title="Accessories" description="Collars, toys, beds and more." image="https://www.shutterstock.com/image-photo/toy-dogs-cats-other-goods-260nw-2508680843.jpg" category="accessories" />
            <CategoryCard title="Care" description="Keep them clean and comfortable." image="https://www.shutterstock.com/image-photo/food-accessories-walk-play-body-260nw-2098053313.jpg" category="grooming" />
          </div>
        </section>

        {/* Latest Services Section */}
        <section className='container mx-auto px-6'>
          <h2 className='text-5xl font-bold text-center mb-12'>Latest Arrivals</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {previewServices.map(service => <ServiceCard key={service._id} service={service} />)}
          </div>
          
          <div className='flex justify-center mt-16'>
            <Link to='/services'>
              <button className='btn bg-orange-700 hover:bg-orange-800 text-white px-12 py-3 rounded-full text-lg border-none'>
                View All Services
              </button>
            </Link>
          </div>
        </section>

        <Newsletter />
      </div>
    </>
  );
};

export default Home;