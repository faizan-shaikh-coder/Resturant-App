export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Gadly</h2>
            <p className="text-gray-200">
              Fresh meals, quality catering, and services tailored to make your
              events special. We serve love with every dish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/menu" className="hover:underline">Menu</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200">📍 Mumbai, India</p>
            <p className="text-gray-200">📞 +91 98765 43210</p>
            <p className="text-gray-200">✉️ gadlycatering@gmail.com</p>

            {/* Socials */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300">🌐</a>
              <a href="#" className="hover:text-gray-300">📘</a>
              <a href="#" className="hover:text-gray-300">🐦</a>
              <a href="#" className="hover:text-gray-300">📸</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-200">
          <p>© {new Date().getFullYear()} Gadly Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
