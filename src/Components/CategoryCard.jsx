import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ title, description, image, category }) => {
  return (
    /* Removed fixed 600px width. Added CardStyle for theme matching. */
    <div className="CardStyle group overflow-hidden flex flex-col h-full hover:scale-[1.02] transition-all duration-300 border-none shadow-lg">
      <figure className="relative overflow-hidden">
        <img 
          className='object-cover w-full h-[250px] transition-transform duration-500 group-hover:scale-110' 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      </figure>

      <div className="card-body p-6 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-2xl font-bold text-orange-700 dark:text-orange-400">
            {title}
          </h2>
          <p className="opacity-80 mt-2">{description}</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/services/${category}`} className="w-full">
            <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl flex items-center gap-2">
              Explore {title} <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;