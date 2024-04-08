import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Navicon from '../Navicon';
import React from 'react';
import Hero from './Hero';
import Produkter from './Produkter';

export default function produkter() {
  return (
    <main>
        <Navicon />

        <div className="flex justify-center items-center min-h-screen w-screen">
            <Hero />
            <div className="grid grid-cols-2 w-screen">
                <Produkter />
            </div>
        </div>
    </main>
  );
}