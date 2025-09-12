import React from 'react'

const Hero = () => {
  return (
     <section className='bg-green-50 py-20'>

    <div className='container mx-auto flex flex-col md:flex items-center'>
      <div className='md:w-1/2'>
      <h2 className='text-4xl font-bold mb-4'>Best Catering Website</h2>
      <p className='mb-6 text-gray-600'>Healty meals made fresh daily.Catering at events, food that fits you lifestyle.</p>

      <button className='bg-green-600 text-white px-6 py-3 rounded-lg mr-4'>Find Out More..</button>
      <button className='border-1 border-x-green-600 px-6 py-3 rounded-lg text-green-600'>Open Menu</button>
      </div>

      <div className='md:w-1/2'>
      <img src="https://source.unsplash.com/600x400/?healthy-food" alt="Food" className="rounded-xl shadow-lg" />
      </div>
    </div>

   </section>
  )
}

export default Hero
