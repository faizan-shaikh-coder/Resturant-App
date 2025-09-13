export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              We are a catering service passionate about delivering fresh,
              healthy, and delicious meals made with love. Our mission is to
              bring quality food experiences to your table, whether it’s for a
              small family gathering or a large corporate event.
            </p>
            <p className="text-gray-600 mb-6">
              With years of experience in the food industry, we aim to blend
              taste, health, and presentation to give you a memorable dining
              experience.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src="Restro.png"
              alt="About Us"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}