import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import GameDetailsCard from '../Components/GameDetailsCard';
import { Helmet } from 'react-helmet';

const GameDetails = () => {
  const data = useLoaderData();
  const {id} = useParams()
  const [game, setGame] = useState({})
  useEffect(()=>{
    const gameDetails = data.find(singleGame => singleGame.id == id)
    setGame(gameDetails)
  },[data, id])
  // console.log(data, id, game);
  return (
<>
 <div>
      <Helmet>
        <title>GameHub - GameDetails</title>
      </Helmet>
    </div>
    <div className='w-11/12 mx-auto justify-center items-center'>
      <GameDetailsCard game={game}></GameDetailsCard>
      
    </div>
    </>
  );
};

export default GameDetails;