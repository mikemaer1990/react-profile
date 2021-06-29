// src/components/Navbar.js

import { MailIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";

import React, { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start md:items-center justify-center">
        <a
          href="#about"
          className="title-font font-medium md:mb-0 ml-0 text-xl hover:text-white md:ml-3"
        >
          Mike Maertens
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-col flex-wrap md:items-center text-base justify-center md:flex-row">
          <div
            className={
              toggle
                ? "mt-3 md:mt-0 flex flex-col flex-wrap md:items-center text-base justify-center md:flex-row"
                : "display-none"
            }
          >
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-800 border-0 focus:outline-none text-base md:mt-0 hover:text-white md:absolute md:right-5"
            >
              Contact Me
              <MailIcon className="w-5 h-5 ml-2 text-white cursor-pointer" />
            </a>
          </div>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white"
        >
          Contact Me
          <MailIcon className="w-5 h-5 ml-2 text-white" />
        </a> */}
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleToggle}
        >
          {toggle ? (
            <XIcon className="w-10 h-10 ml-2 hover:text-white opacity-80 md:opacity-0" />
          ) : (
            <MenuAlt3Icon className="w-10 h-10 ml-2 hover:text-white opacity-80 md:opacity-0" />
          )}
        </div>
      </div>
    </header>
  );
}
