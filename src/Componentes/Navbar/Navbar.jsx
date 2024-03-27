import  { useState } from 'react';
import Logo from '../../assets/logos/png/logo_hr_2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1634a7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="w-full flex justify-between">
            <div className="flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src={Logo}
                alt="Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex justify-end items-center">
              <a href="/box-shadow-generator" className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                BoxSahdow
              </a>
              <a href="/background-generator" className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Background
              </a>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/box-shadow-generator" className="text-gray-300 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Inicio
          </a>
          <a href="/background-generator" className="text-gray-300 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Servicios
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
