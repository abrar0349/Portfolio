import React from 'react'

function Footer() {

  return (
    <>
        <div className='w-full flex flex-col-reverse md:flex-row mb-0 bg-white'>
        
            {/* left div of footer is starting from here */}

            <div className='w-full flex items-start mt-6 md:mt-0 pl-6 md:pl-16 justify-center flex-col'>

                <p> Create it in 2024</p>
                <p> Power and Secure by <span className='underline'>Abrar khan</span></p>

            </div>

            {/* right div is starting from here  */}
            <div className='w-full flex flex-row flex-wrap gap-24 md:gap-1'>

                <div className=' flex flex-col justify-center w-56 items-center'>
                  <p className='font-bold'>Call</p>
                  <p>123-456-7890</p>
                </div>

                <div className='h-full flex flex-col justify-center w-44 items-center'>
                  <p className='font-bold'>Email</p>
                  <p>abrar0349khan@gmail.com</p>
                </div>

                <div className='h-full flex flex-col justify-center w-44 items-center'>
                  <p className='font-bold'> Follow </p>
                  <div className='flex flex-row gap-6 mt-1'>
                    <i className="fa-brands fa-facebook cursor-pointer"></i>
                    <i className="fa-brands fa-twitter cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin cursor-pointer"></i>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                  </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Footer