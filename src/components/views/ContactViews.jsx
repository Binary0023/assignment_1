import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactViews = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xdkdwbqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
            Let's <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to transform your ideas into reality? We're here to listen, collaborate, and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-display font-bold text-gray-900 mb-8">Get in Touch</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Whether you have a question, want to start a project, or just want to say hello, 
                  we'd love to hear from you. Our team is always ready to help.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: HiMail,
                    title: "Email Us",
                    content: "hello@nexus.com",
                    description: "Drop us a line anytime",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: HiPhone,
                    title: "Call Us",
                    content: "+1 (555) 123-4567",
                    description: "Mon-Fri from 8am to 5pm",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: HiLocationMarker,
                    title: "Visit Us",
                    content: "123 Innovation Street",
                    description: "San Francisco, CA 94105",
                    gradient: "from-emerald-500 to-teal-500"
                  }
                ].map((contact, index) => (
                  <div key={index} className="group flex items-start space-x-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 card-hover">
                    <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-xl font-semibold text-blue-600 mb-2">{contact.content}</p>
                      <p className="text-gray-600 font-light">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaTwitter, name: 'Twitter', color: 'hover:bg-blue-500' },
                    { icon: FaLinkedin, name: 'LinkedIn', color: 'hover:bg-blue-600' },
                    { icon: FaGithub, name: 'GitHub', color: 'hover:bg-gray-800' },
                    { icon: FaInstagram, name: 'Instagram', color: 'hover:bg-pink-500' }
                  ].map((social, index) => (
                    <button key={index} className={`w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      <social.icon className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-10 font-light">We'll get back to you within 24 hours</p>
                
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-2xl flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <HiCheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-800 rounded-2xl flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <HiXCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">Sorry, there was an error. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-display font-bold text-gray-900 mb-4">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 font-light"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-display font-bold text-gray-900 mb-4">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none font-light"
                      placeholder="Tell us about your project, ideas, or how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-2xl font-display font-bold text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <HiPaperAirplane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "What services do you offer?",
                answer: "We offer a full range of digital services including web development, mobile apps, UI/UX design, and digital strategy consulting."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! We work with clients from all around the world and have experience with different time zones and cultural requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 group">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactViews;