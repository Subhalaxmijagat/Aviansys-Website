import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Plane, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl">
                <Plane className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Aviansys</h3>
                <p className="text-sm text-blue-300 font-medium">Technologies</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Delivering end-to-end engineering and technology solutions across multiple industries.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              Quick Links
              <div className="h-1 w-1 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              Services
              <div className="h-1 w-1 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              {[
                'Avionics & Embedded Systems',
                'Software Development',
                'Mechanical Engineering',
                'Industry Automation',
              ].map((service) => (
                <li key={service} className="hover:text-white transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              Contact Info
              <div className="h-1 w-1 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start space-x-3 hover:text-white transition-colors duration-300">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>+91 80 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>info@aviansys-tech.com</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Aviansys Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
