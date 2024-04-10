'use client'

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation'

const Inputs = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password)
      console.log(res)
      setEmail('')
      setPassword('')
      router.push('../')
    } catch(e){
      console.error(e)
    }
  }

  return (
    <form className="flex justify-center flex-col gap-5">
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

      <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600" type='submit' onClick={handleSignIn}>
        Logg inn
      </button>
    </form>
  );
};

export default Inputs;
