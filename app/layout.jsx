"use client";

import './globals.css'
import { Montserrat } from "@next/font/google"
import { Navbar } from "./navbar";
import { useState } from "react";


const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-monsterrat"
})

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${darkMode ? "dark" : ""
        }`}>
        <div className={`${montserrat.className} pb-6 md:pb-12 min-h-full bg-slate-100 dark:bg-black text-gray-600 dark:text-white transition-colors ease-in-out duration-300 font-monsterrat`}>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <div className="container mx-auto px-4 lg:px-32">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
