import { useFadeScroll } from "../../hooks/useFadeScroll";

const MainFooter = () => {
  const sendMessageHandler = () => {
    alert('This feature is not yet available!')
  }

  const fadeScroll = useFadeScroll("footer");

  return (
    <div className={`py-12 px-16 md:px-10 lg:px-48 bg-[linear-gradient(rgba(0,0,0,.9),#000)] translate-y- ${fadeScroll()}`} id="footer">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white'>
        <div className='flex flex-col items-center justify-center '>
          <label className="text-[26px]">Socail Media Platform</label>
          <div className='flex gap-5 text-[50px]'>
            <a href="https://www.facebook.com/jeraldbatal22" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/jerald-batal/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/jeraldbatal22/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/jeraldbatal22" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>

          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className="text-[26px]">Send FeedBack</h1>
          <div className="flex flex-col gap-5">
            <div className='flex flex-col gap-3'>
              <label>Email</label>
              <input className="p-3 rounded-md" type="text" value="btljrld22@gmail.com" disabled />
            </div>
            <div className='flex flex-col gap-3'>
              <label>Message</label>
              <textarea type="textarea" className="text-black" rows="6" cols="50" />
            </div>
            <div className='flex flex-col gap-3'>
              <button className="bg-white text-black p-3" onClick={sendMessageHandler}>Send</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className="text-[26px]">About Me</h1>
          <p className="text-center">Hello, my name is Jerald. You can call me JB, Jer, or Rald. I am 4 years graduated in Bachelor of Science degree in Hotel and Restaurant Management. I recently made a career shift into the field of software engineering to further develop my coding skills and knowledge. I discovered a passion for building and publishing websites along the way. My career goal is to become a highly skilled and professional web developer, with aspirations of becoming a full-stack developer in the future. In my free time, I enjoy playing basketball, mobile games, and computer games. I also find relaxation in playing the guitar instrumentally and arranging music. Additionally, I like to watch K-Dramas and Netflix movies when I feel stuck or bored with coding.</p>
        </div>
      </div>
    </div>
  )
}

export default MainFooter