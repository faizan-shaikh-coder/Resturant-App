import React from 'react'
import Product from './components/Product'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NonVeg from './pages/Non-veg'
import Vegetarian from './pages/Veg'
import Seafood from './pages/Sea'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='/nonveg' element={<NonVeg/>}></Route>
        <Route path='/veg' element={<Vegetarian/>}></Route>
        <Route path='sea' element={<Seafood/>}></Route>
        
      </Routes>
     
    </>
  )
}

export default App
