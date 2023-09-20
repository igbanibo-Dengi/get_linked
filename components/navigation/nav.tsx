"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../app/fonts/myfont.ttf' })

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full pt-4 bg-background text-white z-50 border-b border-gray-700">
      <div className="justify-between md:items-center md:flex max-w-[1200px] mx-auto px-5">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link style={myFont.style} href="/" className="text-base md:text-4xl font-extrabold">
              get<span className="text-primary">linked</span>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 z-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 h-screen sm:h-fit mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="flex flex-col md:flex-row justify-center md:items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <Link href="/" className="hover:text-primary">
                Timeline
              </Link>
              <Link href="about/" className="hover:text-primary">
                Overview
              </Link>
              <Link
                href="/domain"
                className="hover:text-primary"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary"
              >
                Contact
              </Link>
              <div className="w-fit">
                <Button size={'lg'}>Register</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;