import { updateProfile } from 'firebase/auth';
import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';


const UpdataUserDetails = () => {
  const {auth} = use(AuthContext)
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log({ name, photo });
    const profile = {
      displayName: name,
      photoURL: photo,
    }
    updateProfile(auth.currentUser, profile)
      .then(() => {
        alert('Profile updated successfully')
        navigate('/user')
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - UpdateProfile</title>
      </Helmet>
    </div>
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <form onSubmit={handleUpdateProfile} className='flex flex-col justify-center items-center border-2 border-white p-8'>
         {/* //name */}
           <label className="label">Your Name</label>
          <input type="text" name='name'   className="input mb-5" placeholder="Enter your name" required /> 
          {/* //photo URL */}
           <label className="label">Photo URL</label>
          <input type="text"  name='photo' className="input" placeholder="Enter your photo URL" required />
          <button type='submit' className='btn mt-9'>Update</button>
      </form>
      
    </div>
    </>
  );
};

export default UpdataUserDetails;