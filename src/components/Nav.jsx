import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const NavLinks = ({ onClick }) => (
  <ul className='flex flex-col md:flex-row justify-between items-center gap-16'>
    {navLinks.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          className="font-serif- leading-normal text-lg text-blue-700 hover:text-blue-900 transition-colors duration-300 ease-in-out"
          onClick={onClick}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleNav = () => setIsToggled(!isToggled);

  return (
    <header className='padding-x py-8 z-10 absolute w-full'>
      <nav className='flex justify-between items-center'>
        <a href="/">
          <h1 className="text-blue-700 text-4xl font-bold">Shoesy</h1>
        </a>

        {/* Desktop Navigation */}
        <div className='max-md:hidden md:flex'>
          <NavLinks />
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className='md:hidden'>
          <button
            type='button'
            onClick={toggleNav}
            aria-label="Toggle Navigation"
          >
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isToggled && (
          <div className='fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50 overflow-hidden '>
            <a onClick={toggleNav} className="mb-4 cursor-pointer">            <h1 className='text-blue-600 font-bold'>X</h1>
  </a>
            <NavLinks onClick={toggleNav} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
