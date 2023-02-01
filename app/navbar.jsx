"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
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
  return (
    <div className="mx-auto py-3">
      <nav className="text-black mb-5 text-3xl dark:text-white">
        <ul className="flex items-center justify-center py-5  rounded-sm">
          {links.map((link) => (
            (link.text === "Home") ?
              <li key={link.href} className="mr-auto">
                <Link
                  className="flex items-center text-3xl text-yellow-600 font-bold"
                  href={link.href}
                >
                  <SiDatadog className="cursor-pointer text-5xl font-semibold mr-2" />Doggie Loves Movie
                </Link>
              </li>
              :

              <li className="pr-[2.5rem]" key={link.href}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    className={`${link.href === path ? "text-yellow-600 font-bold" : ""
                      } text-base`}
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              </li>
          ))}
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
