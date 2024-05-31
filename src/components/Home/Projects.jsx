import { useState } from "react";
import { useFadeScroll } from "../../hooks/useFadeScroll";

const projects = [
  {
    title: "Tribute Page",
    image: "/images/projects/tribute.png",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/tribute_page/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/tribute_page",
    stack: "Html and CSS"
  },
  {
    title: "Survey Form",
    image: "/images/projects/survey.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/survey_form/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_form",
    stack: "Html and CSS"
  },
  {
    title: "Landing Page",
    image: "/images/projects/landing.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/landing_page/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/landing_page",
    stack: "Html, CSS and Javascript"
  },
  {
    title: "Momentum App",
    image: "/images/projects/momentum.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/momentum_app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/momentum_app",
    stack: "Html, CSS and Javascript"
  },
  {
    title: "Tic Tac Toe App",
    image: "/images/projects/tictactoe.PNG",
    liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/tic_tac_toe",
    sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/tic_tac_toe",
    stack: "Html, CSS and Javascript"
  },
  {
    title: "Netflix Clone",
    image: "/images/projects/netflix-clone.png",
    liveUrlLink: "https://netflix-clone-ui-eta.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/facebook-clone-app",
    stack: "React JS"
  },
  // {
  //   title: "Facebook Clone",
  //   image: "/images/projects/facebook-clone.png",
  //   liveUrlLink: "https://netflix-clone-ui-eta.vercel.app/",
  //   sourceCodeLink: "https://github.com/jeraldbatal22/netflix-clone-ui",
  //   stack: "React JS"
  // },
  // {
  //   title: "Messenger Clone",
  //   image: "/images/projects/messenger-clone.png",
  //   liveUrlLink: "https://netflix-clone-ui-eta.vercel.app/",
  //   sourceCodeLink: "https://github.com/jeraldbatal22/messenger_app_clone",
  //   stack: "React JS"
  // },
  {
    title: "Banking Budge App",
    image: "/images/projects/bank.PNG",
    liveUrlLink: "https://banking-budget-app.vercel.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/banking_budget_app",
    stack: "React JS"
  },
  {
    title: "Slack App Clone",
    image: "/images/projects/slack.PNG",
    // liveUrlLink: "https://slack-app-cl0ne.netlify.app/",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/slack-app-clone",
    stack: "React JS"
  },
  {
    title: "Tournament CRUD Api",
    image: "/images/projects/tournament.PNG",
    liveUrlLink: "https://t0urnament-app.netlify.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/tournament_api",
    stack: "React JS"
  },
  {
    title: "E commerce",
    image: "/images/projects/ecommerce.PNG",
    liveUrlLink: "https://e-commerce-io.netlify.app/",
    sourceCodeLink: "https://github.com/jeraldbatal22/e-commerce",
    stack: "React JS"
  },
  {
    title: "Qoutes App",
    image: "/images/projects/qoutes.PNG",
    // liveUrlLink: "https://my-qoutes-app.herokuapp.com/",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/qoutes_app",
    stack: "Ruby on Rails"
  },
  {
    title: "Journal Task App",
    image: "/images/projects/journal.PNG",
    // liveUrlLink: "https://journal-task-app.herokuapp.com/",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/journal_task_app",
    stack: "Ruby on Rails"
  },
  {
    title: "Stock On You",
    image: "/images/projects/stock.PNG",
    // liveUrlLink: "https://stock-on-you.herokuapp.com/",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/jeraldbatal22/stock-on-you",
    stack: "Ruby on Rails"
  },
  {
    title: "Go Learning Academy",
    image: "/images/projects/golearning.PNG",
    // liveUrlLink: "https://go-learning-academy-io.herokuapp.com/",
    liveUrlLink: "",
    sourceCodeLink: "https://github.com/Stephdajon/rails-base-project",
    stack: "Ruby on Rails"
  },
]

const Projects = () => {

  const fadeScroll = useFadeScroll("projects");

  const [isHovered, setHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`py-32 px-16 ${fadeScroll()}`} id="projects">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-[30px] text-blue-500">Projects</h1>
        <p>This is all my project that I made when I was start learning to code.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {
          projects.map((project, key) => {
            return(
              <div className="flex flex-col gap-3" key={key}>
                <a 
                  onMouseEnter={() => {
                    setHovered(true)
                    setSelectedProject(project);
                    }
                  }
                  onMouseLeave={() => {
                      setHovered(false)
                      setSelectedProject(null);
                    }
                  }
                  target="_blank" 
                  rel="noopener noreferrer"
                  href={project.liveUrlLink} 
                  className="relative transition-transform duration-500 ease-in hover:transform hover:scale-110"
                >
                  <img src={project.image} alt="" height="240" width="400" />
                  { 
                    isHovered && selectedProject.title === project.title && 
                    <span className="absolute left-0 text-white p-3 flex justify-center bottom-0 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,1))]">
                      Click to see live {project.title}
                    </span> 
                  } 
                </a>
                <h4>{project.title}</h4>
                <span className="flex gap-2 items-center">
                  SEE LIVE 
                  <a 
                    // href={project.liveUrlLink} 
                    onClick={() => {
                      if (!project.liveUrlLink ) {
                        alert('Live url is not available!')
                      } else {
                        window.location.href = project.liveUrlLink
                      }
                    }}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-black text-white py-1 px-2 transition-transform ease-in hover:transform hover:scale-105 cursor-pointer"
                  >
                    CLICK HERE
                  </a> 
                </span>
                <span className="flex gap-2 items-center">
                  SOURCE CODE 
                  <a 
                    href={project.sourceCodeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-black text-white py-1 px-2 transition-transform ease-in hover:transform hover:scale-105"
                  >
                    CLICK HERE
                  </a>
                </span>
                <span>{project.stack}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects