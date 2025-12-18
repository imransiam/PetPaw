import { updateProfile } from 'firebase/auth';
import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { FaUserEdit, FaImage, FaUser, FaPaw } from 'react-icons/fa';

const UpdateUserDetails = () => {
  const { auth, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateProfile(auth.currentUser, profile)
      .then(() => {
        // Update local user state so the Navbar updates immediately
        setUser({ ...auth.currentUser, displayName: name, photoURL: photo });
        
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated!',
          text: 'Your PawMart profile is now up to date.',
          timer: 2000,
          showConfirmButton: false,
        });
        navigate('/user');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Helmet>
        <title>PawMart - Update Profile</title>
      </Helmet>

      <div className="CardStyle w-full max-w-md overflow-hidden shadow-2xl border-none">
        <div className="bg-orange-600 p-8 text-white text-center">
          <div className="flex justify-center mb-3">
            <FaUserEdit className="text-5xl" />
          </div>
          <h2 className="text-3xl font-bold">Edit Profile</h2>
          <p className="text-orange-100 opacity-80 mt-1">Keep your pet-parent info current</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="p-8 space-y-6">
          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaUser className="text-orange-500 text-sm" /> Full Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={auth.currentUser?.displayName}
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaImage className="text-orange-500 text-sm" /> Photo URL
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={auth.currentUser?.photoURL}
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="Paste your photo URL"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn bg-orange-600 hover:bg-orange-700 text-white border-none w-full rounded-xl text-lg shadow-lg flex items-center gap-2"
            >
              <FaPaw /> Save Changes
            </button>
            <button 
              type="button"
              onClick={() => navigate('/user')}
              className="btn btn-ghost w-full mt-2 opacity-70 hover:opacity-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserDetails;