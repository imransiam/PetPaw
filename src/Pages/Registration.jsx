import React, { use } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';


const Register = () => {
  const {createUser, setUser, updateUser, signInWithGoogle}= use(AuthContext)
  const navigate = useNavigate();
   const location = useLocation();
  const handleRegister = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    // console.log({name,photo,email,password});
    createUser(email, password)
    .then (result=>{
      const user = result.user
      navigate('/auth/login')
      alert('User registered successfully, Please login')
      updateUser({
        displayName: name,
        photoURL: photo
      })
      .then(() => {
 setUser({...user, displayName: name, photoURL: photo})
 
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
      // console.log(user);
     
    })
    .catch (error=>{
      // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
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
        
        const errorMessage = error.message;
        alert(errorMessage);
        
      })
  }
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - Register</title>
      </Helmet>
    </div>
    <div className='flex justify-center min-h-screen items-center '>
     <div className="card bg-[#0D6EFD] w-full max-w-sm shrink-0 shadow-2xl px-8">
      <h2 className='text-center font-semibold text-2xl pt-9'>Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          {/* //name */}
           <label className="label">Your Name</label>
          <input type="text" name='name'   className="input" placeholder="Enter your name" required /> 
          {/* //photo URL */}
           <label className="label">Photo URL</label>
          <input type="text"  name='photo' className="input" placeholder="Enter your photo URL" required />
          {/* //email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Enter your email" required />
          {/* //password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Enter your password" required />

          <button type="submit" className="btn btn-neutral bg-primary mt-4">Register</button>
          <p className='text-center font-semibold py-3 mt-2'> Already have an account? <Link to='/auth/login' className="link link-hover text-secondary"> Login</Link></p>
        </fieldset>
         <button onClick={handleGoogleSignIn} className="btn  bg-white text-black mt-4">Login with Google</button>
      </form>
    </div>
  </div>
  </>
  );
};

export default Register;