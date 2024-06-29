import { React, useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <header className='text-white w-full flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8'>
            <h1 className='font-bold text-2xl text-greener'>FACEREACT.</h1>
            <ul className='hidden sm:flex justify-around items-center'>
                <li className='p-3 ml-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-white hover:text-black'>Home</li>
                <li className='p-3 ml-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-white hover:text-black'>Company</li>
                <li className='p-3 ml-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-white hover:text-black'>Resources</li>
                <li className='p-3 ml-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-white hover:text-black'>About</li>
                <li className='p-3 ml-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-white hover:text-black'>Contact</li>
            </ul>
            <div id='menu' onClick={() => setMenu(menu => !menu)}>
                <span className={menu ? 'firstSpan' : ''}></span>
                <span className={menu ? 'secondSpan' : ''}></span>
                <span className={menu ? 'thirdSpan' : ''}></span>
            </div>
            <div className={`fixed transition-all duration-500 top-24 w-[60%] border-r border-r-gray-900 h-[100vh] bg-black ${menu ? 'left-3' : '-left-[2000px]'}`}>
                <ul>
                    <li className='p-4 cursor-pointer border-b border-b-gray-900 hover:bg-gray-900'>Home</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-900 hover:bg-gray-900'>Company</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-900 hover:bg-gray-900'>Resources</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-900 hover:bg-gray-900'>About</li>
                    <li className='p-4 cursor-pointer border-b border-b-gray-900 hover:bg-gray-900'>Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar