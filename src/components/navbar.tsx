"use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';
import NavLink from './navLink';
import { motion, Variants } from 'framer-motion';

interface Link {
  url: string;
  title: string;
}

const links: Link[] = [
  { url: '/', title: 'home' },
  { url: '/about', title: 'about' },
  { url: '/changelog', title: 'changelog' },
  { url: '/team', title: 'team' },
];

const topVariants: Variants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: 'rgb(255,255,255)',
  },
};

const centerVariants: Variants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants: Variants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: 'rgb(255,255,255)',
  },
};

const listVariants: Variants = {
  closed: {
    x: '100vw',
  },
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link: Link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link: Link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;