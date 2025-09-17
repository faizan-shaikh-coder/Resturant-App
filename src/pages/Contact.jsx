import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import { useState } from 'react'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'

const Contact = () => {

  const [form, setform] = useState({ name: " ", emai: " ", message: " " });

  const handleChanger = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    e.preventdefault();
    console.log("Form Submitted:", form);
    alert("Thank you for connecting us ! we'll get back to you soon.");
    setform({ name: "", emai: "", message: "" });

  }


  return (
    <>
    <Navbar/>
      <section className='bg-gray-50 py-20'>

        <div className='conatiner max-auto p-6 md:px-12 lg:px-20'>

          <h2 className='text-3xl font-bold text-green-500 text-center mb-10'>Contact Us</h2>

          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-semibold mb-4'>Get in Touch</h3>
              <p className='text-gray-600 mb-6'>Have question or want to took our carting services? Reach out and we'll be Happy to help You</p>
              <p className='mb-3'><GrMapLocation className='text-xl text-red-600' />Mumbai, India</p>
              <p className='mb-3'><FaPhone className='text-xl text-green-600' />+91 98765 43210</p>
              <p className='mb-3'><FaMailBulk className='text-xl text-blue-600' />gadlycatering@gmail.com</p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className='bg-white shadow-lg border-2 rounded-xl w-full h-fit flex flex-col p-4'>

                <div className='mb-4'>
                  <label className='block text-gray-700 font-medium mb-2'>Name</label>
                  <input type="text"
                    name='name'
                    placeholder='Enter Your Name'
                    onChange={handleChanger}
                    required
                    className='w-full border-2 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none' />
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 font-medium mb-2'>Email</label>
                  <input type="email"
                    name='email'
                    placeholder='Enter Your Mail'
                    onChange={handleChanger}
                    required
                    className='w-full border-2 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none' />
                </div>

                <div className='mb-4'>
                  <label className='block text-gray-700 font-medium mb-2'>Message</label>

                  <textarea name="message"
                    placeholder='Write Your Message'
                    onChange={handleChanger}
                    rows={4}
                    required
                    className='w-full border-2 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none'
                  />
                </div>

                <button type='submit' className='bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition'>Send</button>
              </form>
            </div>
          </div>

        </div>

      </section>
      <Footer/>
    </>
  )
}

export default Contact
