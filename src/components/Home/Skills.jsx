import TextAnimation from "../Common/TextAnimation";
import Tooltip from "../UI/Tooltip";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const proficientSkills = [
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    title: "HTML5",
    urlLink: "https://html.com/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    title: "CSS3",
    urlLink: "https://css.com/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    urlLink: "https://www.javascript.com/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "React JS",
    urlLink: "https://legacy.reactjs.org/docs/getting-started.html",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "Redux",
    urlLink: "https://redux.js.org/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    title: "Tailwind CSS",
    urlLink: "https://tailwindcss.com/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    title: "Bootstrap",
    urlLink: "https://getbootstrap.com/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    title: "Material UI",
    urlLink: "https://mui.com/material-ui/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    title: "GitHub",
    urlLink: "https://github.com/",
    category: "Tools"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
    title: "Bitbucket",
    urlLink: "https://bitbucket.org/",
    category: "Tools"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sourcetree/sourcetree-original.svg",
    title: "Source Tree",
    urlLink: "https://www.sourcetreeapp.com/",
    category: "Tools"
  }
]

const exposureSkills = [
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    title: "Node JS",
    urlLink: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    category: "Backend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    title: "Express",
    urlLink: "https://expressjs.com/",
    category: "Backend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    title: "Next JS",
    urlLink: "https://nextjs.org/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    urlLink: "https://www.typescriptlang.org/",
    category: "Frontend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    urlLink: "https://www.mongodb.com/",
    category: "Database"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
    urlLink: "https://www.postgresql.org/",
    category: "Database"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    title: "Ruby on Rails",
    urlLink: "https://rubyonrails.org/",
    category: "Backend"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    title: "Socket IO",
    urlLink: "https://socket.io/",
    category: "Backend"
  }
]

const SKills = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`} id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextAnimation>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I am a proficient Frontend web developer with a strong skill set in React JS. My expertise extends to crafting 
              engaging user interfaces using modern technologies. I also have experience with backend technologies and databases, 
              making me well-rounded in full-stack development.
            </p>
          </div>

          {/* Proficient Skills */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 flex items-center justify-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaCode className="mr-3 text-blue-500" />
                Proficient Technologies
              </h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Technologies I work with confidently on a daily basis</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {proficientSkills.map((skill, key) => (
                <Tooltip key={key} text={skill.title}>
                  <a 
                    href={skill.urlLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100'}`}>
                      <div className="flex flex-col items-center space-y-3">
                        <img 
                          src={skill.imageLink} 
                          alt={skill.title} 
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <span className={`text-sm font-medium text-center transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.title}</span>
                        <span className="text-xs text-blue-500 font-semibold">{skill.category}</span>
                      </div>
                    </div>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Exposure Skills */}
          <div>
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 flex items-center justify-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaTools className="mr-3 text-purple-500" />
                Additional Experience
              </h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Technologies I have worked with and continue to explore</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {exposureSkills.map((skill, key) => (
                <Tooltip key={key} text={skill.title}>
                  <a 
                    href={skill.urlLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${
                      isDark 
                        ? 'bg-gradient-to-br from-slate-600 to-slate-700 border-slate-500' 
                        : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                    }`}>
                      <div className="flex flex-col items-center space-y-3">
                        <img 
                          src={skill.imageLink} 
                          alt={skill.title} 
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <span className={`text-sm font-medium text-center transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.title}</span>
                        <span className="text-xs text-purple-500 font-semibold">{skill.category}</span>
                      </div>
                    </div>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 rounded-2xl p-8 transition-colors duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-700 to-slate-800' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Choose Me?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCode className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Clean Code</h4>
                  <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>I write maintainable, scalable, and well-documented code following best practices.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaDatabase className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Full-Stack Ready</h4>
                  <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Experience with both frontend and backend technologies for complete solutions.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTools className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Modern Tools</h4>
                  <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Proficient with the latest development tools and deployment platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </TextAnimation>
      </div>
    </section>
  )
}

export default SKills