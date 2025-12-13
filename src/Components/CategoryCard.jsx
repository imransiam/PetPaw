import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ title, description, image, category }) => {
  return (
    <div className="card bg-base-100 w-full md:w-[600px] shadow-sm cursor-pointer hover:shadow-md transition">
      <figure>
        <img className='object-cover w-full h-[300px]' src={image} alt={title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end">
          <Link to={`/services/${category}`}>
            <button className="btn btn-primary">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
