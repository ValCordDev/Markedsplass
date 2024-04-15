"use client"

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import React, { useEffect, useState } from 'react';
import useSession  from '@/hooks/useSession';
import { PROJECT_ID, DATASET, QUERY, QUERY2 } from '@/database/santity';
import imageUrlBuilder from "@sanity/image-url";
import { signOut } from 'firebase/auth';
import Link from 'next/link';

import { MdAccountCircle, MdFavorite, MdPayments, MdPrivacyTip, MdLogout } from "react-icons/md";
import { FaWpforms, FaPlus } from "react-icons/fa";

// Setup the imageUrlBuilder
const builder = imageUrlBuilder({
  projectId: PROJECT_ID,
  dataset: DATASET,
});

export default function Content() {
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
          <div className='w-screen flex justify-center items-center flex-col'>
            <span className='font-bold text-gray-600'>e</span>
            <img className='font-bold text-gray-600 rounded-full shadow-2xl' src={user.photoURL} />
          </div>
        }
    </main>
  );
}