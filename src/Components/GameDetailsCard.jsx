import React from 'react';
import { Link, Links } from 'react-router';

const GameDetailsCard = ({game}) => {
  return (
   <div className='p-3 '>
      <img className='w-full object-cover' src={game.coverPhoto} alt="" />
     <p className='mt-4 font-bold text-4xl text-center mb-4'>{game.title}</p>
     <p className='text-white/50'>By :-     {game.developer}</p>
     <div className='flex justify-between py-4'>
      <p className='text-white/50'>Category:-  {game.category}</p>
     <p className='text-yellow-300 text-3xl'>{game.ratings}</p>
     </div>
     <div className='flex justify-center items-center mb-6'><Link to={game.downloadLink}><button className='btn btn-primary mt-4 '>Download</button></Link></div>
     <div className='bg-black/60 p-4'>
      <p className='text-white mt-4'>{game.description}</p>
     </div>
     <Link to= {`/games`} className='btn bg-red-500 border-4 border-lime-300 text-white mt-4'>Back to Games</Link>
    </div>
  );
};

export default GameDetailsCard;