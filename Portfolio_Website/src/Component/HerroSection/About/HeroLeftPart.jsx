import React from 'react'

function HeroLeftPart() {
  return (
    <>
    <div className='w-full h-screen ps-20 pt-20 mb-36'>
    
        <div className=' flex flex-col gap-12 mt-20'>

            <h2 className='text-7xl font-bold'>Hello</h2>
            <h2 className='text-2xl'>Here's who I am & what I do</h2>

            <div className='w-full flex justify-start gap-8'>

            <button className='bg-blue-600 text-white px-6 rounded-lg font-bold cursor-pointer'>RESUME </button>
            <button className='text-black border border-black px-6 rounded-lg font-bold cursor-pointer'> PROJECT </button>
               
            </div>
            
            <div className=' w-80'>
                <p className='mb-6'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>

                <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>  

        </div>

    </div>
    </>
  )
}

export default HeroLeftPart