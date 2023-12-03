import React from 'react'

import {Products, FooterBanner, HeroBanner} from '../components'
const Home = () => {
  return (
    <>
      <HeroBanner />
       <div className="flex flex-col justify-center items-center" >
        <h2 className='flex justify-center text-3xl w-full text-red-600 font-bold'>Best Selling Products</h2>
        <p>Speakers of manu variations</p>
       </div>
       
       <div className="flex justify-center flex-col items-center">
        {['Product 1', 'Product 2'].map((product) => product)}
       </div>

       <FooterBanner />
    </>
  )
}

export default Home