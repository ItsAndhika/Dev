import { React } from 'react'
import Typewriter from 'typewriter-effect'

function Hero() {
    return (
      <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] h-screen text-center flex flex-col justify-center mx-auto">
          <p className='text-greener font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
          <div className='flex justify-center items-center my-4'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold mr-2'>Fast, flexibe financing for</p>
              <Typewriter 
                options={{ 
                  strings: ['BTB', 'BTC', 'SASS'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'text-gray-600 text-xl font-bold sm:text-4xl md:text-5xl',
                  cursorClassName: 'text-gray-600 text-xl font-bold sm:text-4xl md:text-5xl'
                 }}
              />
          </div>
          <p className='text-xl font-bold text-gray-600 px-10 md:text-2xl'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
          <button className='bg-greener text-black w-[150px] font-medium rounded-md mx-auto my-6 py-3 hover:bg-[#25ffbe]'>Get Started</button>
        </div>
      </div>
    )
}

export default Hero
