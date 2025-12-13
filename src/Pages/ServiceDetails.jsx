import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ServiceDetailsCard from '../Components/ServiceDetailsCard';
import { Helmet } from 'react-helmet';

const GameDetails = () => {
  const data = useLoaderData();
  const {id} = useParams()
  const [service, setService] = useState({})
  useEffect(()=>{
    const serviceDetails = data.find(singleService => singleService.id == id)
    setService(serviceDetails)
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
      <ServiceDetailsCard service={service}></ServiceDetailsCard>
      
    </div>
    </>
  );
};

export default GameDetails;