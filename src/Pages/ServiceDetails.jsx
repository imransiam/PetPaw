
import React from 'react';
import ServiceDetailsCard from '../Components/ServiceDetailsCard';
import { Helmet } from 'react-helmet';

const GameDetails = () => {
  return (
    <>
      <Helmet>
        <title>PawMart - Details</title>
      </Helmet>

      <ServiceDetailsCard />
    </>
  );
};

export default GameDetails;
