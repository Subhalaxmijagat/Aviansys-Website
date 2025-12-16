import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and methodologies',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuous improvement and expansion of capabilities',
    },
  ];

  const timeline = [
    { year: '2008', event: 'Company Founded', description: 'Aviansys Technologies established' },
    { year: '2012', event: 'Expansion', description: 'Extended services to automotive sector' },
    { year: '2016', event: 'Growth', description: 'Reached 100+ successful projects' },
    { year: '2020', event: 'Innovation', description: 'Launched proprietary software products' },
    { year: '2024', event: 'Excellence', description: 'Industry leader in multi-sector solutions' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Aviansys Technologies</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A leading multi-sector services provider specializing in engineering and technology solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Aviansys Technologies is a premier engineering and technology solutions provider, delivering end-to-end services from concept to product realization across multiple industries.
                </p>
                <p>
                  With over 15 years of experience, we have established ourselves as trusted partners for organizations in aerospace, automotive, healthcare, and information technology sectors.
                </p>
                <p>
                  Our comprehensive service portfolio includes avionics, embedded systems, mechanical engineering, software development, technical documentation, supply chain solutions, HR consultancy, and industry automation.
                </p>
                <p>
                  We combine technical expertise with industry knowledge to deliver innovative solutions that drive business success and operational excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-700 font-medium">Projects Delivered</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-700 font-medium">Expert Professionals</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                    <div className="text-gray-700 font-medium">Industry Sectors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver innovative, high-quality engineering and technology solutions that empower our clients to achieve their business objectives. We strive to be the trusted partner for organizations seeking excellence in product development, process optimization, and digital transformation.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as a global leader in multi-sector engineering and technology solutions, known for our technical excellence, innovative approach, and unwavering commitment to client success. We envision a future where our solutions drive industry transformation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones in our path to excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to transform your vision into reality
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
