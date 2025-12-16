import { Link } from 'react-router-dom';
import {
  Plane,
  Cpu,
  Code,
  Cog,
  FileText,
  Users,
  Factory,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Plane,
      title: 'Avionics & Embedded Systems',
      description: 'Advanced avionics solutions and embedded system development',
    },
    {
      icon: Cpu,
      title: 'Mechanical Engineering',
      description: 'Comprehensive mechanical design and engineering services',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions and application development',
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Professional technical writing and documentation services',
    },
    {
      icon: Cog,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain management and optimization',
    },
    {
      icon: Users,
      title: 'HR Consultancy',
      description: 'Strategic human resource consulting and management',
    },
    {
      icon: Factory,
      title: 'Industry Automation',
      description: 'Industrial automation and process optimization',
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Digital solutions for modern business challenges',
    },
  ];

  const industries = [
    { name: 'Aerospace', color: 'bg-blue-100 text-blue-700' },
    { name: 'Automotive', color: 'bg-blue-100 text-blue-700' },
    { name: 'Healthcare', color: 'bg-blue-100 text-blue-700' },
    { name: 'Information Technology', color: 'bg-blue-100 text-blue-700' },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Engineering Excellence
              <span className="block text-blue-300 mt-2">Technology Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              End-to-end engineering and technology solutions for aerospace, automotive, healthcare, and IT industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Aviansys?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We deliver innovative engineering and technology solutions with a proven track record of excellence across multiple industries.
              </p>
              <div className="space-y-4">
                {[
                  'End-to-end concept to product realization',
                  'Multi-sector expertise and experience',
                  'Cutting-edge technology solutions',
                  'Dedicated expert team',
                  'Proven track record of success',
                  'Customer-centric approach',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg text-center font-semibold hover:bg-opacity-30 transition-all duration-300"
                    >
                      {industry.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help drive your success
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
