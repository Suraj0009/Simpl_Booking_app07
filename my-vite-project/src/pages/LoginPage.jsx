import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='mt-5'>
      <h1 className='  text-4xl text-center mb-6'>Login</h1>
      <form className='max-w-md mx-auto border p-6 rounded-lg shadow-lg' action=''>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500'
            placeholder='youremail@example.com'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500'
            placeholder='Your password'
          />
        </div>
        <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
          Login
        </button>
        <div className='mt-3 text-small text-red-500' >
       <Link to={'/Register'}> Didn't have account yet? Click here</Link>
        
        </div>
      </form>
    </div>
  );
}
