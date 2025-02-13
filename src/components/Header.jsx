import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="font-extrabold text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          PingMe
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-white text-lg font-medium">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer transition-colors hover:text-blue-400"
                >
                  {item}
                </Link>
                {/* Animated Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-blue-400 transition"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden animate-fadeInDown bg-black bg-opacity-90 backdrop-blur-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white text-lg font-medium">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer transition-colors hover:text-blue-400"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
