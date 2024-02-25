import React from 'react'
import Responsive from './Responsive'

function Navbar() {

  function ColorChag(){
    document.querySelector('#targetRes').classList.toggle('hidden')
    console.log('hello')
  }
  return (
    <>
    
    <div className="w-100 h-20 flex items-center justify-between bg-slate-50 px-10 relative">

        <div className="flex gap-4 items-center z-0">
    {/*  dotted div */}
            <div className='bg-blue-800 w-4 h-4 sm:block hidden'>
            </div>

            <div className=' flex gap-2 font-semibold flex-col sm:flex-row'>

            <h2 className='font-bold  text-3xl'>Abrar khan</h2>
            <h4 className=' text-2xl mt-1'> / PROJECT MANAGER</h4>

            </div>

        </div>


        <div className="hidden lg:block">

            <ul className='flex gap-10 '>
                <li className='hover:cursor-pointer'> ABOUT ME </li>
                <li className='hover:cursor-pointer'> RESUME </li>
                <li className='hover:cursor-pointer'> PROJECT </li>
                <li className='hover:cursor-pointer'> CONTACT </li>
            </ul>

        </div>

        <div className="text-3xl font-extrabold block lg:hidden ">
        <i className="fa-solid fa-bars" onClick={ColorChag}></i>
        </div>

    </div>
    
    <Responsive fun = {ColorChag}/>
    </>
  )
}

export default Navbar