import { useState } from "react";
import TextAnimation from "../Common/TextAnimation";
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Netflix Clone",
    image: "/images/projects/netflix-clone.png",
    liveUrlLink: "https://netflix-clone-ui-eta.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/netflix-clone-ui",
    stack: "React JS",
    description: "A responsive Netflix clone with modern UI/UX design, featuring movie browsing and streaming interface.",
    featured: false
  },
  {
    title: "Messenger Clone",
    image: "/images/projects/messenger-app-clone.png",
    liveUrlLink: "https://messenger-app-clone-six.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/messenger_app_clone",
    stack: "React JS",
    description: "",
    featured: false
  },
  {
    title: "Banking Budget App",
    image: "/images/projects/bank.PNG",
    liveUrlLink: "https://banking-budget-app.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/banking_budget_app",
    stack: "React JS",
    description: "Personal finance management application with budget tracking and expense categorization features.",
    featured: true
  },
  {
    title: "E-commerce Platform",
    image: "/images/projects/ecommerce.PNG",
    liveUrlLink: "https://e-commerce-io.netlify.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/e-commerce",
    stack: "React JS",
    description: "Full-featured e-commerce platform with shopping cart, product catalog, and user authentication.",
    featured: false
  },
  {
    title: "Tournament Management",
    image: "/images/projects/tournament.PNG",
    liveUrlLink: "https://t0urnament-app.netlify.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/tournament_api",
    stack: "React JS",
    description: "Tournament management system with CRUD operations for organizing and tracking competitions.",
    featured: false
  },
  {
    title: "Momentum Dashboard",
    image: "/images/projects/momentum.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/momentum_app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/momentum_app",
    stack: "JavaScript",
    description: "Personal productivity dashboard with weather, quotes, and task management features.",
    featured: true
  },
  {
    title: "Tic Tac Toe Game",
    image: "/images/projects/tictactoe.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/tic_tac_toe",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/tic_tac_toe",
    stack: "JavaScript",
    description: "Interactive Tic Tac Toe game with modern UI and game state management.",
    featured: true
  },
  {
    title: "Landing Page",
    image: "/images/projects/landing.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/landing_page/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/landing_page",
    stack: "HTML/CSS/JS",
    description: "Responsive landing page with smooth animations and modern design principles.",
    featured: false
  },
  {
    title: "Survey Form",
    image: "/images/projects/survey.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/survey_form/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_form",
    stack: "HTML/CSS",
    description: "Interactive survey form with validation and responsive design.",
    featured: false
  },
  {
    title: "Tribute Page",
    image: "/images/projects/tribute.png",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/tribute_page/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/tribute_page",
    stack: "HTML/CSS",
    description: "Responsive tribute page showcasing biographical information and achievements.",
    featured: false
  },
  {
    title: "Slack Clone",
    image: "/images/projects/slack.PNG",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/slack-app-clone",
    stack: "React JS",
    description: "Team collaboration platform clone with real-time messaging and channel management.",
    featured: false
  },
  {
    title: "Quotes App",
    image: "/images/projects/qoutes.PNG",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/qoutes_app",
    stack: "Ruby on Rails",
    description: "Quote sharing application with user authentication and social features.",
    featured: false
  },
  {
    title: "Journal Task App",
    image: "/images/projects/journal.PNG",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/journal_task_app",
    stack: "Ruby on Rails",
    description: "Personal journal and task management application with note-taking capabilities.",
    featured: false
  },
  {
    title: "Simple Memory Game",
    image: "/images/projects/simple-memory-game.png",
    liveUrlLink: "https://simple-memory-game-opal.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/simple-memory-game",
    stack: "React Js",
    description: "A beautiful and engaging memory card game built with React and Vite. Test your memory skills by matching pairs of Halloween-themed cards across different difficulty levels!",
    featured: true
  },
  {
    title: "Easy Mart Clone",
    image: "/images/projects/easy-mart-clone.png",
    liveUrlLink: "https://easy-mart-clone.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/easy-mart-clone",
    stack: "Next Js",
    description: "EasyMart- E-Commerce - 100% FREE (Online Store UI/UX Design - Complete Responsive Website) (Community)",
    featured: false
  },
]

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    return project.stack.toLowerCase().includes(filter.toLowerCase());
  });

  const stackOptions = ["all", "featured", "react", "javascript", "html", "rails"];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my skills and passion for web development. 
              Each project represents a learning journey and demonstrates different aspects of modern web technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stackOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === option
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, key) => (
              <div
                key={key}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                onMouseEnter={() => setHoveredProject(key)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  {hoveredProject === key && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4">
                      {project.liveUrlLink ? (
                        <a
                          href={project.liveUrlLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <FaEye className="mr-2" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg">
                          <FaEye className="mr-2" />
                          Demo Unavailable
                        </span>
                      )}
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <FaGithub className="mr-2" />
                        Source Code
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <FaCode className="mr-1" />
                      {project.stack}
                    </span>
                    
                    <div className="flex space-x-2">
                      {project.liveUrlLink && (
                        <a
                          href={project.liveUrlLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Source Code"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-lg mb-6 opacity-90">
                I`m always excited to work on new projects and collaborate with amazing people.
              </p>
              <a
                href="#footer"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </TextAnimation>
      </div>
    </section>
  )
}

export default Projects