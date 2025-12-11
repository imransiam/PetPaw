import React from 'react';
import errorPic from '../assets/Screenshot 2025-11-04 214025.png'
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - 404</title>
      </Helmet>
    </div>
    <div className='min-h-screen'>
      <img className='w-full h-screen '  src={errorPic} alt="" />
       <button
        onClick={() => navigate('/')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
    </>
  );
};

export default Page404;