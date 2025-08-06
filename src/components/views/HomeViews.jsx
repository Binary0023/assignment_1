import React from 'react';
import { HiArrowRight, HiLightningBolt, HiShieldCheck, HiHeart, HiStar, HiUsers, HiGlobe, HiSupport } from 'react-icons/hi';

const HomeViews = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-secondary-900">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <HiStar className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Trusted by 10,000+ companies worldwide</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-200 to-secondary-200 bg-clip-text text-transparent">
                Digital Excellence
              </span>
              <br />
              <span className="text-white/90">Redefined</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-light">
              Transform your digital presence with cutting-edge solutions designed for the modern world. 
              We craft experiences that captivate, engage, and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-white/30 rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium mb-6">
              <HiLightningBolt className="w-4 h-4 mr-2" />
              Why Choose Nexus
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Built for <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Discover the features that set us apart and make your digital transformation extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HiLightningBolt,
                title: "Lightning Fast",
                description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.",
                gradient: "from-yellow-400 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-50"
              },
              {
                icon: HiShieldCheck,
                title: "Rock Solid",
                description: "Built with reliability in mind. 99.9% uptime guarantee with enterprise-grade security and monitoring.",
                gradient: "from-green-400 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              },
              {
                icon: HiHeart,
                title: "User Centric",
                description: "Designed with your users in mind. Intuitive interfaces that make complex tasks simple and enjoyable.",
                gradient: "from-pink-400 to-rose-500",
                bgGradient: "from-pink-50 to-rose-50"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl from-primary-400/20 to-secondary-400/20"></div>
                <div className={`relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-200 group-hover:-translate-y-2`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-primary-900 to-secondary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Join thousands of companies that have transformed their digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: HiUsers, number: "10K+", label: "Happy Clients" },
              { icon: HiShieldCheck, number: "99.9%", label: "Uptime" },
              { icon: HiSupport, number: "24/7", label: "Support" },
              { icon: HiGlobe, number: "50+", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent font-display">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 border border-primary-100">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Join thousands of companies that trust Nexus for their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeViews;