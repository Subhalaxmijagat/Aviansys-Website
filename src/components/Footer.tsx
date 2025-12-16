import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Aviansys</h3>
                <p className="text-sm text-blue-200">Technologies</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Delivering end-to-end engineering and technology solutions across multiple industries.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Avionics & Embedded Systems</li>
              <li>Software Development</li>
              <li>Mechanical Engineering</li>
              <li>Industry Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 80 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@aviansys-tech.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Aviansys Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
