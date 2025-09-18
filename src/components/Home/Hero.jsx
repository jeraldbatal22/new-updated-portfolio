import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Typewriter from 'typewriter-effect/dist/core';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import ResumeDownloadModal from '../Common/ResumeDownloadModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDark } = useTheme();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }
  });

  const slideUp = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 1000, delay: 500 }
  });

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      autoStart: true,
      changeDelay: 2000,
      loop: true,
      pauseFor: 0
    });

    typewriter
      .typeString('Jerald Malacaste <br/> Batal.')
      .deleteChars(40)
      .typeString('React Js <br/> Developer.')
      .deleteChars(40)
      .typeString('Frontend <br/> Developer.')
      .deleteChars(40)
      .start();
  }, [])

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden" id="hero">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: isDark 
            ? 'url(/images/black-hero-background-1.jpg)' 
            : 'url(/images/white-hero-background-1.jpg)',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-black/70 via-black/50 to-black/70' 
          : 'bg-gradient-to-br from-white/70 via-white/50 to-white/70'
      }`}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse transition-all duration-500 ${
          isDark ? 'bg-blue-500/20' : 'bg-blue-600/30'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-500 ${
          isDark ? 'bg-purple-500/20' : 'bg-purple-600/30'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <animated.div style={props} className="mb-8">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {"I'm"} <span id="typewriter" className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></span>
          </h1>
        </animated.div>

        <animated.div style={slideUp} className="space-y-6">
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Passionate Frontend Developer crafting beautiful, responsive web and mobile experiences with modern technologies.
            Let`s build something amazing together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </button>
            
            <a
              href="#projects"
              className={`group inline-flex items-center px-8 py-4 border-2 font-semibold rounded-full transform hover:scale-105 transition-all duration-300 backdrop-blur-sm ${
                isDark 
                  ? 'border-white/30 text-white hover:bg-white/10 hover:border-white/50' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400'
              }`}
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/jeraldbatal22"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-gray-200/50 hover:bg-gray-300/50'
              }`}
            >
              <FaGithub className={`w-6 h-6 group-hover:text-blue-400 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-700'
              }`} />
            </a>
            <a
              href="https://www.linkedin.com/in/jerald-batal/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-gray-200/50 hover:bg-gray-300/50'
              }`}
            >
              <FaLinkedin className={`w-6 h-6 group-hover:text-blue-400 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-700'
              }`} />
            </a>
            <a
              href="mailto:btljrld22@gmail.com"
              className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-gray-200/50 hover:bg-gray-300/50'
              }`}
            >
              <FaEnvelope className={`w-6 h-6 group-hover:text-blue-400 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-700'
              }`} />
            </a>
          </div>
        </animated.div>
      </div>

      <div className=" absolute bottom-0 md:left-1/2 transform md:-translate-x-3/4 md:right-auto right-[60%] animate-pulse">
        <img 
          src="./images/jerald-no-bg.png" 
          alt="Jerald Batal" 
          className=" mx-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-500 ${
          isDark ? 'border-white/50' : 'border-gray-400/50'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse transition-colors duration-500 ${
            isDark ? 'bg-white/50' : 'bg-gray-400/50'
          }`}></div>
        </div>
      </div>

      {/* Resume Download Modal */}
      <ResumeDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default Hero