import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { FaGoogle, FaUser, FaImage, FaEnvelope, FaLock, FaPaw } from 'react-icons/fa';

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              icon: 'success',
              title: 'Registration Successful!',
              text: 'Welcome to the PawMart family. Please login now.',
              timer: 3000,
              showConfirmButton: false,
            });
            navigate('/auth/login');
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: '#ea580c',
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Google Login Success',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state ? location.state : '/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <Helmet>
        <title>PawMart - Register</title>
      </Helmet>

      <div className="CardStyle w-full max-w-md overflow-hidden shadow-2xl border-none">
        {/* Brand Header */}
        <div className="bg-orange-600 p-8 text-white text-center">
          <div className="flex justify-center mb-2">
            <FaPaw className="text-4xl" />
          </div>
          <h2 className="text-3xl font-bold">Join PawMart</h2>
          <p className="text-orange-100 opacity-80 mt-1">Create an account to get started</p>
        </div>

        <form onSubmit={handleRegister} className="p-8 space-y-4">
          {/* Name Field */}
          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaUser className="text-orange-500 text-sm" /> Full Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaImage className="text-orange-500 text-sm" /> Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="Paste your photo link"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaEnvelope className="text-orange-500 text-sm" /> Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaLock className="text-orange-500 text-sm" /> Password
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn bg-orange-600 hover:bg-orange-700 text-white border-none w-full rounded-xl text-lg mt-4 shadow-lg"
          >
            Register Now
          </button>

          <div className="divider opacity-50 uppercase text-xs font-bold">OR</div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline border-orange-600 text-orange-600 hover:bg-orange-600 hover:border-orange-600 w-full rounded-xl flex items-center gap-3"
          >
            <FaGoogle /> Join with Google
          </button>

          <p className="text-center mt-6 opacity-80">
            Already have an account?
            <Link to="/auth/login" className="text-orange-600 font-bold ml-1 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;