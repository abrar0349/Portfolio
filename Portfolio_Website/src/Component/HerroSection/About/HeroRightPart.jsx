import React from 'react'

function HeroRightPart() {
    const ColorObj = {
        backgroundColor : '#F4ECE6',
      }

  return (
    <>
        <div className='w-full h-screen pt-20 pb-96' style = {ColorObj}>
        
            <div className='relative lg:left-64 left-4'>

                <div className=" mt-8 md:mt-20 ms-20 h-96  w-96 flex flex-col gap-4 justify-center items-center shadow-lg z-0 " style = {{backgroundColor:"rgb(247, 241, 236)"}}>

                    <div className='w-40 h-40 rounded-full' style = {{backgroundColor:'#B1B1B1'}}>

                    </div>

                    <h2 className='font-bold text-3xl'>Abrar</h2>
                    <h2 className='font-bold text-3xl'>Khan</h2>

                    <div className='text-blue-600 w-16 font-extrabold h-1 bg-blue-700'></div>

                    <h2 className='font-thin text-2xl'> PROJECT MANAGER </h2>

                </div>
                {/* Card footer div */}
                <div className="ms-20 w-96 h-16 bg-white border-blue-700 border">
                    <ul className='h-full flex justify-center items-center gap-6 text-3xl'>
                        <i className="fa-brands fa-facebook cursor-pointer"></i>
                        <i className="fa-brands fa-twitter cursor-pointer"></i>
                        <i className="fa-brands fa-linkedin cursor-pointer"></i>
                        <i className="fa-brands fa-instagram cursor-pointer"></i>
                    </ul>
                </div>

            </div>
            {/* <div className='w-full h-32 ' style = {ColorObj}>
        

            </div> */}
        </div>


    

    </>
  )
}

export default HeroRightPart