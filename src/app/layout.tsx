import React, { FC } from 'react';
import { Courier_Prime } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'The Harvard Crimson Technology Board',
  description:
    "The Harvard Crimson Technology Board website, where you'll find code updates, information about us, and a comp portal",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen min-h-screen bg-gradient-to-b from-white-100 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>
          <main className="h-[calc(100vh-6rem)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;