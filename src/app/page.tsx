"use client"

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Homepage: FC = () => {
  return (
    <motion.div
      className="h-full"
      style={{
        background: 'white'
      }}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
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
            technology board
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
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                <div className="translate-x-0 transition group-hover:-translate-x-[150%]">new code</div>
                <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">changelog</div>
              </button>
            </Link>

            <Link href="/team" passHref>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                <div className="translate-x-0 transition group-hover:-translate-x-[150%]">meet us</div>
                <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">the team</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;