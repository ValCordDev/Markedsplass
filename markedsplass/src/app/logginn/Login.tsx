'use client'

import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Inputs from './Inputs'
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'


const Login = () => {
  const [user, setUser] = useAuthState(auth);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const login = async() => {
    const result = await signInWithPopup(auth, googleAuth)
    router.push('/');
  }

  const handleSignIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    try {
      await setPersistence(auth, browserSessionPersistence)
      const res = await signInWithEmailAndPassword(email, password)
      router.push('../')
    } catch(e){
      console.error(e)
    }
  }

useEffect(()=>{
},[user])

  return (

    <div className="flex text-2xl font-bold bg-blue-50 text-gray-800 h-screen justify-center p-24 flex-col gap-10">
        <h1 className="flex flex-row text-5xl">Logg inn<div className=" text-blue-700">.</div></h1>
        
        <div className="flex justify-center flex-col gap-5">
          <input
            type="email" // Change "mail" to "email"
            className="input input-bordered bg-white"
            placeholder="Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="input input-bordered bg-white"
            placeholder="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600" onClick={handleSignIn} type='submit'>
            Logg inn
          </button>
        </div>

        <div className="divider text-gray-500 font-medium text-base">Eller</div>

        <button className="px-4 py-2 border flex gap-2 border-slate-700 rounded-lg text-gray-700 hover:border-slate-400 hover:text-slate-400 font-medium hover:shadow transition duration-150 justify-center items-center text-lg" onClick={login}>
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
            <span>Logg in med Google</span>
        </button>
        
        <p className='text-sm'>Ingen bruker? <Link href={'../signup'} className='text-blue-700 hover:underline'>Lag ny bruker</Link></p>
    </div>
  )
}

export default Login