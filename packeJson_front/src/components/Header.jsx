import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  

  return (
    <div className="navbar bg-base-100 bg-white shadow-sm fixed top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between space-x-100">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-green-600">PackeJSON</h1>
        

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8 ml-12">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Catálogo
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Masculino
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Femenino
          </a>
        </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Cart Icon Space */}
          <div className="w-6 h-6 flex items-center justify-center"><MdShoppingCart className="w-10 h-10" /></div>

          {/* Sign In Button */}
          <a href="/login" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </div>

  );
};

export default Header;
