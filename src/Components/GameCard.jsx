import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const GameCard = ({ game }) => {
  return (
    <div className="bg-amber-100 w-full max-w-md mx-auto my-4 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
      
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-48">
        <img
          src={game.imageUrl}
          alt={game.name}
          className="w-full h-64 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 md:p-6 bg-amber-200 flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{game.name}</h2>
        <p className="flex items-center gap-1 text-gray-700 mb-4">
          Category: {game.category} <IoIosStar size={17} className="text-yellow-400" />
        </p>
        <p className="flex items-center gap-1 text-gray-700 mb-4">
          Price: {game.price} <IoIosStar size={17} className="text-yellow-400" />
        </p>
        <p className="flex items-center gap-1 text-gray-700 mb-4">
          Location: {game.location} <IoIosStar size={17} className="text-yellow-400" />
        </p>
        <Link to={`/gameDetails/${game._id}`}>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-200">
            See Details
          </button>
        </Link>
      </div>

    </div>
  );
};

export default GameCard;
