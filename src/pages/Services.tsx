import {
  Plane,
  Cpu,
  Code,
  FileText,
  Package,
  Users,
  Factory,
  Smartphone,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: 'Avionics & Embedded Systems',
      description: 'Comprehensive avionics and embedded systems development for aerospace applications',
      features: [
        'Flight control systems',
        'Avionics software development',
        'DO-178C compliance',
        'Hardware-in-the-loop testing',
        'Embedded firmware development',
        'Real-time operating systems',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      title: 'Mechanical Engineering',
      description: 'Complete mechanical design and engineering solutions',
      features: [
        'CAD/CAM design',
        'Structural analysis',
        'Thermal management',
        'Prototype development',
        'Manufacturing support',
        'Product validation',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      features: [
        'Web application development',
        'Mobile app development',
        'Enterprise software solutions',
        'Cloud-based applications',
        'API development & integration',
        'Quality assurance & testing',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Professional technical writing and documentation services',
      features: [
        'User manuals',
        'Technical specifications',
        'Standard operating procedures',
        'Training materials',
        'Regulatory documentation',
        'API documentation',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Package,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain management and optimization',
      features: [
        'Supply chain planning',
        'Inventory management',
        'Logistics optimization',
        'Vendor management',
        'Procurement services',
        'Demand forecasting',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'HR Consultancy',
      description: 'Strategic human resource consulting and management services',
      features: [
        'Talent acquisition',
        'HR strategy development',
        'Performance management',
        'Training & development',
        'Employee engagement',
        'HR digital transformation',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Factory,
      title: 'Industry Automation',
      description: 'Industrial automation and process control solutions',
      features: [
        'PLC programming',
        'SCADA systems',
        'Process automation',
        'Robotics integration',
        'IoT solutions',
        'Predictive maintenance',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Digital Products',
      description: 'Proprietary software products for modern businesses',
      features: [
        'Learning Management System',
        'Performance Management System',
        'HR Management System',
        'Assessment tools',
        'Custom digital solutions',
        'Product support & maintenance',
      ],
      color: 'from-blue-600 to-blue-700',
    },
  ];

  const industries = [
    {
      name: 'Aerospace',
      description: 'Advanced solutions for aviation and aerospace industries',
      icon: Plane,
    },
    {
      name: 'Automotive',
      description: 'Innovative technologies for automotive sector',
      icon: Cpu,
    },
    {
      name: 'Healthcare',
      description: 'Medical equipment and healthcare technology solutions',
      icon: Users,
    },
    {
      name: 'Information Technology',
      description: 'Cutting-edge IT solutions and services',
      icon: Code,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive engineering and technology solutions across multiple domains
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions from concept to product realization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Specialized expertise across key industry sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <industry.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
                <p className="text-blue-100 text-lg mb-6">
                  We follow a structured methodology to ensure successful project delivery:
                </p>
                <div className="space-y-4">
                  {[
                    'Discovery & Requirements Analysis',
                    'Strategic Planning & Design',
                    'Development & Implementation',
                    'Testing & Quality Assurance',
                    'Deployment & Support',
                    'Continuous Improvement',
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <span className="text-lg">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">Client-Centric</h4>
                  <p className="text-blue-100">
                    Your success is our priority. We tailor solutions to meet your specific needs.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">Quality Assured</h4>
                  <p className="text-blue-100">
                    Rigorous testing and quality control processes ensure excellence.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">Timely Delivery</h4>
                  <p className="text-blue-100">
                    We respect deadlines and deliver projects on time, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can benefit your organization
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
