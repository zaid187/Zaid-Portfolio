import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">Zaid Kazi</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <Link to="/Hero">Home</Link> {/* Add Home link */}
        </li>
        <li className="p-5">
          <Link to="/about">About</Link>
        </li>
        <li className="p-5">
          <Link to="/work">Work</Link>
        </li>
        <li className="p-5">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-5">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <li>
        <DarkMode />
      </li>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Zaid Kazi</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <Link to="/Hero">Home</Link> {/* Add Home link in mobile menu */}
          </li>
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/work">Work</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
