import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './SignupNavbar'; 
import Image from '../../../public/Image.png'

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        const response = await fetch('https://mywarehouse-fxuk.onrender.com/api/v1/users/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            const { accessToken, refreshToken, user } = data.data;
    
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(user));
            console.log('Login successful', data.message);
            navigate('/');
          } else {
            setError(data.message || 'Login failed');
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
          <h2 className="text-2xl font-bold text-center">Welcome</h2>
          <p className="text-center text-gray-600">Enter your username and password to sign in</p>
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
            <div className="flex items-center justify-between">
              <label htmlFor="remember_me" className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember_me" 
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} 
                />
                <span className="ml-2 block text-sm text-gray-900">Remember me</span>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600">
            Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img src={Image} alt="Sign In" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Signin;

