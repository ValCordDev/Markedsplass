"use client"

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Navicon from './Navicon';
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import useSession  from '@/hooks/useSession';
import { PROJECT_ID, DATASET, QUERY, QUERY2 } from '@/database/santity';
import imageUrlBuilder from "@sanity/image-url";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'; 
import Link from 'next/link';

// Setup the imageUrlBuilder
const builder = imageUrlBuilder({
  projectId: PROJECT_ID,
  dataset: DATASET,
});

export default function produkter() {
  const [user, setUser] = useSession();
  const [produkter, setProdukter] = useState(null);

  useEffect(() => {
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.result);
        setProdukter(data.result);
      })
  
  }, [])

  return (
    <main>
        <Navicon />
        { user &&
          <div className='w-screen absolute flex justify-end p-4 hover:cursor-pointer items-center'>
            <Link href="http://localhost:3333" passHref className='btn btn-ghost duration-300 border-none text-gray-700 text-sm mr-2'>
                + Legg til produkt
            </Link>
            <div className='w-14' onClick={() => signOut(auth)}>
              <img src={user.photoURL || 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'} alt="" className='rounded-full flex justify-center items-center shadow-lg border border-spacing-10 border-gray-800 hover:shadow-2xl transition-shadow duration-300' />
            </div>
          </div>
        }
        <div className="flex items-center min-h-screen w-screen flex-col gap-10 p-20">
            <Hero />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-5">

              {produkter && produkter.map(produkt => {
                // Get the imageUrl for the produkt
                const imageUrl = builder.image(produkt.bilde);

                return (
                  <div className='relative isolate flex flex-col overflow-hidden rounded-2xl px-8 pb-8 pt-72 ease-in-out duration-300 border-none hover:cursor-pointer' key={produkt.id}>
                    <img src={imageUrl.url()} alt="" className='absolute inset-0 -z-10 h-full w-full object-cover' />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-gray-900/30"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl"></div>
                    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <a>
                        <span className="absolute inset-0"></span>
                        {produkt.title} <br />
                        <span className='text-gray-300 font-semibold text-sm'>
                          {produkt.pris} kr
                        </span>
                        <div className=" bg-none border justify-center items-center flex text-xs rounded-full font-base m-2 p-1">Kamera</div>
                      </a>
                    </h3>
                  </div>
                )
              })}

              
            </div>
        </div>
    </main>
  );
}