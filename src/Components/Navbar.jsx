import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import ThemeControl from './ThemeControl';
import { FaPaw, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('Logged out'))
      .catch((error) => console.log(error.message));
  };

  const navLinks = (
    <>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-300 font-bold border-b-2 border-orange-300' : 'hover:text-orange-200 transition'}>Home</NavLink>
      <NavLink to='/services' className={({ isActive }) => isActive ? 'text-orange-300 font-bold border-b-2 border-orange-300' : 'hover:text-orange-200 transition'}>Pets & Supplies</NavLink>
      {user && (
        <>
          <NavLink to='/AddListing' className={({ isActive }) => isActive ? 'text-orange-300 font-bold border-b-2 border-orange-300' : 'hover:text-orange-200 transition'}>Add Listing</NavLink>
          <NavLink to='/MyListings' className={({ isActive }) => isActive ? 'text-orange-300 font-bold border-b-2 border-orange-300' : 'hover:text-orange-200 transition'}>My Listings</NavLink>
          <NavLink to='/Orders' className={({ isActive }) => isActive ? 'text-orange-300 font-bold border-b-2 border-orange-300' : 'hover:text-orange-200 transition'}>Orders</NavLink>
        </>
      )}
      <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-300 font-bold border-b-2 border-orange-300' : 'hover:text-orange-200 transition'}>About</NavLink>
    </>
  );

  return (
    <nav className="bg-orange-700 text-white shadow-xl sticky top-0 z-50 py-3 md:py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* --- NEW LOGO SECTION --- */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white p-2 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
            <FaPaw className="text-orange-700 text-2xl md:text-3xl" />
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter">
            Paw<span className="text-orange-200">Mart</span>
          </span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
          {navLinks}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeControl />

          {user ? (
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-orange-400">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "https://i.ibb.co/3S4X6kL/user.png"} alt="User" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                  <li className="px-4 py-2 font-bold text-orange-700 border-b border-gray-100 italic">{user.displayName}</li>
                  <li><Link to="/user">Profile Settings</Link></li>
                  <li><button onClick={handleLogOut} className="text-red-500 font-bold">Logout</button></li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link to='/auth/login' className='btn btn-sm btn-ghost hover:bg-orange-600'>Login</Link>
              <Link to='/auth/register' className='btn btn-sm bg-white text-orange-700 border-none rounded-full px-6 shadow-md'>Register</Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-2xl transition-all" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-orange-800 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen py-8 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6 font-bold uppercase tracking-widest">
          {navLinks}
          {!user && (
            <div className="flex flex-col gap-3 w-full px-10 pt-6 border-t border-orange-600">
              <Link to='/auth/login' onClick={() => setMenuOpen(false)} className="btn btn-outline border-white text-white">Login</Link>
              <Link to='/auth/register' onClick={() => setMenuOpen(false)} className="btn bg-white text-orange-700 border-none">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;