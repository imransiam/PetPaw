import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from '../Components/GameCard';
import { Helmet } from 'react-helmet';

const Games = () => {
  const games = useLoaderData();
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - Games</title>
      </Helmet>
    </div>
    <div>
      <h2 className='text-4xl font-bold text-center'>All Games</h2>
      <div className='flex-1 grid grid-cols-1 md:grid-cols-2  gap-6 mt-8 '>
        {
            games.map(game => <GameCard key={game._id} game={game}></GameCard>)
        }
      </div>
      
    </div>
    </>
  );
};

export default Games;