import React from 'react';
import { FaPaw, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
  return (
    <div className="CardStyle w-full max-w-md mx-auto my-6 overflow-hidden flex flex-col md:flex-row shadow-md hover:shadow-xl transition-all hover:scale-[1.02]">
      
      {/* Left Side: Image with Badge */}
      <div className="flex-shrink-0 w-full md:w-48 relative">
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-64 md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" 
        />
        {/* The Paw icon now adapts its background to the theme */}
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-stone-700/90 p-2 rounded-full shadow-md">
          <FaPaw className="text-orange-600 dark:text-orange-400" />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 tracking-tight">{service.name}</h2>
          
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <span className="badge badge-warning font-bold uppercase text-[10px] tracking-widest px-3 py-3">
               {service.category}
             </span>
          </div>

          <div className="space-y-2 opacity-95 mb-5">
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              ${service.price}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
              <FaMapMarkerAlt className="text-stone-400" />
              {service.location}
            </p>
          </div>
        </div>

        <Link to={`/serviceDetails/${service._id}`} className="w-full">
          <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl font-bold shadow-sm active:scale-95 transition-transform">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;