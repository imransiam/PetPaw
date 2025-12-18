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
        <title>GameHub - Home</title>
      </Helmet>

      <div className='flex flex-col gap-10 '>
        <BannerSlider />

        <div className='space-y-15'>
          <Marquee className='bg-amber-100 px-4 py-5 shadow-2xl shadow-amber-100 rounded-md' pauseOnHover={true} gradient={false} speed={58}>
            <h2 className='text-black text-4xl font-semibold'>Welcome to PawMart - Your One-Stop Shop for All Your Pet Needs!</h2>
          </Marquee>
          <Marquee className='bg-pink-100 px-4 py-5 shadow-2xl shadow-amber-100 rounded-md' pauseOnHover={true} gradient={false} speed={58}>
            <h2 className='text-black text-4xl font-semibold'>You can Adopt! Don't Shop. Give a Pet a Home</h2>
          </Marquee>
          <Marquee className='bg-green-100 px-4 py-5 shadow-2xl shadow-amber-100 rounded-md' pauseOnHover={true} gradient={false} speed={58}>
            <h2 className='text-black text-4xl font-semibold'>Every Pet deserves a loving home</h2>
          </Marquee>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <CategoryCard title="Pets" description="Adopt lovely pets waiting for a new home." image="https://images.unsplash.com/photo-1583512603806-077998240c7a?referrer=grok.com" category="pets" />
            <CategoryCard title="Food" description="Healthy & tasty food for your pet buddies." image="https://plus.unsplash.com/premium_photo-1726761692986-6bcde87fc2b8?w=1000&auto=format&fit=crop&q=60" category="food" />
            <CategoryCard title="Accessories" description="Collars, toys, beds and more." image="https://www.shutterstock.com/image-photo/toy-dogs-cats-other-goods-260nw-2508680843.jpg" category="accessories" />
            <CategoryCard title="Care Products" description="Keep them clean, happy & comfortable." image="https://www.shutterstock.com/image-photo/food-accessories-walk-play-body-260nw-2098053313.jpg" category="grooming" />
          </div>
        </section>

        <section className='max-w-11/12 mx-auto'>
          <h2 className='text-5xl font-bold text-center mb-12'>Latest</h2>
          <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {previewServices.map(service => <ServiceCard key={service._id} service={service} />)}
          </div>
          <Link to='/services' className='flex justify-center items-center mt-12'>
            <button className='btn btn-neutral'>See All Services</button>
          </Link>
        </section>

        <Newsletter />
      </div>
    </>
  );
};

export default Home;
