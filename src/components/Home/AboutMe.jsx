import { useState } from 'react';
import TextAnimation from "../Common/TextAnimation";
import { FaDownload, FaEnvelope, FaPhone, FaUser, FaCode } from "react-icons/fa";
import ResumeDownloadModal from "../Common/ResumeDownloadModal";

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img 
                  src="./images/jerald2.jpg" 
                  alt="Jerald Batal" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Personal Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaUser className="mr-3 text-blue-500" />
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-blue-500 font-semibold min-w-[80px]">Name:</span>
                    <span className="text-gray-700">Jerald Malacaste Batal</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-blue-500 font-semibold min-w-[80px]">Role:</span>
                    <span className="text-gray-700">Frontend Web Developer</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-500" />
                    <a href="mailto:btljrld22@gmail.com" className="text-gray-700 hover:text-blue-500 transition-colors">
                      btljrld22@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-blue-500" />
                    <a href="tel:09462469596" className="text-gray-700 hover:text-blue-500 transition-colors">
                      +63 946 246 9596
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaCode className="mr-3 text-blue-500" />
                  My Story
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hello! I`m Jerald, but you can call me JB, Jer, or Rald. I graduated with a degree in 
                    <strong className="text-blue-600"> Hotel and Restaurant Management</strong>, but I made a 
                    bold decision to switch careers and pursue my passion for technology as a frontend developer.
                  </p>
                  
                  <p>
                    My current career goal is to become a highly skilled and professional web developer, with the 
                    aspiration of eventually transitioning into a <strong className="text-purple-600">full-stack developer</strong> role. 
                    This involves mastering both frontend and backend technologies to create comprehensive and robust applications.
                  </p>
                  
                  <p>
                    When I`m not coding, I enjoy playing basketball, mobile and computer games, and playing guitar 
                    (both singing and instrumental). I also love watching K-Dramas and Netflix movies to relax when 
                    I need a break from coding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TextAnimation>
      </div>

      {/* Resume Download Modal */}
      <ResumeDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default AboutMe