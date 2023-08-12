import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import LoginPage from './LoginPage';



export default function Register() {

  const[name,SetName]=useState('');
const[email,SetEmail]=useState('');
const[password, SetPassword]=useState('');



async function registeruser(ev) {
  ev.preventDefault();

  

  try {
    const userData = {
      name,
      email,
      password
       // Include confirmPassword
    };

    const response = await axios.post('http://localhost:2000/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    alert("Registration Sucess")
    console.log('Registration successful:', response.data);
    // Handle success
  } catch (error) {
    console.error('Error registering user:', error);
    // Handle error
  }
}
  
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold mb-6'>Create an Account</h1>
        <form onSubmit={registeruser} method='post'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500'
              placeholder='Your name'
              value={name}
              onChange={ev =>SetName(ev.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500'
              placeholder='youremail@example.com'
              value={email}
              onChange={ev =>SetEmail(ev.target.value)}
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
              value={password}
              onChange={ev =>SetPassword(ev.target.value)}
            />
          
  
          </div>
          <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
            Register
          </button>
        </form>
        <div className='mt-4'>
        Already a member <Link to='/login' className='text-red-500 font-semibold'> Login</Link>

        </div>
      </div>
    </div>
  );
}
