import { useState } from 'react';
import Navbar from './SignupNavbar'; 
import Image from '../../../public/Image.png'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://mywarehouse-fxuk.onrender.com/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, phoneNo, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sign Up successful', data);
      } else {
        setError(data.message || 'Sign Up failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Navbar />
      <div className="flex w-1/2 items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <p className="text-center text-gray-600">Create your account</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                id="username" 
                className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="text" 
                id="phoneNo" 
                className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                value={phoneNo} 
                onChange={(e) => setPhoneNo(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <input 
                type="text" 
                id="role" 
                className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                required 
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-indigo-500 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600">
            Already have an account? <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">Sign In</a>
          </p>
        </div>
      </div>
      <div className="w-1/2">
      <img src={Image} alt="Sign In" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default SignUp;
