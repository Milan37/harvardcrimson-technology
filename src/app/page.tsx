import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Homepage: FC = () => {
  return (
    <div
      className="h-full"
      style={{
        background: 'white'
      }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            crimson tech
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            the backbone behind&nbsp;
            <a href="https://www.thecrimson.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#840B10' }}>
              The Harvard Crimson
            </a>
          </p>

          {/* BUTTONS */}
          <div className="w-full flex justify-center gap-4">
            <Link href="/changelog" passHref>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative transition-colors duration-300 ease-in-out group-hover:text-black">
                  <span className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">new code</span>
                  <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">changelog</span>
                </span>
              </button>
            </Link>

            <Link href="/team" passHref>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative transition-colors duration-300 ease-in-out group-hover:text-black">
                  <span className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">meet us</span>
                  <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">team</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;