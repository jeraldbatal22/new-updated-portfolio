import TextAnimation from "../Common/TextAnimation";

const MainFooter = () => {
  const sendMessageHandler = () => {
    alert('This feature is not yet available!')
  }

  return (
    <TextAnimation>
      <div className={`py-12 px-16 md:px-10 lg:px-48 bg-[linear-gradient(rgba(0,0,0,.9),#000)]`} id="footer">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-0 gap-10 text-white'>
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
                <button className="bg-white hover:bg-gray-500 text-black p-3" onClick={sendMessageHandler}>Send</button>
              </div>
            </div>
          </div>
          {/* <div className='flex flex-col gap-5'>
            <h1 className="text-[26px]">About Me</h1>
            <p className="text-center">Hello, I’m Jerald, but you can call me JB, Jer, or Rald. I graduated with a Bachelor of Science in Hotel and Restaurant Management four years ago. Recently, I made a significant career shift into software engineering to hone my coding skills and deepen my knowledge in the field. Along this journey, I discovered a strong passion for building and publishing websites.</p>
          </div> */}
        </div>
      </div>
    </TextAnimation>
  )
}

export default MainFooter