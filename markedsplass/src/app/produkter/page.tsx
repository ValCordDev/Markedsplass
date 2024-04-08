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

        <div className="flex justify-center items-center min-h-screen w-screen flex-col gap-10 p-10">
            <Hero />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-5">
                <Produkter />
                <Produkter />
                <Produkter />
            </div>
        </div>
    </main>
  );
}