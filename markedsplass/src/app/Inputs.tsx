'use client';

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';

const Inputs = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="flex justify-center flex-col gap-5" onSubmit={signIn}>
      <input
        type="email" // Change "mail" to "email"
        className="input input-bordered bg-white"
        placeholder="Mail"
        value={email}
        onChange={(e) => setMail(e.target.value)}
      />

      <input
        type="password"
        className="input input-bordered bg-white"
        placeholder="Password" // Corrected typo "Passord" to "Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600">
        Logg inn
      </button>
    </form>
  );
};

export default Inputs;
