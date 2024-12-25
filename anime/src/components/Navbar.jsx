import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 bg-opacity-70 h-19 backdrop-blur-md text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-lg">
          AnimeVerse
        </a>
        <ul className="flex space-x-4 w-fit justify-end">
          <li>
            <a href="/" className=" font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="/anime" className=" font-bold">
              Anime List
            </a>
          </li>
          <li>
            <a href="/about" className=" font-bold">
              About
            </a>
          </li>
          <li >
            <a href="/contact" className=" font-bold">
              Contact
            </a>
            
          </li>
          <button className="bg-blue-300 px-3 py-1  rounded-md text-black">Login</button>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
