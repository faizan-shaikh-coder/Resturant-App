export default function Features() {
  const features = [
    {
      title: "Fresh Ingredients",
      desc: "We use only the freshest, locally-sourced ingredients for every meal.",
      icon: "🥗",
    },
    {
      title: "Expert Chefs",
      desc: "Our chefs craft delicious meals with years of culinary expertise.",
      icon: "👨‍🍳",
    },
    {
      title: "On-Time Delivery",
      desc: "Fast and reliable catering service for all your special occasions.",
      icon: "🚚",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-500">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl transition shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
