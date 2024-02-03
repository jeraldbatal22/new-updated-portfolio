import { useState } from "react";


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
    title: "Banking Budge App",
    image: "/images/projects/bank.PNG",
    liveUrlLink: "https://banking-budget-app.herokuapp.com/",
    sourceCodeLink: "https://github.com/jeraldbatal22/banking_budget_app",
    stack: "React JS"
  },
  {
    title: "Slack App Clone",
    image: "/images/projects/slack.PNG",
    liveUrlLink: "https://slack-app-cl0ne.netlify.app/",
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
    title: "Qoutes App",
    image: "/images/projects/qoutes.PNG",
    liveUrlLink: "https://my-qoutes-app.herokuapp.com/",
    sourceCodeLink: "https://github.com/jeraldbatal22/qoutes_app",
    stack: "Ruby on Rails"
  },
  {
    title: "Journal Task App",
    image: "/images/projects/journal.PNG",
    liveUrlLink: "https://journal-task-app.herokuapp.com/",
    sourceCodeLink: "https://github.com/jeraldbatal22/journal_task_app",
    stack: "Ruby on Rails"
  },
  {
    title: "Stock On You",
    image: "/images/projects/stock.PNG",
    liveUrlLink: "https://stock-on-you.herokuapp.com/",
    sourceCodeLink: "https://github.com/jeraldbatal22/stock-on-you",
    stack: "Ruby on Rails"
  },
  {
    title: "Go Learning Academy",
    image: "/images/projects/golearning.PNG",
    liveUrlLink: "https://go-learning-academy-io.herokuapp.com/",
    sourceCodeLink: "https://github.com/Stephdajon/rails-base-project",
    stack: "Ruby on Rails"
  },
]

const Projects = () => {


  const [isHovered, setHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-32 px-16" id="projects">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-[30px]">Projects</h1>
        <p>This is all my project that I made when I was start learning to code.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {
          projects.map((project, key) => {
            return(
              <div className="flex flex-col gap-3" key={key}>
                <a 
                  onMouseEnter={() => {
                    console.log(project.liveUrlLink)
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
                    href={project.liveUrlLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-black text-white py-1 px-2 transition-transform ease-in hover:transform hover:scale-105"
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

      {/* <div className="projec_card">
        <div className="project_details" id="project_details" >
          <div className="frontend_project">
            <div>
              <h1>FrontEnd Project</h1>
              <div className="project_title">
                <h4>HTML and CSS</h4>
                <div className="image">
                  <div>
                    <a href="https://jeraldbatal22.github.io/batch9-activities/tribute_page/" data-title="Click to see live Tribute Page"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/tribute.png"} alt="" height="240" width="400" /></a>
                    <h4>Tribute Page</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/tribute_page/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_form">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://jeraldbatal22.github.io/batch9-activities/survey_form/" data-title="Click to see live Survey Form"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/survey.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Survey Form</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/survey_form/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/tribute_page">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://jeraldbatal22.github.io/batch9-activities/landing_page/" data-title="Click to see live Landing Page"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/landing.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Landing Page</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/landing_page/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://jeraldbatal22.github.io/batch9-activities/landing_page/">CLICK HERE</a> </p>
                    </div>
                  </div>
                </div>
                <h4>Html Css and Javascript</h4>
                <div className="image">
                  <div>
                    <a href="https://jeraldbatal22.github.io/batch9-activities/momentum_app/" data-title="Click to see live Momentum App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/momentum.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Momentum App</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/momentum_app/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/momentum_app">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://jeraldbatal22.github.io/batch9-activities/tic_tac_toe" data-title="Click to see live Tic Tac Toe App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/tictactie.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Tic Tac Toe</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/tic_tac_toe">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/tic_tac_toe">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://banking-budget-app.herokuapp.com/" data-title="Click to see live Banking Budget App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/bank.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Banking Budge App</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://banking-budget-app.herokuapp.com/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/banking_budget_app">CLICK HERE</a> </p>
                    </div>
                  </div>
                </div>
                <h4>React Js</h4>
                <div className="image">
                  <div>
                    <a href="https://slack-app-cl0ne.netlify.app/" data-title="Click to see live Slack App Clone"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/slack.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Slack App Clone</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://slack-app-cl0ne.netlify.app/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/slack-app-clone">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://t0urnament-app.netlify.app/" data-title="Click to see live Tournament Crud App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/tournament.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Tournament CRUD Api </h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://t0urnament-app.netlify.app/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/tournament_api">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://e-commerce-io.netlify.app/" data-title="Click to see live E Commerce App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/ecommerce.PNG"} alt="" height="240" width="400" /></a>
                    <h4>E Commerce</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://e-commerce-io.netlify.app/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/e-commerce">CLICK HERE</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="backend_project">
            <div>
              <div className="project_title">
                <h4>Ruby On Rails</h4>
                <div className="image">
                  <div>
                    <a href="https://my-qoutes-app.herokuapp.com/" data-title="Click to see live Qoutes App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/qoutes.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Qoutes App</h4>
                    <div className="project_source">
                      <p>SEE LIVE<a href="https://my-qoutes-app.herokuapp.com/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/qoutes_app">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://stock-on-you.herokuapp.com/" data-title="Click to see live Journal Task App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/journal.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Journal Task App</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://stock-on-you.herokuapp.com/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/journal_task_app">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://stock-on-you.herokuapp.com/" data-title="Click to see live Stock On You App"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/stock.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Stock On You</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://stock-on-you.herokuapp.com/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/stock-on-you">CLICK HERE</a> </p>
                    </div>
                  </div>
                  <div>
                    <a href="https://go-learning-academy-io.herokuapp.com/" data-title="Click to see live Go Learning Academy"><img src={"https://github.com/jeraldbatal22/my-portfolio/blob/main/src/images/golearning.PNG"} alt="" height="240" width="400" /></a>
                    <h4>Go Learning Academy</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://go-learning-academy-io.herokuapp.com/">CLICK HERE</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/Stephdajon/rails-base-project">CLICK HERE</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Projects