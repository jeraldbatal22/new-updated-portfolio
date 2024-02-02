const Projects = () => {

  const projects = [
    {
      title: "Tribute Page",
      image: "/images/hero-background.jpg",
      urlLink: "https://jeraldbatal22.github.io/batch9-activities/tribute_page/",
      sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_for"
    },
    {
      title: "Tribute Page",
      image: "/images/hero-background.jpg",
      urlLink: "https://jeraldbatal22.github.io/batch9-activities/tribute_page/",
      sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_for"
    },
    {
      title: "Tribute Page",
      image: "/images/hero-background.jpg",
      liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/tribute_page/",
      sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_form"
    },
    {
      title: "Tribute Page",
      image: "/images/hero-background.jpg",
      liveUrlLink: "https://jeraldbatal22.github.io/batch9-activities/tribute_page/",
      sourceCodeLink: "https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_form"
    },
  ]
  return (
    <div className="h-screen py-32" id="projects">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-[30px]">Projects</h1>
        <p>This is all my project that I made when I was start learning to code.</p>
      </div>
      <div className="grid grid-cols-3 gap-y-10">
        {
          projects.map((project, key) => {
            return(
              <div className="flex flex-col gap-3" key={key}>
                <a href="https://jeraldbatal22.github.io/batch9-activities/tribute_page/" data-title="Click to see live Tribute Page"><img src={"/images/hero-background.jpg"} alt="" height="240" width="400" /></a>
                <h4>{project.title}</h4>
                <p>SEE LIVE <a href={project.liveUrlLink}>CLICK HERE</a> </p>
                <p>SOURCE CODE <a href={project.sourceCodeLink}>CLICK HERE</a></p>
                <span>HTML and CSS</span>
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