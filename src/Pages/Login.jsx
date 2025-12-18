import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { FaGoogle, FaEnvelope, FaLock, FaPaw } from 'react-icons/fa';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn, auth, signInWithGoogle } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Welcome Back!',
          text: 'Logged in successfully',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        setError(error.code);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password.',
          confirmButtonColor: '#ea580c'
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
      .catch(error => setError(error.code));
  };

  const handleForgetpassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      return Swal.fire({
        icon: 'warning',
        text: 'Please enter your email first to reset password.',
      });
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: 'info',
          title: 'Email Sent',
          text: 'Please check your inbox to reset your password.',
        });
      })
      .catch(err => setError(err.message));
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <Helmet>
        <title>PawMart - Login</title>
      </Helmet>

      <div className="CardStyle w-full max-w-md overflow-hidden shadow-2xl border-none">
        <div className="bg-orange-600 p-8 text-white text-center">
          <div className="flex justify-center mb-3">
            <FaPaw className="text-4xl" />
          </div>
          <h2 className="text-3xl font-bold">Welcome to PawMart</h2>
          <p className="text-orange-100 opacity-80 mt-1">Please login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-5">
          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaEnvelope className="text-orange-500 text-sm" /> Email
            </label>
            <input 
              type="email" 
              ref={emailRef} 
              name="email" 
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="form-control">
            <label className="label font-bold flex gap-2 items-center">
              <FaLock className="text-orange-500 text-sm" /> Password
            </label>
            <input 
              type="password" 
              name='password' 
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white" 
              placeholder="Enter your password" 
              required
            />
            <div className="mt-2 text-right">
              <button 
                type="button" 
                onClick={handleForgetpassword} 
                className="text-sm hover:text-orange-600 transition underline opacity-70"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm font-medium italic">Error: {error}</p>}

          <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 text-white border-none w-full rounded-xl text-lg mt-2 shadow-lg">
            Login
          </button>

          <div className="divider opacity-50 uppercase text-xs font-bold">OR</div>

          <button 
            type="button"
            onClick={handleGoogleSignIn} 
            className="btn btn-outline border-orange-600 text-orange-600 hover:bg-orange-600 hover:border-orange-600 w-full rounded-xl flex items-center gap-3"
          >
            <FaGoogle /> Login with Google
          </button>

          <p className="text-center mt-6 opacity-80">
            Don't have an account? 
            <Link to='/auth/register' className="text-orange-600 font-bold ml-1 hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;