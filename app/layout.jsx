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
        <div className={`${montserrat.className} px-32 py-12 dark:bg-black dark:text-white transition-colors ease-in-out duration-300 font-monsterrat`}>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          {children}
        </div>
      </body>
    </html>
  )
}
