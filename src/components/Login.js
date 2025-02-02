import React, { useState } from 'react'
import { BG_URL } from '../utils/constants'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
    <Header />
    <div className='absolute'>
    <img  src={BG_URL} alt="logo" />
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

    <h1 className='font-bold py-4 text-3xl'>{isSignInForm ? "Sign-In" : "Sign-Up" }</h1>
    {!isSignInForm &&  
      <input type="text" placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full'/>
    }
    <input type="text" placeholder='Email Address' className='p-4 my-4 bg-gray-700 w-full'/>
    <input type="password" placeholder='Password' className='p-4 my-4 bg-gray-700 w-full'/>
    <button  className='bg-red-700 p-4 my-6 rounded-lg w-full'>Submit</button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
    {!isSignInForm ? "Already registered ? Please Signin" : "New to Cineflix? SignUp"}
    </p>
    </form>
    </div>
  )
}

export default Login