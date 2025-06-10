import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLogin = () => {
    if (user) setUser(null);
    else setUser({ name: 'John Doe' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold text-gray-800"
          aria-label="FixMate Home"
        >
          <Sparkles size={20} style={{ color: '#0D80F2' }} />
          <span className="text-2xl">FixMate</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/for-businesses" className="text-gray-600 text-lg hover:text-gray-800">
            For Businesses
          </Link>
          <Link to="/help" className="text-gray-600 text-lg hover:text-gray-800">
            Help
          </Link>
          <button
            className="btn btn-sm text-lg text-white hover:bg-[#0D80F2] hover:opacity-90 rounded-lg"
            style={{ backgroundColor: '#0D80F2' }}
            onClick={toggleLogin}
          >
            {user ? 'Logout' : 'Login'}
          </button>
          <Link
            to="/join-provider"
            className="btn btn-outline rounded-lg btn-sm text-black text-lg border-[#0D80F2] hover:bg-[#0D80F2] hover:text-white"
          >
            Join as a Provider
          </Link>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="flex flex-col gap-2 px-4 pb-4 md:hidden">
          <Link to="/for-businesses" className="text-gray-700 text-lg hover:text-gray-900">
            For Businesses
          </Link>
          <Link to="/help" className="text-gray-700 text-lg hover:text-gray-900">
            Help
          </Link>
          <button
            className="btn btn-sm w-full text-lg text-white hover:bg-[#0D80F2] hover:opacity-90 rounded-lg"
            style={{ backgroundColor: '#0D80F2' }}
            onClick={toggleLogin}
          >
            {user ? 'Logout' : 'Login'}
          </button>
          <Link
            to="/join-provider"
            className="btn btn-outline w-full rounded-lg btn-sm text-black text-lg border-[#0D80F2] hover:bg-[#0D80F2] hover:text-white"
          >
            Join as a Provider
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
