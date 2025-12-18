import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ServiceCard from '../Components/ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
  const allServices = useLoaderData();
  const { category: urlCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'all');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(allServices);
    } else {
      const filtered = allServices.filter(service => service.category === selectedCategory);
      setFilteredServices(filtered);
    }
  }, [selectedCategory, allServices]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>GameHub - Services</title>
      </Helmet>

      <div>
        <h2 className='text-4xl font-bold text-center'>All Services</h2>
        
        <div className='flex justify-center mt-6 mb-8'>
          <select 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="all">All Categories</option>
            <option value="pets">Pets</option>
            <option value="food">Food</option>
            <option value="accessories">Accessories</option>
            <option value="care-products">Care Products</option>
          </select>
        </div>

        {filteredServices.length > 0 ? (
          <div className='flex-1 max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            {filteredServices.map(service => <ServiceCard key={service._id} service={service} />)}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-500'>No services found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;


