"use client"

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Navicon from '../Navicon';
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import useSession  from '@/hooks/useSession';
import { PROJECT_ID, DATASET, QUERY, QUERY2 } from '@/database/santity';
import imageUrlBuilder from "@sanity/image-url";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; 
import Link from 'next/link';

import { MdAccountCircle, MdFavorite, MdPayments, MdPrivacyTip, MdLogout } from "react-icons/md";
import { FaWpforms, FaPlus } from "react-icons/fa";
import Dropdown from '../Dropdown';

// Setup the imageUrlBuilder
const builder = imageUrlBuilder({
  projectId: PROJECT_ID,
  dataset: DATASET,
});
export default function Minside() {

    const [user, setUser] = useSession();
    // const [produkter, setProdukter] = useState(null);

    // useEffect(() => {
    //     let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    //     fetch(URL)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.result);
    //         setProdukter(data.result);
    //     })

    // }, [])
  return (
    <main>
        <Navicon />
        <Dropdown />
        <div className="flex items-center min-h-screen w-screen flex-col gap-10 p-20">
            <Hero />
        </div>
    </main>
  );
}