import React from 'react';

const AboutViews = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Premium</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're passionate about creating exceptional digital experiences that transform businesses 
            and inspire innovation across the globe.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We exist to bridge the gap between cutting-edge technology and human-centered design. 
                  Our mission is to empower businesses with innovative solutions that not only meet today's 
                  challenges but anticipate tomorrow's opportunities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through relentless innovation, unwavering quality, and genuine partnership, we transform 
                  complex problems into elegant solutions that drive meaningful growth and lasting success.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Innovation First</h3>
                  <p className="text-gray-600">Leading the industry with breakthrough solutions</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
                <div className="space-y-4">
                  {[
                    { icon: "🚀", title: "Innovation & Creativity", desc: "Pushing boundaries with cutting-edge solutions" },
                    { icon: "❤️", title: "Customer-First Approach", desc: "Your success is our primary focus" },
                    { icon: "⭐", title: "Excellence & Quality", desc: "Delivering nothing less than exceptional" },
                    { icon: "🤝", title: "Transparency & Trust", desc: "Building relationships on honesty and integrity" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                      <span className="text-2xl">{value.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Visionaries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind Premium, dedicated to pushing the boundaries of what's possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Chen",
                role: "CEO & Founder",
                description: "Visionary leader with 15+ years in tech innovation, driving our mission to transform digital experiences.",
                gradient: "from-purple-500 to-pink-500",
                skills: ["Strategy", "Innovation", "Leadership"]
              },
              {
                name: "Marcus Rodriguez",
                role: "Chief Technology Officer",
                description: "Tech architect extraordinaire, leading our engineering teams to build scalable, cutting-edge solutions.",
                gradient: "from-blue-500 to-cyan-500",
                skills: ["Architecture", "AI/ML", "Cloud"]
              },
              {
                name: "Sarah Kim",
                role: "Head of Design",
                description: "Creative genius who transforms complex ideas into beautiful, intuitive user experiences that delight.",
                gradient: "from-emerald-500 to-teal-500",
                skills: ["UX/UI", "Branding", "Innovation"]
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl from-purple-400/20 to-blue-400/20"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  {/* Avatar */}
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-purple-200">Trusted by companies worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", icon: "🚀" },
              { number: "50+", label: "Countries Served", icon: "🌍" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🛟" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-purple-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutViews;