import { useState } from 'react';
import TextAnimation from "../Common/TextAnimation";
import { FaDownload, FaEnvelope, FaPhone, FaUser, FaCode, FaGraduationCap, FaHeart, FaGamepad, FaMusic } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import ResumeDownloadModal from "../Common/ResumeDownloadModal";

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <section className={`py-40 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <TextAnimation>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Personal Information Card */}
            <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaUser className="mr-3 text-blue-500" />
                Personal Info
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500 font-semibold min-w-[80px]">Name:</span>
                  <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Jerald Malacaste Batal</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500 font-semibold min-w-[80px]">Role:</span>
                  <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Frontend Web Developer</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-blue-500" />
                  <a href="mailto:btljrld22@gmail.com" className={`hover:text-blue-500 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    btljrld22@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-500" />
                  <a href="tel:09462469596" className={`hover:text-blue-500 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    +63 946 246 9596
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Education & Background Card */}
            <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaGraduationCap className="mr-3 text-purple-500" />
                Education & Journey
              </h3>
              
              <div className={`space-y-4 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  I graduated with a degree in <strong className="text-blue-600">Hotel and Restaurant Management</strong>, 
                  but I made a bold decision to switch careers and pursue my passion for technology.
                </p>
                
                <p>
                  I&apos;m now focused on becoming a highly skilled <strong className="text-purple-600">full-stack developer</strong>, 
                  mastering both frontend and backend technologies to build comprehensive applications.
                </p>
              </div>
            </div>

            {/* Interests & Hobbies Card */}
            <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaHeart className="mr-3 text-red-500" />
                Interests & Hobbies
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaGamepad className="text-green-500" />
                  <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Basketball & Gaming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMusic className="text-yellow-500" />
                  <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Playing Guitar & Singing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-red-500" />
                  <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>K-Dramas & Netflix</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCode className="text-blue-500" />
                  <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Learning New Technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Story Section - Full Width */}
          <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <FaCode className="mr-3 text-blue-500" />
              My Story
            </h3>
            
            <div className={`space-y-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="text-lg">
                Hello! I&apos;m Jerald, but you can call me <strong className="text-blue-600">JB</strong>, <strong className="text-purple-600">Jer</strong>, or <strong className="text-green-600">Rald</strong>. 
                My journey into web development began with a passion for creating and solving problems through technology.
              </p>
              
              <p>
                Coming from a hospitality background, I bring a unique perspective to user experience design. I understand the importance of 
                creating intuitive, user-friendly interfaces that make people feel comfortable and confident when using applications. 
                This background has taught me valuable skills in communication, problem-solving, and attention to detail.
              </p>
              
              <p>
                As a frontend developer, I specialize in creating responsive, modern web applications using React, JavaScript, and various 
                modern frameworks. I&apos;m constantly learning and adapting to new technologies, with my sights set on becoming a full-stack developer 
                who can handle both the visual and functional aspects of web applications.
              </p>
              
              <p>
                When I&apos;m not coding, you&apos;ll find me on the basketball court, gaming with friends, strumming my guitar, or binge-watching the latest 
                K-Dramas and Netflix series. These activities help me stay balanced and often provide inspiration for creative solutions in my development work.
              </p>
           
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