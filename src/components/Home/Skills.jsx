// import Tooltip from "../UI/Tooltip"

import Tooltip from "../UI/Tooltip"

const profecients = [
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    title: "HTML5",
    urlLink: "https://html.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    title: "CSS3",
    urlLink: "https://css.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "Javascript",
    urlLink: "https://www.javascript.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "React Js",
    urlLink: "https://legacy.reactjs.org/docs/getting-started.html"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "Redux",
    urlLink: "https://redux.js.org/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    title: "Bootstrap",
    urlLink: "https://getbootstrap.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
    title: "Bitbucket",
    urlLink: "https://bitbucket.org/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    title: "Github",
    urlLink: "https://github.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    title: "Material UI",
    urlLink: "https://mui.com/material-ui/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sourcetree/sourcetree-original.svg",
    title: "Source Tree",
    urlLink: "https://www.sourcetreeapp.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    title: "Tailwind CSS",
    urlLink: "https://tailwindcss.com/"
  },
]

const exposures = [
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    title: "Express",
    urlLink: "https://expressjs.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    title: "Next JS",
    urlLink: "https://nextjs.org/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    title: "Node JS",
    urlLink: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    title: "Mongo DB",
    urlLink: "https://www.mongodb.com/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    title: "Postgresql",
    urlLink: "https://www.postgresql.org/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    title: "Ruby on Rails",
    urlLink: "https://rubyonrails.org/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    title: "Socket IO",
    urlLink: "https://socket.io/"
  },
  {
    imageLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "Typescript",
    urlLink: "https://www.typescriptlang.org/"
  },
]

const SKills = () => {
  return (
    <div className="py-32 px-16 flex flex-col gap-12 justify-between" id="skills">
      <h1 className="text-[30px]">Skills</h1>
      <div className="flex flex-col gap-10">
        <h1 className="text-[30px] text-center text-blue-500 tracking-widest">Proficient</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 m-auto gap-10">
          {
            profecients.map((profecient, key) => {
              return (
                <Tooltip key={key} text={profecient.title}>
                  <a href={profecient.urlLink} target="_blank" rel="noopener noreferrer">
                    <img 
                      className="relative transition-transform ease-in hover:transform hover:scale-110 cursor-pointer" 
                      key={key} 
                      src={profecient.imageLink} 
                      alt={profecient.title} 
                      width="80" 
                      height="80"
                    /> 
                  </a>
                </Tooltip>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-[30px] text-center text-blue-500 tracking-widest">Exposure</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 m-auto gap-10">
          {
            exposures.map((exposure, key) => {
              return (
                <Tooltip key={key} text={exposure.title}>
                  <a href={exposure.urlLink} target="_blank" rel="noopener noreferrer">
                    <img 
                      className="relative transition-transform ease-in hover:transform hover:scale-110 cursor-pointer"
                      key={key} 
                      src={exposure.imageLink} 
                      alt={exposure.title} 
                      width="80" 
                      height="80"
                    /> 
                  </a>
                </Tooltip>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SKills