import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const Inputs = () => {
  return (
    <div className='flex justify-center flex-col gap-5'>
        <div className='flex flex-row justify-between'>
            <input type="text" className="input input-bordered bg-white w-64" placeholder="Fornavn" />
            <input type="text" className="input input-bordered bg-white w-64" placeholder="Etternavn" />
        </div>
        
        <input type="mail" className="input input-bordered bg-white" placeholder="Mail" />
        
        <input type="password" className="input input-bordered bg-white" placeholder="Passord" />

        <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600">Lag ny bruker</button>
    </div>
  )
}

export default Inputs