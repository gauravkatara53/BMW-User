import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 shadow-md w-[987px] h-[70px] flex items-center justify-between px-4 rounded-xl">
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Warehouse On Hire</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
        <Link to="/profile" className="text-gray-700 hover:text-gray-900">Profile</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/signup" className="text-gray-700 hover:text-gray-900">Sign Up</Link>
        <Link to="/signin" className="text-gray-700 hover:text-gray-900">Sign In</Link>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
