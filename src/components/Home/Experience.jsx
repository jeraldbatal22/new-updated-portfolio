import TextAnimation from "../Common/TextAnimation";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaUsers, FaCog, FaHistory } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const experiences = [
  {
    id: 1,
    company: "Integra Studio",
    position: "Frontend Web Developer",
    duration: "October 2024 - Sep 2025",
    totalDuration: "11 months",
    location: "Remote",
    type: "Full-time",
    responsibilities: [
      "Manage the maintenance, bug resolution, and feature enhancements for the Movie/Series Application using the Next.js framework",
      "Oversee the maintenance, bug fixing, and feature additions for the CMS admin Application, including dashboard, user management, content management",
      "Fix bugs in existing websites and make additional modules based on client's needs",
      "Ensure consistent and intuitive user interfaces across different pages and sections of the site",
      "Collaborate with backend developers to integrate frontend components with server-side APIs and databases",
      "Handle data retrieval and display, user authentication, and form submissions",
      "Work with frontend frameworks and libraries like React to build interactive and dynamic web applications"
    ],
    technologies: ["Next.js", "React.js", "JavaScript", "Redux Toolkit", "Mantine UI", "Tailwind CSS"],
    current: true
  },
  {
    id: 2,
    company: "Highly Succeed",
    position: "Frontend Web Developer",
    duration: "Mar 2022 - June 2025",
    totalDuration: "2 years 9 months",
    location: "Remote",
    type: "Full-time",
    responsibilities: [
      "Manage the maintenance, bug resolution, and feature enhancements for the Doctor's Web application using the React.js framework",
      "Manage the maintenance, bug resolution, and feature enhancements for the Patient Web application using the React.js framework",
      "Oversee the maintenance, bug fixing, and feature additions for the Backoffice Web Portal Application, including administrative and merchant-related functionalities",
      "Lead ongoing maintenance efforts, bug resolution, and feature enrichment for an ecommerce web portal application, ensuring a smooth and reliable online shopping experience",
      "Fix bugs in existing websites and make additional modules based on client's needs",
      "Ensure consistent and intuitive user interfaces across different pages and sections of the site",
      "Collaborate with backend developers to integrate frontend components with server-side APIs and databases",
      "Handle data retrieval and display, user authentication, and form submissions",
      "Work with frontend frameworks and libraries like React to build interactive and dynamic web applications",
      "Collaborate effectively with designers, backend developers, and other team members to deliver a cohesive product",
      "Communicate progress, challenges, and solutions clearly within the team"
    ],
    technologies: ["React.js", "JavaScript", "Next.js", "Redux Toolkit", "Ant Design", "Bootstrap", "Tailwind CSS"],
    current: false
  },
  {
    id: 3,
    company: "BlueFletch",
    position: "Junior Web Developer",
    duration: "Jan 2022 - Mar 2022",
    totalDuration: "3 Months",
    location: "Remote",
    type: "Contract",
    description: "Started my professional journey as a Junior Web Developer, focusing on bug fixes and feature development for existing web applications.",
    responsibilities: [
      "Fix bugs in existing websites and make additional modules based on client's needs",
      "Communicate progress, challenges, and solutions clearly within the team"
    ],
    technologies: ["React.js", "Redux", "Storybook"],
    current: false
  }
];

const Experience = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`} id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextAnimation>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Work <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              My professional journey as a Frontend Web Developer, showcasing growth, expertise, and contributions to various projects and teams.
            </p>
          </div>

          {/* Summary and Objective Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Summary */}
            <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100'} border`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaCode className="mr-3 text-blue-500" />
                Summary
              </h3>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Results-driven Frontend Web Developer with 3+ years of experience building responsive, scalable, and
                user-friendly web applications. Skilled in modern frameworks such as React.js, Next.js, Redux Toolkit, and
                TypeScript, with a strong foundation in UI/UX principles. Passionate about creating intuitive digital experiences
                and contributing to innovative projects through clean, maintainable code.
              </p>
            </div>

            {/* Objective */}
            <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100'} border`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <FaUsers className="mr-3 text-purple-500" />
                Objective
              </h3>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Seeking a challenging role in software engineering or frontend development that leverages my technical expertise,
                strengthens my professional skills, and contributes to delivering impactful web solutions.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'}`}>
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  exp.current ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}></div>

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100'} border`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.position}</h3>
                          {exp.current && (
                            <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                        <div className={`flex md:items-center md:space-x-4 flex-col md:flex-row transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <div className="flex items-center space-x-1">
                            <FaBriefcase className="text-blue-500" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendarAlt className="text-purple-500" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaHistory className="text-pink-500" />
                            <span className="font-bold">{exp.totalDuration}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.location}</span>
                          </div>
                          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className={`text-lg font-semibold mb-4 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <FaCog className="mr-2 text-blue-500" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className={`text-lg font-semibold mb-4 flex items-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <FaCode className="mr-2 text-purple-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-300 ${
                              isDark 
                                ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-gray-300 border-slate-500' 
                                : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border-blue-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Education</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Avion School */}
              <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100'} border`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Software Engineer</h4>
                    <p className="text-blue-600 font-semibold">Avion School</p>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2021 - 2021</p>
                  </div>
                </div>
                <div className={`space-y-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-sm">• 3 months frontend using HTML, CSS, JavaScript and React.js</p>
                  <p className="text-sm">• 3 months backend using Ruby on Rails</p>
                </div>
              </div>

              {/* Access Computer College */}
              <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100'} border`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Bachelor of Science in Hotel and Restaurant Management</h4>
                    <p className="text-purple-600 font-semibold">Access Computer College</p>
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2014 - 2018</p>
                  </div>
                </div>
                <div className={`space-y-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-sm">• Comprehensive study in hospitality management</p>
                  <p className="text-sm">• Customer service and business operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className={`rounded-2xl p-8 transition-colors duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900'
            }`}>
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                isDark ? 'opacity-90' : 'opacity-80'
              }`}>
                With my diverse experience in frontend development and passion for creating exceptional user experiences, 
                I`m excited to bring value to your next project.
              </p>
              <a
                href="#footer"
                className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'bg-white text-gray-900 hover:bg-gray-100' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                }`}
              >
                Let`s Connect
              </a>
            </div>
          </div>
        </TextAnimation>
      </div>
    </section>
  )
}

export default Experience
