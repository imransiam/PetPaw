import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaEnvelope, FaEdit, FaHome, FaPaw } from 'react-icons/fa';

const UserDetails = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center px-4 py-10">
      <Helmet>
        <title>PawMart - My Profile</title>
      </Helmet>

      <div className="flex flex-col items-center gap-8 w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <FaPaw className="text-5xl text-orange-600 mx-auto animate-bounce" />
          <h2 className="font-black text-5xl text-orange-600 tracking-tighter">My Profile</h2>
          <p className="opacity-60 italic">Welcome back to the PawMart family!</p>
        </div>

        {/* Profile Card */}
        <div className="CardStyle w-full p-8 md:p-12 flex flex-col items-center shadow-2xl border-none text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              className="relative h-64 w-64 object-cover rounded-[2rem] border-4 border-white dark:border-stone-700 shadow-lg" 
              src={user?.photoURL || "https://via.placeholder.com/300"} 
              alt="User's Profile" 
            />
          </div>

          <div className="mt-8 space-y-4 w-full">
            <div className="flex items-center justify-center gap-3">
              <FaUserCircle className="text-orange-500 text-2xl" />
              <p className="text-3xl font-bold">{user?.displayName || "Anonymous Pet Lover"}</p>
            </div>
            
            <div className="flex items-center justify-center gap-3 opacity-80">
              <FaEnvelope className="text-orange-500" />
              <p className="text-xl font-medium">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <Link 
            to="/" 
            className="btn btn-outline border-orange-600 text-orange-600 hover:bg-orange-600 hover:border-orange-600 rounded-2xl px-8 font-bold text-lg flex items-center gap-2"
          >
            <FaHome /> Home
          </Link>
          
          <Link 
            to="/updateProfile" 
            className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-2xl px-8 font-bold text-lg shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaEdit /> Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;