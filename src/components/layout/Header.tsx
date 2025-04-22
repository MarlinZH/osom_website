import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../stores/authStore';

export function Header() {
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-30"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <Brain className="h-8 w-8 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <span className="text-2xl font-bold gradient-text">OSOM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user && (
              <>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
                <Link to="/skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Skills
                </Link>
                <Link to="/opportunities" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Opportunities
                </Link>
              </>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="group">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue via-accent-green to-accent-purple rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                    <img
                      src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
                      alt={user.name}
                      className="relative h-8 w-8 rounded-full"
                    />
                  </div>
                </Link>
                <Button variant="outline" onClick={logout}>
                  Log out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/skills"
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Skills
                </Link>
                <Link
                  to="/opportunities"
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Opportunities
                </Link>
              </>
            )}
            {user ? (
              <div className="space-y-4">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <img
                    src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <span>{user.name}</span>
                </Link>
                <Button variant="outline" onClick={logout} className="w-full">
                  Log out
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}