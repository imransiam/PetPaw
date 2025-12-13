import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router';
import Newsletter from '../Components/Newsletter';
import BannerSlider from '../Components/BannerSlider';
import GameCard from '../Components/GameCard';
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";
import CategoryCard from '../Components/CategoryCard';

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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">

    <CategoryCard
      title="Pets"
      description="Adopt lovely pets waiting for a new home."
      image="https://images.unsplash.com/photo-1583512603806-077998240c7a?referrer=grok.com"
      category="pets"
    />

    <CategoryCard
      title="Food"
      description="Healthy & tasty food for your pet buddies."
      image="https://plus.unsplash.com/premium_photo-1726761692986-6bcde87fc2b8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
      category="food"
    />

    <CategoryCard
      title="Accessories"
      description="Collars, toys, beds and more."
      image="https://www.shutterstock.com/image-photo/toy-dogs-cats-other-goods-260nw-2508680843.jpg"
      category="accessories"
    />

    <CategoryCard
      title="Care Products"
      description="Keep them clean, happy & comfortable."
      image="https://www.shutterstock.com/image-photo/food-accessories-walk-play-body-260nw-2098053313.jpg"
      category="grooming"
    />

  </div>
</section>

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