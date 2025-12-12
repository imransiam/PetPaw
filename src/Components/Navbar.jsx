import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import logo from '../assets/logoGameHub.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('User logged out successfully'))
      .catch((error) => console.log(error.message));
  };

  const navLinks = (
    <>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Home</NavLink>
      <NavLink to='/games' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Games</NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>About</NavLink>
      {user && (
        <>
          <NavLink to='/AddListing' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>Add Listing</NavLink>
          <NavLink to='/MyListings' className={({ isActive }) => (isActive ? 'font-bold' : 'hover:opacity-70')}>My Listings</NavLink>
          <NavLink to='/Orders' className={({ isActive }) => (isActive ? 'font-bold,' : 'hover:opacity-70')}>Orders</NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-green-200/65 shadow-lg text-black py-4 md:py-6 relative flex items-center justify-between px-4 md:px-8">

      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-full object-cover' src={logo} alt="PawMart Logo" />
        <span className="text-3xl md:text-4xl font-bold">PawMart</span>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-lg">
        {navLinks}
      </div>

      {/* Right: User/Auth + Mobile Hamburger */}
      <div className="flex items-center gap-3">
        {user && (
          <Link to='/user'>
            <img
              className='w-10 h-10 rounded-full object-cover'
              src={user.photoURL}
              alt={`${user.displayName || 'User'}'s profile`}
              title={user.displayName}
            />
          </Link>
        )}

        {user ? (
          <button
            onClick={handleLogOut}
            className='btn bg-red-500 border-2 border-red-500 px-8 py-3'
          >
            LogOut
          </button>
        ) : (
          <div className="hidden md:flex gap-2 items-center text-sm md:text-base">
            <NavLink to='/auth/login' className='hover:underline'>Login</NavLink>
            <NavLink to='/auth/register' className='btn bg-red-500 border-2 border-red-500 px-8 py-3'>Registration</NavLink>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-green-900 flex flex-col gap-2 p-4 md:hidden z-20">
          {navLinks}
          {!user && (
            <div className="flex flex-col gap-2 mt-2">
              <NavLink to='/auth/login' className='hover:underline'>Login</NavLink>
              <NavLink to='/auth/register' className='btn bg-red-500 border-2 border-red-500 px-8 py-3'>Registration</NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
