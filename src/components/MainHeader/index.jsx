import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'footer'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && scrollY >= element.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsShowItems(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="hero" 
            smooth={true} 
            duration={1000}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              JeraldDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                smooth={true}
                duration={1000}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === nav.to
                    ? 'text-blue-500 bg-blue-50'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
                      : 'text-white hover:text-blue-400'
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsShowItems(!isShowNavItems)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-300"
          >
            {isShowNavItems ? (
              <IoMdClose className="h-6 w-6 text-[#9333ea]" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6 text-[#9333ea]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isShowNavItems && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((nav) => (
                <Link
                  key={nav.to}
                  to={nav.to}
                  smooth={true}
                  duration={1000}
                  onClick={() => handleNavClick(nav)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === nav.to
                      ? 'text-blue-500 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
                  }`}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default MainHeader