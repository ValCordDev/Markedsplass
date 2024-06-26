'use client'

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';

const Inputs = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password)
      console.log(res)
      setEmail('')
      setPassword('')
      router.push('../logginn')
    } catch(e){
      console.error(e)
    }
  }

  return (
    <div className="flex justify-center flex-col gap-5">
      <input
        type="mail"
        className="input input-bordered bg-white"
        placeholder="Email"
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

      <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600" type='submit' onClick={handleSignUp}>
        Lag ny bruker
      </button>
    </div>
  );
}

export default Inputs