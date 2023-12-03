import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='w-full h-96 bg-slate-300 relative'>
      <div className='flex flex-col justify-center'>
        <p className='text-lg py-6'>SMALL TEXT</p>
        <h3 className='text-xl py-6'>MID TEXT</h3>
        <img src="" alt="headphones" className='absolute top-0 left-0 right-0'/>
        <div>
          {/*Component Link from next link create routes without router*/}
          <Link href="/products">
            <button className='p-4 bg-red-600 rounded-md'>BUTTON TEXT</button>
          </Link>
          <div className='absolute bottom-10 right-5'>
              <h5 className='font-semibold mb-5' >Description</h5>
              <p >Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner