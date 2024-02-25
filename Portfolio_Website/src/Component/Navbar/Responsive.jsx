import React from 'react';

function Responsive({fun}) {

const ColorObj = {
  backgroundColor : '#F4ECE6'
}

  return (
    <div id='targetRes' className='hidden fixed inset-0 z-999'style = {ColorObj}>
      
      <div className=' w-full h-full absolute top-0 border border-red-400 flex flex-col gap-14 items-end pe-20 pt-20'>

        <p className = 'text-5xl hover:cursor-pointer me-20' onClick={() => {fun()}}> X </p>

        <ul className='flex gap-10 flex-col mt-0 w-full items-center'>

            <li className='hover:cursor-pointer font-bold text-3xl'> ABOUT ME </li>
            <li className='hover:cursor-pointer font-bold text-3xl'> RESUME </li>
            <li className='hover:cursor-pointer font-bold text-3xl'> PROJECT </li>
            <li className='hover:cursor-pointer font-bold text-3xl'> CONTACT </li>

        </ul>

      </div>

    </div>
  );
}

export default Responsive;
