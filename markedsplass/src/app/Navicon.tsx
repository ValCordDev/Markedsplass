import React from 'react'
import Link from 'next/link'

const Navicon = () => {
  return (
    <div className="bg-none fixed z-10 flex items-center padding-[0.5rem] min-h-[4rem] m-2">
        <div className="flex-1">
            <Link href="/" passHref className='btn btn-ghost text-xl text-gray-800'>
                markedsplass
            </Link>
        </div>
    </div>
  )
}

export default Navicon