import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import Login from '../Pages/Login';
import { AuthContext } from '../Provider/AuthProvider';
import UserDetails from '../Pages/UserDetails';
import logo from '../assets/logoGameHub.png'

const Navbar = () => {
   const {user, logOut} = use(AuthContext)
   
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      console.log('User logged out successfully');
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  // Define the central links, using simple hover for interaction
  const navLinks = (
    <>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Home</NavLink>
      <NavLink to='/games' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Games</NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>About</NavLink>
    </>
  );


  return (
    // 1. Main container: Set as flex, relative, space-between
    <div className="bg-green-900 shadow-lg text-white py-4 md:py-6 relative flex items-center justify-between navbarFont"> 

      {/* Side 1: Logo/Brand (Left Side) */}
      <div className="flex-shrink-0 flex items-center gap-2 z-10 pl-4 md:pl-8">
        <img className='w-10 h-10 rounded-full object-cover' src={logo} alt="PawMart Logo" /> 
        <a className="text-3xl md:text-4xl font-bold">PawMart</a>
      </div>
      
      {/* Center Side: Navigation Links (The 3-sided solution) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 text-lg z-0">
         <div className='space-x-6'>
          {navLinks}
          {user && (
            <>
              <NavLink to='/AddListing' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Add Listing</NavLink>
              <NavLink to='/MyListings' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>My Listings</NavLink>
              <NavLink to='/Orders' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Orders</NavLink>
            </>
          )}
         </div>
         
      </div>


      {/* Side 3: User/Auth Buttons (Right Side) */}
      <div className="flex items-center gap-3 pr-4 md:pr-8 z-10">
        {/* User Image/Link */}
        {user && 
          <Link to='/user'> 
            <img 
              className='w-10 h-10 rounded-full object-cover'
              alt={`${user.displayName || 'User'}'s profile`}
              src={user.photoURL}
              title={user.displayName}
            />
          </Link>
        }

        {/* Auth Buttons */}
        {user ? (
          // Reverting to your original button style (using py-3/px-8 as in your initial code)
          <button 
            onClick={handleLogOut} 
            className='btn bg-red-500 border-2 border-red-500 px-8 py-3'
          >
            LogOut
          </button>
        ) : (
          <div className='flex gap-2 items-center text-sm md:text-base'>
            <NavLink to='/auth/login' className='hover:underline'>Login</NavLink>
            <NavLink to='/auth/register' className='btn bg-red-500 border-2 border-red-500 px-8 py-3'>Registration</NavLink> {/* Used a generic button style here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;