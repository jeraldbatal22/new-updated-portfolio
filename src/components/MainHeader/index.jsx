import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose  } from "react-icons/io";
import { Link } from "react-scroll";

const MainHeader = () => {
  const [isShowNavItems, setIsShowItems] = useState(false);

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };


  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,.9),#000)] bg-red-500 ">
      <div className="py-6 px-12 md:px-10 lg:px-48 fixed top-0 right-0 left-0 z-10 flex items-center justify-between bg-[linear-gradient(rgba(0,0,0,.9),#000)]">
        <h1 className="text-white text-[10px] sm:text-[16px] md:text-[32px]">JeraldDev.</h1>
        <ul className={`
          ${isShowNavItems ? "flex items-center justify-center fixed top-0 right-0 left-0 py-10 bg-white gap-6" : "hidden"} 
        text-black md:flex md:relative md:gap-10 md:flex-row md:bg-transparent md:text-white md:py-0`
        }>
          <li className="cursor-pointer text-[10px] sm:text-[16px] md:text-[20px]">
            <Link to="hero" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer text-[10px] sm:text-[16px] md:text-[20px]">
            <Link to="about" smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className="cursor-pointer text-[10px] sm:text-[16px] md:text-[20px]">
            <Link to="skills" smooth={true} duration={1000}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer text-[10px] sm:text-[16px] md:text-[20px]">
            <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li className="cursor-pointer text-[10px] sm:text-[16px] md:text-[20px]">
            <Link to="footer" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
          <IoMdClose onClick={() => setIsShowItems(false)} className={`w-auto flex text-black`}/>
        </ul>
        <GiHamburgerMenu onClick={() => setIsShowItems(true)} className={`${isShowNavItems ? "hidden" : "flex"} cursor-pointer z-10 md:hidden text-white`}/>
        {/* <IoMdClose onClick={() => setIsShowItems(false)} className={`${isShowNavItems ? "flex text-black" : "hidden"} cursor-pointer z-10 md:hidden text-white`}/> */}
      </div>
    </div>
  )
}

export default MainHeader