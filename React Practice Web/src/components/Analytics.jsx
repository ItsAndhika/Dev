import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
        <div className='flex flex-col justify-center p-5'>
          <p className='text-greener font-semibold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='text-2xl font-bold py-2 sm:text-3xl md:text-4xl'>Manage Data Analytics Central</h1>
          <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tempora numquam vitae iusto culpa harum eveniet unde distinctio veritatis, error molestiae ab similique quaerat ad fugiat deserunt. Laborum, quidem quo.</p>
          <button className='bg-black text-greener mx-auto w-[150px] py-3 mt-4 rounded-md font-medium hover:bg-[#222] md:mx-0'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
