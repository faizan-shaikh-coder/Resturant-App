import React from 'react'

const Services = () => {
  const Services = [
    {
      title: "Event Catering",
      desc: "Perfect menus for weddings, parties, and special occasions.",
      img: "/weedingfood.jpeg"
    },

    {
      title: "Corporate Catering",
      desc: "Healthy meals delivered for office meetings and conferences.",
      img: "/busnessfood.jpeg",
    },

    {
      title: "Custom Orders",
      desc: "Personalized menu options tailored to your taste and needs.",
      img: "gourmetfood.jpeg",
    },
  ];

  return (
    <>
      <section className='bg-white py-20'>
        <div className='container mx-auto px-6 md:px-12 lg:px-20'>
          <h2 className='text-3xl font-bold text-center mb-10'>Our Services</h2>
          <div className='grid md:grid-cols-3 gap-8'>

            {Services.map((services, index)=>(

               <div key={index} className='bg-gray-100 shadow-lg rounded-xl text-center hover:scale-105 transition-transform duration-300 p-4'>

              <img src={services.img} alt={services.title}
                className='rounded-lg mb-4 h-48 w-full object-cover'
              />

              <h3 className='text-xl font-semibold mb-2'>{services.title}</h3>
              <p className='text-gray-600 mb-4'>{services.desc}</p>
              <button className='bg-green-600 text-white px-4 py-2 rounded-lg shadow'>Explore</button>

            </div>

            ))}

           
          </div>
        </div>

      </section>
    </>
  )
}

export default Services
