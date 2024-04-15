"use client"

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import React, { useEffect, useState } from 'react';
import useSession  from '@/hooks/useSession';
import { PROJECT_ID, DATASET, QUERY, QUERY2 } from '@/database/santity';
import imageUrlBuilder from "@sanity/image-url";
import { signOut } from 'firebase/auth';
import { auth } from './firebase'; 
import Link from 'next/link';

import { MdAccountCircle, MdFavorite, MdPayments, MdPrivacyTip, MdLogout } from "react-icons/md";
import { FaWpforms, FaPlus } from "react-icons/fa";

// Setup the imageUrlBuilder
const builder = imageUrlBuilder({
  projectId: PROJECT_ID,
  dataset: DATASET,
});

export default function Dropdown() {
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
        { user &&
          <div className='w-screen absolute flex justify-end p-4 hover:cursor-pointer items-center'>
            <Link href="http://localhost:3333" passHref className='btn btn-ghost duration-300 border-none text-gray-700 text-sm mr-2 md:flex hidden'>
                + Legg til produkt
            </Link>
            

            <div className="dropdown dropdown-end md:dropdown-hover">
              <div tabIndex={0} className="m-1">
                <div className='w-14'>
                  <img src={user.photoURL || 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'} alt="" className='rounded-full flex justify-center items-center border border-spacing-10 border-gray-800 hover:shadow-2xl transition-shadow duration-300' />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-gray-600 bg-blue-50">
                <li><a className='flex items-center' href='profil'><MdAccountCircle className='text-2xl' /> Profil</a></li>
                <li><a className='flex md:hidden items-center' href='http://localhost:3333'><FaPlus className='text-2xl' /> Legg til produkt</a></li>
                <li><a className='flex items-center' href='minside'><FaWpforms className='text-2xl' /> Mine annonser</a></li>
                <li><a className='flex items-center'><MdFavorite className='text-2xl' /> Favoritter</a></li>
                <li><a className='flex items-center'><MdPayments className='text-2xl' /> Betaling</a></li>
                <li><a className='flex items-center'><MdPrivacyTip className='text-2xl' /> Personvern</a></li>
                <div className="divider m-0"></div>
                <li><a onClick={() => signOut(auth)} className='flex items-center'><MdLogout className='text-2xl' /> Logg ut</a></li>
              </ul>
            </div>
          </div>
        }
    </main>
  );
}