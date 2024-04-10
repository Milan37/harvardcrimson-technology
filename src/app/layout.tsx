import React, { FC } from 'react';
import { Courier_Prime } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
};

export default RootLayout;