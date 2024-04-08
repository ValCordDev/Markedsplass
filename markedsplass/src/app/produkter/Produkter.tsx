import React from 'react'
import Image from 'next/image'

const Produkter = () => {
  return (
    <div className=''>
        <div className='flex justify-center items-center border-2 rounded-lg'>
          <Image src='https://images.unsplash.com/photo-1712371963079-6d3a77f70e50?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Unsplash img' width={200} height={200}></Image>
        </div>
    </div>
  )
}

export default Produkter