import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Components/ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
  const services = useLoaderData();

  return (
    <>
      <Helmet>
        <title>GameHub - Services</title>
      </Helmet>

      <div>
        <h2 className='text-4xl font-bold text-center'>All Services</h2>
        <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          {services.map(service => <ServiceCard key={service._id} service={service} />)}
        </div>
      </div>
    </>
  );
};

export default Services;
