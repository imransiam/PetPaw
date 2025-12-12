import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router';
import Newsletter from '../Components/Newsletter';
import BannerSlider from '../Components/BannerSlider';
import GameCard from '../Components/GameCard';
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";

const Home = () => {
  const games = useLoaderData();
  const previewGames = [...games]
    .sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt))
    .slice(0, 6);
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - Home</title>
      </Helmet>
    </div>
    <div className='flex flex-col gap-10 '>
      
      <div className=''>
      
        <BannerSlider></BannerSlider>
      </div>
      <div className='space-y-15'>
      <Marquee className='bg-amber-100  px-4 py-5  shadow-2xl shadow-amber-100 rounded-md' pauseOnHover={true} gradient={false} speed={58}>
        <h2 className='text-black text-4xl font-semibold '>Welcome to PawMart - Your One-Stop Shop for All Your Pet Needs!</h2>
        </Marquee>
      <Marquee className='bg-pink-100  px-4 py-5  shadow-2xl shadow-amber-100 rounded-md' pauseOnHover={true} gradient={false} speed={58}>
        <h2 className='text-black text-4xl font-semibold '>you can Adopt! Don't Shop. Give a Pet a Home </h2>
        </Marquee>
      <Marquee className='bg-green-100  px-4 py-5  shadow-2xl shadow-amber-100 rounded-md' pauseOnHover={true} gradient={false} speed={58}>
        <h2 className='text-black text-4xl font-semibold '>Every Pet deserves a loving home</h2>
        </Marquee>
      </div>
      <section>
        <h2 className='text-4xl font-bold text-center mb-12'>Top Rated Games</h2>
     
      <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
            previewGames.map(game => <GameCard key={game._id} game={game}></GameCard>)
        }

      </div>
      <Link to='/games'className='flex justify-center items-center mt-4 mt-12'><button className='btn btn-neutral '>See All Games</button></Link>
       </section>
     <div className=''>
       <Newsletter></Newsletter>
     </div>
    </div>
    </>
  );
};

export default Home;