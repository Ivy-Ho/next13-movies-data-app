"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { BsSunFill } from "react-icons/bs";
// import { MdLocalMovies } from "react-icons/md";
import { SiDatadog } from "react-icons/si";

const links = [
  { href: "/", text: "Home" },
  { href: "/popular", text: "Popular" },
  { href: "/topRated", text: "Top Rated" },
];

export const Navbar = ({ darkMode, setDarkMode }) => {
  const path = usePathname();
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className="mx-auto">
      <nav className="py-3 rounded mb-8">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link
            className="flex items-center text-lg md:text-3xl text-yellow-600 font-bold"
            href="/"
          >
            <SiDatadog className="cursor-pointer text-5xl font-semibold mr-2" />
            <span className="self-center text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold whitespace-nowrap dark:text-white">Doggie Loves Movie</span>
          </Link>

          <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setMenuShow(!menuShow)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`${menuShow ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-solid-bg">
            <ul className="flex flex-col items-center mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {links.map((link) => (
                <li key={link.href}>
                  <div>
                    <Link
                      className={`${link.href === path ? "text-yellow-600 font-bold" : "text-gray-600 dark:text-white"
                        } hover:text-yellow-600 block text-lg py-2 pl-3 pr-4 rounded`}
                      href={link.href}
                      onClick={() => setMenuShow(false)}
                    >
                      {link.text}
                    </Link>
                  </div>
                </li>
              ))}
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="hidden md:block cursor-pointer text-2xl hover:text-yellow-600"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
