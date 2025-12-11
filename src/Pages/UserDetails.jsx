import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const UserDetails = () => {
  const {user} = use(AuthContext)
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - UserDetails</title>
      </Helmet>
    </div>
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center gap-4'>
<h2 className='font-bold text-4xl'>User Details</h2>
<div className='border-4 border-white rounded-4xl p-10 bg-black'>
  <img className='h-[300px] rounded-4xl' src={user.photoURL
} alt="User's Photo" />
  <p className='mt-4 font-bold text-2xl'>Name: {user.displayName}</p>
  <p className='font-bold text-2xl'>Email: {user.email}</p>

</div>
<Link to='/' className='btn font-bold text-xl'>Back to Home</Link>
<Link to='/updateProfile' className='btn font-bold text-xl'>Update Profile</Link>
      </div>
      

    </div>
    </>
  );
};

export default UserDetails;