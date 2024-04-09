'use client'

import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Inputs from './Inputs'
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'


const Login = () => {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();

  const login = async() => {
    const result = await signInWithPopup(auth, googleAuth)
    router.push('/produkter');
  }

useEffect(()=>{
  


},[user])

  return (

    <div className="flex text-2xl font-bold bg-blue-50 text-gray-800 h-screen justify-center p-24 flex-col gap-10">
        <h1 className="flex flex-row text-5xl">Logg inn<div className=" text-blue-700">.</div></h1>
        
        <Inputs />

        <div className="divider text-gray-500 font-medium text-base">Eller</div>

        <button className="px-4 py-2 border flex gap-2 border-slate-700 rounded-lg text-gray-700 hover:border-slate-400 hover:text-slate-400 font-medium hover:shadow transition duration-150 justify-center items-center text-lg" onClick={login}>
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
            <span>Logg in med Google</span>
        </button>
        
        <p className='text-sm'>Ingen bruker? <Link href={'signup'} className='text-blue-700 hover:underline'>Lag ny bruker</Link></p>
    </div>
  )
}

export default Login