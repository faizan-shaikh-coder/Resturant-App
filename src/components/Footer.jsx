import { FaEnvelope, FaFacebook, FaGlobe, FaHome, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold mb-4"><span className="text-4xl">🍽️</span>Gadly</h2>
            <p className="text-gray-200">
              Fresh meals, quality catering, and services tailored to make your
              events special. We serve love with every dish.
            </p>
          </div>

          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline text-center">Home</a></li>
              <li><a href="/menu" className="hover:underline text-center">Menu</a></li>
              <li><a href="/services" className="hover:underline text-center">Services</a></li>
              <li><a href="/about" className="hover:underline text-center">About</a></li>
              <li><a href="/contact" className="hover:underline text-center">Contact</a></li>
            </ul>
          </div>

          
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200"><FaMapMarkerAlt/> Mumbai, India</p>
            <p className="text-gray-200"><FaPhone/> +91 98765 43210</p>
            <p className="text-gray-200"><FaEnvelope/> gadlycatering@gmail.com</p>

            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300"><FaGlobe/></a>
              <a href="#" className="hover:text-gray-300"><FaFacebook/></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter/></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram/></a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-200">
          <p>© {new Date().getFullYear()} Gadly Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
