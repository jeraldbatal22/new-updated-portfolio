// import { useEffect, useState } from "react";
import { useFadeScroll } from "../../hooks/useFadeScroll";

const AboutMe = () => {

  const fadeScroll = useFadeScroll("about");

  return (
    <div className={`h-auto py-32 flex flex-col gap-3 px-16 ${fadeScroll()}`} id="about">
      <h1 className="text-[30px] text-blue-500">About Me</h1>
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="w-[auto] md:w-[550px]">
          <img src="/images/jerald2.jpg" className="flex-1" alt="" width={500} height={500}/>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-20 h-full">
          <div>
            <ul>
              <li><span className="text-blue-500">Name:</span> Jerald Malacaste Batal</li>
              <li><span className="text-blue-500">Profile:</span> Aspiring Frontend Web Developer</li>
              <li><span className="text-blue-500">Gmail:</span> btljrld22@gmail.com</li>
              <li><span className="text-blue-500">Mobile Number:</span> 09462469596</li>
            </ul>
          </div>
          <div className="border-b-2 border-blue-500"/>
          <div className="">
            <h1 className="text-[30px] text-blue-500">Introduction</h1>
            <p>Hello, my name is Jerald. You can call me JB, Jer, or Rald. I am 4 years graduated in Bachelor of Science degree in Hotel and Restaurant Management. I recently made a career shift into the field of software engineering to further develop my coding skills and knowledge. I discovered a passion for building and publishing websites along the way. My career goal is to become a highly skilled and professional web developer, with aspirations of becoming a full-stack developer in the future. In my free time, I enjoy playing basketball, mobile games, and computer games. I also find relaxation in playing the guitar instrumentally and arranging music. Additionally, I like to watch K-Dramas and Netflix movies when I feel stuck or bored with coding.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe