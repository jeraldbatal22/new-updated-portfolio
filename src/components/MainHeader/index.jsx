import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose  } from "react-icons/io";
import { Link } from "react-scroll";


const navItems = [
  {
    title: "Home",
    to: "hero"
  },
  {
    title: "About",
    to: "about"
  },
  {
    title: "Skills",
    to: "skills"
  },
  {
    title: "Projects",
    to: "projects"
  },
  {
    title: "Contact",
    to: "footer"
  },
]

const MainHeader = () => {
  const [isShowNavItems, setIsShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(navItems[0]);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // setScrollPosition(window.scrollY);
  //     console.log(window.scrollY)

  //     if (window.scrollY < 821) {
  //       console.log('first')
  //       setSelectedItem(navItems[0])
  //     } else if (window.scrollY < 2456) {
  //       console.log('first')
  //       setSelectedItem(navItems[1])
  //     } else if (window.scrollY < 3783) {
  //       setSelectedItem(navItems[2])
  //     } else if (window.scrollY > 3783) {
  //       setSelectedItem(navItems[3])
  //     }  else if (window.scrollY < 9422) {
  //       console.log(window.scrollY, 'first')
  //       setSelectedItem(navItems[4])
  //     } else {
  //       console.log('first')
  //     }
      
  //   };

  //   // Add scroll event listener when component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Remove scroll event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); 

  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,.9),#000)] bg-red-500 ">
      <div className="py-6 px-12 md:px-10 lg:px-48 fixed top-0 right-0 left-0 z-10 flex items-center justify-between bg-[linear-gradient(rgba(0,0,0,.9),#000)]">
        <h1 className="text-white text-[10px] sm:text-[16px] md:text-[32px]">JeraldDev.</h1>
        <ul
          className={`
            ${isShowNavItems ? "flex items-center justify-center fixed top-0 right-0 left-0 py-10 bg-white gap-6" : "hidden"}
            text-black md:flex md:relative md:gap-10 md:flex-row md:bg-transparent md:text-white md:py-0
          `}
        >
          {navItems.map((nav, key) => (
            <li
              key={key}
              className={`cursor-pointer text-[10px] sm:text-[16px] md:text-[20px] ${selectedItem.to === nav.to && "border-b-2 border-blue-500"}`}
            >
              <Link
                to={nav.to}
                onClick={() => {
                  setSelectedItem(nav);
                  setIsShowItems(false); // Close the menu on item click
                }}
                smooth={true}
                duration={1000}
              >
                {nav.title}
              </Link>
            </li>
          ))}
          <IoMdClose
            onClick={() => setIsShowItems(false)}
            className={`w-auto flex text-black`}
          />
        </ul>
        <GiHamburgerMenu
          onClick={() => setIsShowItems(true)}
          className={`${isShowNavItems ? "hidden" : "flex"} cursor-pointer z-10 md:hidden text-white`}
        />
        {/* <IoMdClose onClick={() => setIsShowItems(false)} className={`${isShowNavItems ? "flex text-black" : "hidden"} cursor-pointer z-10 md:hidden text-white`}/> */}
      </div>
    </div>
  )
}

export default MainHeader