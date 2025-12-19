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
 <div className='h-full'>
      <Helmet>
        <title>PawMart - Details</title>
      </Helmet>
    </div>
    <div >
      <ServiceDetailsCard service={service}></ServiceDetailsCard>
      
    </div>
    </>
  );
};

export default GameDetails;