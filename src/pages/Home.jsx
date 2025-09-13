import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Feedback from '../components/Feed'

const Home = () => {
  return (
  <>
   <div className="w-full h-screen">
      <Hero />
      <Features />
      <Feedback />
    </div>
  </>
  )
}

export default Home
