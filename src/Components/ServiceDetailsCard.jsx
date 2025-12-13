import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/services/${id}`);
        setService(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load service details');
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!service) return <div className="text-center mt-10 text-gray-500">Service not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img src={service.imageUrl} alt={service.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
      <p className="text-gray-700 mb-2">Category: {service.category}</p>
      <p className="text-gray-700 mb-2">Price: {service.price}</p>
      <p className="text-gray-700 mb-2">Location: {service.location}</p>
      {service.email && <p className="text-gray-700 mb-2">Contact: {service.email}</p>}
      {service.description && <p className="text-gray-700 mb-4">{service.description}</p>}
      {service.downloadLink && (
        <Link to={service.downloadLink}>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">Download</button>
        </Link>
      )}
      <div className="mt-6">
        <Link to="/services" className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">Back to Services</Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
