import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Feedback from '../components/Feed'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className='w-full'>
          <Hero />
        </div>

        <div className='mt-4'>
          <Product />
        </div>



        <Features />
        <Feedback />
        <Footer />
      </div>
    </>
  )
}

export default Home
