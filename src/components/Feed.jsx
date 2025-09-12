export default function Feedback() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      feedback:
        "The food was absolutely delicious and beautifully presented. Our wedding guests loved it!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Rahul Mehta",
      feedback:
        "Excellent service and tasty meals. They handled our corporate event flawlessly.",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Sneha Patel",
      feedback:
        "Very professional team, timely delivery, and healthy food options. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-green-600 mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{item.feedback}”</p>
              <h3 className="font-semibold text-lg">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
