import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const GameCard = ({game}) => {
  return (
    <>
    
   <div className="card lg:card-side bg-base-100 shadow-sm rounded-none border-5 border-black CardStyle">
  <div >
    <figure className=''>
    <img className='h-[300px] w-[470px]'
      src={game.coverPhoto}
      alt="Album" />
  </figure>
  </div>
  <div className="card-body bg-blue-500 ">
    <h2 className="card-title Orbitron text-2xl">{game.title}</h2>
    <p className='flex items-center m-0 gap-1'>Ratings: {game.ratings} <IoIosStar size={17}/></p>
    <div className="card-actions justify-end">
<Link to={`/gameDetails/${game.id}`}>      <button className="btn border-5 bg-black text-white ">See Details</button></Link>
    </div>
  </div>
</div>
</>
  );
};

export default GameCard;