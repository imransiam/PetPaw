import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Helmet } from 'react-helmet';
// import auth from '../Firebase/Firebase.config';

const Login = () => {
  const [error, setError] = useState('')
  const {signIn, auth, signInWithGoogle} = use(AuthContext)
  const emailRef = useRef()
  const location = useLocation();
  // console.log(location);
  
  const navigate = useNavigate();
  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
    // console.log({email,password})

    
    signIn(email, password)
    .then (result=>{
      const user = result.user
      // console.log(user);
      alert('User logged in successfully')
      navigate(`${location.state? location.state : '/'}`)
    })
    .catch (error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, errorCode);
      setError(errorCode)
    })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        // console.log('Google user:', user);
        alert('Logged in with Google successfully');
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setError(errorCode);
      })
  }

  const handleForgetpassword =()=>{
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('Password reset email sent successfully')
      
    })
    .catch(error =>{
      console.log(error.message);
      
    })
  }
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - Login</title>
      </Helmet>
    </div>
  <div className='flex justify-center min-h-screen items-center '>
     <div className="card px-6 w-full max-w-sm shrink-0 shadow-2xl bg-[#0D6EFD]">
      <h2 className='text-center font-semibold text-2xl pt-9'>Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          <p className='text-red-600 mt-2'>{error}</p>
          <div ><a onClick={handleForgetpassword} className="link link-hover">Forgot password?</a></div>
          <button  type="submit" className="btn btn-neutral bg-primary mt-4">Login</button>
          <p className='text-center font-semibold py-3 mt-2'>Don't have an account? <Link to='/auth/register' className="link link-hover text-secondary"> Register</Link></p>
        </fieldset>
        <button onClick={handleGoogleSignIn} className="btn  bg-white text-black mt-4">Login with Google</button>
      </form>
    </div>
  </div>
  </>
  );
};

export default Login;