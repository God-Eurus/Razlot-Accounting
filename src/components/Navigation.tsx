import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-[#F6F0E4] shadow-md sticky top-0 z-50 border-b border-[#C9CAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.jpeg" 
                alt="Razlot Accounting Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-[#194048]">
                Razlot Accounting
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#194048] bg-[#C9CAC4]'
                  : 'text-[#566E71] hover:text-[#194048] hover:bg-[#929E9C]/20'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/services')
                  ? 'text-[#194048] bg-[#C9CAC4]'
                  : 'text-[#566E71] hover:text-[#194048] hover:bg-[#929E9C]/20'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-[#194048] bg-[#C9CAC4]'
                  : 'text-[#566E71] hover:text-[#194048] hover:bg-[#929E9C]/20'
              }`}
            >
              Contact
            </Link>

            {user && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-[#566E71] text-white rounded-md text-sm font-medium hover:bg-[#194048] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#566E71] hover:text-[#194048] p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/')
                  ? 'text-[#194048] bg-[#C9CAC4]'
                  : 'text-[#566E71] hover:text-[#194048] hover:bg-[#929E9C]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/services')
                  ? 'text-[#194048] bg-[#C9CAC4]'
                  : 'text-[#566E71] hover:text-[#194048] hover:bg-[#929E9C]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-[#194048] bg-[#C9CAC4]'
                  : 'text-[#566E71] hover:text-[#194048] hover:bg-[#929E9C]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {user && (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-[#566E71] text-white rounded-md text-base font-medium hover:bg-[#194048] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
