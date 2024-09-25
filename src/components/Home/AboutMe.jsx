// import { useEffect, useState } from "react";
// import { useFadeScroll } from "../../hooks/useFadeScroll";
import TextAnimation from "../Common/TextAnimation";

const AboutMe = () => {

  // const fadeScroll = useFadeScroll("about");

  return (
    <TextAnimation>
      <div className={`h-auto sm:h-screen flex flex-col justify-center gap-3 px-16 py-8 sm:py-0`} id="about">
        <h1 className="text-[30px] text-blue-500">About Me</h1>
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="w-[auto] md:w-[550px]">
            <img src="./images/jerald2.jpg" className="flex-1" alt="" width={500} height={500}/>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-12 h-full">
            <div>
              <a 
                href="./jeraldbatal-resume.pdf" 
                download
                className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-400"
              >
                Download CV
              </a>
              <ul className="mt-3">
                <li><span className="text-blue-500">Name:</span> Jerald Malacaste Batal</li>
                <li><span className="text-blue-500">Profile:</span> Frontend Web Developer</li>
                <li><span className="text-blue-500">Gmail:</span> btljrld22@gmail.com</li>
                <li><span className="text-blue-500">Mobile Number:</span> 09462469596</li>
              </ul>
            </div>
            <div className="border-b-2 border-blue-500"/>
            <div className="">
              <h1 className="text-[30px] text-blue-500">Introduction</h1>
              {/* <p>Hello, my name is Jerald. You can call me JB, Jer, or Rald. I am 4 years graduated in Bachelor of Science degree in Hotel and Restaurant Management. I recently made a career shift into the field of software engineering to further develop my coding skills and knowledge. I discovered a passion for building and publishing websites along the way. My career goal is to become a highly skilled and professional web developer, with aspirations of becoming a full-stack developer in the future. In my free time, I enjoy playing basketball, mobile games, and computer games. I also find relaxation in playing the guitar instrumentally and arranging music. Additionally, I like to watch K-Dramas and Netflix movies when I feel stuck or bored with coding.</p> */}
              <p>Hello, I’m Jerald, but you can call me JB, Jer, or Rald. I graduated with a Bachelor of Science in Hotel and Restaurant Management four years ago. Recently, I made a significant career shift into software engineering to hone my coding skills and deepen my knowledge in the field. Along this journey, I discovered a strong passion for building and publishing websites.</p>
              <br/>
              <p>My current career goal is to become a highly skilled and professional web developer, with the aspiration of eventually transitioning into a full-stack developer role. This involves mastering both the front-end and back-end aspects of web development to create comprehensive and robust applications.</p>
              <br/>
              <p>In my leisure time, I indulge in playing basketball, mobile games, and computer games. I also find solace in playing the guitar, whether it’s strumming out instrumental pieces or arranging music. Watching K-Dramas and Netflix movies is another way I unwind, especially when I’m feeling stuck or need a break from coding.</p>
            </div>
          </div>
        </div>
      </div>
    </TextAnimation>
  )
}

export default AboutMe