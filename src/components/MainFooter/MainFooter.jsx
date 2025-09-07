import { useState } from "react";
import TextAnimation from "../Common/TextAnimation";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, getEmailParams } from '../../config/emailjs';

const MainFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || 
          EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' || 
          EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS is not configured. Please set up your EmailJS credentials.');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        getEmailParams(formData),
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly at btljrld22@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/jeraldbatal22",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jerald-batal/",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/jeraldbatal22/",
      label: "Instagram"
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/jeraldbatal22",
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <TextAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I`m always interested in new opportunities and exciting projects. 
                  Let`s discuss how we can work together!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 w-5 h-5" />
                  <a 
                    href="mailto:btljrld22@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    btljrld22@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-400 w-5 h-5" />
                  <a 
                    href="tel:09462469596" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +63 946 246 9596
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-400 w-5 h-5" />
                  <span className="text-gray-300">Philippines</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-900/20 border border-green-500 text-green-300' 
                    : 'bg-red-900/20 border border-red-500 text-red-300'
                }`}>
                  {submitStatus === 'success' ? (
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{statusMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2024 Jerald Batal. All rights reserved.
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">
                  Built with ❤️ using React & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </TextAnimation>
      </div>
    </footer>
  )
}

export default MainFooter