import React from 'react'
import Link from 'next/link'
import Inputs from './Inputs'

const Signup = () => {
  return (
    <div className="flex text-2xl font-bold bg-blue-50 text-gray-800 h-screen justify-center p-24 flex-col gap-10">
        <h1 className="flex flex-row text-5xl">Lag ny bruker<div className=" text-blue-700">.</div></h1>
        
        <p className='text-sm'>Har allerede bruker? <Link href={'/'} className='text-blue-700 hover:underline'>Logg inn</Link></p>

        <Inputs />
    </div>
  )
}

export default Signup