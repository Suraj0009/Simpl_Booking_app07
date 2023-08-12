import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:2000/login', {email,password},{withCredentials :true});

      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className='mt-5'>
      <h1 className='text-4xl text-center mb-6'>Login</h1>
      <form className='max-w-md mx-auto border p-6 rounded-lg shadow-lg' onSubmit={handleLoginSubmit}>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500'
            placeholder='youremail@example.com'
            onChange={(ev) => setEmail(ev.target.value)}
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
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
          Login
        </button>
        <div className='mt-3 text-small text-red-500'>
          <Link to={'/Register'}>Don't have an account yet? Click here</Link>
        </div>
      </form>
    </div>
  );
}
