import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          JobConnect
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/jobs" className="text-gray-600 hover:text-blue-600">Jobs</Link>
          <Link to="/post-job" className="text-gray-600 hover:text-blue-600">Post a Job</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
