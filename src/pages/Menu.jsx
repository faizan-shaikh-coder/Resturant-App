export default function Menu() {
  const categories = [
    {
      title: "Vegetarian",
      img: "veg.jpeg",
      
    },
    {
      title: "Non-Vegetarian",
      img:"non-veg.jpeg",
     
    },
    {
      title: "Seafood",
      img: "seafood.jpeg",
      
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Menu Categories</h2>

        <div className="grid md:grid-cols-3 gap-10 justify-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cat.img}
               
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
                <a
                 
                  className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
                >
                  View Items
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
